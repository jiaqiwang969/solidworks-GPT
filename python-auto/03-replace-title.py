import os
import re

# 定义替换抬头的函数
def replace_header(source_file, target_file):
    # 从源文件读取抬头
    with open(source_file, "r", encoding="utf-8") as f:
        source_content = f.read()
    header_pattern = re.compile(r"---\n(.+?)\n---", re.DOTALL)
    
    source_header_match = header_pattern.search(source_content)

    # 判断 source_header_match 是否为空
    if source_header_match is None:
         print(f"No header found in {source_file}")
         return

    source_header = source_header_match.group()

    # 读取目标文件并替换抬头
    with open(target_file, "r", encoding="utf-8") as f:
        target_content = f.read()
        
    if header_pattern.search(target_content):
        target_content = header_pattern.sub(source_header, target_content, count=1)

        # 将更新的内容写回目标文件
        with open(target_file, "w", encoding="utf-8") as f:
            f.write(target_content)

# 定义源目录和目标目录
source_dir = "docs-md"
target_dir = "docs-md-zh"

# 获取目标目录下所有.md文件
for root, dirs, files in os.walk(target_dir):
    for file in files:
        if file.endswith('.md'):
            target_file = os.path.join(root, file)

            # 检查在源目录中是否存在相同的文件
            relative_path = os.path.relpath(target_file, target_dir)
            source_file = os.path.join(source_dir, relative_path)

            if os.path.exists(source_file):
                # 如果存在，则进行抬头替换
                replace_header(source_file, target_file)

