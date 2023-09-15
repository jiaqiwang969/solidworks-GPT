import os

def process_md_files(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()

                # 替换描述部分
                replaced_content = content.replace("description:", "---\n")

                # 检查替换后的内容是否与原始内容有变化
                if replaced_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(replaced_content)
                    print(f"文件 {filepath} 的描述已成功替换。")

# 指定要处理的目录及子目录
directory = "i18n"
process_md_files(directory)

