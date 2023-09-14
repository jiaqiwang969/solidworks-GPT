import os
import glob
import re

snippet_pattern_updated = re.compile(r"{%\s*code-snippet\s*{ file-name:\s*(?P<filename>[\w\/\.-]+) }\s*%}")

def read_file_with_fallback_encoding(file_path):
    encodings = ['utf-8', 'utf-16', 'iso-8859-1', 'cp1252']
    for encoding in encodings:
        try:
            with open(file_path, 'r', encoding=encoding) as f:
                return f.read()
        except UnicodeDecodeError:
            continue
    raise ValueError(f"Failed to decode {file_path} using encodings: {', '.join(encodings)}")

def replace_code_snippets(directory):
    index_md_files = [os.path.join(root, file) for root, dirs, files in os.walk(directory) for file in files if file.endswith(".md")]

    for index_md_file in index_md_files:
        content = read_file_with_fallback_encoding(index_md_file)
        all_snippets = snippet_pattern_updated.findall(content)

        for snippet in all_snippets:
            if snippet.endswith('.*'):
                directory_path = os.path.dirname(index_md_file)
                base_name = snippet.replace('.*', '')
                full_path = os.path.join(directory_path, base_name)

                matching_files = glob.glob(full_path + '.*')
                replacement_content = ""

                for matching_file in matching_files:
                    extension = os.path.splitext(matching_file)[-1][1:]
                    
                    if extension in ['vb', 'cs']:
                        lang = 'vb' if extension == 'vb' else 'cs'
                        try:
                            with open(matching_file, 'r', encoding='utf-8') as f:
                                file_content = f.read()
                            replacement_content += f"~~~{lang}\n{file_content}\n~~~\n\n"
                        except Exception as e:
                            print(f'Error reading {matching_file}: {str(e)}')

                if replacement_content:  # Only replace if content was found
                    content = content.replace("{% code-snippet { file-name: " + snippet + " } %}", replacement_content)
                else:
                    print(f'No replacement content found for snippet: {snippet}')

        # Save the modified content back to the .md file
        try:
            with open(index_md_file, 'w', encoding='utf-8') as f:
                f.write(content)
        except Exception as e:
            print(f'Error writing to {index_md_file}: {str(e)}')

    print('Process completed.')

# Replace 'docs' below with the actual directory containing your files
replace_code_snippets('docs')

