let wordChoiceArrayX = [];
let letterChoiceArrayX = [];

// player 1
document.addEventListener('submit', (event) => {
    event.preventDefault();  
let word = document.getElementById("p1word").value.split("");
wordChoiceArrayX.push(word);
document.getElementById("p1word").value = "";
});
//////////////////////
// const gridArray =
//   [[`f`, `r`, `e`, `a`, `k`, `i`,`s`, `h`]]
   
let gridTemplate = ``
   
wordChoiceArrayX.forEach(function(p1word) {
	gridTemplate += `"${p1word}"`
})

while(gridTemplate.includes(`,`)) {
	gridTemplate = gridTemplate.replace(`,` , ` `)
}

document.querySelector(`p`).textContent = `\'This is the gridTemplate: ${gridTemplate}.\'`
document.querySelector(`p`).style.gridTemplateAreas = gridTemplate;

///////////////////////////////
// player 2
document.addEventListener('submit', (event) => {
    event.preventDefault();
let guess = document.getElementById("p2letter").value;
letterChoiceArrayX.push(guess); 
document.getElementById("p2letter").value = "";
});