import re
import os
import subprocess
import argparse
import shutil
import time
import datetime


class MarkdownProcessor:
    def __init__(self):
        self.args = self.parse_arguments()

        # Depending on the command, execute the corresponding method
        if self.args.command == "forward_process":
            self.forward_process(self.args.input_dir, self.args.output_dir)
            print("Step-02:forward_process finished!")
        elif self.args.command == "reverse_process":
            self.reverse_process(self.args.input_dir, self.args.input_bak_dir, self.args.output_dir)
            print("Step-05:reverse_process finished!")
        elif self.args.command == "translate":
            self.translate(self.args.input_dir, self.args.output_dir)
            print("Step-03:translate finished!")
        elif self.args.command == "merge":
            self.merge_pulls()
            print("Step-04:merge finished!")
        elif self.args.command == "copy":
            self.copy(self.args.src_dir, self.args.cp_dir)
            print("Step-01:Copy finished!")
        elif self.args.command == "help":
            self.display_help_message()

    def display_help_message(self):
        print("""
        Markdown Processor Tool
        =======================

        Commands:
        ---------
        forward_process: Process the markdown/mdx files and save the modified content and backup files.
        reverse_process: Restore the original content of the markdown/mdx files using the backup files.
        translate: use gpt-translate action to translate.
        merge: merge to main branch
        help: Display this help message.

        Arguments:
        ----------
        --input_md_dir: Directory containing the markdown/mdx files. (default: "i18n/zh-Hans/docusaurus-plugin-content-docs/current")
        --input_bak_dir: Directory containing the backup files. (default: "i18n/zh-Hans/docusaurus-plugin-content-docs/current")
        --output_dir: Directory where the processed files will be saved. (default: "i18n/zh-Hans/docusaurus-plugin-content-docs/current")

        Usage:
        ------
        python markdown_translator_processor.py [command] [--input_md_dir PATH] [--input_bak_dir PATH] [--output_dir PATH]

        Step:
        1. Copy the files to i18n/zh-Hans/docusaurus-plugin-content-docs/current/, and push
        2. forward_process
        3. translate
        4. merge
        5. reverse_process
        6. pull
        7. push
        """)

    def copy(self, src_dir, cp_dir):
        # Copy all files from input_dir to output_dir
        if not os.path.exists(cp_dir):
            os.makedirs(cp_dir)
        for item in os.listdir(src_dir):
            src_item_path = os.path.join(src_dir, item)
            cp_item_path = os.path.join(cp_dir, item)
        
            if os.path.isdir(src_item_path):
                shutil.copytree(src_item_path, cp_item_path)
                self.copy(src_item_path, cp_item_path)  # Recursively copy the sub-directory
            else:
                shutil.copy2(src_item_path, cp_item_path)
        
        
        # Rename .md and .mdx files in the output_dir by prefixing with a dot
        for filename in os.listdir(cp_dir):
            if filename.endswith(('.md', '.mdx')) :
                original_path = os.path.join(cp_dir, filename)
                cp_path = os.path.join(cp_dir, filename)
                os.rename(original_path, cp_path)



    # Methods from markdown_processor-1.py
    def extract_header(self, original_md):
        header_match = re.match(r'^---\n(.*?)\n---', original_md, re.DOTALL)
        return header_match.group(1) if header_match else ""

    def replace_code_blocks_with_placeholders(self, original_md):
        matches = re.findall(r'```(.*?\n.*?[^`])```', original_md, re.DOTALL)
        for idx, match in enumerate(matches, start=1):
            original_md = original_md.replace(f'```{match}```', f'[{chr(35)}{idx}]', 1)
        return original_md

    def write_code_blocks_to_bak(self, matches, bak_filepath, header_content):
        with open(bak_filepath, "w") as bak_file:
            if header_content:
                bak_file.write(f'[{chr(35)}0]{header_content}\n')
            for idx, match in enumerate(matches, start=1):
                first_line, remaining_content = match.split("\n", 1)
                bak_file.write(f'[{chr(35)}{idx}]{first_line}\n{remaining_content}\n')

    def forward_process(self, input_dir="temp", output_dir="temp"):
        # Get all markdown files in the input directory
        md_files = [os.path.join(root, file) for root, _, files in os.walk(input_dir) for file in files if file.endswith(('.md', '.mdx'))]
        
        for md_file in md_files:
            # Calculate the relative path to keep the same directory structure
            relative_path = os.path.relpath(md_file, input_dir)

            # Construct the output paths for the .md and .bak files
            output_md_filepath = os.path.join(output_dir, relative_path)
            output_bak_filepath = os.path.join(output_dir, relative_path.rsplit('.', 1)[0] + '.bak')
            
            # Create necessary directories for the output files
            os.makedirs(os.path.dirname(output_md_filepath), exist_ok=True)

            with open(md_file, 'r', encoding="utf-8") as file:
                original_md = file.read()

            header_content = self.extract_header(original_md)
            if header_content:
                original_md = original_md.replace(f'---\n{header_content}\n---', '[#0]', 1)
            
            matches = re.findall(r'```(.*?\n.*?[^`])```', original_md, re.DOTALL)
            modified_md = self.replace_code_blocks_with_placeholders(original_md)
            self.write_code_blocks_to_bak(matches, output_bak_filepath, header_content)
            
            with open(output_md_filepath, "w", encoding="utf-8") as output_file:
                output_file.write(modified_md)


    def restore_code_blocks_from_bak(self, output_md, bak_txt):
        # Split using the pattern [#number]
        code_blocks = re.split(r'\n?\[\#{0,1}\d+\]', bak_txt)
        code_blocks = [block for block in code_blocks if block]

        original_md = output_md
        for idx, block in enumerate(code_blocks, start=0):  # Start from 0 for header
            placeholder = f'[{chr(35)}{idx}]'
            if idx == 0:  # for header
                original_md = original_md.replace(placeholder, f'---\n{block}\n---', 1)
            else:
                first_line, remaining_content = block.split("\n", 1)
                original_md = original_md.replace(placeholder, f'```{first_line}\n{remaining_content}\n```', 1)
        
        return original_md


    def reverse_process(self, input_dir="temp", input_bak_dir="temp", output_dir="i18n/zh-Hans/docusaurus-plugin-content-docs/current"):
        # Get all markdown files in the input_dir
        md_files = [os.path.join(root, file) for root, _, files in os.walk(input_dir) for file in files if file.endswith(('.md', '.mdx'))]

        for md_file in md_files:
            # Calculate the relative path to keep the same directory structure
            relative_path = os.path.relpath(md_file, input_dir)

            # Construct the paths for the corresponding .bak files and output .md or .mdx files
            input_bak_filepath = os.path.join(input_bak_dir, relative_path.rsplit('.', 1)[0] + '.bak')
            output_md_filepath = os.path.join(output_dir, relative_path)

            # Create necessary directories for the output files
            os.makedirs(os.path.dirname(output_md_filepath), exist_ok=True)

            with open(md_file, 'r', encoding="utf-8") as md_f, open(input_bak_filepath, 'r', encoding="utf-8") as bak_f:
                output_md = md_f.read()
                bak_txt = bak_f.read()

            original_md = self.restore_code_blocks_from_bak(output_md, bak_txt)

            with open(output_md_filepath, "w", encoding="utf-8") as output_file:
                output_file.write(original_md)




    # Methods from mdTranslator.py
    def command(self, command):
        process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        out, err = process.communicate()
        print(out)
        if process.returncode != 0:
            print(f"Error executing command: {command}\nError: {err.decode('utf-8')}")
        return out.decode('utf-8')

    def translate(self, input_dir, output_dir):
        md_files = []
        for root, _, files in os.walk(input_dir):
            for file in files:
                if file.endswith(('.md', '.mdx')):
                    md_files.append(os.path.join(root, file))

        create_command = f'gh issue create --title "GPT-TRANSLATOR" --body "GPT_TRANSLATOR"'
        output = self.command(create_command)

        issue_number = re.search(r'issues/(\d+)', output)
        if issue_number:
            found_number_str = issue_number.group(1)
            found_number_int = int(found_number_str)
            print(found_number_int)
        else:
            print('No numbers found in the URL.')
      
        log_filename = datetime.datetime.now().strftime("%Y%m%d-%H%M%S") + "-gh-translate.log"
        keyword = "modify-axis-definition" # set your keyword here

        start_cmd = False
        for i, md_file in enumerate(reversed(md_files), 1):
            relative_path = os.path.relpath(md_file, input_dir)
            input_file = os.path.join(input_dir, relative_path)
    
            if start_cmd:
                output_file = os.path.join(output_dir, relative_path)
                cmd = f'gh issue comment {found_number_str} --body "/gt {input_file} {output_file} simplified-chinese"'
                print(f"Translate {i}: {cmd}")
                with open(log_filename, 'a') as log_file:
                    log_file.write(f"Translate {i}: {cmd}\n")
                self.command(cmd)
                time.sleep(11)

            #if keyword in input_file:
            if i == 1565: 
                start_cmd = True

     

    def merge_pulls(self):
        merge_cmd = 'for pr in $(gh pr list -L 30000 --json number --jq ".[].number" | head -n 30); do gh pr merge $pr -d -m; done'
        self.command(merge_cmd)

    # Command line argument parsing method
    def parse_arguments(self):
        parser = argparse.ArgumentParser(description='Process markdown files and translations.')
        parser.add_argument("command", help="Command to be executed (forward_process, reverse_process, translate, merge)")

        # Arguments for markdown processing
        parser.add_argument("--src_dir", default="docs", help="source of markdown directory")
        parser.add_argument("--cp_dir",  default="temp", help="temporary directory")
        parser.add_argument("--input_dir", help="Directory containing the markdown/mdx files.")
        parser.add_argument("--input_bak_dir",  help="Directory containing the backup files.")
        parser.add_argument("--output_dir", help="Directory where the processed files will be saved.")

        return parser.parse_args()

# Instantiate the class to execute the desired command
MarkdownProcessor()

