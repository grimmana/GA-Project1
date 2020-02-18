let wordSize = 20; //maximum word length
console.log(wordSize)
let word = document.getElementById("p1word").value.split("");
console.log(document.getElementById("p1word").value.split(""));

document.addEventListener('submit', (event) => {
    event.preventDefault();
    let word = document.getElementById("p1word").value.split("");
    console.log(document.getElementById("p1word").value.split(""));
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
//let letter = document.querySelector("p2letter");
// for (let i=0; i < size; i++){
//     wordArray[i] = ('word' + (i+1));
 
