javascript: (function() {
    function stripAttribs() {
        let t = 0,
            e = prompt("What attribute(s) do you want to remove (comma-separated)"),
            o = e.split(",");
        o.forEach(e => {
            let o = document.querySelectorAll("[" + e + "]");
            Array.from(o).forEach(o => {
                o.removeAttribute(e), console.log("Stripped `" + e + "` attribute from: ", o), t++
            })
        }), 0 === t ? alert("No elements found that have attributes you provided") : alert(t + " elements found that have attributes you provided. See log for more details.")
    }
    stripAttribs()
})()