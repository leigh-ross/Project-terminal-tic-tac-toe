import {
  jest,
  describe,
  test,
  expect,
  beforeEach,
  afterEach,
} from "@jest/globals";
import {isGameOver} from "../status-checker.js"

beforeEach(() => {
  jest.spyOn(console, "log").mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});

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

  test("X wins the middle row", () => {
    const board = [
      ["_", "O", "O"],
      ["X", "X", "X"],
      ["_", "_", "_"],
    ];
    const result = isGameOver(board);
    expect(result).toBe(true);
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("X has won"),
    );
  });

  test("X wins the last row", () => {
    const board = [
      ["_", "_", "_"],
      ["O", "O", "_"],
      ["X", "X", "X"],
    ];
    const result = isGameOver(board);
    expect(result).toBe(true);
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("X has won"),
    );
  });

  test("X wins the first column", () => {
    const board = [
      ['X','O','_'],
      ['X','O','_'],
      ['X','_','_'],
    ];
    const result = isGameOver(board);
    expect(result).toBe(true);
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("X has won"),
    );
  });

  test("X wins the second column", () => {
    const board = [
      ["_", "X", "O"],
      ["_", "X", "O"],
      ["_", "X", "_"],
    ];
    const result = isGameOver(board);
    expect(result).toBe(true);
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("X has won"),
    );
  });

  test("X wins the last last column", () => {
    const board = [
      ["_", "O", "X"],
      ["_", "O", "X"],
      ["_", "_", "X"],
    ];
    const result = isGameOver(board);
    expect(result).toBe(true);
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("X has won"),
    );
  });

  test("X wins the main diagonal", () => {
    const board = [
      ["X", "O", "O"],
      ["_", "X", "_"],
      ["_", "_", "X"],
    ];
    const result = isGameOver(board);
    expect(result).toBe(true);
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("X has won"),
    );
  });

  test("X wins the anti-diagonal", () => {
    const board = [
      ["O", "O", "X"],
      ["_", "X", "_"],
      ["X", "_", "_"],
    ];
    const result = isGameOver(board);
    expect(result).toBe(true);
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("X has won"),
    );
  });
});

describe("O wins", () => {
  test("O wins the top row", () => {
    const board = [
      ["O", "O", "O"],
      ["X", "X", "_"],
      ["_", "_", "_"],
    ];
    const result = isGameOver(board);
    expect(result).toBe(true);
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("O has won"),
    );
  });

  test("O wins the first column", () => {
    const board = [
      ["O", "X", "_"],
      ["O", "X", "_"],
      ["O", "_", "_"],
    ];
    const result = isGameOver(board);
    expect(result).toBe(true);
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("O has won"),
    );
  });

  test("O wins the diagonal", () => {
    const board = [
      ["O", "X", "X"],
      ["_", "O", "_"],
      ["_", "_", "O"],
    ];
    const result = isGameOver(board);
    expect(result).toBe(true);
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("O has won"),
    );
  });
});

describe("Game in progress", () => {
  test("One move made", () => {
    const board = [
      ["X", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ];
    const result = isGameOver(board);
    expect(result).toBe(false);
  });

  test("One move away from win", () => {
    const board = [
      ['O','_','O'],
      ['X','X','_'],
      ['X','_','_'],
    ];
    const result = isGameOver(board);
    expect(result).toBe(false);
  });

  test("Near win", () => {
    const board = [
      ["X", "_", "O"],
      ["X", "_", "O"],
      ["_", "_", "_"],
    ];
    const result = isGameOver(board);
    expect(result).toBe(false);
  });
});

describe("Draw game", () => {
  test("Full board and no winner is a draw", () => {
    const board = [
      ["X", "O", "X"],
      ["X", "O", "O"],
      ["O", "X", "X"],
    ];
    const result = isGameOver(board);
    expect(result).toBe(true);
     expect(console.log).toHaveBeenCalledWith(
       expect.stringContaining("tie"),
     );
  })
})