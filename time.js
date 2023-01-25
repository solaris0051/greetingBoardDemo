addEventListener("message", (event) => {
    if (event.data === `request`) {
        setInterval(() => {
            let currentTime = new Date();
            let hrs = currentTime.getHours();
            let mins = currentTime.getMinutes();
            let secs = currentTime.getSeconds();
            postMessage(hrs + `:` + mins + `:` + secs);
        }, 100);
    }
});
