const boardElement = document.querySelector(".board");
const clearButtonElement = document.querySelector(".clear-button");
clearButtonElement.addEventListener("click", clearCells);

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
    });
}

function clearCells() {
    const boardCellElementList = document.querySelectorAll(".board-cell");
    boardCellElementList.forEach((cell) => cell.classList.remove("board-cell-filled"));
}

initBoard(16);