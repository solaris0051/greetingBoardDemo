addEventListener("message", (event) => {
    if (event.data === `move`) {
        setInterval(() => {
            let cto = new Date();
            cto.getHours;
            postMessage(cto);
        }, 15 * 1000);
    }
})