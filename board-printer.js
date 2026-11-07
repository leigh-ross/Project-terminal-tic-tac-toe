/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.

    print board as array of arrays
    will always be 3x3
    all rows will be empty with 5 spaces separated by |
    after each array is printed there should be a line of = signs equal to length of 17
    1. branch
    2. print array of arrays
    3. print aoa with items sep by |
    4. step 3 but with proper spacing
    5. step 4 with ==== signs after each array
    nb _ represent open spaces on the board but do not display
*/
export function printBoard(board) {
    for (const row of board){
        let paddedRow = row.map((item) => 
            item === '_' ? ' '.padStart(3).padEnd(5) : item.padStart(3).padEnd(5)
            )
        const rows = paddedRow.join('|')
        const breakLines = "=".repeat(17)
        console.log(`${rows}\n${breakLines}`)
    }
}

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {
    /*
    for (const row of board){
        return (check === "_") ? true : false 
    }
    */
}
