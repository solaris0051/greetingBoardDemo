onmessage = function(event) {
	if (event.data == true) {
		let numTimer = setTimeout(function perQMin() {
			let cto = new Date();
			cto.getHours;
			postMessage(cto);
			numTimer = setTimeout(perQMin, 15 * 1000);
		}, 15 * 1000);
	}
}
