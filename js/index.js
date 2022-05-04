// sets the starting time to change expression for each slot.
const dawn = new Date();
dawn.setHours(4, 30, 0, 0);
const f_half_morning = new Date(); //f_half_ represents the first half.
f_half_morning.setHours(6, 0, 0, 0);
const l_half_morning = new Date(); //l_half_ represents the last half.
l_half_morning.setHours(9, 0, 0, 0);
const f_half_daytime = new Date(); //f_half_ represents the first half.
f_half_daytime.setHours(12, 0, 0, 0);
const l_half_daytime = new Date(); //l_half_ represents the last half.
l_half_daytime.setHours(15, 0, 0, 0);
const evening = new Date();
evening.setHours(18, 0, 0, 0);
const nighttime = new Date();
nighttime.setHours(22, 0, 0, 0);
const ct = new Date(); //ct: current time
ct.getHours();

//a normal sequence shows up below.
const writeText = document.getElementById("greeting_words");
const changeText = function() {
	if (ct >= dawn && ct < f_half_morning) {
		writeText.textContent = "Morning, dawn changes everything.";
	} else {
		if (ct >= f_half_morning && ct < l_half_morning) {
			writeText.textContent = "Good morning.";
		} else {
			if (ct >= l_half_morning && ct < f_half_daytime) {
				writeText.textContent = "Wish you a good day.";
			} else {
				if (ct >= f_half_daytime && ct < f_half_daytime) {
					writeText.textContent = "Good afternoon.";
				} else {
					if (ct >= f_half_daytime && ct < l_half_daytime) {
						writeText.textContent = "Wish you a blissful afternoon.";
					} else {
						if (ct >= evening && ct < nighttime) {
							writeText.textContent = "Good evening.";
						} else {
							writeText.textContent = "Wish you a relaxing time.";
						}
					}
				}
			}
		}
	}
};

const changeBackgroundImage = function() {
	if (ct >= dawn && ct < f_half_morning) {
		document.body.style.backgroundImage = "url('./img/dawn.webp')";
	} else {
		if (ct >= f_half_morning && ct < l_half_morning) {
			document.body.style.backgroundImage = "url('./img/f_half_morning.webp')";
		} else {
			if (ct >= l_half_morning && ct < f_half_daytime) {
				document.body.style.backgroundImage =
					"url('./img/l_half_morning.webp')";
			} else {
				if (ct >= f_half_daytime && ct < l_half_daytime) {
					document.body.style.backgroundImage =
						"url('./img/f_half_daytime.webp')";
				} else {
					if (ct >= l_half_daytime && ct < evening) {
						document.body.style.backgroundImage =
							"url('./img/l_half_daytime.webp')";
					} else {
						if (ct >= evening && ct < nighttime) {
							document.body.style.backgroundImage = "url('./img/evening.webp')";
						} else {
							document.body.style.backgroundImage =
								"url('./img/nighttime.webp')";
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
	document.body.style.backgroundImage = "url('./img/dawn.webp')";
	writeText.textContent = "Morning, dawn changes everything.";
});
btn2.addEventListener("click", () => {
	document.body.style.backgroundImage = "url('./img/f_half_morning.webp')";
	writeText.textContent = "Good morning.";
});
btn3.addEventListener("click", () => {
	document.body.style.backgroundImage = "url('./img/l_half_morning.webp')";
	writeText.textContent = "Wish you a good day.";
});
btn4.addEventListener("click", () => {
	document.body.style.backgroundImage = "url('./img/f_half_daytime.webp')";
	writeText.textContent = "Good afternoon.";
});
btn5.addEventListener("click", () => {
	document.body.style.backgroundImage = "url('./img/l_half_daytime.webp')";
	writeText.textContent = "Wish you a blissful afternoon.";
});
btn6.addEventListener("click", () => {
	document.body.style.backgroundImage = "url('./img/evening.webp')";
	writeText.textContent = "Good evening.";
});
btn7.addEventListener("click", () => {
	document.body.style.backgroundImage = "url('./img/nighttime.webp')";
	writeText.textContent = "Wish you a relaxing time.";
});

changeText();
changeBackgroundImage();
counter();
