import itertools
import operator

# Angka yang tersedia
numbers = [1, 4, 5, 6]

# Operator yang tersedia
ops = [operator.add, operator.sub, operator.mul]

# Fungsi untuk menghitung ekspresi dengan berbagai kombinasi operator
def calculate(numbers, target):
    for num_permutation in itertools.permutations(numbers):  # Kombinasi angka
        for op_combination in itertools.product(ops, repeat=3):  # Kombinasi operator
            try:
                print(op_combination[0])
                result = op_combination[0](num_permutation[0], num_permutation[1])
                result = op_combination[1](result, num_permutation[2])
                result = op_combination[2](result, num_permutation[3])
                if result == target:
                    return f"{num_permutation[0]} {op_combination[0].__name__} {num_permutation[1]} {op_combination[1].__name__} {num_permutation[2]} {op_combination[2].__name__} {num_permutation[3]} = {target}"
            except ZeroDivisionError:
                continue  # Lewati jika terjadi pembagian dengan nol
    return "Tidak ada kombinasi yang cocok."

# Target yang ingin dicapai
target = 25

# Panggil fungsi untuk menghitung
print(calculate(numbers, target))
