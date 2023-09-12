import os
import subprocess

def execute_command(command):
    """Execute a shell command."""
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    out, err = process.communicate()
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
    
    # Step 2: For each markdown file, execute the gh issue comment command
    for i,md_file in enumerate(md_files, 1):
        relative_path = os.path.relpath(md_file, input_dir)
        output_file = os.path.join(output_dir, relative_path)
        cmd = f'gh issue comment 1 --body "/gt {md_file} {output_file} simplified-chinese"'
        print(f"Translate {i}: {cmd}")
        execute_command(cmd)
    

    # Calculate the number of iterations required for PR merges
    num_iterations = len(md_files) // 30 + (1 if len(md_files) % 30 != 0 else 0)
    
    # Step 3: Merge PRs in batches of 30
    for _ in range(num_iterations):
        merge_cmd = 'for pr in $(gh pr list --json number --jq ".[].number" | head -n 30); do gh pr merge $pr -d -m; done'
        execute_command(merge_cmd)
    
    # Step 4: Pull changes
    execute_command("git pull")

# To run the script, call the following function with appropriate arguments:
main_complete('test01', 'test02')

