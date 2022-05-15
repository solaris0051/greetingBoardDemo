onmessage = function(event) {
	if (event.data == true) {
		let numTimer = setTimeout(function perQMin() {
			let w_ct = new Date();
			w_ct.getHours;
			console.log(`viaClock.js: before clock postMessage: ${w_ct}`);
			postMessage(w_ct);
			console.log(`viaClock.js: after clock postMessage: ${w_ct}`);
			numTimer = setTimeout(perQMin, 15 * 1000);
		}, 15 * 1000);
	}
}
