javascript: (function() {
    function processAriaHiddenElements() {
        let e = {
            FOCUSABLE_TAGS: ["a", "button", "input", "select", "textarea", "video", "audio"],
            PULSE_ANIMATION_ID: "pulse-outline-styles",
            PULSE_CLASS: "pulse-outline",
            DEFAULT_PULSE_COLOR: "red"
        };
        ! function e() {
            let t = document.createElement("style");
            t.setAttribute("id", "blackoutStyles"), t.textContent = `.a11y-tools-blackout {background:black!important;color:black!important;opacity:1!important;outline:5px solid black!important;}`, document.head.appendChild(t)
        }(), document.addEventListener("keydown", function(e) {
                "q" === e.key && (e.preventDefault(), function e() {
                    let t = document.querySelectorAll(".a11y-tools-blackout");
                    Array.from(t).forEach(e => {
                        e.classList.remove("a11y-tools-blackout"), e.classList.remove("pulse-outline")
                    });
                    let o = document.querySelector("#blackoutStyles");
                    o && o.remove()
                }())
            }),
            function t() {
                let o = document.querySelectorAll('[aria-hidden="true"]');
                ({
                    create(e, t) {
                        let o = document.getElementById(e);
                        o && o.remove();
                        let l = document.createElement("style");
                        return l.type = "text/css", l.id = e, l.textContent = t, document.head.appendChild(l), l
                    },
                    remove(e) {
                        let t = document.getElementById(e);
                        t && t.remove()
                    }
                }).create(e.PULSE_ANIMATION_ID, `@keyframes pulse-outline {0%, 100% { outline-width: 2px; outline-offset: 0px; }50% { outline-width: 5px; outline-offset: 5px; }}.${e.PULSE_CLASS} {outline: 2px solid red!important;outline-offset: 0px;outline-color: red;animation: pulse-outline 5s ease-in-out infinite;}.${e.PULSE_CLASS}:hover {animation-play-state: paused;}`), o.forEach(t => {
                    var o;
                    (function e(t) {
                        t.classList.add("a11y-tools-blackout")
                    })(t), o = t, (e.FOCUSABLE_TAGS.includes(o.tagName.toLowerCase()) || o.tabIndex > 0 || 0 === o.tabIndex) && (t.classList.add(e.PULSE_CLASS), console.warn("Focusable Aria-Hidden Element:", t))
                })
            }()
    }
    processAriaHiddenElements()
})()