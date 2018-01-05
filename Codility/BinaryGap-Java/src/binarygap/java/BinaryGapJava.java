/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package binarygap.java;

/**
 *
 * @author vinicius
 */
public class BinaryGapJava {

    /**
     * @param args the command line arguments
     */
    
//    if (convertedNumber[index] === "1") {
//          if(foundAone){
//              if(binGapLength === '0'){
//                binGapLength = auxCont;
//              } else if(auxCont > 0){                  
//                    binGapLength =  auxCont > binGapLength ? auxCont : binGapLength;                  
//              }              
//          }
//          foundAone = true;                              
//          auxCont = 0;
//      }
//      if(foundAone === true && convertedNumber[index] === '0'){
//          auxCont++;
//      }            
    public static void main(String[] args) {
        String convertedNumber = (Integer.toBinaryString(5));
        
        boolean foundAone = false;
        int BinGapLength = 0;
        int auxCount = 0;
        
        
        for (int i = 0; i < convertedNumber.length(); i++) {
            if(convertedNumber.charAt(i) == '1'){
                if(foundAone){
                    if(BinGapLength == 0){
                        BinGapLength = auxCount;
                    } else if (auxCount > 0) {
                        BinGapLength = auxCount > BinGapLength ? auxCount : BinGapLength;
                    }
                }
                foundAone = true;
                auxCount = 0;
            }
            if(foundAone == true && convertedNumber.charAt(i) == '0'){
                auxCount++;
            }
        }
        System.out.println(BinGapLength);
    }
    
}
