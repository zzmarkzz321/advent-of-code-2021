const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
	const inputArr = data.toString().split('\n');

	let lastRecord = inputArr[0];
	let totalIncrease = 0;
	for (let i = 1; i <= inputArr.length; i++) {
		if (Number(inputArr[i]) > Number(lastRecord)) {
			totalIncrease += 1;
		}
		lastRecord = inputArr[i];
	}

	console.log('totalIncrease:', totalIncrease);
})