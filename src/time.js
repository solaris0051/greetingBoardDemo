addEventListener("message", (event) => {
    if (event.data === `request`) {
        setInterval(() => {
            let currentTime = new Date();
            let yy = `${currentTime.getFullYear()}`;
            let mo = `${currentTime.getMonth() + 1}`;
            let dd = `${0}${currentTime.getDate()}`.slice(-2);
            let hh = `${0}${currentTime.getHours()}`.slice(-2);
            let mm = `${0}${currentTime.getMinutes()}`.slice(-2);
            let ss = `${0}${currentTime.getSeconds()}`.slice(-2);
            postMessage(`${yy}年${mo}月${dd}日 ${hh}:${mm}:${ss}`);
        }, 100);
    }
})