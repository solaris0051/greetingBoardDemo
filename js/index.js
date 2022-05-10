//for defining the starting time to change expression of a screen for each time slot.
const dawn = new Date().setHours(4, 30, 0); //dwan
const f_half_morning = new Date().setHours(6, 0, 0); //f_half_ represents the first half.
const l_half_morning = new Date().setHours(9, 0, 0); //l_half_ represents the last half.
const f_half_daytime = new Date().setHours(12, 0, 0); //f_half_ represents the first half.
const l_half_daytime = new Date().setHours(15, 0, 0); //l_half_ represents the last half.
const evening = new Date().setHours(18, 0, 0); //evening
const nighttime = new Date().setHours(22, 0, 0, 0);

//a normal sequence shows up below.
const ct = new Date(); //ct: current time
ct.getHours();

// // schduler
//
// let numTimer = setTimeout(function perMinute() {
//
// 	numTimer = setTimeout(perMinute, 1000)
// }, 1000);
// }
//
//
// let mainTimeCheker = setTimeout(function perMInute() {
// 	//write stuff
// postMessage([hour, min, sec]);
// function (){
// 	const TimeKeeper = (hh, mm, ss) => {
// 		if (window.Worker) {
// 			const TimeSeeker = new Worker('./Clock.js');
// 			TimeSeeker.postMessage([hh, mm, ss]);
// 			TimeSeeker.onmessage = function(event) {
// 				scrennChanger(event.data);
// 			}
// 	}
// }


//for letting the backgroundImages and the greeting words shown up for each time slot, accordingly.
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

//for storing visited times on this site in their own localStorage embedded in their own browsers.
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
});
btn2.addEventListener("click", () => {
	writeText.textContent = "Good morning.";
	document.body.style.backgroundImage = "url('./img/f_half_morning.webp')";
});
btn3.addEventListener("click", () => {
	writeText.textContent = "Wish you a good day.";
	document.body.style.backgroundImage = "url('./img/l_half_morning.webp')";
});
btn4.addEventListener("click", () => {
	writeText.textContent = "Good afternoon.";
	document.body.style.backgroundImage = "url('./img/f_half_daytime.webp')";
});
btn5.addEventListener("click", () => {
	writeText.textContent = "Wish you a blissful afternoon.";
	document.body.style.backgroundImage = "url('./img/l_half_daytime.webp')";
});
btn6.addEventListener("click", () => {
	writeText.textContent = "Good evening.";
	document.body.style.backgroundImage = "url('./img/evening.webp')";
});
btn7.addEventListener("click", () => {
	writeText.textContent = "Wish you a relaxing time.";
	document.body.style.backgroundImage = "url('./img/nighttime.webp')";
});

// schduler();
screenChanger();
counter();
