javascript: (function() {
    const createPoofSound = () => {
            let e = new(window.AudioContext || window.webkitAudioContext);
            return () => {
                let t = e.createOscillator(),
                    n = e.createGain();
                t.connect(n), n.connect(e.destination), t.frequency.setValueAtTime(400, e.currentTime), t.frequency.exponentialRampToValueAtTime(50, e.currentTime + .1), n.gain.setValueAtTime(0, e.currentTime), n.gain.linearRampToValueAtTime(.3, e.currentTime + .02), n.gain.exponentialRampToValueAtTime(.01, e.currentTime + .1), t.start(e.currentTime), t.stop(e.currentTime + .1)
            }
        },
        createInfoPanel = () => {
            let e = document.createElement("div");
            return e.style.cssText = `position: fixed;bottom: 20px;left: 20px;background: rgba(30, 0, 0, 0.8);color: #fff;padding: 10px;border-radius: 5px;font-family: monospace;z-index: 10000;pointer-events: none;max-width: 80%;word-wrap: break-word;`, e.id = "infoPanel", e.setAttribute("role", "status"), document.body.appendChild(e), e
        },
        createStatusPanel = () => {
            let e = document.createElement("div");
            return e.setAttribute("id", "zapperPanel"), e.style.cssText = `position: fixed;top: 20px;right: 20px;background: rgba(60, 0, 0, 0.8);color: #fff;padding: 15px;border-radius: 5px;font-family: monospace;z-index: 10000;pointer-events: none;max-width: 300px;word-wrap: break-word;`, document.body.appendChild(e), e
        },
        createSmokeEffect = (e, t, n, o) => {
            let r = n * o,
                i = Math.min(Math.max(Math.floor(15 * Math.sqrt(r) / 100), 15), 50),
                a = Math.min(Math.max(Math.sqrt(r) / 10, 10), 30),
                l = Math.min(Math.max(Math.min(n, o) / 2, 50), 200);
            for (let s = 0; s < i; s++) {
                let p = document.createElement("div");
                p.style.cssText = `position: fixed;left: ${e}px;top: ${t}px;width: ${a}px;height: ${a}px;background: rgba(128, 128, 128, 0.5);border-radius: 50%;pointer-events: none;z-index: 9999;`, document.body.appendChild(p);
                let d = s / i * 2 * Math.PI,
                    u = l / 50 * (2 + 2 * Math.random()),
                    m = Math.cos(d) * u,
                    c = Math.sin(d) * u,
                    $ = .5,
                    f = 1,
                    g = .02 * (200 / l),
                    v = .05 * (l / 200),
                    h = () => {
                        if ($ <= 0) {
                            p.remove();
                            return
                        }
                        let e = parseFloat(p.style.left),
                            t = parseFloat(p.style.top);
                        p.style.left = `${e+m}px`, p.style.top = `${t+c}px`, $ -= g, f += v, p.style.opacity = $, p.style.transform = `scale(${f})`, requestAnimationFrame(h)
                    };
                requestAnimationFrame(h)
            }
        },
        getXPath = e => {
            if (!e) return "";
            if (e.id) return `//*[@id="${e.id}"]`;
            let t = [];
            for (; e && e.nodeType === Node.ELEMENT_NODE;) {
                let n = e.nodeName.toLowerCase(),
                    o = e,
                    r = 1;
                for (; o = o.previousSibling;) o.nodeType === Node.ELEMENT_NODE && o.nodeName === e.nodeName && r++;
                r > 1 && (n += `[${r}]`), t.unshift(n), e = e.parentNode
            }
            return `/${t.join("/")}`
        },
        initElementZapper = () => {
            let e = createInfoPanel(),
                t = createStatusPanel(),
                n = createPoofSound(),
                o = null,
                r = !0,
                i = !0,
                a = !0,
                l = {
                    keydown: null,
                    mouseover: null,
                    mouseout: null,
                    click: null
                },
                s = () => {
                    if (!i) {
                        t.style.display = "none";
                        return
                    }
                    t.style.display = "block", t.innerHTML = `Element Zapper Controls:<br>- Hover over elements<br>- Click to zap<br>- ALT + Click / ALT + ENTER = zap all sibling elements<br>- Arrow keys to navigate<br>- 'S' to toggle sound (${r?"ON":"OFF"})<br>- 'H' to toggle help panel`
                };
            s();
            let p = document.createElement("style");
            p.textContent = `.element-zapper-hover {outline: 4px dashed black !important;box-shadow: 0 0 0 2px white !important;outline-offset: -2px !important;}`, document.head.appendChild(p);
            let d = n => !!n && n !== e && n !== t && (o && o.classList.remove("element-zapper-hover"), (o = n).classList.add("element-zapper-hover"), e.textContent = getXPath(n), !0),
                u = (i, a) => {
                    if (!i || i === e || i === t) return;
                    let l = i.getBoundingClientRect(),
                        s = l.left + l.width / 2,
                        p = l.top + l.height / 2;
                    r && n(), createSmokeEffect(s, p, l.width, l.height), setTimeout(() => {
                        if (a.altKey) {
                            let t = i.parentElement;
                            t && Array.from(t.children).filter(e => e !== i).forEach(e => {
                                createSmokeEffect(e.getBoundingClientRect().left + e.getBoundingClientRect().width / 2, e.getBoundingClientRect().top + e.getBoundingClientRect().height / 2, e.getBoundingClientRect().width, e.getBoundingClientRect().height), e.remove()
                            })
                        } else i.remove();
                        e.textContent = "", o = null
                    }, 100)
                },
                m = () => {
                    a = !1, document.removeEventListener("keydown", l.keydown, !0), document.removeEventListener("mouseover", l.mouseover), document.removeEventListener("mouseout", l.mouseout), document.removeEventListener("click", l.click), o && o.classList.remove("element-zapper-hover"), e.remove(), t.remove();
                    let n = document.head.querySelector("style[data-zapper-style]");
                    n && n.remove()
                },
                c = e => {
                    if ("q" === e.key.toLowerCase()) {
                        m(), e.preventDefault(), e.stopPropagation();
                        return
                    }
                    if ("s" === e.key.toLowerCase()) {
                        r = !r, s(), e.preventDefault(), e.stopPropagation();
                        return
                    }
                    if ("h" === e.key.toLowerCase()) {
                        i = !i, s(), e.preventDefault(), e.stopPropagation();
                        return
                    }
                    if (!o) return;
                    let t = null;
                    switch (e.key.toLowerCase()) {
                        case "enter":
                            if (e.altKey) {
                                let n = o.parentElement;
                                n && Array.from(n.children).filter(e => e !== o).forEach(e => {
                                    createSmokeEffect(e.getBoundingClientRect().left + e.getBoundingClientRect().width / 2, e.getBoundingClientRect().top + e.getBoundingClientRect().height / 2, e.getBoundingClientRect().width, e.getBoundingClientRect().height), e.remove()
                                })
                            } else u(o, e);
                            e.preventDefault(), e.stopPropagation();
                            break;
                        case "arrowup":
                            t = o.parentElement;
                            break;
                        case "arrowdown":
                            let a = Array.from(o.children).filter(e => e.nodeType === Node.ELEMENT_NODE);
                            t = a[0];
                            break;
                        case "arrowleft":
                            t = o.previousElementSibling;
                            break;
                        case "arrowright":
                            t = o.nextElementSibling
                    }
                    t && (e.preventDefault(), e.stopPropagation(), d(t))
                };
            return l.keydown = c, document.addEventListener("keydown", c, !0), l.mouseover = e => {
                a && d(e.target)
            }, document.addEventListener("mouseover", l.mouseover), l.mouseout = t => {
                a && t.target === o && (t.target.classList.remove("element-zapper-hover"), o = null, e.textContent = "")
            }, document.addEventListener("mouseout", l.mouseout), l.click = n => {
                a && n.target !== e && n.target !== t && (u(n.target, n), n.preventDefault(), n.stopPropagation())
            }, document.addEventListener("click", l.click), () => {
                document.removeEventListener("keydown", c, !0), document.removeEventListener("mouseover", d), document.removeEventListener("mouseout", d), document.removeEventListener("click", u), p.remove(), e.remove(), t.remove()
            }
        };
    initElementZapper()
})()