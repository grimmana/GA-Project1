
//Input entry player 1

function player1(reset) {
        document.getElementById("form1").addEventListener('submit', (event) => {
        event.preventDefault();
        let word = document.getElementById("p1word").value.split("");
        console.log(word);
        alert("Word is" + " " + (word.length) + " " + "characters");
        // for(let i=0; i<=word.length; i++){
        //         word[i] + "<br>";
        //         console.log(word[i]);
   //    document.getElementById("p1word").value = " ";  
//alert("Word is" + " " + (wordS.length) + " " + "characters");
    //}
});
}
player1();
function reset(){
        document.getElementById("p1word").value = "";  
      }
reset();



let word = [];
console
let letter = [];


//        for(let i=0; i<=word.length; i++){
//                 word[i] + "<br>";
//                 console.log(word[i]);
//               }
//Search box input


//Input entry player 2
function player2() {
        document.getElementById("form2").addEventListener('submit', (event) => {
        event.preventDefault();
        let letter = document.getElementById("p2letter").value.split("");
        console.log(letter);
        // for(let i=0; i<=letter.length; i++){
        //         letter[i] + "<br>";
        //         console.log(letter[i]);
        //alert("Letter selected has" + " " + (letter.length) + " " + "characters");
      //  document.getElementById("p2word").value = " ";  
   // }


//
//https://www.the-art-of-web.com/javascript/validate/
   // count tries

   // check guess right or wrong

   // try again





   
});
}
player2();


// let guess1 = [];
// let guess2 = [];
// let guess3 = [];
// let guess4 = [];
// let guess5 = [];

// let letter = [];


    
// function checkGuess(){
// for(let i=0; i<=word.length; i++){
//         word[i] + "<br>";
//         console.log(word[i]);
//         for(let i=0; i<=letter.length; i++){
//                 letter[i] + "<br>";
//                 console.log(letter[i]);
//         }}}

// function reset(){
//   document.getElementById("p2word").value = " ";  
// }

