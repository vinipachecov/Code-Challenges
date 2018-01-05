

var A = 6;
var numberOfspaces = A-1;
var numberOfHashes = 1;
var finalString = "";
//number
for(var i = 0; i < A; i++){
    finalString = "";
    for(var ns = 0; ns < numberOfspaces; ns++){
        finalString = finalString + " ";
    }

    for(var nh = 0; nh < numberOfHashes; nh++){
        finalString = finalString + '#';
    }

    numberOfspaces--;
    numberOfHashes++;
    console.log(finalString)
}