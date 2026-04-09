javascript: (function() {
    function nodeLinkOpener() {
        let e = () => {
                let e = document.createElement("div");
                return e.style.cssText = `position: fixed;bottom: 20px;left: 20px;background: rgba(0, 30, 60, 0.9);color: #fff;padding: 10px;border-radius: 5px;font-family: monospace;z-index: 10000;pointer-events: none;max-width: 80%;word-wrap: break-word;`, e.id = "linkOpenerInfoPanel", e.setAttribute("role", "status"), document.body.appendChild(e), e
            },
            t = () => {
                let e = document.createElement("div");
                return e.setAttribute("id", "linkOpenerStatusPanel"), e.style.cssText = `position: fixed;top: 20px;right: 20px;background: rgba(0, 60, 120, 0.9);color: #fff;padding: 15px;border-radius: 5px;font-family: monospace;z-index: 10000;pointer-events: none;max-width: 500px;word-wrap: break-word;`, document.body.appendChild(e), e
            },
            o = e => {
                if (!e) return "";
                if (e.id) return `//*[@id="${e.id}"]`;
                let t = [];
                for (; e && e.nodeType === Node.ELEMENT_NODE;) {
                    let o = e.nodeName.toLowerCase(),
                        r = e,
                        n = 1;
                    for (; r = r.previousSibling;) r.nodeType === Node.ELEMENT_NODE && r.nodeName === e.nodeName && n++;
                    n > 1 && (o += `[${n}]`), t.unshift(o), e = e.parentNode
                }
                return `/${t.join("/")}`
            },
            r = e => {
                let t = [".zip", ".rar", ".7z", ".tar", ".gz", ".tgz", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".exe", ".dmg", ".pkg", ".deb", ".rpm", ".iso", ".img", ".apk", ".ipa", ".mp3", ".mp4", ".avi", ".mkv", ".mov", ".wav", ".flac", ".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg", ".webp", ".json", ".xml", ".csv"];
                try {
                    let o = new URL(e, window.location.href),
                        r = o.pathname.toLowerCase(),
                        n = o.search.toLowerCase(),
                        l = t.some(e => r.endsWith(e)),
                        i = t.some(e => n.includes(e));
                    return !l && !i
                } catch (a) {
                    return !1
                }
            },
            n = e => {
                if (!e) return 0;
                let t = e.querySelectorAll("a[href]");
                return Array.from(t).filter(e => r(e.href)).length
            };
        (() => {
            let l = e(),
                i = t(),
                a = null,
                s = !0,
                p = !0,
                d = {
                    keydown: null,
                    mouseover: null,
                    mouseout: null,
                    click: null
                },
                u = () => {
                    if (!s) {
                        i.style.display = "none";
                        return
                    }
                    i.style.display = "block", i.innerHTML = `Link Opener Controls:<br>- Hover over elements, click to open links<br>- OR arrow keys to navigate, ENTER to open links<br>- 'H' to toggle help panel<br>- 'Q' to quit`
                };
            u();
            let c = document.createElement("style");
            c.textContent = `.link-opener-hover {outline: 4px dashed #4A90E2 !important;box-shadow: 0 0 0 2px white !important;outline-offset: -2px !important;}`, document.head.appendChild(c);
            let m = e => {
                    if (!e || e === l || e === i) return !1;
                    a && a.classList.remove("link-opener-hover"), (a = e).classList.add("link-opener-hover");
                    let t = n(e),
                        r = o(e);
                    return l.textContent = `${r} [${t} link${1!==t?"s":""}]`, !0
                },
                f = e => {
                    if (!e || e === l || e === i) return;
                    let t = e.querySelectorAll("a[href]"),
                        o = Array.from(t).filter(e => r(e.href));
                    if (0 === o.length) {
                        alert("No web page links found in the selected element.");
                        return
                    }
                    let n = o.map(e => e.href).join("\n");
                    console.log("=== Found Links ==="), console.log(n), console.log("===================");
                    let a = confirm(`Found ${o.length} web page link(s).Copy list to clipboard?`);
                    a && navigator.clipboard.writeText(n).then(() => {
                        console.log("Links copied to clipboard!")
                    }).catch(e => {
                        console.error("Failed to copy to clipboard:", e), alert("Failed to copy to clipboard. Links are available in the console.")
                    });
                    let s = confirm(`Open all ${o.length} link(s) in new tabs?`);
                    s && (o.forEach((e, t) => {
                        setTimeout(() => {
                            window.open(e.href, "_blank")
                        }, 50 * t)
                    }), alert(`Opened ${o.length} links in new tabs.`)), v()
                },
                v = () => {
                    p = !1, document.removeEventListener("keydown", d.keydown, !0), document.removeEventListener("mouseover", d.mouseover), document.removeEventListener("mouseout", d.mouseout), document.removeEventListener("click", d.click), a && a.classList.remove("link-opener-hover"), l.remove(), i.remove(), c.remove()
                },
                k = e => {
                    if ("q" === e.key.toLowerCase()) {
                        v(), e.preventDefault(), e.stopPropagation();
                        return
                    }
                    if ("h" === e.key.toLowerCase()) {
                        s = !s, u(), e.preventDefault(), e.stopPropagation();
                        return
                    }
                    if (!a) return;
                    let t = null;
                    switch (e.key.toLowerCase()) {
                        case "enter":
                            f(a), e.preventDefault(), e.stopPropagation();
                            break;
                        case "arrowup":
                            t = a.parentElement;
                            break;
                        case "arrowdown":
                            let o = Array.from(a.children).filter(e => e.nodeType === Node.ELEMENT_NODE);
                            t = o[0];
                            break;
                        case "arrowleft":
                            t = a.previousElementSibling;
                            break;
                        case "arrowright":
                            t = a.nextElementSibling
                    }
                    t && (e.preventDefault(), e.stopPropagation(), m(t))
                };
            d.keydown = k, document.addEventListener("keydown", k, !0), d.mouseover = e => {
                p && m(e.target)
            }, document.addEventListener("mouseover", d.mouseover), d.mouseout = e => {
                p && e.target === a && (e.target.classList.remove("link-opener-hover"), a = null, l.textContent = "")
            }, document.addEventListener("mouseout", d.mouseout), d.click = e => {
                p && e.target !== l && e.target !== i && (f(e.target), e.preventDefault(), e.stopPropagation())
            }, document.addEventListener("click", d.click)
        })()
    }
    nodeLinkOpener()
})()