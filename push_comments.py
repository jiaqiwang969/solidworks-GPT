import os

# Get all filenames in the docs-md directory
filenames = os.listdir('i18n/zh-Hans/docusaurus-plugin-content-docs/current/')

# Generate a comment body for each file
comment_bodies = [f'/gt i18n/zh-Hans/docusaurus-plugin-content-docs/current/{filename} i18n/zh-Hans/docusaurus-plugin-content-docs/current/{filename} simplified-chinese'
for filename in filenames]

# Generate a command for each file
commands = [f'gh issue comment 1 --body "{comment_body}"' for comment_body in comment_bodies]

# Write the commands to a Python script
script = """import os

import time
# List of commands
cmds = {}

# Execute each command
for cmd in cmds:
    os.system(cmd)
    time.sleep(1)""".format(commands)

with open('push_comments-bash.py', 'w') as f:
    f.write(script)

