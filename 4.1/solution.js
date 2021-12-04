const fs = require('fs');

// structure boards as a n x n matrix of numbers
function transformBoard(boardString) {
	return boardString.split('\n').map((curr) => {
		return curr.split(' ').filter((item) => {
			return item !== ''
		}).map((filteredItem) => {
			return Number(filteredItem)
		});
	});
}

function hasBoardWon(board, row, col) {
	let totalXHorizontal = 0;
	let totalXVeritcal = 0;
	for (let i = 0; i < 5; i++) {
		if (board[row][i] === 'x') {
			totalXHorizontal += 1;
		}

		if (board[i][col] === 'x') {
			totalXVeritcal += 1;
		}
 	}

 	if (totalXHorizontal === 4 || totalXVeritcal === 4) {
 		return true;
 	}
}

// Marks the board with an 'x' and checks if a winner exists
function markBoard(board, nextNum) {
	let boardWon = false;
	let foundNum = false;
	const updatedBoard = [];
	for (let row = 0; row < 5; row++) {
		updatedBoard.push(board[row].reduce((acc, curr, col) => {
			if (curr === nextNum) {
				foundNum = true;

				// TODO check if we won to save time
				boardWon = hasBoardWon(board, row, col);
				return [
					...acc,
					'x'
				];
			} else {
				return [
					...acc,
					curr
				]
			}
		}, []));
	}

	if (boardWon) {
		console.log('WINNER', board, nextNum)
	}

	return { updatedBoard, hasWon: boardWon }
}

fs.readFile('input.txt', (err, data) => {
	if (err) throw err;

	const inputArr = data.toString().split('\n\n');

	const bingoNumbers = inputArr[0].split(',').map((bingoNum) => Number(bingoNum)); // Array<strings>

	const transformedBoards = [];

	// transform the board
	for (let i = 1; i < inputArr.length; i++) {
		transformedBoards.push(transformBoard(inputArr[i]));
	}

	for (let j = 0; j < bingoNumbers.length; j++) {
		for (let k = 0; k < transformedBoards.length; k++) {
			const { updatedBoard, hasWon } = markBoard(transformedBoards[k], bingoNumbers[j]);

			transformedBoards[k] = updatedBoard;
		}
	}

	console.log(transformedBoards);
});

// Must go fast:
/*

First winning board
WINNER [
  [ 60, 'x', 29, 49, 72 ],
  [ 89, 'x', 5, 79, 22 ],
  [ 58, 'x', 90, 76, 95 ],
  [ 93, 45, 14, 47, 37 ],
  [ 65, 'x', 7, 59, 62 ]
] 45

I did all this calculation by hand lmao

Last winning Board
WINNER [
  [ 'x', 'x', 'x', 46, 'x' ],
  [ 67, 'x', 'x', 'x', 'x' ],
  [ 'x', 94, 'x', 'x', 'x' ],
  [ 'x', 'x', 'x', 'x', 63 ],
  [ 'x', 'x', 86, 'x', 'x' ]
] 94

*/
  
  