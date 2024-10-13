// Container
const container = document.querySelector("#container");

// Function for creating grid
function createGrid(squares) {
    const toAdd = document.createDocumentFragment();
    for (i = 0; i != squares * squares; i++) {
        const newSquare = document.createElement("div");
        newSquare.id = "square" + i;
        newSquare.className = "square";
        newSquare.style.height = 500/squares + "px";
        newSquare.style.width = 500/squares +"px";
        toAdd.appendChild(newSquare);
    }
    container.appendChild(toAdd);
}

createGrid(16);
console.log("Height, width: " + window.innerHeight/16, window.innerWidth/16)
// console.log(document.getElementById("square4").style.height);
console.log(document.getElementById("container").style.width)
// Height: 59.875 Width: 17.5625