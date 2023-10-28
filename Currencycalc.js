
function calc(){
    
    var amount = document.getElementById('first').value;
    var currfrom = document.getElementById('from').value;
    var currto = document.getElementById('to').value;
    var input, fromindex, toindex, final, bal, datas;
    
    if(document.getElementById('first').value === null){
        
        amount = document.getElementById('first').value = 1;
    }
    
   if(isNaN(amount)){
     alert("Amount has to be a number");
     amount = document.getElementById('first').value = 1;
 }
    
    
     $(document).ready(function(){
     $.get("MyProgram/currencyfile.txt", function(data, status){
     datas = data.split(" ");
     
     
         
       for(var i =0 ;i<datas.length;i++){ 
              //  alert("data of europe" + datas[i]);
                if(currfrom === datas[i]){
                    fromindex = datas[i+1];
                }
                if(currto === datas[i]){
                    toindex = datas[i+1];
                }  }  
    
    
if(fromindex<toindex){
    if(fromindex === 1){
        
    input = fromindex*amount; 
    final = input*toindex; 
    }else
    {
        input = amount;
        bal = toindex/fromindex;
        final = input*bal;
        
             }
    
}else{
    
     bal = toindex/fromindex;
    final = amount*bal;   
}
    $(document).ready(new function(){
        document.getElementById('defaultfrom').innerHTML = amount+" "+currfrom;
        document.getElementById('defaultto').innerHTML = "~ "+final.toFixed(2)+" "+currto;
        
    });     
    
  }); });  
   
     }
  
  
  


function swapcurrency(){
    
    var to = document.getElementById('to').value;
    document.getElementById('to').value = document.getElementById('from').value;
    document.getElementById('from').value = to;
    calc();
    
}
      


      



