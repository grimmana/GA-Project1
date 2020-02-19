let wordChoiceArrayX = [];
let letterChoiceArrayX = [];

// player 1
document.addEventListener('submit', (event) => {
    event.preventDefault();  
let word = document.getElementById("p1word").value.split("");
wordChoiceArrayX.push(word);
document.getElementById("p1word").value = "";
});
// player 2
document.addEventListener('submit', (event) => {
    event.preventDefault();
let guess = document.getElementById("p2letter").value;
letterChoiceArrayX.push(guess); 
document.getElementById("p2letter").value = "";
});