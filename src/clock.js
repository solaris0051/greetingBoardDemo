addEventListener("message", (event) => {
    if (event.data === `move`) {
        setInterval(() => {
            let cto = new Date();
            postMessage(cto);
        }, 35 * 1000);
    }
})