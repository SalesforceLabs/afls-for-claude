#!/bin/bash
# Process PM enablement documentation into knowledge base markdown files

set -e

SOURCE_DIR="./documentation/pm enablement materials"
OUTPUT_DIR="./knowledge/modules"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Function to convert a single docx file
convert_docx() {
    local input_file="$1"
    local output_file="$2"

    echo "Converting: $input_file"
    pandoc "$input_file" -f docx -t markdown --wrap=none -o "$output_file"
}

# Function to sanitize directory/file names
sanitize_name() {
    echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//' | sed 's/-$//'
}

# Process each module directory (skip original_backup)
find "$SOURCE_DIR" -maxdepth 1 -type d ! -name "original_backup" ! -name "pm enablement materials" | while read -r module_dir; do
    module_name=$(basename "$module_dir")
    safe_module_name=$(sanitize_name "$module_name")

    echo ""
    echo "=== Processing module: $module_name ==="

    # Create module output directory
    module_output="$OUTPUT_DIR/$safe_module_name"
    mkdir -p "$module_output"

    # Find all .docx files in this module (including subdirectories)
    find "$module_dir" -name "*.docx" -type f | while read -r docx_file; do
        # Get relative path from module directory
        relative_path="${docx_file#$module_dir/}"
        base_name=$(basename "$docx_file" .docx)
        safe_name=$(sanitize_name "$base_name")

        # If in a subdirectory, include that in the output path
        subdir=$(dirname "$relative_path")
        if [ "$subdir" != "." ]; then
            safe_subdir=$(sanitize_name "$subdir")
            output_path="$module_output/${safe_subdir}__${safe_name}.md"
        else
            output_path="$module_output/${safe_name}.md"
        fi

        convert_docx "$docx_file" "$output_path"
    done

    # Create module index file
    echo "# $module_name" > "$module_output/_index.md"
    echo "" >> "$module_output/_index.md"
    echo "## Documentation Files" >> "$module_output/_index.md"
    echo "" >> "$module_output/_index.md"

    # List all generated markdown files
    find "$module_output" -name "*.md" ! -name "_index.md" -type f | sort | while read -r md_file; do
        md_name=$(basename "$md_file" .md)
        echo "- [$md_name](./$md_name.md)" >> "$module_output/_index.md"
    done
done

echo ""
echo "=== DOCX Processing complete ==="
echo ""
echo "Module output directory: $OUTPUT_DIR"
find "$OUTPUT_DIR" -name "*.md" | wc -l | xargs echo "Total module markdown files generated:"

echo ""
echo "=== Processing PDF Documentation ==="
echo ""

# Run the PDF processing script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [ -f "$SCRIPT_DIR/process-pdfs.sh" ]; then
    "$SCRIPT_DIR/process-pdfs.sh"
else
    echo "Warning: process-pdfs.sh not found at $SCRIPT_DIR/process-pdfs.sh"
    echo "Skipping PDF processing."
fi

echo ""
echo "=== All Documentation Processing Complete ==="
