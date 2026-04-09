javascript: (function() {
    function grayScale(e) {
        var r, a = e.createElement("style");
        e.head.appendChild(a), (r = a.sheet).insertRule("body {filter:invert(100%);}", 0), r.insertRule("img,svg,figure,video{filter:invert(100%);}", 0)
    }
    grayScale(document);
    var iframes = document.querySelectorAll("iframe");
    Array.from(iframes).forEach(e => {
        grayScale(e.contentWindow.document)
    })
})()