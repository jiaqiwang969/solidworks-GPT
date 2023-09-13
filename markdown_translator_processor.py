import re
import os
import subprocess
import argparse

class MarkdownProcessor:
    def __init__(self):
        self.args = self.parse_arguments()
        
        # Depending on the command, execute the corresponding method
        if self.args.command == "forward_process":
            self.forward_process(self.args.input_dir, self.args.output_dir)
        elif self.args.command == "reverse_process":
            self.reverse_process(self.args.input_md_dir, self.args.input_bak_dir, self.args.output_dir)
        elif self.args.command == "translate":
            self.main_complete(self.args.input_dir, self.args.output_dir)
        elif self.args.command == "merge":
            self.merge_pulls()

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
    def forward_process(self, input_dir, output_dir):
        # Get all markdown files in the input directory
        md_files = [os.path.join(root, file) for root, _, files in os.walk(input_dir) for file in files if file.endswith('.md')]
        
        for md_file in md_files:
            # Calculate the relative path to keep the same directory structure
            relative_path = os.path.relpath(md_file, input_dir)

            # Construct the output paths for the .md and .bak files
            output_md_filepath = os.path.join(output_dir, relative_path)
            output_bak_filepath = os.path.join(output_dir, relative_path.replace('.md', '.bak'))
            
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
        code_blocks = re.split(r'\n?\[#{0,1}\d+\]', bak_txt)[1:]
        for idx, code_block in enumerate(code_blocks, start=0):
            placeholder = f'[{chr(35)}{idx}]'
            first_line, remaining_content = code_block.split("\n", 1)
            output_md = output_md.replace(placeholder, f'```{first_line}\n{remaining_content}\n```', 1)
        return output_md


    def reverse_process(self, input_md_dir, input_bak_dir, output_dir):
        # Get all markdown files in the input_md_dir
        md_files = [os.path.join(root, file) for root, _, files in os.walk(input_md_dir) for file in files if file.endswith('.md')]
        
        for md_file in md_files:
            # Calculate the relative path to keep the same directory structure
            relative_path = os.path.relpath(md_file, input_md_dir)

            # Construct the paths for the corresponding .bak files and output .md files
            input_bak_filepath = os.path.join(input_bak_dir, relative_path.replace('.md', '.bak'))
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
    def execute_command(self, command):
        process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        out, err = process.communicate()
        print(out)
        if process.returncode != 0:
            print(f"Error executing command: {command}\nError: {err.decode('utf-8')}")
        return out.decode('utf-8')

    def main_complete(self, input_dir, output_dir):
        md_files = []
        for root, _, files in os.walk(input_dir):
            for file in files:
                if file.endswith('.md'):
                    md_files.append(os.path.join(root, file))
        print(md_files)

        create_command = f'gh issue create --title "GPT-TRANSLATOR" --body "GPT_TRANSLATOR"'
        output = self.execute_command(create_command)

        issue_number = re.search(r'issues/(\d+)', output)
        if issue_number:
            found_number_str = issue_number.group(1)
            found_number_int = int(found_number_str)
            print(found_number_int)
        else:
            print('No numbers found in the URL.')

        for i, md_file in enumerate(md_files, 1):
            relative_path = os.path.relpath(md_file, input_dir)
            input_file = os.path.join(input_dir, relative_path)
            output_file = os.path.join(output_dir, relative_path)
            cmd = f'gh issue comment {found_number_str} --body "/gt {input_file} {output_file} simplified-chinese"'
            print(f"Translate {i}: {cmd}")
            self.execute_command(cmd)

    def merge_pulls(self):
        merge_cmd = 'for pr in $(gh pr list -L 30000 --json number --jq ".[].number" | head -n 30); do gh pr merge $pr -d -m; done'
        self.execute_command(merge_cmd)

    # Command line argument parsing method
    def parse_arguments(self):
        parser = argparse.ArgumentParser(description='Process markdown files and translations.')
        parser.add_argument("command", help="Command to be executed (forward_process, reverse_process, translate, merge)")
        
        # Arguments for markdown processing
        parser.add_argument('--input_dir', help='Input directory for forward_process or translate command')
        parser.add_argument('--input_md_dir', help='Input markdown directory for reverse_process command')
        parser.add_argument('--input_bak_dir', help='Input bak directory for reverse_process command')
        parser.add_argument('--output_dir', help='Output directory for any processing or translation command')
        
        return parser.parse_args()


# Instantiate the class to execute the desired command
MarkdownProcessor()

