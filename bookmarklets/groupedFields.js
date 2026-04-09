javascript: (function() {
    function outlineGroupedFIelds() {
        let o = 0;

        function e(e, r) {
            e.classList.add("a11y-tools-groupedEl"), e.classList.add(`a11y-tools-group-color-${r}`), o++
        }

        function r(o, e, r) {
            let l = document.createElement("span");
            l.innerHTML = e, l.classList.add("a11y-tools-group-description"), l.classList.add(`a11y-tools-group-description-background-${r}`);
            let t = o.parentNode;
            t.insertBefore(l, o)
        }
        var l = document.querySelectorAll("fieldset");
        console.log(l), Array.from(l).forEach(o => {
            e(o, 1), o.querySelector("legend") && r(o, "Group label (from fieldset > legend): <br><br>'" + o.querySelector("legend").textContent + "'", 1)
        }), Array.from(document.querySelectorAll("[role=group][aria-label],[role=radiogroup][aria-label],[role=region][aria-label],nav[aria-label]")).forEach(o => {
            console.log(o);
            let l = "none";
            o.getAttribute("role") && (l = o.getAttribute("role").toLowerCase()), "nav" === o.tagName.toLowerCase() && (l = "navigation"), e(o, 2), r(o, "Group label (from [role=" + l + "][aria-label]): <br><br>'" + o.getAttribute("aria-label") + "'", 2)
        }), Array.from(document.querySelectorAll("[role=group][aria-labelledby],[role=radiogroup][aria-labelledby],[role=region][aria-labelledby],nav[aria-labelledby]")).forEach(o => {
            let l = "none";
            o.getAttribute("role") && (l = o.getAttribute("role").toLowerCase()), "nav" === o.tagName.toLowerCase() && (l = "navigation"), e(o, 3);
            let t = "Source for aria-labelledby is missing/broken";
            document.querySelector("#" + o.getAttribute("aria-labelledby")) && (t = document.querySelector("#" + o.getAttribute("aria-labelledby")).textContent), r(o, "Group label (from [role=" + l + "][aria-labelledby]): <br><br>'" + t + "'", 3)
        });
        let t = document.querySelectorAll(".a11y-tools-group-description+.a11y-tools-group-description");
        Array.from(t).forEach(o => {
            o.remove()
        }), 0 === o && alert("No grouped fields found on this page"), ! function o() {
            let e = document.createElement("style");
            e.setAttribute("id", "groupedElStyles"), e.textContent = `.a11y-tools-groupedEl {box-shadow: 0px 0px 0px 10px white;outline-offset: 5px;}.a11y-tools-group-color-1 {outline: 3px solid #662e2e;}.a11y-tools-group-color-2 {outline: 3px solid #66482e;}.a11y-tools-group-color-3 {outline: 3px solid #662e43;}.a11y-tools-group-description {display:inline-block;margin:20px 0 5px -10px;padding:5px;font-weight:bold;font-size:18px;color:white;}.a11y-tools-group-description-background-1 {background:#662e2e;}.a11y-tools-group-description-background-2 {background:#66482e;}.a11y-tools-group-description-background-3 {background:#662e43;}`, document.head.appendChild(e)
        }(), document.addEventListener("keydown", function(o) {
            "q" === o.key && (o.preventDefault(), function o() {
                let e = document.querySelectorAll(".a11y-tools-group-description");
                Array.from(e).forEach(o => {
                    o.remove()
                });
                let r = document.querySelectorAll(`.a11y-tools-groupedEl,.a11y-tools-group-color-1,.a11y-tools-group-color-2,.a11y-tools-group-color-3,.a11y-tools-group-description,.a11y-tools-group-description-background-1,.a11y-tools-group-description-background-2,.a11y-tools-group-description-background-3`);
                Array.from(r).forEach(o => {
                    o.classList.remove(".a11y-tools-groupedEl"), o.classList.remove(".a11y-tools-group-color-1"), o.classList.remove(".a11y-tools-group-color-2"), o.classList.remove(".a11y-tools-group-color-3")
                });
                let l = document.querySelector("#groupedElStyles");
                l && l.remove()
            }())
        })
    }
    outlineGroupedFIelds()
})()