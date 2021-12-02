const fs = require('fs');

fs.readFile('../2.1/input.txt', (err, data) => {
	if (err) throw err;

	let horizontal = 0;
	let depth = 0;
	let aim = 0;
	data.toString().split('\n').forEach((curr) => {
		const command = curr.split(' ')[0];
		const inc = curr.split(' ')[1];
		if (command === 'forward') {
			horizontal += Number(inc);
			depth += (Number(inc) * aim)
		}

		else if (command === 'up') {
			aim -= Number(inc);
		}

		else if (command === 'down') {
			aim += Number(inc);
		}
	});

	console.log(`Final horizontal: ${horizontal}, Final Depth: ${depth}, Product: ${horizontal * depth}`);
})