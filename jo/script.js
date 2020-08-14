let isWasPaused = false;

alert("Script loaded!!");

document.getElementsByClassName("player-control-play-pause-icon").item(0).onclick = function () {
    isWasPaused = document.getElementsByClassName("player-control-play-pause-icon").item(0).getAttribute("aria-label").toString() === "Play video";
    let jo = "changed true";
    if (isWasPaused){
        jo = "changed true";
    }else{
        jo = "changed false";
    }
    alert(jo);
};


function setPause() {
    isWasPaused = document.getElementsByClassName("player-control-play-pause-icon").item(0).getAttribute("aria-label").toString() === "Play video";
    let jo = "changed true";
    if (isWasPaused){
        jo = "changed true";
    }else{
        jo = "changed false";
    }
    alert(jo);
}

document.onvisibilitychange = function () {
    if (document.getElementsByClassName("player-control-play-pause-icon").item(0).getAttribute("aria-label").toString() === "Play video") {
        if (isWasPaused === false){
            document.getElementsByClassName("player-control-play-pause-icon").item(0).click();
        }
    }
};

function pauseForCall() {
    if (document.getElementsByClassName("player-control-play-pause-icon").item(0).getAttribute("aria-label").toString() === "Pause video") {
        document.getElementsByClassName("player-control-play-pause-icon").item(0).click();
    }
}
