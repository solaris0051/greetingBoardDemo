addEventListener("message", (event) => {
    if (event.data === `move`) {
        setInterval(() => {
            let cto = new Date();
            postMessage(cto);
        }, 40 * 1000);
    }
})