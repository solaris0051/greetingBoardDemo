addEventListener("message", (event) => {
    if (event.data === `move`) {
        setInterval(() => {
            let cto = new Date();
            let currentTime = cto.getHours;
            postMessage(currentTime);
        }, 15 * 1000);
    };
})