(function(){
    var array = [1,1,2,2,3,3,5,33,5,4,4,7,7]
    var hasPair = false;
    var aux = -4;
    
    array.sort()    
    if(array.length == 0){
        return array[0];            
    } else {
        array.forEach(element => {
            if(aux === -4){
                aux = element;                                        
            } else {
                if(element === aux){
                    aux = -4;
                }
            }            
        });
    }

    console.log(aux);    
    
})(this);