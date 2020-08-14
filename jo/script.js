document.onvisibilitychange = function () {
    if (document.visibilityState === "hidden") {
        document.hidden = false;
        document.visibilityState = "visible";
    }
};