let isWasPaused = false;

alert("Script loaded!!");
/*
document.getElementsByClassName("player-control-play-pause-icon").item(0).onclick = setTimeout(function() {
    isWasPaused = document.getElementsByClassName("player-control-play-pause-icon").item(0).getAttribute("aria-label").toString() === "Play video";
    if (isWasPaused){
        var jo = "changed true";
    }else{
        var jo = "changed false";
    }
    alert(jo);
},1000)
*/
document.onvisibilitychange = function () {
    if (document.getElementsByClassName("player-control-play-pause-icon").item(0).getAttribute("aria-label").toString() === "Play video") {
        document.getElementsByClassName("player-control-play-pause-icon").item(0).click();
    }
};

function pauseForCall() {
    if (document.getElementsByClassName("player-control-play-pause-icon").item(0).getAttribute("aria-label").toString() === "Pause video") {
        document.getElementsByClassName("player-control-play-pause-icon").item(0).click();
    }
}
