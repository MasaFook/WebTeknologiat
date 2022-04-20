function changeValueNro1(type){
   let currentValue = document.getElementById("nro1").value;
   if(type == "plus"){
    currentValue = parseInt(currentValue) + 1;
   }
   else{
    currentValue = parseInt(currentValue) - 1;
   }
    document.getElementById("nro1").value = currentValue;
}

function changeValueNro2(type){
    let currentValue = document.getElementById("nro2").value;
    if(type == "plus"){
     currentValue = parseInt(currentValue) + 1;
    }
    else{
     currentValue = parseInt(currentValue) - 1;
    }
     document.getElementById("nro2").value = currentValue;
 }
 
 function calculate(){
     let nro1 = parseInt(document.getElementById("nro1").value)
     let nro2 = parseInt(document.getElementById("nro2").value)
     let result;

     if(document.getElementById("selectmenu").value == "1"){
        result = nro1 + nro2;
     }
     if(document.getElementById("selectmenu").value == "2"){
        result = nro1 - nro2;
     }
     if(document.getElementById("selectmenu").value == "3"){
        result = nro1 * nro2;
     }
     if(document.getElementById("selectmenu").value == "4"){
        result = nro1 / nro2;
     }
     document.getElementById("resultbox").value = result;
 }
