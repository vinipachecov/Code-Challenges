


var A = [9, 5, 7, 3, 2, 7, 3, 1, 10, 8]

// console.log('Sum is ' + A.reduce((a , b) => a + b, 0) )


if(A.length == 1){
    if(A[0] != 1){
        console.log(0)
    } 
    console.log(1)
}

//check if has duplicated values
A.sort(function(a, b) {
    return a - b;
  });
  console.log(A)
var previous = A[0];
for(var i = 1; i < A.length; i++){    
    if(previous == A[i]){
        console.log(0);
    }
    previous = A[i];        
}


var total = 0;
A.forEach(element => {
    total += element;
}) 

var sum = 0;
for(var i = 1; i < A.length +1; i++){
    sum += i;    
}
 if(total != sum){
     console.log(0);
 } else {
     console.log(1);
 }
console.log(total)        
console.log(sum)

// SOLUTION

// function solution(A) {
//     // write your code in JavaScript (Node.js 6.4.0)
    
// if(A.length == 1){
//     if(A[0] != 1){
//         return 0;
//     } 
//     return 1
// }

// //check if has duplicated values
// A.sort(function(a, b) {
//     return a - b;
//   });
// var previous = A[0];
// for(var i = 1; i < A.length; i++){    
//     if(previous == A[i]){
//         return 0;
//     }
//     previous = A[i];        
// }

// var total = 0;
// A.forEach(element => {
//     total += element;
// }) 

// var sum = 0;
// for(var i = 1; i < A.length +1; i++){
//     sum += i;    
// }
//  if(total != sum){
//      return 0;
//  } else {
//      return 1;
//  }
// }