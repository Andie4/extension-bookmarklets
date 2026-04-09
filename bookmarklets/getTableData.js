javascript: (function() {
    function getTableData() {
        function e(e) {
            t(), e.style.outline = "3px solid #007bff", e.style.outlineOffset = "2px", e.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        }

        function t() {
            let e = document.getElementsByTagName("table");
            Array.from(e).forEach(e => {
                e.style.outline = "", e.style.outlineOffset = ""
            })
        }

        function n(e, t) {
            return e.padEnd(t, " ")
        }

        function o(e) {
            let t = document.getElementById("table-selector-notification");
            t && t.remove();
            let o = document.getElementById("table-selector-dialog");
            o && (o.close(), o.remove()), setTimeout(function() {
                let t = Array.from(e.rows[0].cells),
                    o = t.map((e, t) => `${t+1} - ${e.textContent.trim()}`).join("\n"),
                    i = prompt(`Available columns:\n${o}\nWhich columns do you want? (Enter numbers separated by commas or spaces. Can be in different order than table column order)`);
                if (i) {
                    let a = i.split(/[\s,]+/).map(e => parseInt(e.trim())).filter(t => !isNaN(t) && t > 0 && t <= e.rows[0].cells.length);
                    a.length > 0 ? (function e(t, o) {
                        let l = function e(t, n) {
                                let o = {},
                                    l = Array.from(t.rows);
                                n.forEach(e => {
                                    let t = l[0].cells[e - 1].textContent.trim();
                                    o[e] = t.length
                                });
                                for (let r = 1; r < l.length; r++) n.forEach(e => {
                                    let t = l[r].cells[e - 1].textContent.trim();
                                    o[e] = Math.max(o[e] || 0, t.length)
                                });
                                return o
                            }(t, o),
                            r = Array.from(t.rows),
                            i = [],
                            a = o.map(e => {
                                let t = r[0].cells[e - 1].textContent.trim();
                                return n(t, l[e])
                            });
                        i.push(a.join(" | ")), i.push("-".repeat(i[0].length));
                        for (let s = 1; s < r.length; s++) {
                            let c = o.map(e => {
                                let t = r[s].cells[e - 1].textContent.trim();
                                return n(t, l[e])
                            });
                            i.push(c.join(" | "))
                        }
                        let d = i.join("\n");
                        return console.log(d), confirm("VIEW CONSOLE for the formatted output\n\nWant to copy the output to the clipboard too?") && function e(t) {
                            navigator.clipboard.writeText(t).then(function() {
                                console.log("Text successfully copied to clipboard")
                            }).catch(function(e) {
                                console.error("Failed to copy text: ", e)
                            })
                        }(d), d
                    }(e, a), document.removeEventListener("click", l), document.removeEventListener("keypress", r)) : alert("Please enter valid column numbers")
                }
            }, 200)
        }

        function l(e) {
            let t = function e(t) {
                let n = t;
                for (; n && "TABLE" !== n.tagName;) n = n.parentElement;
                return n
            }(e.target);
            t && o(t)
        }

        function r(n) {
            "k" === n.key.toLowerCase() && function n() {
                let l = document.getElementsByTagName("table");
                if (0 === l.length) {
                    alert("No tables found on the page");
                    return
                }
                let r = function e() {
                        let n = document.createElement("dialog");
                        n.id = "table-selector-dialog", n.style.cssText = `padding: 20px;border-radius: 8px;border: 1px solid #ccc;`;
                        let o = document.createElement("button");
                        return o.textContent = "CLOSE", o.style.cssText = `position: absolute;right: 10px;top: 10px;background: none;border: none;font-size: 24px;cursor: pointer;padding: 5px;`, o.onclick = () => {
                            n.close(), n.remove()
                        }, n.appendChild(o), n.addEventListener("close", () => {
                            t(), n.remove()
                        }), n
                    }(),
                    i = document.createElement("div");
                i.innerHTML = '<h2 style="margin-bottom: 20px;">Available Tables</h2>', Array.from(l).forEach((n, l) => {
                    let r = n.querySelector("caption")?.textContent,
                        a = function e(t) {
                            let n = t.previousElementSibling;
                            for (; n;) {
                                if (/^H[1-6]$/.test(n.tagName)) return n.textContent;
                                n = n.previousElementSibling
                            }
                            return null
                        }(n),
                        s = r || a || `Table ${l+1}`,
                        c = document.createElement("div");
                    c.style.cssText = "margin-bottom: 15px; padding: 10px; border: 1px solid #eee; border-radius: 4px;", c.classList.add("tableEntry");
                    let d = document.createElement("button");
                    d.textContent = "Select this table", d.onclick = () => o(n), [c, d].forEach(o => {
                        o.addEventListener("mouseenter", () => e(n)), o.addEventListener("mouseleave", t), o.addEventListener("focus", () => e(n)), o.addEventListener("blur", t)
                    }), c.innerHTML = `<h2>${s}</h2><p>Columns: ${n.rows[0].cells.length}</p>`, c.appendChild(d), i.appendChild(c)
                }), r.appendChild(i), document.body.appendChild(r), r.showModal()
            }()
        }
        console.clear(), ! function e() {
                let t = document.createElement("div");
                return t.setAttribute("role", "status"), t.id = "table-selector-notification", document.body.appendChild(t), t
            }(), setTimeout(function e() {
                let t = document.getElementById("table-selector-notification");
                t.textContent = "Press K to list tables, or click to select a table", t.style.cssText = `position: fixed;top: 20px;right: 20px;background-color: rgba(0, 0, 0, 0.8);color: white;padding: 10px 20px;border-radius: 5px;font-family: Arial, sans-serif;font-size: 14px;z-index: 10000;pointer-events: none;`
            }, 300),
            function e() {
                let t = document.createElement("style");
                t.setAttribute("id", "a11yToolsStyles"), t.textContent = `#table-selector-dialog {max-width:50%;}#table-selector-dialog .tableEntry button {background-color: #007bff;color: white;border: none;padding: 5px 10px;border-radius: 4px;cursor: pointer;}#table-selector-dialog .tableEntry h2 {margin:0;}#table-selector-dialog button:focus {outline:2px solid #007bff;outline-offset:4px;}`, document.head.appendChild(t)
            }(), document.addEventListener("click", l), document.addEventListener("keypress", r)
    }
    getTableData()
})()