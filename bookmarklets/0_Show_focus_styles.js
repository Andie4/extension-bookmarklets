// 0 Show focus styles
(function () {
    function showAllFocusStyles() {
        const e = document.querySelectorAll('a[href],button,select,input:not([type="hidden"]),textarea,summary,details,area,[tabindex],[contenteditable]:not([contenteditable="false"])');
        let t, o = "";
        
        Array.from(e).forEach(function (e) {
            (e.style.transition = "none"), e.focus(), (t = getComputedStyle(e)), (o = "");
            for (var s = 0; s < t.length; s++) (cssProperty = t[s]), (cssValue = t.getPropertyValue(cssProperty)), (o += cssProperty + ":" + cssValue + ";");
            e.setAttribute("style", o);

            if(e.parentNode && e.parentNode.tagName === 'DIV') {
                if(e.parentNode.parentNode) {
                    if(e.parentNode.parentNode.classList.contains('tooltip')) {
                        e.style.opacity = 1;
                        e.style.visibility = 'visible';
                    }
                };
            };
        });

        var css = `
        .fr-label::before{
            outline-style: solid !important;
            outline-offset: 2px !important;
            outline-width: 2px !important;
            outline-color: #0a76f6 !important;
        }

        `;
        var overrideStyles = document.createElement('style');
        overrideStyles.appendChild(document.createTextNode(css))
        document.head.appendChild(overrideStyles);
    }
    showAllFocusStyles();
})();