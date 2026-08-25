f = open('index.html', 'r', encoding='utf-8')
s = f.read()
f.close()

start = s.index('<script>') + 8
end = s.rindex('</script>')
js = s[start:end]
lines = js.split('\n')

for i, line in enumerate(lines):
    stripped = line.strip()
    if not stripped or stripped.startswith('//') or stripped.startswith('*'):
        continue
    p = stripped.count('(') - stripped.count(')')
    b = stripped.count('{') - stripped.count('}')
    if p < 0 or b < 0:
        print(f'Line {i+1}: p={p} b={b} | {stripped[:100]}')
