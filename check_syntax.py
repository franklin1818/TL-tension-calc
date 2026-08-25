import re

f = open('index.html', 'r', encoding='utf-8')
s = f.read()
f.close()

# Find JS section
start = s.index('<script>') + 8
end = s.rindex('</script>')
js = s[start:end]

# Check brace balance
open_b = js.count('{')
close_b = js.count('}')
open_p = js.count('(')
close_p = js.count(')')
open_s = js.count('[')
close_s = js.count(']')

print(f"Braces {{}}: {open_b} open, {close_b} close, diff={open_b-close_b}")
print(f"Parentheses (): {open_p} open, {close_p} close, diff={open_p-close_p}")
print(f"Brackets []: {open_s} open, {close_s} close, diff={open_s-close_s}")

# Try to find syntax error by scanning for suspicious patterns
lines = js.split('\n')
for i, line in enumerate(lines):
    # Look for lines with unbalanced parens that might be function calls
    stripped = line.strip()
    if stripped.endswith(')') and not stripped.startswith('//') and not stripped.startswith('*'):
        # Check if this is a dangling close paren
        paren_count = stripped.count('(') - stripped.count(')')
        if paren_count < 0:
            print(f"Line {i+1} might have extra ')' : {stripped[:80]}")

# Try to compile
try:
    compile(js, '<string>', 'script')
    print("\nPython compile: OK")
except SyntaxError as e:
    print(f"\nPython compile ERROR at line {e.lineno}: {e.msg}")
    for i in range(max(0, e.lineno-3), min(len(lines), e.lineno+2)):
        print(f"  {i+1}: {lines[i][:100]}")
