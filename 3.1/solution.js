const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
	if (err) throw err;

	const inputArr = data.toString().split('\n');

	// 12 is total number of bits
	let gamma = '';
	let epsilon = '';
	let on = 0;
	let off = 0;
	for (let i = 0; i < 12; i++) {
		inputArr.forEach((curr) => {
			// console.log(curr[i])
			if (curr[i] === '1') {
				on += 1;
			}

			else {
				off += 1;
			}
		});
		gamma += on > off ? 1 : 0;
		epsilon += on > off ? 0 : 1;
		on = 0;
		off = 0;
	}


	const decGamma = parseInt(gamma, 2);
	const decEpsilon = parseInt(epsilon, 2);

	console.log(
		`Gamma: ${gamma}`,
		`Epsilon: ${epsilon}`,
		`Rating: ${parseInt(gamma, 2) * parseInt(epsilon, 2)}`
	)
})