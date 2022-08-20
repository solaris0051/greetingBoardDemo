onmessage = function(event) {
	if (event.data === `move`) {
		let timerID0 = setTimeout(function fifteenseconds() {
			let cto = new Date();
			cto.getHours;
			postMessage(cto);
			timerID0 = setTimeout(fifteenseconds, 15 * 1000);
		}, 15 * 1000);
	}
}
