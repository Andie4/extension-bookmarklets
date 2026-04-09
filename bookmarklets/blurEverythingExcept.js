javascript: (function() {
    "use strict";

    function findAllSiblings(e) {
        let t = new Set;
        return ! function e(l) {
            if (!l) return;
            let o = l.parentElement;
            o && (Array.from(o.children).filter(e => e !== l).forEach(e => t.add(e)), e(o))
        }(e), Array.from(t)
    }

    function checkIfElIsBlockLevel(e) {
        if (!(e instanceof Element)) throw Error("Input must be a DOM element");
        let t = window.getComputedStyle(e),
            l = t.display,
            o = ["block", "flex", "grid", "table", "list-item", "table-row", "table-cell"].includes(l);
        return o
    }

    function getXpath(e) {
        let t = "",
            l = e;
        for (; l && l.parentNode;) {
            if (!l.tagName) {
                l = l.parentNode;
                continue
            }
            let o = l.tagName.toLowerCase(),
                i = l.parentNode,
                n = i.querySelectorAll(`:scope > ${o}`),
                r = n.length > 1 ? `[${Array.from(n).indexOf(l)+1}]` : "";
            t = t ? `${o}${r}/${t}` : `${o}${r}`, l = i
        }
        return `//${t}`
    }

    function pickElement() {
        let e = {
                currentEl: null,
                preventClicks: !0,
                hasRun: !1,
                isActive: !0
            },
            t = (() => {
                let e = document.createElement("div");
                return e.id = "infoPanel", e.setAttribute("role", "status"), document.body.appendChild(e), e
            })();

        function l(l, o = !0) {
            l && e.isActive && (e.currentEl && (e.currentEl.classList.remove("a11y-tools-highlight-block"), e.currentEl.classList.remove("a11y-tools-highlight-inline")), e.currentEl = l, o && !e.hasRun && (checkIfElIsBlockLevel(l) ? l.classList.add("a11y-tools-highlight-block") : l.classList.add("a11y-tools-highlight-inline")), t.innerHTML = getXpath(l))
        }
        let o = {
                ArrowUp(o) {
                    o.preventDefault(), e.currentEl?.parentNode?.tagName !== "HTML" && (l(e.currentEl.parentNode), t.textContent += " (Press Return to isolate this element)")
                },
                ArrowLeft(t) {
                    t.preventDefault(), l(e.currentEl?.previousElementSibling)
                },
                ArrowRight(t) {
                    t.preventDefault(), l(e.currentEl?.nextElementSibling)
                },
                ArrowDown(t) {
                    t.preventDefault();
                    let o = Array.from(e.currentEl?.childNodes || []).find(e => 1 === e.nodeType);
                    l(o)
                },
                Enter(t) {
                    t.preventDefault(), e.currentEl?.click()
                }
            },
            i = {
                keydown: null,
                click: [],
                mouseover: [],
                mouseout: []
            };

        function n() {
            t && t.parentNode && t.parentNode.removeChild(t)
        }
        i.keydown = t => {
                if ("q" === t.key && e.isActive) {
                    console.log("quitting"), t.preventDefault(),
                        function e() {
                            let t = document.querySelectorAll(".a11y-tools-highlight");
                            Array.from(t).forEach(e => {
                                e.classList.remove("a11y-tools-highlight")
                            });
                            let l = document.querySelector("#elementPickerStyles");
                            l && l.remove()
                        }(), e.isActive = !1, e.preventClicks = !1, i.keydown && document.removeEventListener("keydown", i.keydown), document.querySelectorAll("*").forEach(e => {
                            i.click.forEach(t => e.removeEventListener("click", t)), i.mouseover.forEach(t => e.removeEventListener("mouseover", t)), i.mouseout.forEach(t => e.removeEventListener("mouseout", t))
                        }), i.click = [], i.mouseover = [], i.mouseout = [], n();
                    return
                }
                let l = o[t.key];
                l && e.isActive && l(t)
            }, document.addEventListener("keydown", i.keydown), document.querySelectorAll("*").forEach(t => {
                let o = o => {
                    e.preventClicks && e.isActive && (o.preventDefault(), o.stopPropagation(), e.hasRun = "HTML" === t.tagName, e.preventClicks = !e.hasRun, function e(t) {
                        (function e() {
                            let t = document.querySelectorAll(".a11y-tools-highlighted-element-block,.a11y-tools-highlighted-element-inline,.a11y-tools-blurred-elements");
                            t.forEach(e => {
                                e.classList.remove("a11y-tools-highlighted-element-block"), e.classList.remove("a11y-tools-highlighted-element-inline"), e.classList.remove("a11y-tools-blurred-elements")
                            })
                        })(), n();
                        let l = findAllSiblings(t);
                        l.forEach(e => {
                            checkIfElIsBlockLevel(t) ? t.classList.add("a11y-tools-highlighted-element-block") : t.classList.add("a11y-tools-highlighted-element-inline"), e.classList.add("a11y-tools-blurred-elements")
                        })
                    }(t), l(t))
                };
                t.addEventListener("click", o), i.click.push(o);
                let r = o => {
                    e.isActive && (o.stopPropagation(), l(t))
                };
                t.addEventListener("mouseover", r), i.mouseover.push(r);
                let s = () => {
                    e.isActive && e.currentEl?.classList.remove("a11y-tools-highlight")
                };
                t.addEventListener("mouseout", s), i.mouseout.push(s)
            }),
            function e() {
                let t = document.createElement("style");
                t.setAttribute("id", "elementPickerStyles"), t.textContent = `.a11y-tools-highlight-block {box-shadow: 0px 0px 0px 2px black, 0px 0px 0px 3px yellow;outline: 1px solid yellow;outline-offset: -1px;}.a11y-tools-highlight-inline {background:lime;color:black!important;outline: 2px solid black;}#infoPanel {z-index: 1000;font-size: 20px;background: rgba(0,0,0,0.8);color: #fff;font-weight: bold;padding: 10px;position: fixed;bottom: 20px;left: 20px;font-family: sans-serif;visibility: hidden;}#infoPanel:not(:empty) {visibility: visible;}#infoPanel code {color: lime;}.a11y-tools-blurred-elements {filter:blur(5px);opacity:0.8;}.a11y-tools-highlighted-element-block {box-shadow: 0px 0px 0px 2px black, 0px 0px 0px 3px lime;outline:1px solid lime;outline-offset:-1px;}.a11y-tools-highlighted-element-inline {outline:2px solid black;}`, document.head.appendChild(t)
            }(), t.textContent = "'Blur Everything Except...' started. Click on element you want to highlight (leaving everything else blurred). Press \"q\" to quit."
    }
    pickElement()
})()