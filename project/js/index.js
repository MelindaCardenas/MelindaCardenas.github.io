//type="module"
//import randomWord as myModule from './randomWord.js';
//const {getRandomWord} = require("./randomWord")
import { getRandomWord } from "./randomWord.js";
let randomWord = getRandomWord()
const body = document.body
console.log(randomWord)
console.log(body)
/*
let randWordElement = document.createElement('h1')
let randWordText = document.createTextNode('testing')
randWordElement.style.backgroundColor = "#endregion"
randWordElement.append(randWordText)

body.appendChild(randWordElement)*/