onmessage = function(event) {
	console.log(w_test1);
	let param = event.data;
	if (param == `request`) {
		let numTimer = setTimeout(function perMinute() {
			let w_ct = new Date();
			let hour = Math.floor((w_ct % (60 * 60 * 60 * 1000)) / (60 * 60 * 1000));
			let min = Math.floor((w_ct % (60 * 60 * 1000)) / (60 * 1000));
			let sec = Math.floor((w_ct % (60 * 1000)) / 1000);
			console.log(`Clock`, `|`, hour, `:`, min, `:`, sec);
			postMessage([hour, min, sec]);
			numTimer = setTimeout(perMinute, 1000);
		}, 1000);
	}
};
