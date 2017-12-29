/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package challenge.toptal;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

/**
 *
 * @author vinicius
 */
public class ChallengeToptal {

    /**
     * @param args the command line arguments
     */
    static int A [] = new int [] {6,10,6,9,7,8};
    public static void main(String[] args) {
//        Arrays.sort(A);
//        ArrayList<Integer> dif = new ArrayList<Integer>();     
//        int contLength = 0;        
//        
//        int aux = 0;
//        for (int i = 0; i < A.length ; i++) {
//            for (int j = 0; j < A.length; j++) {                
//                    aux = A[i] - A[j];
//                    aux = Math.abs(aux);                    
//                    dif.add(aux);
//                }                                                                                
//        }
//        
//        Collections.sort(dif);
//        
//        int contAux = 0;
//        for (Integer integer : dif) {
//            if(integer == 1 || integer == 0){                
//                contAux++;                            
//            }                             
//        }
//        
//        
//        System.out.println(contAux / A.length); 
        
        
        
         ArrayList<Point2D> list = new ArrayList<Point2D>();

        list.add(new Point2D(-3, 2));
        list.add(new Point2D(1, 2));
        list.add(new Point2D(2, 4));
        list.add(new Point2D(-1, -2));
        list.add(new Point2D(2, -2));

        int result1 = 0;
        int result2 = 0;

        int colPoints = 0;

        for (Point2D pointi : list) {
            for (int i = 1; i < list.size() - 1; i++) {
                                // calculate collinear points
                result1 = (Math.abs(pointi.y - 0)) / (Math.abs(pointi.x - 0));
                result2 = Math.abs((Math.abs(list.get(i).y - pointi.y)) / Math.abs((list.get(i).x - pointi.x)));

                if (result1 == result2) {
                    colPoints++;
                }

            }

        }
        System.out.println(colPoints);
        System.out.println(list.size());
        
        
        
    }
    
}
