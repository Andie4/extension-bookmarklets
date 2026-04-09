javascript: (function() {
    function addlightDarkStyles() {
        var t = document.createElement("style");
        t.setAttribute("id", "lightDarkStyles"), t.textContent = `:root {color-scheme: light dark;}body, body * {color: light-dark(#031104, #dfffba)!important;border-color: light-dark(#031104, #dfffba)!important;outline-color: light-dark(#031104, #dfffba)!important;background-color: light-dark(#dfffba, #031104)!important;background: light-dark(#dfffba, #031104)!important;}a:link,a:visited,a:hover,a:active {color:light-dark(#005c0b,#e2f50a)!important;text-decoration:underline;}`, document.head.appendChild(t)
    }
    addlightDarkStyles()
})()