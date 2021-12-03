const fs = require('fs');

function getCountOfBits(inputArr, i) {
	let on = 0;
	let off = 0;
	inputArr.forEach((curr) => {
		if (curr[i] === '1') {
			on += 1;
		}

		else {
			off += 1;
		}
	});
	
	return {
		on,
		off
	}
}

fs.readFile('../3.1/input.txt', (err, data) => {
	if (err) throw err;

	let inputArr = data.toString().split('\n');
	let o2 = [...inputArr];
	let co2 = [...inputArr];
	for (let i = 0; i < 12; i++) {
		// get total on and off bits O(n)
		// Do a second round of checks, this time filtering based on eps or gam O(n)
		const { on, off } = getCountOfBits(co2, i); // Super lazy... Just replace the first arg with the arr to deal with

		if (co2.length === 1) { // Same here... TODO clean this up lmao
			break;
		}

		if (on > off) {
			o2 = o2.filter((curr) => curr[i] === '1');
			co2 = co2.filter((curr) => curr[i] === '0');
		} else if (on === off) {
			o2 = o2.filter((curr) => curr[i] === '1');
			co2 = co2.filter((curr) => curr[i] === '0');
		} else if (off > on) {
			o2 = o2.filter((curr) => curr[i] === '0');
			co2 = co2.filter((curr) => curr[i] === '1');
		}
	}
})
  
  