
let guess1 = [];
let guess2 = [];
let guess3 = [];
let guess4 = [];
let guess5 = [];

let letter = [];
let word = [];

function player1() {
        document.getElementById("form1").addEventListener('submit', (event) => {
        event.preventDefault();
        let word = document.getElementById("p1word").value.split("");
        console.log(word);
        for(let i=0; i<=word.length; i++){
                word[i] + "<br>";
                console.log(word[i]);
       // document.getElementById("p1word").value = " ";  
    //alert("Word is" + " " + (word.length) + " " + "characters");
    }
});
}
player1();

function player2() {
        document.getElementById("form2").addEventListener('submit', (event) => {
        event.preventDefault();
        let letter = document.getElementById("p2letter").value.split("");
        console.log(letter);
        for(let i=0; i<=letter.length; i++){
                letter[i] + "<br>";
                console.log(letter[i]);
        //alert("Letter selected has" + " " + (letter.length) + " " + "characters");
      //  document.getElementById("p2word").value = " ";  
    }
});
}
player2();

// for(let i=0; i<=word.length; i++){
//         word[i] + "<br>";
// }


    



