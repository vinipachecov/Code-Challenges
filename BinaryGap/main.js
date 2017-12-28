(function() {
  var num =  529;

  var binGapLength = 0;
  var foundAone = false;
  // converts number from base to another
  var convertDecToBin = function(num) {
    return parseInt(num, 10).toString(2);
  };

  var convertedNumber = convertDecToBin(num);

  console.log(`Converted number = ${convertedNumber}`);

  var runThroughArray = function(convertedNumber) {

      var auxCont = 0;

    for (let index = 0; index < convertedNumber.length; index++) {      
      if (convertedNumber[index] === "1") {
          if(foundAone){
              if(binGapLength === '0'){
                binGapLength = auxCont;
              } else if(auxCont > 0){                  
                    binGapLength =  auxCont > binGapLength ? auxCont : binGapLength;                  
              }              
          }
          foundAone = true;                              
          auxCont = 0;
      }
      if(foundAone === true && convertedNumber[index] === '0'){
          auxCont++;
      }            
    }
    console.log('Binary gap Length equals to ' + binGapLength)
  };

  runThroughArray(convertedNumber);

  // count the number of zeros between the '1's gaps
})(this);
