let wordArray = [];
let letterArray = [];
// player 1
document.addEventListener('submit', (event) => {
    event.preventDefault();  
let word = document.getElementById("p1word").value.split("");
wordArray.push(word);
//document.getElementById("p1word").value = "";  //clear field
//console.log(wordArray);
});
// player 2
document.addEventListener('submit', (event) => {
    event.preventDefault();
let letter = document.getElementById("p2letter").value;
letterArray.push(letter); 
//document.getElementById("p2letter").value = "";  //clear field
//console.log(letterArray);
//letterArray.shift();
});


