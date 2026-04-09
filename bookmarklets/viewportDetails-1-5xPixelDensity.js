javascript: (function() {
    "use strict";
    ! function() {
        var e;
        let t = "a11y-tools-viewport-details",
            n = null,
            o = !1,
            i, r, a, s, d = 0,
            l = 0,
            p = document.createElement("div");

        function c(e) {
            if (e.target.classList.contains("close-button")) return;
            let n = e.target;
            for (; null != n;) {
                if (n.id === t) {
                    o = !0, a = e.clientX - d, s = e.clientY - l;
                    break
                }
                n = n.parentElement
            }
        }

        function u(e) {
            o && (e.preventDefault(), i = e.clientX - a, r = e.clientY - s, d = i, l = r, n.style.transform = `translate(${i}px, ${r}px)`)
        }

        function h() {
            a = i, s = r, o = !1
        }

        function m() {
            n && n.parentNode && (n.parentNode.removeChild(n), n = null), window.removeEventListener("resize", _), document.removeEventListener("keydown", $), document.removeEventListener("mousedown", c), document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", h), window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", v)
        }

        function $(e) {
            "q" === e.key.toLowerCase() && m()
        }

        function v() {
            x(), f()
        }

        function x() {
            let e = document.getElementById(t);
            e && e.remove();
            let o = function e() {
                let t = window.devicePixelRatio,
                    n = window.innerWidth,
                    o = window.innerHeight,
                    i = Math.round(t / 1.5 * 100),
                    r = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
                return {
                    pixelRatio: t,
                    width: n,
                    height: o,
                    zoom: i,
                    inverseScale: 100 / i,
                    isDefaultZoom: 1.5 === t,
                    darkMode: r
                }
            }();
            if (!n) {
                (n = document.createElement("div")).id = t;
                let i = document.createElement("button");
                i.className = "close-button", i.innerHTML = "\xd7", i.addEventListener("click", m);
                let r = document.createElement("div");
                r.className = "panel-content", n.appendChild(i), n.appendChild(r), document.body.appendChild(n), document.addEventListener("mousedown", c), document.addEventListener("mousemove", u), document.addEventListener("mouseup", h), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", v)
            }
            n.style.zoom = o.inverseScale, n.querySelector(".panel-content").innerHTML = function e(t) {
                let n = "";
                if (t.isDefaultZoom) n = `Viewport size: ${Math.round(t.width)}px wide \xd7 ${Math.round(t.height)}px high<br>Page is not zoomed`;
                else {
                    let o = Math.round(t.zoom / 100 * t.width),
                        i = Math.round(t.zoom / 100 * t.height);
                    n = `Page zoom is not at default 100%<br>Zoom level: ${t.zoom}%<br>Viewport size: ${o}px wide \xd7 ${i}px high<br>Equivalent to: ${parseInt(o*(100/t.zoom))}px wide \xd7 ${parseInt(i*(100/t.zoom))}px high`
                }
                return n += `<br>Color scheme: ${t.darkMode?"Dark mode":"Light mode"}`, document.body.classList.contains("text-spacing-applied") && (n += "<br>* Text spacing applied *"), n
            }(o), n.parentNode || document.body.appendChild(n)
        }

        function f() {
            p.innerHTML = n.querySelector(".panel-content").innerHTML
        }

        function _() {
            clearTimeout(b), clearTimeout(g), b = setTimeout(x, 50), g = setTimeout(f, 1e3)
        }
        p.id = "a11y-tools-status", p.setAttribute("role", "status"), p.classList.add("visually-hidden"), document.body.appendChild(p);
        let b, g;
        (e = document.createElement("style")).setAttribute("id", "appStyles"), e.textContent = `.visually-hidden {clip-path: inset(100%);clip: rect(1px, 1px, 1px, 1px);height: 1px;overflow: hidden;position: absolute;white-space: nowrap;width: 1px;}#a11y-tools-viewport-details {position: fixed;bottom: 20px;right: 20px;background-color: black;color: white;border: 4px solid white;padding: 10px;font-family: Arial, sans-serif;font-size: 14px;border-radius: 8px;z-index: 100000;box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);cursor: move;user-select: none;transform: translate(0px, 0px);}#a11y-tools-viewport-details .close-button {position: absolute;top: 5px;right: 5px;background: white;color: black;border: none;border-radius: 50%;width: 20px;height: 20px;cursor: pointer;display: flex;align-items: center;justify-content: center;font-weight: bold;font-size: 12px;padding: 0;line-height: 1;}#a11y-tools-viewport-details .panel-content {margin-top: 15px;}`, document.head.appendChild(e), x(), window.addEventListener("resize", _), document.addEventListener("keydown", $)
    }()
})()