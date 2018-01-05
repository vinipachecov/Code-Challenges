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


A = [1, 2, 3] 
if(len(A) == 1):
    if(A[0] == 1):
        print(2)
    print(1)
else:        
    positives = set(filter( lambda x: x>0, A))           
    print(next((i for i in range(1, len(positives) + 1) if not i in positives), 1))

# the len(positives ) + 2 is because if len(A) in [1,2,3 ] will be equal 3
#  you need to return 4 and your range goes from 1 to 3 
