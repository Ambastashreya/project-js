const userInput = document.querySelector('.user-input');
const form = document.querySelector('form');
const result = document.querySelector('.result');
const allGuesses = [];
let randomNumber = Math.round(Math.random()*100);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInputValue = parseInt(userInput.value);
    if(userInputValue < randomNumber){
        result.innerHTML = 'Too low';
    }
    else if(userInputValue > randomNumber){
        result.innerHTML = 'Too high';
    }
    else{
        result.innerHTML = 'Congrats';
    }
    allGuesses.push(userInputValue); 
    form.reset();
});