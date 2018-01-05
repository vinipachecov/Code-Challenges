// A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

// Your goal is to find that missing element.

// Write a function:

// function solution(A);
// that, given a zero-indexed array A, returns the value of the missing element.

// For example, given array A such that:

//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.

// Assume that:

// N is an integer within the range [0..100,000];
// the elements of A are all distinct;
// each element of array A is an integer within the range [1..(N + 1)].
// Complexity:

// expected worst-case time complexity is O(N);
// expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).

var a = [2,3,1,5];

var b = [];

// for(var i = 1; i < 10000; i++){
//     b.push(i);    
// }

//console.log('value of b = ' + b);
console.log(b.toString())

var test = [77,78,79,81]

function solution(A) {
    var N = A.length + 1;    
    var total =  N * (N + 1) / 2;

    var sum = 0;
    A.forEach(element => {
        sum += element;
    });

    return total - sum;
}



console.log(solution(a));
