onmessage = function(event) {
	let param = event.data;
	if (param == `request`) {
		let numTimer = setTimeout(function perMinute() {
			ct = new Date();
			let hour = Math.floor((ct % (60 * 60 * 60 * 1000)) / (60 * 60 * 1000));
			let min = Math.floor((ct % (60 * 60 * 1000)) / (60 * 1000));
			let sec = Math.floor((ct % (60 * 1000)) / 1000);
			console.log(`Clock`, `|`, hour, `:`, min, `:`, sec);
			postMessage([hour, min, sec]);
			numTimer = setTimeout(perMinute, 1000);
		}, 1000);
	}
};
