javascript: (function() {
    "use strict";

    function getXpath(e) {
        let t = "",
            o = e;
        for (; o && o.parentNode;) {
            if (!o.tagName) {
                o = o.parentNode;
                continue
            }
            let n = o.tagName.toLowerCase(),
                r = o.parentNode,
                i = r.querySelectorAll(`:scope > ${n}`),
                l = i.length > 1 ? `[${Array.from(i).indexOf(o)+1}]` : "";
            t = t ? `${n}${l}/${t}` : `${n}${l}`, o = r
        }
        return `//${t}`
    }

    function getElementHTML(e) {
        if (!e) return "";
        let t = e.cloneNode(!1),
            o = t.outerHTML;
        if (o = o.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e.childNodes.length > 0) {
            let n = e.tagName.toLowerCase(),
                r = `&lt;/${n}&gt;`;
            o = (o = (o = (o = o.replace(r, `...${r}`)).replace(" isolatorHighlight", "")).replace("isolatorHighlight", "")).replace(' class=" "', "")
        }
        return o
    }

    function isolate() {
        let e = {
                currentEl: null,
                preventClicks: !0,
                hasRun: !1
            },
            t = (() => {
                let e = document.createElement("div");
                return e.id = "infoPanel", e.setAttribute("role", "status"), document.body.appendChild(e), e
            })();

        function o(o, n = !0, r = !1) {
            if (!o) return;
            e.currentEl && e.currentEl.classList.remove("isolatorHighlight"), e.currentEl = o, n && !e.hasRun && o.classList.add("isolatorHighlight");
            let i = getXpath(o),
                l = getElementHTML(o),
                a = `<div class="xpath">${i}</div>`;
            a += `<div class="html">${l}</div>`, (r || !e.hasRun) && (a += '<div class="instruction">Press ENTER to isolate this element</div>'), t.innerHTML = a
        }
        let n = {
            ArrowUp(t) {
                t.preventDefault(), e.currentEl?.parentNode?.tagName !== "HTML" && o(e.currentEl.parentNode, !0, !0)
            },
            ArrowLeft(t) {
                t.preventDefault(), o(e.currentEl?.previousElementSibling)
            },
            ArrowRight(t) {
                t.preventDefault(), o(e.currentEl?.nextElementSibling)
            },
            ArrowDown(t) {
                t.preventDefault();
                let n = Array.from(e.currentEl?.childNodes || []).find(e => 1 === e.nodeType);
                o(n)
            },
            Enter(t) {
                t.preventDefault(), e.currentEl?.click()
            }
        };
        document.addEventListener("keydown", e => {
                let t = n[e.key];
                t && t(e)
            }), document.querySelectorAll("*").forEach(t => {
                t.addEventListener("click", n => {
                    if (e.preventClicks) {
                        var r;
                        n.preventDefault(), e.hasRun = "HTML" === t.tagName, e.preventClicks = !e.hasRun, r = t, e.hasRun || "HTML" === r.parentNode.tagName || Array.from(r.parentNode.childNodes).filter(e => e !== r).forEach(e => e.remove()), document.body.classList.add("a11y-tools-isolator-has-run"), o(t)
                    }
                }), t.addEventListener("mouseover", e => {
                    e.stopPropagation(), o(t)
                }), t.addEventListener("mouseout", () => {
                    e.currentEl?.classList.remove("isolatorHighlight")
                })
            }),
            function e() {
                let t = document.createElement("style");
                t.textContent = `.isolatorHighlight {outline: 4px solid black !important;outline-offset: -4px !important;box-shadow: 0px 0px 0px 4px #fff;}#infoPanel {z-index: 1000;font-size: 16px;background: rgba(0,0,0,0.9);color: #fff;font-weight: bold;padding: 15px;position: fixed;bottom: 20px;left: 20px;font-family: 'Courier New', monospace;visibility: hidden;max-width: calc(100vw - 40px);border-radius: 8px;line-height: 1.4;}#infoPanel:not(:empty) {visibility: visible;}#infoPanel .xpath {color: lime;margin-bottom: 8px;overflow-x: auto;white-space: nowrap;}#infoPanel .html {color: #87CEEB;margin-bottom: 8px;overflow-x: auto;white-space: nowrap;}#infoPanel .instruction {color: #FFD700;font-size: 14px;}`, document.head.appendChild(t)
            }(), t.innerHTML = '<div class="instruction">Isolator started. Click on element you want to isolate in the DOM</div>'
    }
    isolate()
})()