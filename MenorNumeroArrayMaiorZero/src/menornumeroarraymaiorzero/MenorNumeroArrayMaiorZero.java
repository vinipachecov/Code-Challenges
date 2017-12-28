/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package menornumeroarraymaiorzero;

import java.util.Arrays;

/**
 *
 * @author vinicius
 */
public class MenorNumeroArrayMaiorZero {

    /**
     * @param args the command line arguments
     */
    public static int A[] = new int[] {1, 3, 6, 4, 1, 2};
    public static void main(String[] args) {
        
        Arrays.sort(A);
        for (int a : A) {
            System.out.println(a);                        
        }        
        int aux = 0;
        for(int i = 0; i < A.length; i++){                           
            if(A[i] == (aux + 1) && A[i] > 0){
                aux ++;
                if(i +1 == A.length){
                    System.out.println(aux +1);
                }
            } else {
                if(A[i] == aux){
                    continue;
                }
                if(aux == 0){
                    System.out.println("1");                    
                } else {
                    System.out.println(aux + 1 );
                    break;
                }
            }
        }
    }
    
}
