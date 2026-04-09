javascript: (function() {
    function serialKiller() {
        let e = prompt("Enter CSS selector to remove (e.g. '.class-name' or '.class1,.class2'):");
        if (null === e || "" === e.trim()) {
            console.log("Operation canceled or empty selector provided.");
            return
        }
        try {
            let l = document.querySelectorAll(e);
            if (0 === l.length) {
                alert(`No elements found matching selector: ${e}`), console.log(`No elements found matching selector: ${e}`);
                return
            }
            let r = 0;
            l.forEach(e => {
                e.remove(), r++
            }), alert(`Successfully removed ${r} element(s) matching: ${e}`)
        } catch (t) {
            alert(`Error: ${t.message}`)
        }
    }
    serialKiller()
})()