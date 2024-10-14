// Html objects
const container = document.querySelector("#container");
const reset = document.querySelector("#reset");

// Random rgb
function randomRGB() {
    return Math.floor(Math.random() * 256);
};

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
        newSquare.addEventListener("mouseover", () => {
            const currentOpacity = newSquare.style.opacity;
            // newSquare.style.background = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
            newSquare.style.background = "black";
            if (currentOpacity) {
                newSquare.style.opacity = Number(currentOpacity) + 0.1;

            } else {
                newSquare.style.opacity = 0.1;
            }
        })
    }
    container.appendChild(toAdd);
};

// Button listeners
reset.addEventListener("click", () => {
    let num = Math.floor(prompt("Enter number of squares for new grid from 1 to 100"));
    if (num > 0 && num < 101) {
        while (document.getElementsByClassName('square')[0]) {
            document.getElementsByClassName('square')[0].remove();
        }
        createGrid(num);

    }
    else {
        alert("You must enter a number from 1 to 100");
    };
});

createGrid(16);