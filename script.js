let wordSize = 20; //maximum word length
console.log(wordSize)

document.addEventListener('submit', (event) => {
    event.preventDefault();
// split the player1 text field value    
    let word = document.getElementById("p1word").value.split("");
    console.log(word);
// reset the word input field    
    document.getElementById("p1word").value = "";
})
// Split the text entry word into an array
//document.addEventListener('submit', (event) => {
//    event.preventDefault(); 
//let wordArray = word.split(" ");
//console.log(wordArray); 

 //})
// let wordSplit = word.split("");
// console.log (wordSplit);
// })
// Check the guess value
document.addEventListener('submit', (event) => {
    event.preventDefault();
    let guess = document.getElementById("p2letter").value;
    console.log(guess);
// Reset the guess letter field    
    document.getElementById("p2letter").value = "";

})

// for (let i=0; i < size; i++){
//     wordArray[i] = ('word' + (i+1));
 
