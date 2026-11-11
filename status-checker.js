import { checkIfNoMovesLeft } from './board-printer.js';

/*
  Given 3 parameters:
    - a tic-tac-toe board (array of arrays)
    - a player ('X' or 'O')
    - a row index number (0, 1 or 2)
  Return true if the player has made a move in all 3 squares in the row
  Otherwise, return false
*/
function checkRow(board, player, rowNumber) {
  const row = board[rowNumber];
  return row[0] === player && row[1] === player && row[2] === player;
}

/*
  Given 3 parameters:
    - a tic-tac-toe board (array of arrays)
    - a player ('X' or 'O')
    - a column index number (0, 1 or 2)
  Return true if the player has made a move in all 3 squares in the column
  Otherwise, return false
*/
function checkColumn(board, player, columnNumber) {
  return (
    board[0][columnNumber] === player &&
    board[1][columnNumber] === player &&
    board[2][columnNumber] === player
  );
}

/*
  Given 2 parameters:
    - a tic-tac-toe board (array of arrays)
    - a player ('X' or 'O')
  Return true if the player has made a move in 3 diagonal squares
  Otherwise, return false
*/
function checkDiagonal(board, player) {
  // Check main diagonal (top-left to bottom-right)
  const leftToRight =
    board[0][0] === player && board[1][1] === player && board[2][2] === player;

  // Check anti-diagonal (top-right to bottom-left)
  const rightToLeft =
    board[0][2] === player && board[1][1] === player && board[2][0] === player;

  return leftToRight || rightToLeft;
}