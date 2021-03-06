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
}

function openLink(_url, _blank) {
    if (_blank) {
        window.open(_url, "_blank");
    } else {
        window.open(_url, "_self");
    }
}
