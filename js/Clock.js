onmessage = function(event) {
	if (event.data == true) {
		let numTimer = setTimeout(function perQMin() {
			let cto = new Date();
			cto.getHours;
			console.log(`viaClock.js: before clock postMessage: ${cto}`);
			postMessage(cto);
			console.log(`viaClock.js: after clock postMessage: ${cto}`);
			numTimer = setTimeout(perQMin, 15 * 1000);
		}, 15 * 1000);
	}
}
