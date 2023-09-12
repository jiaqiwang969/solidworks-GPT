
import os
import shutil

# Define the source directory
source_dir = '../docs'

# Define the target directory
target_dir = 'docs-md'

# Define a function to get all files in a directory
def get_all_files(dir):
    for root, dirs, files in os.walk(dir):
        for file in files:
            yield os.path.join(root, file)

# Get a list of all files
all_files = list(get_all_files(source_dir))

# Filter the list of all files to include only .md files
def filter_md_files(files):
    return [file for file in files if file.endswith('.md')]

# Get a list of all .md files
md_files = filter_md_files(all_files)

# Make sure the target directory exists
os.makedirs(target_dir, exist_ok=True)

# Define a function to generate the new filename for a file
def generate_new_filename(file):
    # Remove the source directory from the file path and replace slashes with '_'
    relative_path = file[len(source_dir)+1:].replace('/', '_')
    # Return the new filename
    return os.path.join(target_dir, relative_path)

# Generate new filenames for all .md files
new_filenames = [generate_new_filename(file) for file in md_files]

# Define a function to copy a file to a new location
def copy_file(source, target):
    shutil.copy2(source, target)

# Copy all .md files to the target directory with the new filenames
for source, target in zip(md_files, new_filenames):
    copy_file(source, target)

print('Successfully copied all .md files to the target directory.')
