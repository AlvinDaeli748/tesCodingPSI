import random

a = []
filter = int(input("Enter Filter: "))
array = random.sample(range(1, 100), 12)
arr = (', '.join(map(str,array)))
print("Array : [" + arr + "]")

if(filter % 2) == 0:
    fil = "genap"
else:
    fil = "ganjil"
print("Filter : " + fil)

for i in range(0, len(array)):
    if(filter % 2) == 0:
        if(array[i] % 2) == 0:
            a.append(array[i])
    elif(filter % 2 ) == 1:
        if(array[i] % 2) == 1:
            a.append(array[i])

result = (', '.join(map(str,a)))
print("Array : [" + result + "]")