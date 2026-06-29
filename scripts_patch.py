# -*- coding: utf-8 -*-
import io, re, sys

def patch_file(path, old_block, new_block):
    with io.open(path, "r", encoding="utf-8") as f:
        src = f.read()
    if old_block not in src:
        print("MISS", path)
        sys.exit(1)
    src = src.replace(old_block, new_block, 1)
    with io.open(path, "w", encoding="utf-8") as f:
        f.write(src)
    print("OK", path)
