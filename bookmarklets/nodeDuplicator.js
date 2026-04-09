javascript: (function() {
    function nodeDuplicator() {
        let e = () => {
                let e = new(window.AudioContext || window.webkitAudioContext);
                return () => {
                    let t = e.createOscillator(),
                        o = e.createGain();
                    t.connect(o), o.connect(e.destination), t.frequency.setValueAtTime(200, e.currentTime), t.frequency.exponentialRampToValueAtTime(600, e.currentTime + .15), o.gain.setValueAtTime(0, e.currentTime), o.gain.linearRampToValueAtTime(.3, e.currentTime + .02), o.gain.exponentialRampToValueAtTime(.01, e.currentTime + .15), t.start(e.currentTime), t.stop(e.currentTime + .15)
                }
            },
            t = () => {
                let e = document.createElement("div");
                return e.style.cssText = `position: fixed;bottom: 20px;left: 20px;background: rgba(0, 30, 0, 0.8);color: #fff;padding: 10px;border-radius: 5px;font-family: monospace;z-index: 10000;pointer-events: none;max-width: 80%;word-wrap: break-word;`, e.id = "infoPanel", e.setAttribute("role", "status"), document.body.appendChild(e), e
            },
            o = () => {
                let e = document.createElement("div");
                return e.setAttribute("id", "duplicatorPanel"), e.style.cssText = `position: fixed;top: 20px;right: 20px;background: rgba(0, 60, 0, 0.8);color: #fff;padding: 15px;border-radius: 5px;font-family: monospace;z-index: 10000;pointer-events: none;max-width: 500px;word-wrap: break-word;`, document.body.appendChild(e), e
            },
            r = (e, t, o, r) => {
                let n = o * r,
                    i = Math.min(Math.max(Math.floor(15 * Math.sqrt(n) / 100), 15), 50),
                    l = Math.min(Math.max(Math.sqrt(n) / 15, 8), 20),
                    a = Math.min(Math.max(Math.min(o, r) / 2, 40), 150);
                for (let s = 0; s < i; s++) {
                    let d = document.createElement("div");
                    d.style.cssText = `position: fixed;left: ${e}px;top: ${t}px;width: ${l}px;height: ${l}px;background: rgba(100, 200, 255, 0.8);border-radius: 50%;pointer-events: none;z-index: 9999;`, document.body.appendChild(d);
                    let p = s / i * 2 * Math.PI,
                        u = a / 50 * (2 + 2 * Math.random()),
                        c = Math.cos(p) * u,
                        m = Math.sin(p) * u,
                        $ = .8,
                        f = 1,
                        g = .03 * (150 / a),
                        h = .04 * (a / 150),
                        v = () => {
                            if ($ <= 0) {
                                d.remove();
                                return
                            }
                            let e = parseFloat(d.style.left),
                                t = parseFloat(d.style.top);
                            d.style.left = `${e+c}px`, d.style.top = `${t+m}px`, $ -= g, f += h, d.style.opacity = $, d.style.transform = `scale(${f})`, requestAnimationFrame(v)
                        };
                    requestAnimationFrame(v)
                }
            },
            n = e => {
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
            };
        (() => {
            let i = t(),
                l = o(),
                a = e(),
                s = null,
                d = !0,
                p = !0,
                u = !0,
                c = {
                    keydown: null,
                    mouseover: null,
                    mouseout: null,
                    click: null
                },
                m = () => {
                    if (!p) {
                        l.style.display = "none";
                        return
                    }
                    l.style.display = "block", l.innerHTML = `Element Duplicator Controls:<br>- Hover over elements, click to duplicate<br>- OR arrow keys to navigate, ENTER to duplicate<br>- ALT + Click / ALT + ENTER: duplicates all sibling elements<br>- 'S' to toggle sound (${d?"ON":"OFF"})<br>- 'H' to toggle help panel<br>- 'Q' to quit duplicator`
                };
            m();
            let $ = document.createElement("style");
            $.textContent = `.element-duplicator-hover {outline: 4px dashed green !important;box-shadow: 0 0 0 2px white !important;outline-offset: -2px !important;}`, document.head.appendChild($);
            let f = e => !!e && e !== i && e !== l && (s && s.classList.remove("element-duplicator-hover"), (s = e).classList.add("element-duplicator-hover"), i.textContent = n(e), !0),
                g = (e, t) => {
                    if (!e || e === i || e === l) return;
                    let o = e.getBoundingClientRect(),
                        n = o.left + o.width / 2,
                        s = o.top + o.height / 2;
                    if (d && a(), r(n, s, o.width, o.height), t.altKey) {
                        let p = e.parentElement;
                        p && Array.from(p.children).filter(t => t !== e && t !== i && t !== l).forEach(e => {
                            let t = e.cloneNode(!0);
                            e.parentNode.insertBefore(t, e.nextSibling);
                            let o = e.getBoundingClientRect();
                            r(o.left + o.width / 2, o.top + o.height / 2, o.width, o.height)
                        })
                    } else {
                        let u = e.cloneNode(!0);
                        e.parentNode.insertBefore(u, e.nextSibling)
                    }
                },
                h = () => {
                    u = !1, document.removeEventListener("keydown", c.keydown, !0), document.removeEventListener("mouseover", c.mouseover), document.removeEventListener("mouseout", c.mouseout), document.removeEventListener("click", c.click), s && s.classList.remove("element-duplicator-hover"), i.remove(), l.remove(), $.remove()
                },
                v = e => {
                    if ("q" === e.key.toLowerCase()) {
                        h(), e.preventDefault(), e.stopPropagation();
                        return
                    }
                    if ("s" === e.key.toLowerCase()) {
                        d = !d, m(), e.preventDefault(), e.stopPropagation();
                        return
                    }
                    if ("h" === e.key.toLowerCase()) {
                        p = !p, m(), e.preventDefault(), e.stopPropagation();
                        return
                    }
                    if (!s) return;
                    let t = null;
                    switch (e.key.toLowerCase()) {
                        case "enter":
                            if (e.altKey) {
                                let o = s.parentElement;
                                o && Array.from(o.children).filter(e => e !== s && e !== i && e !== l).forEach(e => {
                                    let t = e.cloneNode(!0);
                                    e.parentNode.insertBefore(t, e.nextSibling);
                                    let o = e.getBoundingClientRect();
                                    r(o.left + o.width / 2, o.top + o.height / 2, o.width, o.height)
                                })
                            } else g(s, e);
                            e.preventDefault(), e.stopPropagation();
                            break;
                        case "arrowup":
                            t = s.parentElement;
                            break;
                        case "arrowdown":
                            let n = Array.from(s.children).filter(e => e.nodeType === Node.ELEMENT_NODE);
                            t = n[0];
                            break;
                        case "arrowleft":
                            t = s.previousElementSibling;
                            break;
                        case "arrowright":
                            t = s.nextElementSibling
                    }
                    t && (e.preventDefault(), e.stopPropagation(), f(t))
                };
            return c.keydown = v, document.addEventListener("keydown", v, !0), c.mouseover = e => {
                u && f(e.target)
            }, document.addEventListener("mouseover", c.mouseover), c.mouseout = e => {
                u && e.target === s && (e.target.classList.remove("element-duplicator-hover"), s = null, i.textContent = "")
            }, document.addEventListener("mouseout", c.mouseout), c.click = e => {
                u && e.target !== i && e.target !== l && (g(e.target, e), e.preventDefault(), e.stopPropagation())
            }, document.addEventListener("click", c.click), h
        })()
    }
    nodeDuplicator()
})()