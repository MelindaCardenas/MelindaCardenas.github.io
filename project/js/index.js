
let randomWord = getRandomWord().toLowerCase()
const body = document.body
let wordElement = document.getElementById("word")
wordElement.style.fontSize = "2rem"
let hiddenWord = ""
let hiddenWordArr =[]
let feedbackElement = document.getElementById("feedback")
console.log(randomWord)

function showInitialHiddenWord () {
    //show word in dashes 
    for (let i=0; i<randomWord.length; i++){
        hiddenWordArr.push("_")
    }
    //attach string to text of p id="word"></p>
    wordElement.innerText = hiddenWordArr.join(' ')
}

function showSomeLetters () {
    for (let i=0; i<randomWord.length; i++){
        //console.log(randomWord[i])
        if (['r','s','t','l','n'].includes(randomWord[i])){
            hiddenWordArr[i] = ` ${randomWord[i]} `
        }
    }
    hiddenWord = hiddenWordArr.join(' ')
    wordElement.innerText = hiddenWord
}

let form = document.getElementById("form")
let arrGuesses = []; 
let vowelGuessAvailable = true;
let wordGuessAvailable = true;

const validateGuess = function(e) {
    e.preventDefault();
    const formEl = e.target;
    const data = {
        guess: formEl.guess.value,
    };
    let guess = data.guess.toLowerCase()
    if (guess.length === 1){
        //alert(`guessing the letter ${data.guess}`)
        if (arrGuesses.length < 4){
            if (['a','e','i','o','u'].includes(guess) && vowelGuessAvailable){
                showLettersForGuess(guess)
                checkIfWon()
                arrGuesses.push(guess)
                vowelGuessAvailable = false
            }
            else if (['a','e','i','o','u'].includes(guess) && !vowelGuessAvailable){
                alert("you've guessed a vowel already")
            }
            //else guess is a consonant
            else {
                showLettersForGuess(guess)
                checkIfWon()
                arrGuesses.push(guess)
            } 
        }
        else {
            feedbackElement.innerText = "you've used up your 4 guesses, time to guess a word!"
        }
    }
    else if (guess.length > 1){
        //alert(`guessing the word ${data.guess}`)
        showLettersForGuess(guess)
        checkIfWon()
    }
}

function showLettersForGuess(guess){
    for (let i=0; i<randomWord.length; i++){
        //console.log(randomWord[i])
        if (randomWord[i] === guess || guess.includes(randomWord[i])){
            hiddenWordArr[i] = ` ${randomWord[i]} `
        }
    }
    hiddenWord = hiddenWordArr.join(' ')
    wordElement.innerText = hiddenWord
}

function checkIfWon(){
    //if all letters guessed, show they won!
    if (!hiddenWordArr.includes("_")){
        feedbackElement.innerText = "You won!"
    }
    //if not all letters guessed, and they still have guesses, show keep guessing
    else if (hiddenWordArr.includes("_") && arrGuesses.length<3){
        feedbackElement.innerText = "keep on guessing"
        console.log("keep on guessing")
    }
    else if (hiddenWordArr.includes("_") && arrGuesses.length===3){
        feedbackElement.innerText = "one last try, guess the word!"
        console.log("one last try, guess the word!")
    }
    //else, not all letters guessed and all guesses used
    else {
        feedbackElement.innerText = "better luck next time.."
        console.log("better luck next time..")
    }
}

form.addEventListener("submit", validateGuess);

