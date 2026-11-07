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

test("given an example board with no open spaces (win), should return true", () => {
  const board = [
    ['X','X','X'],
    ['X','O','O'],
    ['O','O','X']];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});

test("Full board where X and O are in odd/irregular spots should return true", () => {
  const board = [
    ['O','X','O'],
    ['X','O','X'],
    ['X','O','X']];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});

test("Open space appears only in the last row, returns false", () => {
  const board = [
    ['X','X','X'],
    ['X','O','O'],
    ['_','O','X']];
  expect(checkIfNoMovesLeft(board)).toBe(false);
});

test("Open space appears only in the last cell, returns false", () => {
  const board = [
    ['X','X','X'],
    ['X','O','O'],
    ['O','O','_']];
  expect(checkIfNoMovesLeft(board)).toBe(false);
});