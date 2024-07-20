num_start = int(input("from: "))
num_end = int(input("to:  "))

for i in range(num_start, num_end + 1):
    print(f'<div class="medium-fret space-{i}"></div>')
    # print(f'<div class="fret space-{i}"></div>')

