// A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

// The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

// Write a function:

// struct Results solution(int A[], int N, int K);
// that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.

// For example, given

var     A = [3, 8, 9, 7, 6]
var     K = 3
// the function should return [9, 7, 6, 3, 8]. Three rotations were made:

//     [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
//     [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
//     [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]




function shiftToRight(array, k) {
    var last, newArray;    
    
    for(var i = 0; i < k; i++){
        last = array.pop()        
        array.unshift(last)
        newArray = array        
    }
    
    return newArray
}


// var B = []
// console.log(B.length);
// shiftToRight(A,3)


// 2.0

C = [-4]

function solution(A, K) {
    // write your code in JavaScript (Node.js 6.4.0)
    var last, newArray;
    
    if(A.length > 0) {        
        if(A.length === K || K === 0){
            return A;
        }
        for(var i = 0; i < K; i++){
            last = A.pop();
            A.unshift(last);
            newArray = A;
        }    
    }else {
        return A;        
    }
    
    return newArray
}

console.log(solution(C,0));