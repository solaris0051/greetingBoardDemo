onmessage = function(event) {
	let [hh, mm, ss] = event.data;
	let numTimer = setTimeout(function perMinute() {
		let curTime = new Date();
		let hour = Math.floor((curTime % (60 * 60 * 1000)) / (60 * 1000));
		let min = Math.floor((curTime % (60 * 60 * 1000)) / (60 * 1000));
		let sec = Math.floor((curTime % (60 * 1000)) / 1000);
		console.log(`Clock`, `|`, hour, `:`, min, `:`, sec);
		postMessage([hour, min, sec]);
		numTimer = setTimeout(perMinute, 1000)
	}, 1000);
}
