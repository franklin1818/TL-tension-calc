import re

f = open('index.html', 'r', encoding='utf-8')
lines = f.readlines()
f.close()

L = len(lines)
print(f"Total lines: {L}")

# Find line numbers for key sections
for i, line in enumerate(lines):
    if 'function isActivated()' in line:
        print(f"isActivated at line {i+1}")
    if 'function updateLockedUI()' in line:
        print(f"updateLockedUI at line {i+1}")
    if 'function handleCalculate()' in line:
        print(f"handleCalculate at line {i+1}")
    if 'activationOverlay' in line and 'addEventListener' in line:
        print(f"eventListener at line {i+1}")
    if 'Core Logic' in line:
        print(f"Core Logic at line {i+1}")
