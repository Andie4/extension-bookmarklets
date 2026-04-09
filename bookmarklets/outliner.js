javascript: (function() {
    function outlineEls() {
        let e = 0,
            t = prompt("What HTML element? [Tip: any valid CSS selector will work]"),
            o = prompt("What color? [color name or hex value works]\n\nTIP: you can undo the outline afterwards by pressing 'q' without having to reload page", "red");
        var l = document.querySelectorAll(t);
        console.clear(),
            function e(t) {
                let o = document.createElement("style");
                o.setAttribute("id", "outlinerStyles"), o.textContent = `.a11y-tools-outliner {box-shadow: 0px 0px 0px 10px white;outline: 3px solid ${t};outline-offset: -2px;}`, document.head.appendChild(o)
            }(o), Array.from(l).forEach(t => {
                console.log("Outlined:"), console.log(t), t.classList.add("a11y-tools-outliner"), e++
            }), 0 === e ? alert("No elements found that match the selector " + t) : alert(e + " elements found that match the selector " + t + ". See log for more details."), document.addEventListener("keydown", function(e) {
                "q" === e.key && (e.preventDefault(), function e() {
                    let t = document.querySelectorAll(".a11y-tools-outliner");
                    Array.from(t).forEach(e => {
                        e.classList.remove("a11y-tools-outliner")
                    });
                    let o = document.querySelector("#outlinerStyles");
                    o.remove()
                }())
            })
    }
    outlineEls()
})()