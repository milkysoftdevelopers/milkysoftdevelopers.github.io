let isWasPaused = false;


document.getElementsByClassName("player-control-play-pause-icon").item(0).onclick = function () {
    if (document.getElementsByClassName("player-control-play-pause-icon").item(0).getAttribute("aria-label").toString() === "Play video") {
        isWasPaused = true;
    } else {
        isWasPaused = false;
    }
};

document.onvisibilitychange = function () {
    if (document.getElementsByClassName("player-control-play-pause-icon").item(0).getAttribute("aria-label").toString() === "Play video" && isWasPaused === false) {
        document.getElementsByClassName("player-control-play-pause-icon").item(0).click();
    }
};

function pauseForCall() {
    if (document.getElementsByClassName("player-control-play-pause-icon").item(0).getAttribute("aria-label").toString() === "Pause video") {
        document.getElementsByClassName("player-control-play-pause-icon").item(0).click();
    }
};
