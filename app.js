const dawn = new Date();
dawn.setHours(4, 30, 0);
const f_half_morning = new Date();
f_half_morning.setHours(6, 0, 0);
const l_half_morning = new Date();
l_half_morning.setHours(9, 0, 0);
const f_half_daytime = new Date();
f_half_daytime.setHours(12, 0, 0);
const l_half_daytime = new Date();
l_half_daytime.setHours(15, 0, 0);
const evening = new Date();
evening.setHours(18, 0, 0);
const nighttime = new Date();
nighttime.setHours(22, 0, 0);
const txt = [
  `夜明けはすべてを変えます。`,
  `素敵な朝をお過ごしください。`,
  `今日が快い一日でありますように。`,
  `心安らかな昼下がりをお過ごしください。`,
  `至福の午後を過ごされますように。`,
  `今宵が穏やかでありますように。`,
  `安らぎとともにありますように。`,
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
const initial_t = new Date();
initial_t.getHours;
screenChanger(initial_t);
if (window.Worker) {
  const TimeSeeker = new Worker("./clock.js", {
    type: "module",
  });
  TimeSeeker.postMessage(`move`);
  TimeSeeker.addEventListener("message", (event) => {
    let cti = event.data;
    //function hoisted.
    screenChanger(cti);
  });
} else {
  document.getElementById("no_worker").removeAttribute("hidden");
  document.getElementById(
    "no_worker"
  ).textContent = `Web workerを有効にしてください。`;
}
if (window.Worker) {
  const TimeProcessor = new Worker("./time.js", {
    type: "module",
  });
  TimeProcessor.postMessage(`request`);
  TimeProcessor.addEventListener("message", (event) => {
    document.getElementById("showing_time").textContent = event.data;
  });
} else {
  document.getElementById("no_worker").removeAttribute("hidden");
  document.getElementById(
    "no_worker"
  ).textContent = `Web workerを有効にしてください。`;
}
function screenChanger(t) {
  if (t >= dawn && t < f_half_morning) {
    writeText[0].textContent = txt[0];
    document.body.style.backgroundImage = url[0];
  } else {
    if (t >= f_half_morning && t < l_half_morning) {
      writeText[0].textContent = txt[1];
      document.body.style.backgroundImage = url[1];
    } else {
      if (t >= l_half_morning && t < f_half_daytime) {
        writeText[0].textContent = txt[2];
        document.body.style.backgroundImage = url[2];
      } else {
        if (t >= f_half_daytime && t < l_half_daytime) {
          writeText[0].textContent = txt[3];
          document.body.style.backgroundImage = url[3];
        } else {
          if (t >= l_half_daytime && t < evening) {
            writeText[0].textContent = txt[4];
            document.body.style.backgroundImage = url[4];
          } else {
            if (t >= evening && t < nighttime) {
              writeText[0].textContent = txt[5];
              document.body.style.backgroundImage = url[5];
            } else {
              writeText[0].textContent = txt[6];
              document.body.style.backgroundImage = url[6];
            }
          }
        }
      }
    }
  }
}
const counter = function () {
  if (!localStorage["times"]) {
    localStorage["times"] = 0;
  }
  if (localStorage["times"] == 0) {
    document.getElementById("cntr_text").innerHTML = `${++localStorage[
      "times"
    ]} 回目のご訪問ありがとうございます。`;
  } else {
    document.getElementById("cntr_text").innerHTML = `${++localStorage[
      "times"
    ]} 回目の訪問にお礼申し上げます。`;
  }
};
counter();
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
  });
}
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    document.getElementById("toggleIcon").className =
      "fa-sharp fa-solid fa-minimize";
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      document.getElementById("toggleIcon").className =
        "fa-sharp fa-solid fa-maximize";
    }
  }
});
