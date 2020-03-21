window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'UA-148962327-2');

(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    let f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l !== 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-W7HD5T8');

function onContentLoaded() {
    setTimeout(showPage, 500);
}

function showPage() {
    document.getElementById("content").style.display = "block";
    document.getElementById("viewScreen1").src = "images/screenshot_1.png";
    document.getElementById("viewScreen2").src = "images/screenshot_2.png";
    document.getElementById("viewScreen3").src = "images/screenshot_3.png";
}

function openLink(_url, _blank) {
    if (_blank) {
        window.open(_url, "_blank");
    } else {
        window.open(_url, "_self");
    }
}

function download() {
    document.getElementById('download_modal').style.display = "flex";
    document.getElementById('download_modal_content').style.display = "block";
}

window.onclick = function (event) {
    if (event.target === document.getElementById('download_modal')) {
        closeDownload()
    }
};

function viewScreen() {
    document.getElementById("viewScreen").style.display = "block"
}

function closeViewScreen() {
    document.getElementById("viewScreen").style.display = "none";
}

function closeDownload() {
    document.getElementById('download_modal_content').classList.add("app_download_modal_close");
    setTimeout(hideDownloadModal, 250);
}

function hideDownloadModal() {
    document.getElementById('download_modal').style.display = "none";
    document.getElementById('download_modal_content').style.display = "none";
    document.getElementById('download_modal_content').classList.remove("app_download_modal_close");
}
