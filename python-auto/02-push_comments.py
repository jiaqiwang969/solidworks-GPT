import os

# Get all filenames in the docs-md directory
filenames = os.listdir('docs-md')

# Generate a comment body for each file
comment_bodies = [f'/gt python-auto/docs-md/{filename} python-auto/docs-md-zh/{filename} simplified-chinese'
for filename in filenames]

# Generate a command for each file
commands = [f'gh issue comment 1 --body "{comment_body}"' for comment_body in comment_bodies]

# Write the commands to a Python script
script = """import os

import time
# List of commands
cmds = {}

# Execute each command
for i,cmd in enumerate(cmds, start=1):
    if i >= 167:
        os.system(cmd)
        time.sleep(15)""".format(commands)

with open('push_comments-bash.py', 'w') as f:
    f.write(script)

