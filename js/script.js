const board = document.querySelector('#board');
const colors = ['#FF0000', '#FF8000', '#FFFF00', '#80FF00', '#00F000', '00FFFF', '#0080FF', '#8000FF', '#8000FF', '#FF00FF', '#FF0080'];
const squaresNumber = 3053;

for (let i = 0; i < squaresNumber; i++) {
    const squares = document.createElement('div');
    squares.classList.add('square');

    squares.addEventListener('mouseover', () => setColor(squares));
    squares.addEventListener('mouseover', () => removeColor(squares));

    board.append(squares);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

