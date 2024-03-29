/***********************************************************************************************************************************/
// Word Categories

const wordCategories = {
    sports: [
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
    ],

    colors: [
        "WHITE",
        "RED",
        "ORANGE",
        "YELLOW",
        "GREEN",
        "PINK",
        "PURPLE",
        "BROWN",
        "BLACK",
        "BLUE",
        "LIGHT BLUE",
        "YELLOW GREEN",
        "GOLD",
        "SILVER",
    ],

    shapes: [
        "CIRCLE",
        "CROSS",
        "DIAMOND",
        "HEART",
        "RECTANGLE",
        "SQUARE",
        "STAR",
        "TRIANGLE",
    ],

    food: [
        "RICE",
        "RICE BALL",
        "CURRY AND RICE",
        "GRILLED EEL",
        "GRILLED FISH",
        "BREAD",
        "SANDWICH",
        "PANCAKE",
        "PIZZA",
        "HAMBURGER",
        "HOT DOG",
        "FRENCH FRIES",
        "FRIED CHICKEN",
        "SAUSAGE",
        "STEAK",
        "OMELET",
        "SPAGHETTI",
        "PIE",
        "SALAD",
        "SOUP",
        "FRIED NOODLES",
        "RAMEN",
        "SOBA",
        "BEEF BOWL",
        "SUSHI",
        "TEMPURA",
        "CEREAL",
        "CHEESE FONDUE",
        "FRIED EGG",
        "JAM",
        "MISO SOUP",
        "TOAST",
        "TUNA BOWL",
        "YOGURT",
        "GYOZA",
        "OKONOMIYAKI",
    ],

    drinks: [
        "COFFEE",
        "TEA",
        "GREEN TEA",
        "JUICE",
        "SODA",
        "MILK",
        "WATER",
        "MINERAL WATER",
        "BARLEY TEA",
        "COLA",
        "OOLONG",
    ],

    dessert: [
        "CAKE",
        "DONUT",
        "PARFAIT",
        "PUDDING",
        "ICE CREAM",
        "SHAVED ICE",
        "CHOCOLATE",
        "CREAM PUFF",
        "POPCORN",
        "POTATO CHIPS",
        "CANDY",
        "COOKIE",
        "CREPE",
        "JELLY",
    ],

    "fruits and veggies": [
        "APPLE",
        "BANANA",
        "BEAN",
        "BROCCOLI",
        "CABBAGE",
        "CARROT",
        "CHERRY",
        "CORN",
        "CUCUMBER",
        "EGGPLANT",
        "GRAPES",
        "GREEN PEPPER",
        "KIWI FRUIT",
        "LEMON",
        "LETTUCE",
        "MELON",
        "MUSHROOM",
        "NUT",
        "ONION",
        "ORANGE",
        "PEACH",
        "PINEAPPLE",
        "POTATO",
        "SPINACH",
        "STRAWBERRY",
        "TOMATO",
        "WATERMELON",
        "CELERY",
        "MANGO",
        "OLIVE",
        "PEAR",
        "PERSIMMON",
        "PUMPKIN",
        "RADISH",
    ],

    ingredients: [
        "MEAT",
        "BEEF",
        "CHICKEN",
        "PORK",
        "BACON",
        "HAM",
        "CHEESE",
        "EGG",
        "FISH",
        "SALMON",
        "OCTOPUS",
        "CRAB",
        "SHELLFISH",
        "SHRIMP",
        "SQUID",
        "TUNA",
        "SALT",
        "SUGAR"
    ],

    animals: [
        "BEAR",
        "ELEPHANT",
        "TIGER",
        "LION",
        "HORSE",
        "ZEBRA",
        "CAMEL",
        "GIRAFFE",
        "GORILLA",
        "MONKEY",
        "ORANGUTAN",
        "PANDA",
        "KOALA",
        "DOG",
        "CAT",
        "FOX",
        "RABBIT",
        "MOUSE",
        "CROCODILE",
        "SNAKE",
        "FROG",
        "BIRD",
        "POLAR BEAR",
        "HIPPO",
        "COW",
        "PIG",
        "WILD BOAR",
        "KANGAROO",
        "DEER",
        "GOAT",
        "SHEEP",
        "HAMSTER",
        "WOLF",
        "BAT",
        "CHICKEN",
        "DUCK",
        "HAWK",
        "SNAIL",
        "IGUANA",
        "DINOSAUR",
        "DRAGON",
        "PHOENIX",
        "UNICORN",
    ],

    nature: [
        "DESERT",
        "FOREST",
        "RAINFOREST",
        "LAKE",
        "MOUNTAIN",
        "RIVER",
        "SAVANNA",
        "SEA",
        "BEACH",
        "HOT SPRING",
        "ISLAND",
        "OCEAN",
        "MUDFLATS",
        "WETLANDS",
        "OASIS",
        "POND",
        "WATERFALL",
        "TREE",
        "PLANT",
        "FLOWER",
        "ROSE",
        "FIRE",
        "ICE",
        "ROCK",
        "SKY",
        "CLOUD",
        "RAIN",
        "SNOW",
        "RAINBOW",
        "THUNDER",
        "AURORA",
        "SUN",
        "MOON",
        "STAR",
        "SPACE",
    ],

    "sea animals": [
        "WHALE",
        "DOLPHIN",
        "PENGUIN",
        "SEA TURTLE",
        "FISH",
        "SHARK",
        "CRAB",
        "JELLYFISH",
        "SEA OTTER",
        "TUNA",
        "EEL",
        "OCTOPUS",
        "SQUID",
        "SHRIMP",
        "SHELLFISH",
        "CORAL",
        "STARFISH"
    ],

    bugs: [
        "ANT",
        "BEETLE",
        "STAG BEETLE",
        "BUTTERFLY",
        "DRAGONFLY",
        "GRASSHOPPER",
        "MANTIS",
        "SPIDER",
        "CICADA",
        "FIREFLY",
        "LADYBUG",
        "MOSQUITO",
        "EARTHWORM",
    ],

    environment: [
        "FOREST LOSS",
        "PLANT TREES",
        "GLOBAL WARMING",
        "SAVE ENERGY",
        "PLASTIC",
        "USE ECO-FRIENDLY BAGS",
        "REFUSE",
        "REDUCE",
        "REUSE",
        "RECYCLE",
        "HUNTING",
        "OVERFISHING",
        "AIR POLLUTION",
        "CHEMICALS",
        "TRAFFIC ACCIDENTS",
    ],

    months: [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER",
    ],

    clothes: [
        "SHIRT",
        "T-SHIRT",
        "SWEATSHIRT",
        "SWEATER",
        "UNIFORM",
        "PANTS",
        "JEANS",
        "CAP",
        "HAT",
        "GLOVES",
        "SOCKS",
        "SHOES",
        "APRON",
        "COAT",
        "JACKET",
        "VEST",
        "SKIRT",
        "BOOTS",
        "GLASSES",
        "RIBBON",
    ],

    body: [
        "HAIR",
        "HEAD",
        "FACE",
        "SHOULDER",
        "HAND",
        "ARM",
        "KNEE",
        "EYE",
        "EAR",
        "NOSE",
        "MOUTH",
        "TEETH",
        "NECK",
        "LEG",
        "TOE",
        "TONGUE",
        "ELBOW",
        "THUMB",
        "NAIL",
    ],

    "places in town": [
        "HOUSE",
        "PARK",
        "LIBRARY",
        "MUSEUM",
        "HOSPITAL",
        "BUS STOP",
        "STATION",
        "POLICE STATION",
        "FIRE STATION",
        "POST OFFICE",
        "BOOKSTORE",
        "RESTAURANT",
        "SUPERMARKET",
        "CASTLE",
        "SHRINE",
        "TEMPLE",
        "CHURCH",
        "AQUARIUM",
        "STADIUM",
        "ZOO",
        "AMUSEMENT PARK",
        "CONVENIENCE STORE",
        "ELEMENTARY SCHOOL",
        "JUNIOR HIGH SCHOOL",
        "CITY",
        "CITY HALL",
        "BANK",
        "HOTEL",
        "KINDERGARTEN",
        "SHOP",
        "FLOWER SHOP",
        "DEPARTMENT STORE",
        "SHOPPING MALL",
        "THEATER",
        "PLANETARIUM",
        "DOME",
        "TOWER",
        "GAS STATION",
        "FACTORY",
        "FARM",
        "GARDEN",
        "DAM",
        "AIRPORT",
    ],

    subjects: [
        "ENGLISH",
        "JAPANESE",
        "CALLIGRAPHY",
        "SOCIAL STUDIES",
        "MATH",
        "SCIENCE",
        "MUSIC",
        "ARTS AND CRAFTS",
        "HOME ECONOMICS",
        "P.E.",
        "MORAL EDUCATION",
        "PERIOD FOR INTEGRATED STUDIES",
        "HOMEROOM",
    ],

    "places in school": [
        "CLASSROOM",
        "COMPUTER ROOM",
        "ENTRANCE",
        "GYM",
        "LIBRARY",
        "MUSIC ROOM",
        "PLAYGROUND",
        "SCHOOL NURSE'S OFFICE",
        "RESTROOM",
        "SWIMMING POOL",
        "TEACHER'S OFFICE",
        "SCHOOL PRINCIPAL'S OFFICE",
    ],

    stationary: [
        "CRAYON",
        "MARKER",
        "PEN",
        "PENCIL",
        "PENCIL CASE",
        "ERASER",
        "RULER",
        "GLUE",
        "SCISSORS",
        "STAPLER",
        "NOTEBOOK",
        "PENCIL SHARPENER",
        "BALLPOINT PEN",
        "COLORED PENCIL",
        "BRUSH",
        "INK",
        "PIN",
    ],

    instruments: [
        "RECORDER",
        "HARMONICA",
        "TRIANGLE",
        "PIANO",
        "GUITAR",
        "VIOLIN",
        "DRUM",
        "XYLOPHONE",
        "KEYBOARD HARMONICA",
        "CASTANETS",
    ],

    items: [
        "BAG",
        "BAT",
        "GLOVE",
        "RACKET",
        "SOCCER SHOES",
        "UMBRELLA",
        "GLASS",
        "MUG",
        "TEXTBOOK",
        "COMIC BOOK",
        "DICTIONARY",
        "PRESENT",
        "TREASURE",
        "STICKER",
        "TICKET",
        "WATCH",
        "TV",
        "COMPUTER",
        "SMARTPHONE",
        "TABLET",
        "DESK",
        "CHAIR",
        "BED",
        "BALL",
        "BASKET",
        "BOOK",
        "ALBUM",
        "BOX",
        "CALENDAR",
        "CARD",
        "FAN",
        "MAP",
        "PICTURE",
        "DOLL",
        "RING",
        "CLOCK",
        "CAMERA",
        "TELEPHONE",
        "ECO-FRIENDLY BAG",
        "PLASTIC BAG",
        "BUCKET",
        "GARBAGE",
        "WHEELCHAIR",
        "CUP",
        "FORK",
        "SPOON",
        "DISH",
        "POT",
        "GATE",
        "ELEVATOR",
        "DOOR",
        "KEY",
        "ROOM",
        "RUG",
        "QUILT",
        "SOFA",
        "TABLE",
        "LAMP",
        "WALL",
        "WINDOW",
        "BATH",
        "YEN",
    ],

    activities: [
        "CAMPING",
        "DANCING",
        "FISHING",
        "HIKING",
        "SHOPPING",
        "READING",
        "DRAWING",
        "JOGGING",
        "SKATEBOARDING",
        "SWINGING",
        "PLAYING THE PIANO",
        "PLAYING VIDEO GAMES",
        "SEEING MOVIES",
        "CARDS",
        "JUMP ROPE",
        "TAG",
        "HIDE-AND-SEEK",
        "ROCK-PAPER-SCISSORS",
        "RUNNING",
        "KITE FLYING",
        "TOP SPINNING",
        "PLAYING DODGEBALL",
        "PLAYING THE GUITAR",
        "PLAYING THE RECORDER",
        "GOING TO CONCERTS",
    ],

    "school events": [
        "FIELD TRIP",
        "SCHOOL TRIP",
        "CHORUS CONTEST",
        "VOLUNTEER DAY",
        "DRAMA FESTIVAL",
        "MUSIC FESTIVAL",
        "SCHOOL FESTIVAL",
        "SPORTS DAY",
        "EVACUATION DRILL",
        "SWIMMING MEET",
        "SUMMER VACATION",
        "ENTRANCE CEREMONY",
        "GRADUATION CEREMONY",
        "MEMORY",
        "FIRE DRILL",
        "OUTDOOR NATURE CAMP",
    ],

    "yearly events": [
        "BIRTHDAY",
        "NEW YEAR'S DAY",
        "DOLL'S FESTIVAL",
        "CHERRY BLOSSOM VIEWING",
        "CHILDREN'S DAY",
        "STAR FESTIVAL",
        "FIREWORKS FESTIVAL",
        "HALLOWEEN",
        "CHRISTMAS",
        "NEW YEAR'S EVE",
        "SNOW FESTIVAL",
        "APRIL FOOL'S DAY",
    ],

    jobs: [
        "ARTIST",
        "WRITER",
        "SINGER",
        "COMEDIAN",
        "DOCTOR",
        "NURSE",
        "VET",
        "ZOOKEEPER",
        "COOK",
        "BAKER",
        "FARMER",
        "POLICE OFFICER",
        "FIRE FIGHTER",
        "PILOT",
        "PROGRAMMER",
        "OFFICE WORKER",
        "ASTRONAUT",
        "TEACHER",
        "RESEARCHER",
        "SCIENTIST",
        "FLIGHT ATTENDANT",
        "BASEBALL PLAYER",
        "MOUNTAINEER",
        "ACTOR",
        "VOICE ACTOR",
        "IDOL",
        "MUSICIAN",
        "BUSINESSPERSON",
        "PRESIDENT",
        "CARTOONIST",
        "DESIGNER",
        "CARPENTER",
        "PATISSIER",
        "DENTIST",
        "PHARMACIST",
        "FLORIST",
        "BUS DRIVER",
        "GAME PROGRAMMER",
        "LAWYER",
        "REPORTER",
        "KINDERGARTEN TEACHER",
        "NURSERY SCHOOL TEACHER",
        "SOCCER PLAYER",
        "FIGURE SKATER",
        "KING",
        "QUEEN",
    ],

    "club activities": [
        "BASEBALL TEAM",
        "SOFTBALL TEAM",
        "BASKETBALL TEAM",
        "VOLLEYBALL TEAM",
        "SOCCER TEAM",
        "TENNIS TEAM",
        "TABLE TENNIS TEAM",
        "BADMINTON TEAM",
        "DANCE TEAM",
        "TRACK AND FIELD TEAM",
        "ART CLUB",
        "COOKING CLUB",
        "DRAMA CLUB",
        "BRASS BAND",
        "CHORUS",
        "BROADCASTING CLUB",
        "NEWSPAPER CLUB",
        "PHOTOGRAPHY CLUB",
        "GYMNASTICS TEAM",
        "COMPUTER CLUB",
        "ENGLISH CLUB",
        "SCIENCE CLUB",
    ],
};

/***********************************************************************************************************************************/
/* Audio Sources */

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

/***********************************************************************************************************************************/
/* Start of the coding for the actual game mechanics itself */

const maxWrongGuesses = 8;
let wordToGuess = "";
let guessedLetters =[];
let wrongGuesses = 0;
var imageCount = 0;
var selectedWords;
const categoryContainer = document.querySelector(".word-categories");


window.addEventListener('load', selectCategory);

function selectRandomWord(){
    return selectedWords[Math.floor(Math.random() * selectedWords.length)];
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
            return letter;
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

    const changeButton = document.querySelector('.change-category');
    changeButton.remove();
    changeButton.removeEventListener('click', () => {
        categoryContainer.style.display = "flex";
    })
}

function selectCategory(){
    for (let category in wordCategories){
        const button = document.createElement("button");
        button.innerText = category.toUpperCase();
        selectedWords = wordCategories[category];
        categoryContainer.appendChild(button);
        button.addEventListener("click", () => {
            selectedWords = wordCategories[category];
            initializeGame();
        });
    };
}

//Hide the category when the game is initialized
categoryContainer.addEventListener('click', () => {
    categoryContainer.style.display = "none";
})

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
        audio.volume = 0.5;
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
    sound.volume = 0.5;


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
        sound.volume = 0.5;

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

        changeCategory();


    } else if(wrongGuesses >= maxWrongGuesses){
        const UFOContainer = document.querySelector('.UFO');
        UFOContainer.innerHTML = `<img src="../images/ufo-gifs/game-over.gif" alt="Game Over"><audio id="game-over-audio" src=${UFO_AUDIO[8].src} autoplay></audio>`;

        let sound = document.querySelector("audio");
        sound.volume = 0.5;

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

        changeCategory();
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

function changeCategory(){
    const changeButton = document.createElement("button");
    changeButton.className = "change-category";
    changeButton.innerHTML = "CHANGE CATEGORY?"
    const screenContainer = document.querySelector('.screen');
    screenContainer.insertAdjacentElement("beforeend", changeButton);
    changeButton.addEventListener('click', () => {
        categoryContainer.style.display = "grid";
    })
}
