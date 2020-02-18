let wordSize = 20; //maximum word length
console.log(wordSize)
let word = document.getElementById('p1button').value;
console.log(document.getElementById('p1button').value);

document.addEventListener('submit', (event) => {
    event.preventDefault();
    let wordArray = word.split(""); 
    console.log(wordArray)
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
 
