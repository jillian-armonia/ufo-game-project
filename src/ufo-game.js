const words = [
    "BASEBALL",
    "SOFTBALL",
    "BASKETBALL",
    "VOLLEYBALL",
    "DODGEBALL",
    "SOCCER",
    "TENNIS",
 // "TABLE TENNIS",  **This has space in between that could be bad for the code
    "BADMINTON",
//  "TRACK AND FIELD",
    "SWIMMING",
    "SKATING",
    "SKIING",
];

const maxWrongGuesses = 13;
let wordToGuess = "";
let guessedLetters =[];
let wrongGuesses = 0;
var imageCount = 0;

function selectRandomWord(){
    return words[Math.floor(Math.random() * words.length)];
};

function initializeGame(){
    wordToGuess = selectRandomWord();
    guessedLetters = Array(wordToGuess.length).fill('_');
    wrongGuesses = 0;
    imageCount = 0;

    //Update the word display

    updateWordDisplay();

    updateUFOGraphic();

    //Remove any previously generated buttons
    const lettersContainer = document.querySelector('.letters');
    while (lettersContainer.firstChild){
        lettersContainer.removeChild(lettersContainer.firstChild)
    }

    //Generate the letter buttons
    for (let i = 0; i < 26; i++){
        const letter = String.fromCharCode(65 + i);
        const button = document.createElement('button');
        button.innerText = letter;
        button.addEventListener('click', function(){
            handleGuess(letter);
            button.classList.add("invisible");
            button.disabled = true;
        });
        lettersContainer.appendChild(button);
    }

    //Remove play button
    const playButton = document.querySelector('.play-again');
    playButton.remove();
    playButton.removeEventListener('click', initializeGame);
}

function updateWordDisplay(){
    const wordContainer = document.querySelector('.word');
    wordContainer.innerText = guessedLetters.join(' ');
}

function handleGuess(letter){
    //Add the letter to the list of guessed letters
    guessedLetters.forEach((guessedLetter, index) => {
        if (wordToGuess[index] === letter){
            guessedLetters[index] = letter;
        }
    });

    //If the letter is not in the hidden word, increment the wrong guesses count and update the UFO graphic
    if (!wordToGuess.includes(letter)){
        wrongGuesses++;
        updateUFOGraphic();
    }

    //Update the word display
    updateWordDisplay();

    //Check if the game has been won or lost
    checkWinOrLose();
}

function updateUFOGraphic(){
    const UFOContainer = document.querySelector('.UFO');
    UFOContainer.innerHTML = `<img src="../images/ufo-${imageCount}.png" alt="UFO ${imageCount}">`;

    //Also update the guess counter
    const counterContainer = document.querySelector('.guess-counter');
    counterContainer.innerText = `You have ${13 - imageCount} chances left.`;
    imageCount++;
}

function checkWinOrLose(){
    if (guessedLetters.join('') === wordToGuess){
        const UFOContainer = document.querySelector('.UFO');
        UFOContainer.innerHTML = `<img src="../images/you-win.png" alt="You Win">`;

        const counterContainer = document.querySelector('.guess-counter');
        counterContainer.innerText = "";

        const letterButtons = document.querySelectorAll('.letters button');
        letterButtons.forEach(button => {
            button.disabled = true;
            button.removeEventListener('click', handleGuess);
        });

        playAgain();
    } else if(wrongGuesses >= maxWrongGuesses){
        const UFOContainer = document.querySelector('.UFO');
        UFOContainer.innerHTML = `<img src="../images/game-over.png" alt="Game Over">`;

        //Shows the answer by filling in the blanks
        guessedLetters = wordToGuess.split('');
        updateWordDisplay();

        const counterContainer = document.querySelector('.guess-counter');
        counterContainer.innerText = "";

        const letterButtons = document.querySelectorAll('.letters button');
        letterButtons.forEach(button => {
            button.disabled = true;
            button.removeEventListener('click', handleGuess);
        });

        playAgain();
    }
}

function playAgain(){
    const playButton = document.createElement("button");
    playButton.className = "play-again";
    playButton.innerHTML = "PLAY AGAIN?";
    const screenContainer = document.querySelector('.screen');
    screenContainer.insertAdjacentElement("afterbegin", playButton);
    playButton.addEventListener('click', initializeGame);
}

window.addEventListener('load', initializeGame);
