f = open('index.html', 'r', encoding='utf-8')
s = f.read()
f.close()

start = s.index('<script>') + 8
end = s.rindex('</script>')
js = s[start:end]

print(f'JS length: {len(js)} chars')
print(f'{{: {js.count(chr(123))} open, {js.count(chr(125))} close')
print(f'(: {js.count(chr(40))} open, {js.count(chr(41))} close')
print(f'[: {js.count(chr(91))} open, {js.count(chr(93))} close')

# Find unmatched parens by scanning
stack = []
for i, c in enumerate(js):
    if c == '(':
        stack.append(('(', i))
    elif c == ')':
        if stack and stack[-1][0] == '(':
            stack.pop()
        else:
            line = js[:i].count(chr(10)) + 1
            print(f'Unmatched ) at line {line}, pos {i}')
            context = js[max(0,i-50):i+50]
            print(f'Context: ...{context}...')
            break

# Find unmatched braces
stack = []
for i, c in enumerate(js):
    if c == '{':
        stack.append(('{', i))
    elif c == '}':
        if stack and stack[-1][0] == '{':
            stack.pop()
        else:
            line = js[:i].count(chr(10)) + 1
            print(f'Unmatched }} at line {line}, pos {i}')
            context = js[max(0,i-50):i+50]
            print(f'Context: ...{context}...')
            break

if stack:
    for item, pos in stack[-3:]:
        line = js[:pos].count(chr(10)) + 1
        print(f'Unmatched {item} at line {line}, pos {pos}')
        context = js[max(0,pos-50):pos+50]
        print(f'Context: ...{context}...')
