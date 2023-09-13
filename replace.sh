#!/bin/bash

# Define source and target strings
SRC_STR="](visual-basic/"
TRG_STR="](/docs/codestack/visual-basic/"

# Define search directory, use '.' for current directory
DIR='docs'

# loop through all files recursively
find "$DIR" -type f -name "*" | while read -r FILE
do
    # replace source string with target string
    sed -i "s|$SRC_STR|$TRG_STR|g" "$FILE"
done

