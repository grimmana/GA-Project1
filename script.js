let wordChoiceArray = [];
let letterChoiceArray = [];

// player 1
document.addEventListener('submit', (event) => {
    event.preventDefault();  
let word = document.getElementById("p1word").value.split("");
wordChoiceArray.push(word);
//clear field // document.getElementById("p1word").value = "";
});
// player 2
document.addEventListener('submit', (event) => {
    event.preventDefault();
let guess = document.getElementById("p2letter").value;
letterChoiceArray.push(guess); 
//clear field // document.getElementById("p2letter").value = "";
});







