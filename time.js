addEventListener("message", (event) => {
    if (event.data === `request`) {
        setInterval(() => {
            let currentTime = new Date();
            let hrs = `${0}${currentTime.getHours()}`.slice(-2);
            let mins = `${0}${currentTime.getMinutes()}`.slice(-2);
            let secs = `${0}${currentTime.getSeconds()}`.slice(-2);
            postMessage(hrs + `:` + mins + `:` + secs);
        }, 100);
    }
});
