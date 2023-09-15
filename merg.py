import os

for i in range(1391, 3000, 1):
    os.system(f"gh pr merge {i} -d -m")

