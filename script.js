
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
function reset(){
        document.getElementById("p1word").value = "";  
      }
reset();

let word = [];
let letter = [];


//Input entry player 2
function player2(checkGuess) {
        document.getElementById("form2").addEventListener('submit', (event) => {
        event.preventDefault();
        let letter = document.getElementById("p2letter").value.split("");
        console.log(letter);
        document.getElementById("p2letter").value = " ";  
   } );}

player2();

function checkGuess(letter,word){

}

