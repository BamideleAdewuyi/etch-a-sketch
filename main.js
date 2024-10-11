// Container
const container = document.querySelector("#container");

// Function for creating grid
function createGrid(squares) {
    const toAdd = document.createDocumentFragment();
    for (i = 0; i != squares; i++) {
        const newSquare = document.createElement("div");
        newSquare.id = "square" + i;
        newSquare.className = "square";
        toAdd.appendChild(newSquare);
    }
    container.appendChild(toAdd);
    
}

createGrid(16);