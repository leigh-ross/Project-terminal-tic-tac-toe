/* 
status-checker.js — TEST CASES
==============================

SETUP NOTES
  - Only isGameOver is exported, so tests call isGameOver(board).
  - isGameOver uses console.log on win/tie → capture with jest.spyOn(console,'log').
  - Always mockRestore the spy after each test (beforeEach/afterEach).
  - Every board is 3x3; cells are 'X', 'O', or '_'.

------------------------------------------------------------
GROUP 1: X WINS
------------------------------------------------------------
CASE 1: X wins a ROW (top row) -> isGameOver true, logs "X has won"
  board:
    ['X','X','X']
    ['O','O','_']
    ['_','_','_']
  expect: true  (and console.log called with a message containing "X has won")

CASE 2: X wins a ROW (middle row) -> true
  board:
    ['O','_','_']
    ['X','X','X']
    ['O','_','_']
  expect: true

CASE 3: X wins a ROW (bottom row) -> true
  board:
    ['O','O','_']
    ['_','_','_']
    ['X','X','X']
  expect: true

CASE 4: X wins a COLUMN (left) -> true
  board:
    ['X','O','_']
    ['X','O','_']
    ['X','_','_']
  expect: true

CASE 5: X wins a COLUMN (middle) -> true
  board:
    ['O','X','_']
    ['O','X','_']
    ['_','X','_']
  expect: true

CASE 6: X wins a COLUMN (right) -> true
  board:
    ['O','_','X']
    ['O','_','X']
    ['_','_','X']
  expect: true

CASE 7: X wins the MAIN diagonal (top-left to bottom-right) -> true
  board:
    ['X','O','_']
    ['O','X','_']
    ['_','_','X']
  expect: true

CASE 8: X wins the ANTI diagonal (top-right to bottom-left) -> true
  board:
    ['_','O','X']
    ['O','X','_']
    ['X','_','_']
  expect: true

------------------------------------------------------------
GROUP 2: O WINS  (mirror of Group 1 — proves player param works)
------------------------------------------------------------
CASE 9: O wins a row -> true, logs "O has won"
  board:
    ['O','O','O']
    ['X','X','_']
    ['_','_','_']
  expect: true

CASE 10: O wins a column -> true
  board:
    ['O','X','_']
    ['O','X','_']
    ['O','_','_']
  expect: true

CASE 11: O wins a diagonal -> true
  board:
    ['O','X','_']
    ['X','O','_']
    ['_','_','O']
  expect: true

------------------------------------------------------------
GROUP 3: DRAWS
------------------------------------------------------------
CASE 12: Full board, no winner -> true, logs "It's a tie"
  board:
    ['X','O','X']
    ['X','O','O']
    ['O','X','X']
  expect: true  (message contains "tie")

  ⚠ CHECK THIS ONE BY HAND: confirm no row/col/diag is all-same.
    Row0: X O X (no)
    Row1: X O O (no)
    Row2: O X X (no)
    Col0: X X O (no)
    Col1: O O X (no)
    Col2: X O X (no)
    Diag: X O X (no)
    Anti: X O O (no)   -> true draw ✅

------------------------------------------------------------
GROUP 4: GAME IN PROGRESS (no win, moves left)
------------------------------------------------------------
CASE 13: One move made -> false
  board:
    ['X','_','_']
    ['_','_','_']
    ['_','_','_']
  expect: false

CASE 14: The example board from the comments -> false
  board:
    ['X','_','_']
    ['_','X','_']
    ['O','O','X']
  expect: false

CASE 15: Near-win but one cell short -> false
  (guards against off-by-one in row/col checks)
  board:
    ['X','X','_']
    ['O','O','_']
    ['_','_','_']
  expect: false

CASE 16: X has 3 in a column but NOT adjacent... still a win -> true
  board:
    ['X','O','O']
    ['X','X','_']
    ['X','O','_']
  expect: true   (left column is X,X,X)

------------------------------------------------------------
WHAT EACH GROUP GUARDS AGAINST
  Group 1 -> row/col/diag win detection for X (both diagonals,
             all three rows, all three columns)
  Group 2 -> that the player param is honoured (O not just X)
  Group 3 -> draw detection uses checkIfNoMovesLeft AND no win
  Group 4 -> no false positives; in-progress returns false
  Case 15 -> off-by-one: a row of 2 must NOT count as a win
  Case 16 -> win still detected even when other cells are messy

------------------------------------------------------------
EDGE CASES WORTH ADDING IF TIME ALLOWS
------------------------------------------------------------
  - X wins on the FINAL move (board otherwise full) -> true
  - Both players could "win"? (X win checked before O — isGameOver
    returns on X first; test that X takes priority)
  - Draw board where last move completed it -> true

============================================================
*/

/*
describe('X wins', () => {
  test('X wins the top row', () => {
    const board = [
      ['X', 'X', 'X'],
      ['O', 'O', '_'],
      ['_', '_', '_'],
    ];
    const result = isGameOver(board);
    expect(result).toBe(true);
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('X has won'));
  });
});
*/