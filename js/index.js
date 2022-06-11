//defining the starting time to change expression of a screen for each time slot.
const dawn = new Date();
dawn.setHours(4, 30, 0); //dawn.
const f_half_morning = new Date();
f_half_morning.setHours(6, 0, 0); //f_half_ represents the first half.
const l_half_morning = new Date();
l_half_morning.setHours(9, 0, 0); //l_half_ represents the last half.
const f_half_daytime = new Date();
f_half_daytime.setHours(12, 0, 0); //f_half_ represents the first half.
const l_half_daytime = new Date();
l_half_daytime.setHours(15, 0, 0); //l_half_ represents the last half.
const evening = new Date();
evening.setHours(18, 0, 0); //evening.
const nighttime = new Date();
nighttime.setHours(22, 0, 0); //nighttime.

//constants
const txt_01 = `Morning, dawn changes everything.`;
const txt_02 = `Good morning.`;
const txt_03 = `Wish you a good day.`;
const txt_04 = `Good afternoon.`;
const txt_05 = `Wish you a blissful afternoon.`;
const txt_06 = `Good evening.`;
const txt_07 = `Wish you a relaxing time.`;
const url_01 = "url('./img/dawn.webp')";
const url_02 = "url('./img/f_half_morning.webp')";
const url_03 = "url('./img/l_half_morning.webp')";
const url_04 = "url('./img/f_half_daytime.webp')";
const url_05 = "url('./img/l_half_daytime.webp')";
const url_06 = "url('./img/evening.webp')";
const url_07 = "url('./img/nighttime.webp')";
const writeText = document.getElementById('greeting_words');

//a normal sequence shows up below.

//added to avoid a blank time of a screen until Clock.js starts.(in this case 15 secs.)
const initial_t = new Date();
initial_t.getHours;
screenChanger(initial_t); //function hoisted.

//addded part: yielding a worker named Clock.js, which sits outside of a main thread,
//of which couterpart is named TimeSeeker that does inside of a main thread.
if (window.Worker) {
	const TimeSeeker = new Worker('./js/Clock.js', {
		type: 'module'
	});
	TimeSeeker.postMessage(true);
	TimeSeeker.onmessage = function(event) {
		let cti = event.data;
		console.log(`viaMain: let ct =event.data; ${cti}`);
		screenChanger(cti); //function hoisted.
		console.log(`viaMain: Passing screenChanger(cti)`);
	};
} else {
	document.getElementById('no_worker').removeAttribute('hidden');
	document.getElementById('no_worker').textContent = `no worker.`
}

//getting the backgroundImages and the greeting words shown up for each time slot, accordingly.
function screenChanger(t) {
	if (t >= dawn && t < f_half_morning) {
		console.log(`dawn: ${t}`);
		writeText.textContent = txt_01;
		document.body.style.backgroundImage = url_01;
	} else {
		if (t >= f_half_morning && t < l_half_morning) {
			console.log(`f_half_morning: ${t}`);
			writeText.textContent = txt_02;
			document.body.style.backgroundImage = url_02;
		} else {
			if (t >= l_half_morning && t < f_half_daytime) {
				console.log(`l_half_morning: ${t}`);
				writeText.textContent = txt_03;
				document.body.style.backgroundImage = url_03;
			} else {
				if (t >= f_half_daytime && t < l_half_daytime) {
					console.log(`f_half_daytime: ${t}`);
					writeText.textContent = txt_04;
					document.body.style.backgroundImage = url_04;
				} else {
					if (t >= l_half_daytime && t < evening) {
						console.log(`l_half_daytime: ${t}`);
						writeText.textContent = txt_05;
						document.body.style.backgroundImage = url_05;
					} else {
						if (t >= evening && t < nighttime) {
							console.log(`evening: ${t}`);
							writeText.textContent = txt_06;
							document.body.style.backgroundImage = url_06;
						} else {
							console.log(`nighttime: ${t}`);
							writeText.textContent = txt_07;
							document.body.style.backgroundImage = url_07;
						}
					}
				}
			}
		}
	}
}

//storing their visiting times this site in their own localStorage embedded in their own browsers.
const counter = function() {
	if (!localStorage["times"]) {
		localStorage["times"] = 0;
	} else {
	document.getElementById('cntr_text').innerHTML =
		`Thank you for the ${++localStorage["times"]} times visiting.`;
	}
}
counter();

////////////////////////////////////////////////////////////////////////////////
//added following buttons for those who can't wait for each actual time slot.//
//////////////////////////////////////////////////////////////////////////////
const btn1 = document.getElementById('dawn');
const btn2 = document.getElementById('f_half_morning');
const btn3 = document.getElementById('l_half_morning');
const btn4 = document.getElementById('f_half_daytime');
const btn5 = document.getElementById('l_half_daytime');
const btn6 = document.getElementById('evening');
const btn7 = document.getElementById('nighttime');
btn1.addEventListener('click', () => {
	writeText.textContent = txt_01;
	document.body.style.backgroundImage = url_01;
	counter();
})

btn2.addEventListener('click', () => {
	writeText.textContent = txt_02;
	document.body.style.backgroundImage = url_02;
	counter();
})

btn3.addEventListener('click', () => {
	writeText.textContent = txt_03;
	document.body.style.backgroundImage = url_03;
	counter();
});
btn4.addEventListener('click', () => {
	writeText.textContent = txt_04;
	document.body.style.backgroundImage = url_04;
	counter();
})

btn5.addEventListener('click', () => {
	writeText.textContent = txt_05;
	document.body.style.backgroundImage = url_05;
	counter();
})

btn6.addEventListener('click', () => {
	writeText.textContent = txt_06;
	document.body.style.backgroundImage = url_06;
	counter();
})

btn7.addEventListener('click', () => {
	writeText.textContent = txt_07;
	document.body.style.backgroundImage = url_07;
	counter();
})
