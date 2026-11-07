import { checkIfNoMovesLeft } from "../board-printer";

test("given an empty board, should return false", () => {
  const board = [
    ['_','_','_'],
    ['_','_','_'],
    ['_','_','_']];
  expect(checkIfNoMovesLeft(board)).toBe(false);
});

test("given an example board, should return false", () => {
  const board = [
    ['X','_','_'],
    ['_','X','_'],
    ['O','O','X']];
  expect(checkIfNoMovesLeft(board)).toBe(false);
});

test("given an example board with only one space open, should return false", () => {
  const board = [
    ['X','O','X'],
    ['X','O','O'],
    ['O','X','_']];
  expect(checkIfNoMovesLeft(board)).toBe(false);
});

test("given an example board with no open spaces (draw), should return true", () => {
  const board = [
    ['X','O','X'],
    ['X','O','O'],
    ['O','X','X']];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});
/*
checkIfNoMovesLeft(board) — TEST CASES
=====================================

PURPOSE
  Return true  -> there are NO '_' left anywhere on the board
  Return false -> there is at least one '_' left

INPUT
  Always a 3x3 array of arrays.
  Cells are 'X', 'O', or '_' ('_' = empty).

------------------------------------------------------------
CASE 1: Completely empty board -> false
  (still has 9 moves available)
  board:
    ['_','_','_']
    ['_','_','_']
    ['_','_','_']
  expect: false

------------------------------------------------------------
CASE 2: Example board from comments -> false
  (still has empty cells)
  board:
    ['X','_','_']
    ['_','X','_']
    ['O','O','X']
  expect: false

------------------------------------------------------------
CASE 3: Exactly ONE '_' remaining -> false
  (the single most important edge case; off-by-one bugs live here)
  board:
    ['X','O','X']
    ['X','O','O']
    ['O','X','_']
  expect: false

------------------------------------------------------------
CASE 4: Fully filled board, no winner (a DRAW) -> true
  (full board, mixed X/O, no blanks at all)
  board:
    ['X','O','X']
    ['X','O','O']
    ['O','X','X']
  expect: true
  NOTE: function does NOT care about who won — only whether '_' exists.

------------------------------------------------------------
CASE 5: Fully filled board WITH a winner (e.g. X wins) -> true
  (this tests that a winning line does not affect the result)
  board:
    ['X','X','X']
    ['O','O','_']   <-- replace this '_' before using, see below
  Wait: a winning board must still be FULL to return true.
  Correct full winning board:
    ['X','X','X']
    ['O','O','X']
    ['O','X','O']
  expect: true
  NOTE: this is the case people forget — a win is still "no moves left".

------------------------------------------------------------
CASE 6: Full board where X and O are in odd/irregular spots -> true
  (guards against a hard-coded "known good board" mistake)
  board:
    ['O','X','O']
    ['X','O','X']
    ['X','O','X']
  expect: true

------------------------------------------------------------
CASE 7 (optional / robustness): '_' appears only in the LAST row -> false
  board:
    ['X','O','X']
    ['O','X','O']
    ['_','X','O']
  expect: false
  NOTE: catches a bug where the loop skips the final row or stops early.

------------------------------------------------------------
CASE 8 (optional / robustness): '_' appears only in the LAST cell -> false
  board:
    ['X','O','X']
    ['O','X','O']
    ['X','O','_']
  expect: false
  NOTE: catches a loop that misses the very last element.

*/