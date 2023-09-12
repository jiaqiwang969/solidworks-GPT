import os
import re
import zipfile

# Regular expression pattern to match code-snippet tags
snippet_pattern_updated = re.compile(r"{%\s*code-snippet\s*{ file-name:\s*(?P<filename>[\w\/\.-]+) }\s*%}")

# Function to read a file using fallback encodings in case of UnicodeDecodeError
def read_file_with_fallback_encoding(file_path):
    encodings = ['utf-8', 'utf-16', 'iso-8859-1', 'cp1252']
    for encoding in encodings:
        try:
            with open(file_path, 'r', encoding=encoding) as f:
                return f.read()
        except UnicodeDecodeError:
            continue
    raise ValueError(f"Failed to decode {file_path} using encodings: {', '.join(encodings)}")

# Main function to replace code-snippets in the provided directory
def replace_code_snippets(directory):
    index_md_files = [os.path.join(root, file) for root, _, files in os.walk(directory) for file in files if file.endswith(".md")]

    for index_md_file in index_md_files:
        content = read_file_with_fallback_encoding(index_md_file)
        all_snippets = snippet_pattern_updated.findall(content)
        
        # Separate wildcard snippets and non-wildcard snippets
        wildcard_snippets = [s for s in all_snippets if s.endswith('.*')]
        non_wildcard_snippets = [s for s in all_snippets if not s.endswith('.*')]
        
        # Handle non-wildcard snippets
        for non_wildcard_snippet in non_wildcard_snippets:
            dir_path = os.path.dirname(index_md_file)
            file_path = os.path.join(dir_path, non_wildcard_snippet)
            ext = os.path.splitext(non_wildcard_snippet)[1][1:].lower()

            if ext == 'vba':
                lang = 'vb'
            elif ext == 'cs':
                lang = 'cs'
            else:
                lang = ext

            if os.path.exists(file_path):
                snippet_content = read_file_with_fallback_encoding(file_path)
                replacement_content = f"~~~ {lang}\n{snippet_content}\n~~~\n\n"
                content = content.replace("{% code-snippet { file-name: " + non_wildcard_snippet + " } %}", replacement_content)

        # Handle wildcard snippets
        for wildcard_snippet in wildcard_snippets:
            base_name = wildcard_snippet[:-2]
            dir_path = os.path.dirname(index_md_file)
            matching_files = [f for f in os.listdir(dir_path) if f.startswith(base_name) and f != base_name]

            replacement_content = ""
            for matching_file in matching_files:
                file_path = os.path.join(dir_path, matching_file)
                ext = os.path.splitext(matching_file)[1][1:].lower()

                if ext == 'vba':
                    lang = 'vb'
                elif ext == 'cs':
                    lang = 'cs'
                else:
                    lang = ext

                snippet_content = read_file_with_fallback_encoding(file_path)
                replacement_content += f"~~~ {lang}\n{snippet_content}\n~~~\n\n"

            content = content.replace("{% code-snippet { file-name: " + wildcard_snippet + " } %}", replacement_content)

        # Save the modified content
        with open(index_md_file, 'w', encoding='utf-8') as f:
            f.write(content)



replace_code_snippets("docs-orgin-code")
