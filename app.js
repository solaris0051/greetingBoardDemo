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
const txt = [
  `Morning, dawn changes everything.`,
  `Good morning.`,
  `Wish you a good day.`,
  `Good afternoon.`,
  `Wish you a blissful afternoon.`,
  `Good evening.`,
  `Wish you a relaxing time.`,
];
const url = [
  "url('./img/dawn.webp')",
  "url('./img/f_half_morning.webp')",
  "url('./img/l_half_morning.webp')",
  "url('./img/f_half_daytime.webp')",
  "url('./img/l_half_daytime.webp')",
  "url('./img/evening.webp')",
  "url('./img/nighttime.webp')",
];

const writeText = [document.getElementById("greeting_words")];

//a normal sequence shows up below.
//avoid a blank time of a screen until Clock.js starts.(in this case 15 secs.)
const initial_t = new Date();
initial_t.getHours;
screenChanger(initial_t); //function hoisted.

//yielding a worker named Clock.js, which sits outside of a main thread,
//of which couterpart is named TimeSeeker that does inside of a main thread.
if (window.Worker) {
  const TimeSeeker = new Worker("./clock.js", {
    type: "module",
  });
  TimeSeeker.postMessage(`move`);
  TimeSeeker.onmessage = function (event) {
    let cti = event.data;
    console.log(`viaMain: let cti =event.data; ${cti}`);
    screenChanger(cti); //function hoisted.
  };
} else {
  document.getElementById("no_worker").removeAttribute("hidden");
  document.getElementById(
    "no_worker"
  ).textContent = `Could you please make web worker available?`;
}

//getting the backgroundImages and the greeting words shown up for each time slot, accordingly.
function screenChanger(t) {
  if (t >= dawn && t < f_half_morning) {
    console.log(`dawn: ${t}`);
    writeText[0].textContent = txt[0];
    document.body.style.backgroundImage = url[0];
  } else {
    if (t >= f_half_morning && t < l_half_morning) {
      console.log(`f_half_morning: ${t}`);
      writeText[0].textContent = txt[1];
      document.body.style.backgroundImage = url[1];
    } else {
      if (t >= l_half_morning && t < f_half_daytime) {
        console.log(`l_half_morning: ${t}`);
        writeText[0].textContent = txt[2];
        document.body.style.backgroundImage = url[2];
      } else {
        if (t >= f_half_daytime && t < l_half_daytime) {
          console.log(`f_half_daytime: ${t}`);
          writeText[0].textContent = txt[3];
          document.body.style.backgroundImage = url[3];
        } else {
          if (t >= l_half_daytime && t < evening) {
            console.log(`l_half_daytime: ${t}`);
            writeText[0].textContent = txt[4];
            document.body.style.backgroundImage = url[4];
          } else {
            if (t >= evening && t < nighttime) {
              console.log(`evening: ${t}`);
              writeText[0].textContent = txt[5];
              document.body.style.backgroundImage = url[5];
            } else {
              console.log(`nighttime: ${t}`);
              writeText[0].textContent = txt[6];
              document.body.style.backgroundImage = url[6];
            }
          }
        }
      }
    }
  }
}

//storing their visiting times this site in their own localStorage embedded in their own browsers.
const counter = function () {
  if (!localStorage["times"]) {
    localStorage["times"] = 0;
  }
  if (localStorage["times"] == 0) {
    document.getElementById(
      "cntr_text"
    ).innerHTML = `Thank you for the ${++localStorage["times"]} visit.`;
  } else {
    document.getElementById(
      "cntr_text"
    ).innerHTML = `Thank you for the ${++localStorage["times"]} visits.`;
  }
};

counter();

////////////////////////////////////////////////////////////////////////////////
//added following buttons for those who can't wait for each actual time slot.//
//////////////////////////////////////////////////////////////////////////////
const btn = [
  document.getElementById("dawn"),
  document.getElementById("f_half_morning"),
  document.getElementById("l_half_morning"),
  document.getElementById("f_half_daytime"),
  document.getElementById("l_half_daytime"),
  document.getElementById("evening"),
  document.getElementById("nighttime"),
];

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    writeText[0].textContent = txt[i];
    document.body.style.backgroundImage = url[i];
    counter();
  });
}

// control fullscreen(enter/exit)
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});
