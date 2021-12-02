const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
	if (err) throw err;

	let horizontal = 0;
	let depth = 0;
	data.toString().split('\n').forEach((curr) => {
		const command = curr.split(' ')[0];
		const inc = curr.split(' ')[1];
		if (command === 'forward') {
			horizontal += Number(inc);
		}

		else if (command === 'up') {
			depth -= Number(inc);
		}

		else if (command === 'down') {
			depth += Number(inc);
		}
	});

	console.log(`Final horizontal: ${horizontal}, Final Depth: ${depth}, Product: ${horizontal * depth}`);
})