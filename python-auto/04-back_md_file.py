import os
import shutil

# Define the source and target directory
source_dir = 'docs-md-zh'
target_dir = 'docs-md-back'

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

# Define a function to restore original filename
def restore_old_filename(file):
    # Remove the source directory from file path and replace '_' with '/'
    relative_path = file[len(source_dir)+1:].replace('_', '/')
    # Return the old filename (i.e., original path)
    return os.path.join(target_dir, relative_path)

# Restore old filenames
old_filenames = [restore_old_filename(file) for file in md_files]

# Define a function to copy a file to a new location
def copy_file(source, target):
    shutil.copy2(source, target)

# Make sure the target directory exists
os.makedirs(target_dir, exist_ok=True)

# Copy all .md files back to the source directory with the old filenames
for source, target in zip(md_files, old_filenames):
    # We need to ensure the directories exist 
    os.makedirs(os.path.dirname(target), exist_ok=True)
    copy_file(source, target)

print('Successfully copied all .md files back to the original directory.')

