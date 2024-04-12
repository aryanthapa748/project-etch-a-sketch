const container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
    const divs = document.createElement("div");
    divs.classList.add("square");
    divs.addEventListener("mouseover", function(){
        divs.style.backgroundColor = "yellow";
    });
    container.appendChild(divs);
}

function newGrid(numberOfGrids){
    container.textContent = "";

    for (let i = 0; i < numberOfGrids * numberOfGrids; i++) {
        const divs = document.createElement("div");
        divs.classList.add("square");
        divs.style.flex = `0 1 calc(100% / ${numberOfGrids})`;
        divs.addEventListener("mouseover", function(){
            divs.style.backgroundColor = "yellow";
        });
        container.appendChild(divs);
    }
}

const button = document.querySelector(".button");
button.addEventListener("click", ()=>{
   let inputValue = prompt("Enter the number of grids you would like to work with :)", "");
   if (isNaN(inputValue) || inputValue == "") {
    alert("Enter a valid number !!");
} else if (inputValue == null){
    alert("Don't you wanna Sketch ? :(")
} else if (parseInt(inputValue) <= 0){
    alert("Sorry the grid won't create below 1 :( ")
} else if (parseInt(inputValue) >= 100 ) {
    alert("Sorry enter the number below 100 only :) ");
} else {
    alert("Let's create a sketch with " + inputValue + " grids.");
    newGrid(parseInt(inputValue));  // calling new function newGrid() after user clicks ok;
}
});



