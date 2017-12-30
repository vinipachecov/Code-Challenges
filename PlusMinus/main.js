// receive array A

// 1 count number of positive and negative numbers

function isPositive(value) {
  return value > 0;
}

function isNegative(value) {
  return value < 0;
}

var A = [-4, 3, -9, 0, 4, 1]
var positives = A.filter(isPositive);
var negatives = A.filter(isNegative);
var numZeros = Math.abs((positives.length + negatives.length) - A.length)

console.log(numZeros)
// console.log(positives);
// console.log(negatives);

console.log((positives.length / A.length).toFixed(6))
console.log((negatives.length / A.length).toFixed(6))
if(numZeros == 0){
    console.log(numZeros.toFixed(6));
} else {
    console.log((numZeros / A.length).toFixed(6));    
}


