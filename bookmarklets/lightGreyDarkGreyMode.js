javascript: (function() {
    function addlightDarkStyles() {
        var t = document.createElement("style");
        t.setAttribute("id", "lightDarkStyles"), t.textContent = `:root {color-scheme: light dark;}body, body * {color: light-dark(#3d3c3c, #d0d0d0)!important;border-color: light-dark(#3d3c3c, #d0d0d0)!important;outline-color: light-dark(#3d3c3c, #d0d0d0)!important;background-color: light-dark(#d0d0d0, #3d3c3c)!important;background: light-dark(#d0d0d0, #3d3c3c)!important;}a:link,a:visited,a:hover,a:active {color:light-dark(#005c0b,#e2f50a)!important;text-decoration:underline;}`, document.head.appendChild(t)
    }
    addlightDarkStyles()
})()