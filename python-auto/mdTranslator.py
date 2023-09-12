import re
import os
import subprocess
import argparse

def execute_command(command):
    """Execute a shell command."""
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    out, err = process.communicate()
    print(out)
    if process.returncode != 0:
        print(f"Error executing command: {command}\nError: {err.decode('utf-8')}")
    return out.decode('utf-8')

def main_complete(input_dir, output_dir):
    # Step 1: Get all markdown files from the input directory and subdirectories
    md_files = []
    for root, _, files in os.walk(input_dir):
        for file in files:
            if file.endswith('.md'):
                md_files.append(os.path.join(root, file))
    print(md_files)

    # Step 2: For each markdown file, execute the gh issue comment command
    create_command = f'gh issue create --title "GPT-TRANSLATOR" --body "GPT_TRANSLATOR"'
    output = execute_command(create_command)

    # Regex pattern to extract issue number from url
    issue_number = re.search(r'issues/(\d+)', output)
    if issue_number:
        found_number_str = issue_number.group(1)
        found_number_int = int(found_number_str)
        print(found_number_int)
    else:
        print('No numbers found in the URL.')


    for i,md_file in enumerate(md_files, 1):
        relative_path = os.path.relpath(md_file, input_dir)
        output_file = os.path.join(output_dir, relative_path)
        cmd = f'gh issue comment {found_number_str} --body "/gt {md_file} {output_file} simplified-chinese"'
        print(f"Translate {i}: {cmd}")
        execute_command(cmd)



def merge_pulls():
    merge_cmd = 'for pr in $(gh pr list -L 30000 --json number --jq ".[].number" | head -n 30); do gh pr merge $pr -d -m; done'
    execute_command(merge_cmd)



if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("command", help="translate or pull")
    parser.add_argument("--input_dir", help="input directory, required for translate command")
    parser.add_argument("--output_dir", help="output directory, required for translate command")

    args = parser.parse_args()

    if args.command == "translate":
        if not args.input_dir or not args.output_dir:
            print("Both input_dir and output_dir are required for translate command")
        else:
            md_files = main_complete(args.input_dir, args.output_dir)

    elif args.command == "merge":
            merge_pulls()

