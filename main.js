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
};

// Button listener
reset.addEventListener("click", () => {
    let num = prompt("Enter number of squares for new grid between 1 and 100");
    while (document.getElementsByClassName('square')[0]) {
        document.getElementsByClassName('square')[0].remove();
    }
    createGrid(num);
});


// restart.addEventListener("click", () => {
//     humanScore = 0;
//     computerScore = 0;
//     scores.textContent = "Player Score: 0\nComputer Score: 0";
//     // Make buttons reappear
//     buttons.forEach((button) => {
//         document.getElementById(button.id).style.visibility = "visible";
//     })
//     results.textContent = "Results of each round will appear here";
//     restart.remove();
// });




createGrid(16);