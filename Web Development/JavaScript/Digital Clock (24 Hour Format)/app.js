function showTime() {
    let date = new Date();
    let hour = date.getHours(); // Hours in 24 hr format 0 - 23
    let minutes = date.getMinutes(); // 0 - 59
    let seconds = date.getSeconds(); // 0 - 59

    if (hour === 0) {
        hour = 12;
    }

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let time = hour + ":" + minutes + ":" + seconds;

    document.querySelector("#myTime").innerText = time;

    setTimeout(showTime, 1000);
}

showTime();