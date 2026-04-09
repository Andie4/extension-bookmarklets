javascript: (function() {
    class FocusIndicator {
        constructor() {
            this.indicator = null, this.textPanel = null, this.isEnabled = !0, this.instanceId = Date.now(), this.maxTextLength = 30, this.focusInHandler = this.handleFocusIn.bind(this), this.focusOutHandler = this.handleFocusOut.bind(this), this.keyHandler = this.handleKeyPress.bind(this), this.init()
        }
        init() {
            this.createIndicator(), this.createTextPanel(), document.addEventListener("focusin", this.focusInHandler), document.addEventListener("focusout", this.focusOutHandler), document.addEventListener("keydown", this.keyHandler), document.activeElement && document.activeElement !== document.body && this.showIndicator(document.activeElement)
        }
        createIndicator() {
            let t = document.querySelectorAll('[id^="focus-indicator"]');
            t.forEach(t => t.remove()), this.indicator = document.createElement("div"), this.indicator.id = `focus-indicator-${this.instanceId}`, this.indicator.className = "focus-tracker-indicator", this.indicator.setAttribute("style", `position: fixed !important;pointer-events: none !important;border: 2px solid white !important;outline: 2px solid red !important;background-color: transparent !important;z-index: 999998 !important;display: none !important;box-sizing: border-box !important;margin: 0 !important;padding: 0 !important;`), document.body.appendChild(this.indicator), console.log("Focus indicator created:", {
                id: this.indicator.id,
                border: this.indicator.style.border,
                outline: this.indicator.style.outline,
                computed: {
                    border: getComputedStyle(this.indicator).border,
                    outline: getComputedStyle(this.indicator).outline
                }
            })
        }
        createTextPanel() {
            let t = document.querySelectorAll('[id^="focus-text-panel"]');
            t.forEach(t => t.remove()), this.textPanel = document.createElement("div"), this.textPanel.id = `focus-text-panel-${this.instanceId}`, this.textPanel.className = "focus-tracker-text-panel", Object.assign(this.textPanel.style, {
                position: "fixed",
                display: "none",
                backgroundColor: "black",
                color: "white",
                padding: "4px 8px",
                fontFamily: "monospace",
                fontSize: "12px",
                zIndex: "999999",
                borderRadius: "3px",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                maxWidth: "300px",
                boxSizing: "border-box"
            }), document.body.appendChild(this.textPanel), console.log("Text panel created:", {
                id: this.textPanel.id,
                element: this.textPanel,
                parent: this.textPanel.parentNode
            })
        }
        handleFocusIn(t) {
            this.isEnabled && this.showIndicator(t.target)
        }
        handleFocusOut(t) {
            this.isEnabled && this.hideIndicator()
        }
        handleKeyPress(t) {
            ("q" === t.key || "Q" === t.key) && this.disable()
        }
        getElementText(t) {
            let e = t.textContent || t.value || t.placeholder || t.alt || "";
            (e = e.trim().replace(/\s+/g, " ")).length > this.maxTextLength && (e = e.substring(0, this.maxTextLength) + "...");
            let i = this.getElementRole(t);
            return i && (e = e ? `${e} (${i})` : `(${i})`), e || `<${t.tagName.toLowerCase()}>`
        }
        getElementRole(t) {
            let e = t.getAttribute("role");
            if (e) return e;
            let i = t.tagName.toLowerCase(),
                n = t.type ? t.type.toLowerCase() : "";
            return "input" === i ? "checkbox" === n ? "checkbox" : "radio" === n ? "radio" : "button" === n || "submit" === n ? "button" : "input" : ({
                button: "button",
                a: "link",
                input: "button" === n || "submit" === n ? "button" : "input",
                textarea: "input",
                select: "select",
                option: "option",
                checkbox: "checkbox",
                radio: "radio"
            })[i] || null
        }
        positionTextPanel(t, e) {
            let i = this.getElementText(t);
            console.log("Positioning text panel:", {
                element: t.tagName,
                text: i
            }), this.textPanel.textContent = i, this.textPanel.style.display = "block", this.textPanel.style.visibility = "hidden", this.textPanel.style.position = "fixed", this.textPanel.style.left = "0px", this.textPanel.style.top = "0px", this.textPanel.offsetHeight;
            let n = this.textPanel.getBoundingClientRect(),
                o = window.innerWidth;
            window.innerHeight, console.log("Panel dimensions:", n);
            let s = e.left,
                a = e.top - n.height - 5;
            a < 0 ? (a = e.bottom + 5, console.log("Positioning below element")) : console.log("Positioning above element"), s + n.width > o && (s = o - n.width - 10), s < 10 && (s = 10), console.log("Final position:", {
                left: s,
                top: a
            }), Object.assign(this.textPanel.style, {
                position: "fixed",
                left: `${s}px`,
                top: `${a}px`,
                display: "block",
                visibility: "visible",
                backgroundColor: "black",
                color: "white",
                padding: "4px 8px",
                fontFamily: "monospace",
                fontSize: "12px",
                zIndex: "999999",
                borderRadius: "3px",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                maxWidth: "300px"
            }), console.log("Text panel styled and positioned")
        }
        handleFocusOut(t) {
            this.isEnabled && this.hideIndicator()
        }
        handleKeyPress(t) {
            ("q" === t.key || "Q" === t.key) && this.disable()
        }
        showIndicator(t) {
            if (!this.isEnabled || !t || t === document.body) {
                this.hideIndicator();
                return
            }
            let e = t.getBoundingClientRect(),
                i = `position: fixed !important;pointer-events: none !important;border: 2px solid white !important;outline: 2px solid red !important;background-color: transparent !important;z-index: 999998 !important;display: block !important;box-sizing: border-box !important;margin: 0 !important;padding: 0 !important;left: ${e.left}px !important;top: ${e.top}px !important;width: ${e.width}px !important;height: ${e.height}px !important;`;
            this.indicator.setAttribute("style", i), this.positionTextPanel(t, e), this.indicator.offsetHeight, console.log("Indicator positioned:", {
                element: t.tagName,
                rect: e,
                styles: getComputedStyle(this.indicator).border
            })
        }
        hideIndicator() {
            this.indicator && (this.indicator.style.display = "none"), this.textPanel && (this.textPanel.style.display = "none")
        }
        updatePosition() {
            this.isEnabled && document.activeElement && document.activeElement !== document.body && this.showIndicator(document.activeElement)
        }
        disable() {
            this.isEnabled = !1, this.hideIndicator(), document.removeEventListener("keydown", this.keyHandler), console.log("Focus Indicator disabled. Press Q was detected and key listener removed.")
        }
        destroy() {
            document.removeEventListener("focusin", this.focusInHandler), document.removeEventListener("focusout", this.focusOutHandler), document.removeEventListener("keydown", this.keyHandler), this.indicator && this.indicator.parentNode && this.indicator.parentNode.removeChild(this.indicator), this.textPanel && this.textPanel.parentNode && this.textPanel.parentNode.removeChild(this.textPanel);
            let t = document.querySelectorAll('[id^="focus-indicator"]');
            t.forEach(t => t.remove());
            let e = document.querySelectorAll('[id^="focus-text-panel"]');
            e.forEach(t => t.remove()), this.indicator = null, this.textPanel = null, this.isEnabled = !1, console.log("Focus indicator destroyed and cleaned up")
        }
    }
    window.focusTracker && window.focusTracker.destroy();
    const focusTracker = new FocusIndicator;
    window.focusTracker = focusTracker, window.addEventListener("resize", () => focusTracker.updatePosition()), window.addEventListener("scroll", () => focusTracker.updatePosition()), console.log('Focus Indicator initialized. Focused elements will now be highlighted with a white border and red outline. Press "Q" to disable.')
})()