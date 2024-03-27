const words = [
    "BASEBALL",
    "SOFTBALL",
    "BASKETBALL",
    "VOLLEYBALL",
    "DODGEBALL",
    "SOCCER",
    "TENNIS",
    "TABLE TENNIS",
    "BADMINTON",
    "TRACK AND FIELD",
    "SWIMMING",
    "SKATING",
    "SKIING",
    "RUGBY",
    "CRICKET",
    "GYMNASTICS",
    "JUDO",
    "KENDO",
    "SUMO",
    "SKATEBOARDING",
    "GOLF",
    "KARATE",
    "MARATHON",
    "DANCING",
    "SURFING",
    "WRESTLING",
];

const UFO_AUDIO = [
    {
        id: "ufo-audio-0",
        src: "https://sampleswap.com/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Atmospherics/1421[kb]alien-scene.wav.mp3"
    },

    {
        id: "ufo-audio-1",
        src: "https://sampleswap.com/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Pads/3100[kb]alien-monolith-pad.wav.mp3"
    },

    {
        id: "ufo-audio-2",
        src: "https://sampleswap.com/samples-ghost/DRUMS%20(SINGLE%20HITS)/Weird%20and%20Interesting%20Hits/88[kb]alien_alarm.wav.mp3"
    },

    {
        id: "ufo-audio-3",
        src: "https://sampleswap.com/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Electro%20and%20Synthetic/348[kb]alien-weapon-powerup.wav.mp3"
    },

    {
        id: "ufo-audio-4",
        src: "https://sampleswap.com/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Scars%20FNC%20SFX/92[kb]alien_breath.wav.mp3"
    },

    {
        id: "ufo-audio-5",
        src: "https://sampleswap.com/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Scars%20FNC%20SFX/92[kb]alien_breath.wav.mp3"
    },

    {
        id: "ufo-audio-6",
        src: "https://sampleswap.com/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Atmospherics/1298[kb]alien-propeller.wav.mp3"
    },

    {
        id: "ufo-audio-7",
        src: "https://sampleswap.com/samples-ghost/VOCALS%20and%20SPOKEN%20WORD/Robotic%20or%20Stuttery%20or%20Spooky/207[kb]aliens-laughing.wav.mp3"
    },

    {
        id: "game-over-audio",
        src: "https://sampleswap.com/samples-ghost/MELODIC%20SAMPLES/SAMPLED%20MUSIC/676[kb]close-encounters-alien-bass-response.wav.mp3"
    },

    {
        id: "you-win-audio",
        src: "https://sampleswap.com/samples-ghost/MELODIC%20LOOPS/SYNTH%20AND%20ELECTRONIC%20LOOPS/380[kb]119_round-happy-acid-synth.wav.mp3"
    }
];

const BUTTONS_AUDIO = [
    {
        id: "wrong",
        src: "https://sampleswap.com/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/50[kb]somebuzz-kick.wav.mp3"
    },

    {
        id: "correct",
        src: "https://sampleswap.com/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/122[kb]pipechimes.wav.mp3"
    }
];

const maxWrongGuesses = 8;
let wordToGuess = "";
let guessedLetters =[];
let wrongGuesses = 0;
var imageCount = 0;

function selectRandomWord(){
    return words[Math.floor(Math.random() * words.length)];
};

function initializeGame(){
    wrongGuesses = 0;
    imageCount = 0;
    wordToGuess = selectRandomWord();

    //Only represent letters with underscores (for vocab with spaces)
    let toGuessArray = wordToGuess.split('');
    guessedLetters = toGuessArray.map((letter) => {
        if (/[A-Z]/.test(letter)){
            return '_';
        } else {
            return ' ';
        }
    });

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

    //Remove animations on word
    const wordContainer = document.querySelector(".word");
    wordContainer.classList.remove("bounce");
    wordContainer.classList.remove("lose");

    const UFOContainer = document.querySelector('.UFO');
    UFOContainer.classList.remove("win");
}

function updateWordDisplay(){
    const wordContainer = document.querySelector('.word');
    //wordContainer.innerText = guessedLetters.join('');
    wordContainer.innerHTML = guessedLetters.map((letter, index) => {
        return `<span style="--i:${index + 1}">${letter}</span>`
    }).join('');
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
    } else {
        const audio = document.createElement("audio");
        audio.setAttribute("src", "https://sampleswap.com/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/122[kb]pipechimes.wav.mp3");
        audio.setAttribute("autoplay", "true");
        audio.volume = 0.1;
    }

    //Update the word display
    updateWordDisplay();

    //Check if the game has been won or lost
    checkWinOrLose();
}

function updateUFOGraphic(){
    const UFOContainer = document.querySelector('.UFO');
    UFOContainer.innerHTML = `<img src="../images/ufo-gifs/ufo-${imageCount}.gif" alt="UFO ${imageCount}"><audio id="ufo-audio-${imageCount}" src=${UFO_AUDIO[imageCount].src} autoplay></audio>`;

    let sound = document.querySelector("audio");
    sound.volume = 0.10;


    //Also update the guess counter
    const counterContainer = document.querySelector('.guess-counter');
    counterContainer.innerText = `You have ${maxWrongGuesses - imageCount} chances left.`;
    imageCount++;
};

function checkWinOrLose(){
    if (guessedLetters.join('') === wordToGuess){
        const UFOContainer = document.querySelector('.UFO');
        UFOContainer.innerHTML = `<img src="../images/ufo-gifs/you-win.gif" alt="You Win"><audio id="you-win-audio" src=${UFO_AUDIO[UFO_AUDIO.length - 1].src} autoplay></audio>`;
        UFOContainer.classList.add("win");

        let sound = document.querySelector("audio");
        sound.volume = 0.10;

        const counterContainer = document.querySelector('.guess-counter');
        counterContainer.innerText = "";

        const letterButtons = document.querySelectorAll('.letters button');
        letterButtons.forEach(button => {
            button.disabled = true;
            button.removeEventListener('click', handleGuess);
        });

        playAgain();

        //Animate the letters
        const wordContainer = document.querySelector(".word");
        wordContainer.classList.add("bounce");


    } else if(wrongGuesses >= maxWrongGuesses){
        const UFOContainer = document.querySelector('.UFO');
        UFOContainer.innerHTML = `<img src="../images/ufo-gifs/game-over.gif" alt="Game Over"><audio id="game-over-audio" src=${UFO_AUDIO[8].src} autoplay></audio>`;

        let sound = document.querySelector("audio");
        sound.volume = 0.10;

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

        const wordContainer = document.querySelector(".word");
        wordContainer.classList.add("lose");
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
