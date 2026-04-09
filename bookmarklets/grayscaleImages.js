javascript: (function() {
    function grayScale(e) {
        var a, r = e.createElement("style");
        e.head.appendChild(r), (a = r.sheet).insertRule("img,svg,figure {filter:grayscale(100%);}", 0)
    }
    grayScale(document);
    var iframes = document.querySelectorAll("iframe");
    Array.from(iframes).forEach(e => {
        grayScale(e.contentWindow.document)
    })
})()