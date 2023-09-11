function getInput(value)
{
    document.getElementById("result").value+=value;
} 

function getDel()
{
    const inputVal=document.getElementById("result").value;
    const inputLength=inputVal.length;
    const modifiedInput=inputVal.slice(0,inputLength-1);
    document.getElementById("result").value=modifiedInput;
    
}

function getReset()
{
    document.getElementById("result").value="";
    
}

function getCalc()
{
   var p=document.getElementById("result").value;
   var q=eval(p);
   document.getElementById("result").value=q;
    
   
    
}