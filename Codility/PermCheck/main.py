
A = [9, 5, 7, 3, 2, 7, 3, 1, 10, 8]



if(len(A) == 1):    
    if(A[0] != 1):
        print(0)
    else:
        print(1)
        
#check duplicates
A.sort()
previous = A[0]
for elem in A[1::]:    
    if(previous == elem):
        print(0)
    else:
        previous = elem

# # so no duplicates
total = sum(A)
tsum = sum(range(len(A)+1))

if(total != tsum):
    print(0)
else:
    print(1)            


# if(A.length == 1){
#     if(A[0] != 1){
#         console.log(0)
#     } 
#     console.log(1)
# }

# //check if has duplicated values
# A.sort(function(a, b) {
#     return a - b;
#   });
#   console.log(A)
# var previous = A[0];
# for(var i = 1; i < A.length; i++){    
#     if(previous == A[i]){
#         console.log(0);
#     }
#     previous = A[i];        
# }


# var total = 0;
# A.forEach(element => {
#     total += element;
# }) 

# var sum = 0;
# for(var i = 1; i < A.length +1; i++){
#     sum += i;    
# }
#  if(total != sum){
#      console.log(0);
#  } else {
#      console.log(1);
#  }