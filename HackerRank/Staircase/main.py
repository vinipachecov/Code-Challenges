n = 10
numberSpaces = n-1
numberHashes = 1

for times in range(n):
    print(numberSpaces * ' ' + numberHashes * '#')
    numberHashes = numberHashes + 1
    numberSpaces = numberSpaces -1