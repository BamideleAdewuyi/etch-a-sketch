// Html objects
const container = document.querySelector("#container");
const reset = document.querySelector("button");

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