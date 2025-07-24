import re
import os
from pathlib import Path


def convert_html_links_to_markdown(text):
    html_link_pattern = (
        r'<a\s+(?:[^>]*\s+)?href=["\'](https?://[^"\']+)["\'](?:\s+[^>]*)?>(.*?)</a>'
    )

    def replace_link(match):
        url = match.group(1)
        link_text = match.group(2)

        # Convert HTML formatting to Markdown
        clean_link_text = link_text
        clean_link_text = re.sub(
            r"<strong>(.*?)</strong>", r"**\1**", clean_link_text, flags=re.IGNORECASE
        )
        clean_link_text = re.sub(
            r"<b>(.*?)</b>", r"**\1**", clean_link_text, flags=re.IGNORECASE
        )
        clean_link_text = re.sub(
            r"<em>(.*?)</em>", r"*\1*", clean_link_text, flags=re.IGNORECASE
        )
        clean_link_text = re.sub(
            r"<i>(.*?)</i>", r"*\1*", clean_link_text, flags=re.IGNORECASE
        )
        clean_link_text = re.sub(
            r"<code>(.*?)</code>", r"`\1`", clean_link_text, flags=re.IGNORECASE
        )
        clean_link_text = re.sub(r"<[^>]+>", "", clean_link_text)

        return f"[{clean_link_text}]({url})"

    return re.sub(
        html_link_pattern, replace_link, text, flags=re.IGNORECASE | re.DOTALL
    )


def process_file(file_path):
    """Process a single markdown file"""
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    converted_content = convert_html_links_to_markdown(content)

    # Write to new file or overwrite (change as needed)
    output_path = file_path.replace(".md", "_converted.md")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(converted_content)

    print(f"Converted {file_path} -> {output_path}")


def process_directory(directory_path):
    """Process all markdown files in a directory"""
    directory = Path(directory_path)

    for md_file in directory.glob("*.md"):
        process_file(str(md_file))


# Usage examples:
if __name__ == "__main__":
    # Process single file
    process_file("/home/msh_yi/fun/msh-yi.github.io/content/posts/2024-04-02-kochi.md")
