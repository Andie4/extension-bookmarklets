function grayScale(doc) {
    let blurAmount = 10;
    var a = doc.createElement('style'),
        b;
    doc.head.appendChild(a);
    b = a.sheet;
    b.insertRule('body {filter:blur(' + blurAmount + 'px);}', 0);

    function checkKeyPresses() {
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                blurAmount++;
                b.deleteRule(0);
                b.insertRule('body {filter:blur(' + blurAmount + 'px);}', 0);
            }
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (blurAmount > 0) {
                    blurAmount--;
                }
                b.deleteRule(0);
                b.insertRule('body {filter:blur(' + blurAmount + 'px);}', 0);
            }
        });
    }
    checkKeyPresses();
}
grayScale(document);
var iframes = document.querySelectorAll('iframe');
Array.from(iframes).forEach(iframe => {
    grayScale(iframe.contentWindow.document);
});