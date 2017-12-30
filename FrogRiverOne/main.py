

def solution(X, A):
    
    # check if X is in A
    if(X not in  A):
        return -1
    # do the sum of 1..X
    total = (X * (X+1)) / 2
    # create a array of booleans to check numbers found
    found = [False] * X
    # auxialiary variable to check sum through the array 
    auxSum = 0
    indexcount = -1

    # check minimal array and if it has number 1
    if(len(A) == 1):
        if(A[0] == 1 and X == 1):
            return 0
        else:
            return -1
    if(X > len(A)):
        return -1


    for elem in A:                   
        indexcount = indexcount + 1  

        # if the has been found just continue
        if(found[elem-1]):                              
            continue

        # otherwise.. add the element i.e (5 - 1) -> [4] to be true, to element 5 has been found
        found[elem - 1] = True
        #add it to the auxsum
        auxSum = auxSum + elem                        
        #check if sum is correct 
        if(auxSum == total):            
            return indexcount 
        
    #if it ends means it will not jump.. poor frog
    return -1

print(solution(X,A))