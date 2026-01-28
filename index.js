const boardElement = document.querySelector(".board");

const clearButtonElement = document.querySelector(".clear-button");
clearButtonElement.addEventListener("click", clearCells);

const MIN_BOARD_SIZE = 8;
const MAX_BOARD_SIZE = 100;

const resizeButtonElement = document.querySelector(".resize-button");
resizeButtonElement.addEventListener("click", resizeBoard);

function initBoard(size) {
    let cellSize = boardElement.clientWidth / size;
    console.log(cellSize);
    for (let i = 0; i < size; i++) {
        const boardRowElememt = document.createElement("div");
        
        boardRowElememt.classList.add("board-row");
        boardRowElememt.setAttribute("style", `width: 100%; height: ${cellSize}`);
        
        boardElement.appendChild(boardRowElememt);
        for (let j = 0; j < size; j++) {
            const boardCellElement = document.createElement("div");
            
            boardCellElement.classList.add("board-cell");
            boardCellElement.setAttribute("style", `width: ${cellSize}; height: ${cellSize}`);
            
            addHoverEventToCell(boardCellElement);
            
            boardRowElememt.appendChild(boardCellElement);
        }
    }
}

function addHoverEventToCell(cell) {
    cell.addEventListener("mouseenter", (e) => {
        cell.classList.add("board-cell-filled");

        let newCellOpacity = Math.min(Math.round((Number(cell.style.opacity) + 0.1) * 10) / 10, 1); 
        console.log(newCellOpacity);
        cell.style.opacity = newCellOpacity;
    });
}

function clearCells() {
    const boardCellElementList = document.querySelectorAll(".board-cell");
    boardCellElementList.forEach((cell) => cell.classList.remove("board-cell-filled"));
}

function resizeBoard() {
    let newSize = 0;
    
    while (newSize < MIN_BOARD_SIZE || newSize > MAX_BOARD_SIZE) {
        newSize = prompt(`Enter new board size (${MIN_BOARD_SIZE}-${MAX_BOARD_SIZE}): `);    
    }

    boardElement.textContent = "";
    initBoard(newSize);
}

initBoard(16);