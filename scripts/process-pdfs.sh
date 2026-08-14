#!/bin/bash
# Process PDF documentation into knowledge base markdown files
# Requires pdftotext from poppler-utils (brew install poppler on macOS)

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
DOC_DIR="$ROOT_DIR/documentation"
KNOWLEDGE_DIR="$ROOT_DIR/knowledge"

# Check for pdftotext
if ! command -v pdftotext &> /dev/null; then
    echo "Error: pdftotext is required but not installed."
    echo "Install with: brew install poppler (macOS) or apt-get install poppler-utils (Linux)"
    exit 1
fi

# Function to sanitize filenames
sanitize_name() {
    echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//' | sed 's/-$//'
}

# Function to convert a PDF to markdown
convert_pdf() {
    local input_file="$1"
    local output_file="$2"
    local title="$3"

    echo "Converting: $input_file"

    # Extract text from PDF
    local temp_file=$(mktemp)
    pdftotext -layout "$input_file" "$temp_file"

    # Create markdown with title header
    echo "# $title" > "$output_file"
    echo "" >> "$output_file"
    echo "*Converted from PDF documentation*" >> "$output_file"
    echo "" >> "$output_file"
    echo "---" >> "$output_file"
    echo "" >> "$output_file"
    cat "$temp_file" >> "$output_file"

    rm -f "$temp_file"
}

echo "=== Processing PDF Documentation ==="
echo ""

# Create output directories
mkdir -p "$KNOWLEDGE_DIR/help"
mkdir -p "$KNOWLEDGE_DIR/exercises"
mkdir -p "$KNOWLEDGE_DIR/guides"
mkdir -p "$KNOWLEDGE_DIR/troubleshooting"

# Process official help documentation
echo "--- Processing Official Help Documentation ---"
HELP_DIR="$DOC_DIR/official help documentation"
if [ -d "$HELP_DIR" ]; then
    find "$HELP_DIR" -name "*.pdf" -type f | while read -r pdf_file; do
        base_name=$(basename "$pdf_file" .pdf)
        safe_name=$(sanitize_name "$base_name")
        output_file="$KNOWLEDGE_DIR/help/${safe_name}.md"
        convert_pdf "$pdf_file" "$output_file" "$base_name"
    done
    echo "Help documentation processed: $(find "$KNOWLEDGE_DIR/help" -name "*.md" | wc -l | tr -d ' ') files"
else
    echo "Warning: Help documentation directory not found at $HELP_DIR"
fi

echo ""

# Process hands-on exercises
echo "--- Processing Hands-on Exercises ---"
EXERCISES_DIR="$DOC_DIR/hands-on exercises"
if [ -d "$EXERCISES_DIR" ]; then
    find "$EXERCISES_DIR" -name "*.pdf" -type f | while read -r pdf_file; do
        base_name=$(basename "$pdf_file" .pdf)
        safe_name=$(sanitize_name "$base_name")
        output_file="$KNOWLEDGE_DIR/exercises/${safe_name}.md"
        convert_pdf "$pdf_file" "$output_file" "$base_name"
    done
    echo "Exercises processed: $(find "$KNOWLEDGE_DIR/exercises" -name "*.md" | wc -l | tr -d ' ') files"
else
    echo "Warning: Exercises directory not found at $EXERCISES_DIR"
fi

echo ""

# Process main guide PDFs
echo "--- Processing Guide Documents ---"

# Life Sciences Dev Guide
DEV_GUIDE="$DOC_DIR/life_sciences_dev_guide.pdf"
if [ -f "$DEV_GUIDE" ]; then
    convert_pdf "$DEV_GUIDE" "$KNOWLEDGE_DIR/guides/dev-guide.md" "AFLS Developer Guide"
else
    echo "Warning: Dev guide not found at $DEV_GUIDE"
fi

# Mobile Setup Guide
MOBILE_GUIDE="$DOC_DIR/SE AFLS Mobile Setup and Configuration Guide.pdf"
if [ -f "$MOBILE_GUIDE" ]; then
    convert_pdf "$MOBILE_GUIDE" "$KNOWLEDGE_DIR/guides/mobile-setup.md" "AFLS Mobile Setup and Configuration Guide"
else
    echo "Warning: Mobile setup guide not found at $MOBILE_GUIDE"
fi

echo "Guides processed: $(find "$KNOWLEDGE_DIR/guides" -name "*.md" | wc -l | tr -d ' ') files"

echo ""

# Copy common_issues.md to troubleshooting directory
echo "--- Copying Troubleshooting Documentation ---"
COMMON_ISSUES="$DOC_DIR/common_issues.md"
if [ -f "$COMMON_ISSUES" ]; then
    cp "$COMMON_ISSUES" "$KNOWLEDGE_DIR/troubleshooting/common-issues.md"
    echo "Copied common_issues.md to troubleshooting directory"
else
    echo "Warning: common_issues.md not found at $COMMON_ISSUES"
fi

echo ""
echo "=== PDF Processing Complete ==="
echo ""
echo "Output directories:"
echo "  Help docs:        $KNOWLEDGE_DIR/help/ ($(find "$KNOWLEDGE_DIR/help" -name "*.md" 2>/dev/null | wc -l | tr -d ' ') files)"
echo "  Exercises:        $KNOWLEDGE_DIR/exercises/ ($(find "$KNOWLEDGE_DIR/exercises" -name "*.md" 2>/dev/null | wc -l | tr -d ' ') files)"
echo "  Guides:           $KNOWLEDGE_DIR/guides/ ($(find "$KNOWLEDGE_DIR/guides" -name "*.md" 2>/dev/null | wc -l | tr -d ' ') files)"
echo "  Troubleshooting:  $KNOWLEDGE_DIR/troubleshooting/ ($(find "$KNOWLEDGE_DIR/troubleshooting" -name "*.md" 2>/dev/null | wc -l | tr -d ' ') files)"
