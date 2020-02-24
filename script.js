
//variables
let word = [];
let letter = [];
let exists = letter.some(letter => word.includes(letter));





//Input entry player 1
function player1() {
   document.getElementById("form1").addEventListener('submit', (event) => {
   event.preventDefault();
   let word = document.getElementById("p1word").value.split("");
   console.log(word);
   document.getElementById("p1word").value = " ";  
});
}
player1();


//Input entry player 2
function player2() {
   document.getElementById("form2").addEventListener('submit', (event) => {
   event.preventDefault();
   let letter = document.getElementById("p2letter").value.split("");
   console.log(letter);
  document.getElementById("p2letter").value = " "; 
   let exists = letter.some(letter => word.includes(letter));  
   if (exists === true) {
  console.log("true");
} else { 
  console.log("false");
   }

// count
i = 0
while (i < 3) {
console.log( "guess #") + i ;
   i++;
}
});}









