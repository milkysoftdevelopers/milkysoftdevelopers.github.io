let isWasPaused = false;

alert("Script loaded!!");

document.getElementsByClassName("player-control-play-pause-icon").item(0).addEventListener("click", pauseDet);

function pauseDet(){
    setTimeout(setPause,1000);
}

function setPause() {
    isWasPaused = document.getElementsByClassName("player-control-play-pause-icon").item(0).getAttribute("aria-label").toString() === "Play video";
    if (isWasPaused){
        var jo = "changed true";
    }else{
        var jo = "changed false";
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
