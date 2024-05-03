function ChessBoard(length, width) {
    this.length = length;
    this.width = width;
}
ChessBoard.prototype.drawBoard = function() {
    for (let i = 0; i < this.length; i++) {
        let row = "";
        for (let j = 0; j < this.width; j++) {
            if ((i + j) % 2 === 0) {
                row += "#";
            } else {
                row += "@";
            }
        }
        console.log(row);
    }
}
let board1 = new ChessBoard(8, 8);
board1.drawBoard();