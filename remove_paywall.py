import re

f = open('index.html', 'r', encoding='utf-8')
lines = f.readlines()
f.close()

# Lines to delete (1-based, inclusive ranges)
delete_ranges = [
    # CSS: activation overlay + locked hint styles
    (90, 115),
    # HTML: activation overlay
    (157, 179),
    # HTML: locked hints
    (487, 491),   # resultsLocked
    (504, 508),   # checkLocked
    (535, 539),   # equipLocked
    (567, 571),   # exportLocked
    # JS: all activation functions + handleCalculate
    (993, 1071),
    # JS: event listener at end
    (1918, 1920),
]

# Build set of 0-based indices to delete
delete_set = set()
for start, end in delete_ranges:
    for i in range(start - 1, end):
        delete_set.add(i)

# Also delete specific I18N keys for act_*, lock_*, btn_unlock, msg_needActivate
for i, line in enumerate(lines):
    if any(k in line for k in ['act_title:', 'act_subtitle:', 'act_price_note:', 'act_buy:', 'act_divider:', 'act_placeholder:', 'act_verify:', 'act_error:', 'act_note:', 'act_feat1:', 'act_feat2:', 'act_feat3:', 'act_feat4:', 'act_feat5:', 'msg_needActivate:', 'lock_title', 'lock_desc', 'btn_unlock']):
        delete_set.add(i)

# Modify specific lines
modified = []
for i, line in enumerate(lines):
    if i in delete_set:
        continue
    # Remove .activation-overlay from print CSS
    if i == 130:
        line = line.replace(', .activation-overlay', '')
    # Fix calculateAll call in handleCalculate removal aftermath
    if 'calculateAll();' in line and i > 1065 and i < 1080:
        # This was the body of handleCalculate, skip it
        continue
    modified.append(line)

# Write back
f = open('index.html', 'w', encoding='utf-8')
f.writelines(modified)
f.close()

print(f"Deleted {len(delete_set)} lines. Before: {len(lines)}, After: {len(modified)}")

# Verify no activation references remain
count = sum(1 for line in modified if 'activation' in line.lower() or 'locked-hint' in line.lower())
print(f"Remaining activation/locked references: {count}")
