//call the output screen 
const outputScreen = document.getElementById('output-screen');
function display(num){
    outputScreen.value +=num;
}

//invalidation 
function Calculate(){
    try{
        outputScreen.value= eval(outputScreen.value);
    }catch{
        alert('Invalid Number')

    }
}

//clear  the input value
function Clear(){
    outputScreen.value=" ";
}
// delete 1 by one number from the input value
function del(){
    outputScreen.value=outputScreen.value.slice(0, -1);
}