const fs = require('fs');

fs.readFile('../1.1/input.txt', (err, data) => {
	if (err) throw err;

	const dataArr = data.toString().split('\n').map((curr) => Number(curr));

	let increaseCount = 0;
	let prevWindowSum = dataArr[0] + dataArr[1] + dataArr[2];
	for (let i = 1; i < dataArr.length; i += 1) {
		const windowSum = dataArr[i] + (dataArr[i + 1] ?? 0) + (dataArr[i + 2] ?? 0);

		if (windowSum > prevWindowSum) {
			increaseCount += 1;
		}

		prevWindowSum = windowSum;
	}

	console.log(increaseCount)
});

