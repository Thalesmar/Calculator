const userInput = document.getElementById('display');

function appendToDisplay(input){
    userInput.value += input;
}

function clearDisplay(){
    userInput.value = "";
}

function calculate(){
  try{
    userInput.value = eval(userInput.value);
  }
  catch(error){
     userInput.value = "ERROR"
  }  
}
