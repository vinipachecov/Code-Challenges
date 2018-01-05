var STR = '07:05:45PM';
//STR = STR.replace("PM", "");

if( STR.endsWith('PM')){
    console.log('has pm');
    var hour = STR.split(':',1);
    if(hour != 12){
        var newhour = parseInt(hour) + 12;
        STR = STR.replace(hour,newhour);
    }            
    STR = STR.replace('PM', '');
        
} else {    
    console.log('has am');
    var hour = STR.split(':',1);    
    switch(parseInt(hour)){
        case 12:
            STR = STR.replace(hour, "00");
            break;
    }
    STR = STR.replace("AM", "");
}
console.log(STR);
