window.addEventListener("load", squares);

function squares() {
    const container = document.querySelector("#container");
    container.innerHTML = '';
    for(i=1; i<= 16; i++){
        const square = document.createElement("div");
        square.className = 'square';
        container.appendChild(square);
    }
}

const generate = document.querySelector(".generate");

generate.addEventListener('click', generateNew);

function generateNew() {
    let squareNumber = parseInt(prompt('Number of squares: '));

    container.innerHTML = '';
    for(i=1; i <= squareNumber; i++) {
        const square = document.createElement("div");
        square.className = 'square';
        container.appendChild(square);
    }
}