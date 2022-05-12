//defining the starting time to change expression of a screen for each time slot.
const dawn = new Date().setHours(4, 30, 0); //dawn.
const f_half_morning = new Date().setHours(6, 0, 0); //f_half_ represents the first half.
const l_half_morning = new Date().setHours(9, 0, 0); //l_half_ represents the last half.
const f_half_daytime = new Date().setHours(12, 0, 0); //f_half_ represents the first half.
const l_half_daytime = new Date().setHours(15, 0, 0); //l_half_ represents the last half.
const evening = new Date().setHours(18, 0, 0); //evening.
const nighttime = new Date().setHours(22, 0, 0); //nighttime.


//todo: let node attached via nvm add instead of atom-live-server-plus

//a normal sequence shows up below.

//add_1. yielding a worker named TimeSeeker whose child is named Clock.js.
const workerYielder = () => {
	if (window.Worker) {
		console.log(`WY_test0`);
		//const TimeSeeker = new Worker('.//Clock.js');
		const TimeSeeker = new Worker('./js/Clock.js');
		console.log(`WY_test1`);
	} else {
		document.getElementById('no_worker').removeAttribute('hidden');
		document.getElementById('no_worker').textContent = `I'm afraid to say no worker is embedded in this browser, meaning human intervention is required.`
	}
};

//add_2. mainTimeKeeper that's applied recursive setTimeout to.
let mainTimeKeeper = setTimeout(function director() {
	console.log(`MTK_test0`);
	postMessage(`request`);
	console.log(`MTK_test1`);
	onmessage = function(event) {
		mainTimeKeeper = setTimeout(director, 1000);
	};
	console.log(`MTK_test2`);
}, 1000);

//letting the backgroundImages and the greeting words shown up for each time slot, accordingly.
const ct = new Date();
ct.getHours();
const writeText = document.getElementById("greeting_words");
const screenChanger = function() {
	if (ct >= dawn && ct < f_half_morning) {
		writeText.textContent = "Morning, dawn changes everything.";
		document.body.style.backgroundImage = "url('./img/dawn.webp')";
	} else {
		if (ct >= f_half_morning && ct < l_half_morning) {
			writeText.textContent = "Good morning.";
			document.body.style.backgroundImage = "url('./img/f_half_morning.webp')";
		} else {
			if (ct >= l_half_morning && ct < f_half_daytime) {
				writeText.textContent = "Wish you a good day.";
				document.body.style.backgroundImage = "url('./img/l_half_morning.webp')";
			} else {
				if (ct >= f_half_daytime && ct < l_half_daytime) {
					writeText.textContent = "Good afternoon.";
					document.body.style.backgroundImage = "url('./img/f_half_daytime.webp')";
				} else {
					if (ct >= l_half_daytime && ct < evening) {
						writeText.textContent = "Wish you a blissful afternoon.";
						document.body.style.backgroundImage = "url('./img/l_half_daytime.webp')";
					} else {
						if (ct >= evening && ct < nighttime) {
							writeText.textContent = "Good evening.";
							document.body.style.backgroundImage = "url('./img/evening.webp')";
						} else {
							writeText.textContent = "Wish you a relaxing time.";
							document.body.style.backgroundImage = "url('./img/nighttime.webp')";
						}
					}
				}
			}
		}
	}
};

//storing visited times on this site in their own localStorage embedded in their own browsers.
const counter = function() {
	if (!localStorage["times"]) {
		localStorage["times"] = 0;
	}
	let cnt = localStorage["times"];
	document.getElementById("cntr_text").innerHTML =
		"Thank you for the " + ++localStorage["times"] + " times visiting.";
};

//added following functions for those who can't wait for each actual time slot.
const btn1 = document.querySelector("#dawn");
const btn2 = document.querySelector("#f_half_morning");
const btn3 = document.querySelector("#l_half_morning");
const btn4 = document.querySelector("#f_half_daytime");
const btn5 = document.querySelector("#l_half_daytime");
const btn6 = document.querySelector("#evening");
const btn7 = document.querySelector("#nighttime");
btn1.addEventListener("click", () => {
	writeText.textContent = "Morning, dawn changes everything.";
	document.body.style.backgroundImage = "url('./img/dawn.webp')";
	counter();
});
btn2.addEventListener("click", () => {
	writeText.textContent = "Good morning.";
	document.body.style.backgroundImage = "url('./img/f_half_morning.webp')";
	counter();
});
btn3.addEventListener("click", () => {
	writeText.textContent = "Wish you a good day.";
	document.body.style.backgroundImage = "url('./img/l_half_morning.webp')";
	counter();
});
btn4.addEventListener("click", () => {
	writeText.textContent = "Good afternoon.";
	document.body.style.backgroundImage = "url('./img/f_half_daytime.webp')";
	counter();
});
btn5.addEventListener("click", () => {
	writeText.textContent = "Wish you a blissful afternoon.";
	document.body.style.backgroundImage = "url('./img/l_half_daytime.webp')";
	counter();
});
btn6.addEventListener("click", () => {
	writeText.textContent = "Good evening.";
	document.body.style.backgroundImage = "url('./img/evening.webp')";
	counter();
});
btn7.addEventListener("click", () => {
	writeText.textContent = "Wish you a relaxing time.";
	document.body.style.backgroundImage = "url('./img/nighttime.webp')";
	counter();
});

workerYielder();
screenChanger();
counter();
