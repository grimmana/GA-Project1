
//variables
let word = [];
let letter = [];
let exists = letter.some(letter => word.includes(letter));
let score = 0
let failure = 0

//Input entry player 1
function player1() {
   document.getElementById("form1").addEventListener('submit', (event) => {
   event.preventDefault();
   word = document.getElementById("p1word").value.split("");
   console.log(word);
   document.getElementById("p1word").value =" ";  
});
}
player1();

document.getElementById("form2").addEventListener('submit',
(event) => player2(event));
 

//Input entry player 2
function player2(event) {
   event.preventDefault();
   letter = document.getElementById("p2letter").value;
  document.getElementById("p2letter").value =""; 
   let exists = word.includes(letter); 
   console.log(exists); 
   console.log(score);
   console.log(letter);
   if (exists === true) {
score++
} else { 
failure++
   }
if(score >= word.length) alert("YOU WON")
if(failure >= 6) alert("YOU LOST, sorry")
;}









