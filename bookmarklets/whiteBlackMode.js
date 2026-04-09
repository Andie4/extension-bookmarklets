javascript: (function() {
    function addlightDarkStyles() {
        var t = document.createElement("style");
        t.setAttribute("id", "lightDarkStyles"), t.textContent = `:root {color-scheme: light dark;}body, body * {color: light-dark(#000, #fff)!important;border-color: light-dark(#000, #fff)!important;outline-color: light-dark(#000, #fff)!important;background-color: light-dark(#fff, #000)!important;background: light-dark(#fff, #000)!important;}a:link,a:visited,a:hover,a:active {color:light-dark(#005c0b,#e2f50a)!important;text-decoration:underline;}`, document.head.appendChild(t)
    }
    addlightDarkStyles()
})()