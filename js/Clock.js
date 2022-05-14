onmessage = function(event) {
	if (event.data == 1) {
		let numTimer = setTimeout(function perSecond() {
			let w_ct = new Date();
			let hour = Math.floor((w_ct % (60 * 60 * 60 * 1000)) / (60 * 60 * 1000));
			let min = Math.floor((w_ct % (60 * 60 * 1000)) / (60 * 1000));
			let sec = Math.floor((w_ct % (60 * 1000)) / 1000);
			console.log(`Clock`, `|`, hour, `:`, min, `:`, sec);
			postMessage([hour, min, sec]);
			numTimer = setTimeout(perSecond, 1000);
		}, 1000);
	}
};
