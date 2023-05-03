import "./style.css";
// import "./all.min.css";
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
const TXT = [
    `夜明けはすべてを変えます。`,
    `素敵な朝をお過ごしください。`,
    `今日が快い一日でありますように。`,
    `心安らかな昼下がりをお過ごしください。`,
    `至福の午後を過ごされますように。`,
    `今宵が穏やかでありますように。`,
    `安らぎとともにありますように。`,
];
const POINT = [
    "url('./images/dawn.webp')",
    "url('./images/f_half_morning.webp')",
    "url('./images/l_half_morning.webp')",
    "url('./images/f_half_daytime.webp')",
    "url('./images/l_half_daytime.webp')",
    "url('./images/evening.webp')",
    "url('./images/nighttime.webp')",
];

const writeText = [document.getElementById("greeting_words")];

//a normal sequence shows up below.
//avoid a blank time of a screen until Clock.js starts.(in this case 15 secs.)
const initial_t = new Date();
initial_t.getHours;
screenChanger(initial_t); //function hoisted.

//yielding a worker named Clock.js, which sits outside of a main thread,
//of which counterpart is named TimeSeeker that does inside of a main thread.
if (window.Worker) {
    const TimeSeeker = new Worker(new URL("./clock.js", import.meta.url));
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

//yielding a worker named Time.js, which sits outside of a main thread,
//of which counterpart is named TimeProcessor that does inside of a main thread.
if (window.Worker) {
    const TimeProcessor = new Worker(new URL("./time.js", import.meta.url));
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

//getting the backgroundImages and the greeting words shown up for each time slot, accordingly.
function screenChanger(t) {
    if (t >= dawn && t < f_half_morning) {
        writeText[0].textContent = TXT[0];
        document.body.style.backgroundImage = POINT[0];
    } else {
        if (t >= f_half_morning && t < l_half_morning) {
            writeText[0].textContent = TXT[1];
            document.body.style.backgroundImage = POINT[1];
        } else {
            if (t >= l_half_morning && t < f_half_daytime) {
                writeText[0].textContent = TXT[2];
                document.body.style.backgroundImage = POINT[2];
            } else {
                if (t >= f_half_daytime && t < l_half_daytime) {
                    writeText[0].textContent = TXT[3];
                    document.body.style.backgroundImage = POINT[3];
                } else {
                    if (t >= l_half_daytime && t < evening) {
                        writeText[0].textContent = TXT[4];
                        document.body.style.backgroundImage = POINT[4];
                    } else {
                        if (t >= evening && t < nighttime) {
                            writeText[0].textContent = TXT[5];
                            document.body.style.backgroundImage = POINT[5];
                        } else {
                            writeText[0].textContent = TXT[6];
                            document.body.style.backgroundImage = POINT[6];
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

//////////////////////////////////////////////////////////////////////////////
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
        writeText[0].textContent = TXT[i];
        document.body.style.backgroundImage = POINT[i];
    });
}

// control fullscreen(enter/exit)
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        document.getElementById("toggleIcon").className =
            "fa-sharp fa-solid fa-minimize";
    } else {
        if (document.fullscreenElement) {
            document.exitFullscreen();
            document.getElementById("toggleIcon").className =
                "fa-sharp fa-solid fa-maximize";
        }
    }
});
