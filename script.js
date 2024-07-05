function appendtodisplay(value){
 document.getElementById('display').value += value;
}
function cleardisplay() {
    document.getElementById('display').value='';
}
function calaculateresult() {
    const display=document.getElementById('display');
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value='Error'
    }
    
}