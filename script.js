let wordSize = 20; //maximum word length 
let wordChoiceArrayX = [];
let letterChoiceArrayX = [];

// player 1
document.addEventListener('submit', (event) => {
    event.preventDefault();  
// split the text field value    
let word = document.getElementById("p1word").value.split("");
// assign the content to the new array
wordChoiceArrayX.push(word);
console.log(wordChoiceArrayX);
//reset the word input field    
document.getElementById("p1word").value = "";
})
// player 2
document.addEventListener('submit', (event) => {
    event.preventDefault();
// get the text field value
let guess = document.getElementById("p2letter").value;
// assign the content to a new array
letterChoiceArrayX.push(guess);
console.log(letterChoiceArrayX);
// reset the guess letter field    
document.getElementById("p2letter").value = "";
})



// check the guess against the wordChoiceArray  
// let wordChoiceArray = document.getElementById("p1word").value.split("");
//console.log(letterChoiceArray);
//console.log(wordChoiceArray);

// run a compare

// wordChoiceArray.includes(letterChoiceArray);
// return true; return false;


//function findInArray(letterChoiceArray) {
//for (let i=0; i < size; i++){
//letterChoiceArray[i] = ('wordChoiceArray' + (i+1));
//return true || false
//}}})