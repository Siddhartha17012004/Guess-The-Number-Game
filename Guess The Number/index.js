let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")


const p = document.createElement('p');

let prevGuess = [];

let numGuess = 1;

let playGame = true;
if(playGame){
    submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess =  parseInt(userInput.value)
    console.log(guess);
    
    validateGuess(guess)
    })
}


function validateGuess(guess){
    // Check if the input is a valid number
    if(isNaN(guess)){
        alert("Please enter a valid number")
    } else if (guess < 1) {
        alert("Please enter a valid number")
    }
     else if (guess > 100) {
        alert("Please enter a number less than 100")
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over! Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
            
        }
    }
    
}

function checkGuess(guess){
    // Check if guest value is higher or low
    if(guess === randomNumber){
        displayMessage(`you guessed it right`);
        endGame();
    } else if (guess < randomNumber){
        displayMessage(`Your guess is too low`)
    }
}

function displayGuess(guess){
    // Display the guesses in the UI
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
   // Display the message to the user and update the UI
   lowOrHi.innerHTML = `<h2>${message}</h2>`;
   
}



function endGame(){
    // End the game and reset the UI
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}


function newGame(){
    // Reset the game for a new round
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;

    });

}