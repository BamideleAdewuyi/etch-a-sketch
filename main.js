// Container
const container = document.querySelector("#container");

// Function for creating grid
function createGrid(squares) {
    const toAdd = document.createDocumentFragment();
    for (i = 0; i != squares; i++) {
        const newSquare = document.createElement("div");
        newSquare.id = "square" + i;
        newSquare.className = "square";
        newSquare.style.height = window.innerHeight/squares +"px";
        newSquare.style.width = window.innerWidth/squares + "px";
        toAdd.appendChild(newSquare);
    }
    container.appendChild(toAdd);
    
}

createGrid(16);
console.log("Height, width: " + window.innerHeight/16, window.innerWidth/16)
console.log(document.getElementById("square4").style.height)
// Height: 59.875 Width: 17.5625