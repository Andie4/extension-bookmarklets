javascript: (function() {
    function removeEls() {
        let e = 0,
            l = prompt("What HTML element? [Tip: any valid CSS selector will work]");
        var o = document.querySelectorAll(l);
        console.clear(), Array.from(o).forEach(l => {
            console.log("Removed: ", l), l.remove(), e++
        }), 0 === e ? alert("No elements found that match the selector " + l) : alert(e + " elements found that match the selector " + l + ". See log for more details.")
    }
    removeEls()
})()