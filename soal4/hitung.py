import itertools
import operator

def simbol(operasi):
    if operasi == 'add':
        return '+'
    elif operasi == 'sub':
        return '-'
    else:
        return '*'

operasi = [operator.add, operator.sub, operator.mul]

def calculate(angka, target):
    for combin_angka in itertools.permutations(angka): 
        for combin_operasi in itertools.product(operasi, repeat=3): 
            try:
                result = combin_operasi[0](combin_angka[0], combin_angka[1])
                result = combin_operasi[1](result, combin_angka[2])
                result = combin_operasi[2](result, combin_angka[3])
                if result == target:
                    if combin_operasi[1].__name__ == 'mul':
                        return f"({combin_angka[0]} {simbol(combin_operasi[0].__name__)} {combin_angka[1]}) {simbol(combin_operasi[1].__name__)} {combin_angka[2]} {simbol(combin_operasi[2].__name__)} {combin_angka[3]} = {target}"
                    elif combin_operasi[2].__name__ == 'mul':
                        return f"({combin_angka[0]} {simbol(combin_operasi[0].__name__)} {combin_angka[1]} {simbol(combin_operasi[1].__name__)} {combin_angka[2]}) {simbol(combin_operasi[2].__name__)} {combin_angka[3]} = {target}"
                    else:
                        return f"{combin_angka[0]} {simbol(combin_operasi[0].__name__)} {combin_angka[1]} {simbol(combin_operasi[1].__name__)} {combin_angka[2]} {simbol(combin_operasi[2].__name__)} {combin_angka[3]} = {target}"
            except ZeroDivisionError:
                continue 
    return "Tidak ada kombinasi yang cocok."



angka = [1, 4, 5, 6]
target = 49

print(calculate(angka, target))
