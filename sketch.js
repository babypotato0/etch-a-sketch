window.addEventListener("load", squares);

function squares() {
    const container = document.querySelector("#container");
    container.innerHTML = '';
    createSquares(16);
}

const generate = document.querySelector(".generate");

generate.addEventListener('click', generateNew);

function generateNew() {
    let squareNumber = parseInt(prompt('Number of squares: '));

    if(squareNumber <= 100) {
        container.innerHTML = '';
        createSquares(squareNumber);
    } else if(squareNumber > 100) {
        alert('Number is too big! Cannot depass 100.');
    }
}

function createSquares(squareNumber) {
    const container = document.querySelector("#container");
    const containerSize = 520;
    const squareSize = containerSize / squareNumber;

    for(let i = 1; i <= squareNumber; i++) {
        for(let j = 1; j <= squareNumber; j++) {
            const square = document.createElement("div");
            square.className = "square";
            square.style.width = squareSize + 'px';
            square.style.height = squareSize + 'px';

            square.addEventListener('click', changeColor);

            container.appendChild(square);
        }
    }
}

function changeColor(event) {
    const square = event.target;
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${red}, ${green}, ${blue})`;

    square.style.backgroundColor = randomColor;
}