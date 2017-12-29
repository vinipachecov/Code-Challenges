# This is a demo task.

# Write a function:

# class Solution { public int solution(int[] A); }

# that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

# For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

# Given A = [1, 2, 3], the function should return 4.

# Given A = [−1, −3], the function should return 1.

# Assume that:

# N is an integer within the range [1..100,000];
# each element of array A is an integer within the range [−1,000,000..1,000,000].
# Complexity:

# expected worst-case time complexity is O(N);
# expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
# Copyright 2009–2017 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

A = [-1,-2,-3] 
if(len(A) == 1):
    if(A[0] == 1):
        print(2)
    print(1)
else:    
    print(A)
    A = set(filter( lambda x: x>0, A))
    print(A)
    aux = 1
    for elem in A:
        if(elem == aux):
            aux += 1
        else:
            print(aux)
            break
    print(aux)
# solution        
# if(len(A) == 1):
#         if(A[0] == 1):
#             return 2
#         return 1
#     else:            
#         A = set(filter( lambda x: x>0, A))        
#         aux = 1
#         for elem in A:
#             if(elem == aux):
#                 aux += 1
#             else:
#                 return aux                
#         return aux