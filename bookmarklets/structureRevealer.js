javascript: (function() {
    'use strict';
    const TOOL_ID = 'structure-revealer-host';
    const existingHost = document.getElementById(TOOL_ID);
    if (existingHost) {
        existingHost._cleanup();
        existingHost.remove();
        return;
    }
    const PALETTE = {
        header: {
            highlight: '#FF6B35',
            labelBg: '#B94B00',
            labelFg: '#ffffff'
        },
        main: {
            highlight: '#4ECDC4',
            labelBg: '#006E68',
            labelFg: '#ffffff'
        },
        footer: {
            highlight: '#FFE66D',
            labelBg: '#7A6C00',
            labelFg: '#ffffff'
        },
        aside: {
            highlight: '#C77DFF',
            labelBg: '#5C00A3',
            labelFg: '#ffffff'
        },
        nav: {
            highlight: '#74D7CB',
            labelBg: '#007A73',
            labelFg: '#ffffff'
        },
        section: {
            highlight: '#F4A261',
            labelBg: '#7A3B00',
            labelFg: '#ffffff'
        },
        table: {
            highlight: '#FF9F1C',
            labelBg: '#8B5000',
            labelFg: '#ffffff'
        },
        list: {
            highlight: '#A8DADC',
            labelBg: '#005F7A',
            labelFg: '#ffffff'
        },
        tabs: {
            highlight: '#E63946',
            labelBg: '#9B1C23',
            labelFg: '#ffffff'
        },
        h1: {
            highlight: '#FF4D6D',
            labelBg: '#8B0020',
            labelFg: '#ffffff'
        },
        h2: {
            highlight: '#FF8500',
            labelBg: '#7A3D00',
            labelFg: '#ffffff'
        },
        h3: {
            highlight: '#FFD166',
            labelBg: '#6B4E00',
            labelFg: '#ffffff'
        },
        h4: {
            highlight: '#06D6A0',
            labelBg: '#005C40',
            labelFg: '#ffffff'
        },
        h5: {
            highlight: '#118AB2',
            labelBg: '#003F5C',
            labelFg: '#ffffff'
        },
        h6: {
            highlight: '#9B5DE5',
            labelBg: '#3D0070',
            labelFg: '#ffffff'
        },
    };
    const ELEMENT_CONFIG = {
        header: {
            selector: 'header, [role="banner"]',
            displayTag: el => el.tagName === 'HEADER' ? '<header>' : `<${el.tagName.toLowerCase()}>[banner]`,
        },
        main: {
            selector: 'main, [role="main"]',
            displayTag: el => el.tagName === 'MAIN' ? '<main>' : `<${el.tagName.toLowerCase()}>[main]`,
        },
        footer: {
            selector: 'footer, [role="contentinfo"]',
            displayTag: el => el.tagName === 'FOOTER' ? '<footer>' : `<${el.tagName.toLowerCase()}>[contentinfo]`,
        },
        aside: {
            selector: 'aside, [role="complementary"]',
            displayTag: el => el.tagName === 'ASIDE' ? '<aside>' : `<${el.tagName.toLowerCase()}>[complementary]`,
        },
        nav: {
            selector: 'nav, [role="navigation"]',
            displayTag: el => el.tagName === 'NAV' ? '<nav>' : `<${el.tagName.toLowerCase()}>[navigation]`,
        },
        section: {
            selector: 'section[aria-label], section[aria-labelledby], article[aria-label], article[aria-labelledby], [role="region"][aria-label], [role="region"][aria-labelledby], [role="article"][aria-label], [role="article"][aria-labelledby]',
            filter: el => {
                const labelledBy = el.getAttribute('aria-labelledby');
                if (labelledBy !== null) {
                    return labelledBy.trim().split(/\s+/).some(id => {
                        const ref = document.getElementById(id);
                        return ref && ref.textContent.trim().length > 0;
                    });
                }
                const label = el.getAttribute('aria-label');
                if (label !== null) {
                    return label.trim().length > 0;
                }
                return false;
            },
            displayTag: el => {
                const t = el.tagName.toLowerCase();
                if (t === 'section') return '<section>';
                if (t === 'article') return '<article>';
                return `<${t}>[${el.tagName === 'SECTION' ? 'region' : 'article'}]`;
            },
        },
        table: {
            selector: 'table, [role="table"], [role="grid"]',
            displayTag: el => el.tagName === 'TABLE' ? '<table>' : `<${el.tagName.toLowerCase()}>[table]`,
            children: [{
                selector: 'th',
                label: el => '<th>'
            }, {
                selector: 'td',
                label: () => null
            }, ],
        },
        list: {
            selector: 'ul, ol, dl, [role="list"]',
            displayTag: el => {
                const t = el.tagName.toLowerCase();
                return ['ul', 'ol', 'dl'].includes(t) ? `<${t}>` : `<${t}>[list]`;
            },
            children: [{
                selector: 'li',
                label: () => null
            }, {
                selector: 'dt',
                label: () => null
            }, {
                selector: 'dd',
                label: () => null
            }, ],
        },
        tabs: {
            selector: '[role="tablist"]',
            displayTag: el => `<${el.tagName.toLowerCase()}>[tablist]`,
        },
        h1: {
            selector: 'h1',
            displayTag: () => '<h1>'
        },
        h2: {
            selector: 'h2',
            displayTag: () => '<h2>'
        },
        h3: {
            selector: 'h3',
            displayTag: () => '<h3>'
        },
        h4: {
            selector: 'h4',
            displayTag: () => '<h4>'
        },
        h5: {
            selector: 'h5',
            displayTag: () => '<h5>'
        },
        h6: {
            selector: 'h6',
            displayTag: () => '<h6>'
        },
    };
    const active = {};
    const overlays = [];

    function getAccessibleName(el) {
        if (el.getAttribute('aria-labelledby')) {
            const text = el.getAttribute('aria-labelledby').split(/\s+/).map(id => {
                const t = document.getElementById(id);
                return t ? t.textContent.trim() : '';
            }).filter(Boolean).join(' ');
            if (text) return text;
        }
        if (el.getAttribute('aria-label')) return el.getAttribute('aria-label');
        if (el.getAttribute('title')) return el.getAttribute('title');
        const caption = el.querySelector(':scope > caption');
        if (caption) return caption.textContent.trim();
        const heading = el.querySelector('h1,h2,h3,h4,h5,h6');
        if (heading) return heading.textContent.trim();
        if (el.id) return `#${el.id}`;
        return '';
    }

    function getAriaName(el) {
        const labelledBy = el.getAttribute('aria-labelledby');
        if (labelledBy) {
            const text = labelledBy.split(/\s+/).map(id => {
                const t = document.getElementById(id);
                return t ? t.textContent.trim() : '';
            }).filter(Boolean).join(' ');
            if (text) return text;
        }
        const label = el.getAttribute('aria-label');
        if (label && label.trim()) return label.trim();
        return '';
    }

    function highlightDepth(el) {
        let depth = 0;
        let node = el.parentElement;
        while (node) {
            for (const key of Object.keys(PALETTE)) {
                if (active[key] && node.dataset.srHighlighted) {
                    depth++;
                    break;
                }
            }
            node = node.parentElement;
        }
        return depth;
    }

    function positionOverlay(entry) {
        const {
            el,
            overlay,
            depth,
            outset = 0
        } = entry;
        const rect = el.getBoundingClientRect();
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        const vw = document.documentElement.clientWidth;
        const vh = document.documentElement.clientHeight;
        const inset = depth * 6;
        let left = rect.left + scrollX - 3 - outset + inset;
        let top = rect.top + scrollY - 3 - outset + inset;
        let right = rect.right + scrollX + 3 + outset - inset;
        let bottom = rect.bottom + scrollY + 3 + outset - inset;
        const SHADOW = 6;
        if (rect.left < SHADOW && rect.right > 0) left = scrollX + SHADOW;
        if (rect.top < SHADOW && rect.bottom > 0) top = scrollY + SHADOW;
        if (rect.right > vw - SHADOW && rect.left < vw) right = scrollX + vw - SHADOW;
        if (rect.bottom > vh - SHADOW && rect.top < vh) bottom = scrollY + vh - SHADOW;
        overlay.style.left = left + 'px';
        overlay.style.top = top + 'px';
        overlay.style.width = Math.max(0, right - left) + 'px';
        overlay.style.height = Math.max(0, bottom - top) + 'px';
        const LABEL_HEIGHT = 20;
        const label = overlay.querySelector('.sr-label');
        if (label) {
            const nearTop = rect.top < LABEL_HEIGHT;
            label.classList.toggle('sr-label--inside', nearTop);
        }
    }
    const overlayStyleEl = document.createElement('style');
    overlayStyleEl.id = `${TOOL_ID}-styles`;
    overlayStyleEl.textContent = ` .sr-overlay { position: absolute; box-sizing: border-box; border: 3px solid; pointer-events: none; z-index: 2147483640; } .sr-overlay--child { border-width: 1px; box-shadow: none !important; } @keyframes sr-zoom-in { 0% { transform: scale(2.5); opacity: 0; outline-offset: 48px; } 30% { opacity: 1; } 70% { transform: scale(1); opacity: 1; outline-offset: 4px; } 100% { transform: scale(1); opacity: 0; outline-offset: 4px; } } .sr-beacon { position: absolute; box-sizing: border-box; pointer-events: none; z-index: 2147483641; border: 3px solid #fff; border-radius: 2px; animation: sr-zoom-in 1600ms cubic-bezier(0.22, 1, 0.36, 1) forwards; } .sr-label { position: absolute; left: 50%; top: 0; transform: translateX(-50%) translateY(-100%); font: bold 11px/1.2 'Courier New', Courier, monospace; padding: 2px 6px 3px; white-space: nowrap; letter-spacing: 0.03em; border-radius: 2px 2px 0 0; } .sr-label.sr-label--inside { top: 6px; transform: translateX(-50%); border-radius: 0 0 2px 2px; } `;
    document.head.appendChild(overlayStyleEl);

    function createOverlay(el, key, depth, {
        isChild = false,
        childLabelText = null
    } = {}) {
        const pal = PALETTE[key];
        const overlay = document.createElement('div');
        overlay.className = isChild ? 'sr-overlay sr-overlay--child' : 'sr-overlay';
        overlay.setAttribute('aria-hidden', 'true');
        overlay.style.borderColor = pal.highlight;
        if (!isChild) {
            overlay.style.boxShadow = `0 0 0 3px #000, 0 0 0 6px ${pal.highlight}`;
        }
        if (!isChild) {
            const cfg = ELEMENT_CONFIG[key];
            const isCustom = key.startsWith('custom:');
            const isHeading = HEADING_KEYS.has(el.tagName.toLowerCase());
            const prefix = cfg.displayTag(el);
            const name = isHeading ? '' : isCustom ? getAriaName(el) : getAccessibleName(el);
            const labelText = name ? `${prefix}: ${name}` : prefix;
            const label = document.createElement('span');
            label.className = 'sr-label';
            label.textContent = labelText;
            label.style.background = pal.labelBg;
            label.style.color = pal.labelFg;
            overlay.appendChild(label);
        } else if (childLabelText) {
            const label = document.createElement('span');
            label.className = 'sr-label';
            label.textContent = childLabelText;
            label.style.background = pal.labelBg;
            label.style.color = pal.labelFg;
            overlay.appendChild(label);
        }
        document.body.appendChild(overlay);
        const outset = (!isChild && HEADING_KEYS.has(el.tagName.toLowerCase())) ? 6 : 0;
        const entry = {
            el,
            overlay,
            key,
            depth,
            outset,
            isChild
        };
        positionOverlay(entry);
        return entry;
    }

    function applyHighlight(key) {
        if (active[key]) return;
        active[key] = true;
        const cfg = ELEMENT_CONFIG[key];
        if (!cfg) return;
        document.querySelectorAll(cfg.selector).forEach(el => {
            if (el.closest(`#${TOOL_ID}`)) return;
            if (cfg.filter && !cfg.filter(el)) return;
            el.dataset.srHighlighted = '1';
            const depth = highlightDepth(el);
            const entry = createOverlay(el, key, depth);
            overlays.push(entry);
            if (cfg.children) {
                cfg.children.forEach(({
                    selector,
                    label: getLabel
                }) => {
                    el.querySelectorAll(selector).forEach(child => {
                        const childLabelText = getLabel(child);
                        const childEntry = createOverlay(child, key, depth + 1, {
                            isChild: true,
                            childLabelText,
                        });
                        overlays.push(childEntry);
                    });
                });
            }
        });
    }

    function _stripHighlight(key) {
        for (let i = overlays.length - 1; i >= 0; i--) {
            if (overlays[i].key !== key) continue;
            overlays[i].el.removeAttribute('data-sr-highlighted');
            overlays[i].overlay.remove();
            overlays.splice(i, 1);
        }
    }

    function removeHighlight(key) {
        active[key] = false;
        _stripHighlight(key);
        const stillActive = Object.keys(active).filter(k => active[k]);
        stillActive.forEach(k => {
            active[k] = false;
            _stripHighlight(k);
        });
        stillActive.forEach(k => applyHighlight(k));
    }

    function removeAllHighlights() {
        Object.keys(PALETTE).forEach(k => {
            active[k] = false;
        });
        overlays.forEach(e => {
            e.el.removeAttribute('data-sr-highlighted');
            e.overlay.remove();
        });
        overlays.length = 0;
    }

    function repositionAll() {
        overlays.forEach(entry => positionOverlay(entry));
    }
    window.addEventListener('scroll', repositionAll, {
        passive: true,
        capture: true
    });
    window.addEventListener('resize', repositionAll, {
        passive: true
    });
    const host = document.createElement('div');
    host.id = TOOL_ID;
    host.setAttribute('role', 'none');
    host.style.cssText = ` position: fixed; bottom: 24px; right: 24px; z-index: 2147483647; width: 435px; `;
    host._cleanup = () => {};
    const shadow = host.attachShadow({
        mode: 'open'
    });
    const styleEl = document.createElement('style');
    styleEl.textContent = ` *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; } :host { display: block; } #panel { font-family: 'Courier New', Courier, monospace; font-size: 18px; background: #0f0f0f; color: #e8e8e8; border: 2px solid #ffffff; border-radius: 4px; box-shadow: 4px 4px 0 #000; width: 435px; user-select: text; -webkit-user-select: text; zoom: 0.8; } /* Minimised state â show only the title bar */ #panel.minimised #body { display: none; } #panel.minimised { width: auto; min-width: 270px; } /* ââ Title bar ââ */ #titlebar { display: flex; align-items: center; justify-content: space-between; padding: 0.5em 0.6em; background: #1a1a1a; border-bottom: 1px solid #333; border-radius: 4px 4px 0 0; gap: 0.4em; } #panel.minimised #titlebar { border-bottom: none; border-radius: 4px; } #title { font-weight: bold; font-size: 1em; letter-spacing: 0.1em; color: #fff; flex: 1; white-space: nowrap; } .icon-btn { background: none; border: 1px solid #444; color: #aaa; cursor: pointer; font-size: 0.9em; padding: 0.15em 0.4em; line-height: 1.2; font-family: 'Courier New', Courier, monospace; border-radius: 2px; flex-shrink: 0; } .icon-btn:hover { border-color: #888; color: #fff; } .icon-btn:focus-visible { outline: 2px solid #4ECDC4; outline-offset: 2px; } #panel { font-family: 'Courier New', Courier, monospace; font-size: 18px; background: #0f0f0f; color: #e8e8e8; border: 2px solid #ffffff; border-radius: 4px; box-shadow: 4px 4px 0 #000; width: 435px; user-select: text; -webkit-user-select: text; zoom: 0.8; max-height: 90vh; display: flex; flex-direction: column; } /* ââ Body scrolls independently of the fixed title bar ââ */ #body { padding: 0.75em; overflow-y: auto; } /* ââ Fieldset groups ââ */ fieldset { border: 1px solid #2a2a2a; border-radius: 3px; margin: 0 0 0.6em 0; padding: 0; } legend { padding: 0; width: 100%; font-size: 0; /* suppress default legend spacing */ } .group-header { display: flex; align-items: center; padding: 0.4em 0.6em 0.4em 2.2em; cursor: pointer; font-size: 18px; font-weight: bold; letter-spacing: 0.08em; color: #fff; text-transform: none; background: #1c1c1c; border-radius: 3px 3px 0 0; width: 100%; gap: 0.5em; /* Reset button defaults when group-header is a <button> */ border: none; font-family: 'Courier New', Courier, monospace; text-align: left; } .group-header:focus-visible { outline: 2px solid #4ECDC4; outline-offset: -2px; } .group-items { padding: 0.25em 0.6em 0.4em 0.6em; } /* ââ Checkbox rows ââ */ .cb-wrap { display: flex; align-items: center; flex-wrap: wrap; padding: 2px 0; } .cb-row { display: flex; align-items: center; padding: 0.25em 0; cursor: pointer; color: #bbb; gap: 0; } .cb-row:hover { color: #fff; } /* Custom checkbox */ input[type="checkbox"] { appearance: none; -webkit-appearance: none; width: 1em; height: 1em; border: 1px solid #555; border-radius: 2px; background: #1a1a1a; cursor: pointer; margin: 0 0.5em 0 0; flex-shrink: 0; position: relative; transition: background 0.1s, border-color 0.1s; } input[type="checkbox"]:focus-visible { outline: 2px solid #4ECDC4; outline-offset: 2px; } input[type="checkbox"]:checked::after { content: ''; display: block; position: absolute; /* Tick centred in an 18Ã18px box */ left: 3px; top: 0px; width: 6px; height: 10px; border: 2px solid #000; border-top: none; border-left: none; transform: rotate(45deg); } input[type="checkbox"]:indeterminate::after { content: ''; display: block; position: absolute; left: 2px; top: 5px; width: 7px; height: 0; border-top: 2px solid #888; } .cb-label-text { font-size: 1em; } .count-btn { font-family: 'Courier New', Courier, monospace; font-size: 0.8em; color: #aaa; background: #222; border: 1px solid #555; border-radius: 3px; padding: 0.1em 0.45em; margin-left: 0.4em; cursor: pointer; line-height: 1.4; flex-shrink: 0; } .count-btn:hover { background: #333; color: #fff; border-color: #888; } .count-btn:focus-visible { outline: 2px solid #4ECDC4; outline-offset: 2px; } .count-btn[aria-pressed="true"] { background: #4ECDC4; color: #000; border-color: #4ECDC4; font-weight: bold; } .count-btn[aria-pressed="true"]:hover { background: #3bbdb4; border-color: #3bbdb4; } .count-warn { font-family: 'Courier New', Courier, monospace; font-size: 0.75em; color: #e8a020; margin-left: 0.4em; flex-shrink: 1; } /* ââ Detail drawer ââ */ #drawer { border-top: 1px solid #2a2a2a; margin-top: 4px; padding: 8px 0 4px; } .drawer-header { display: flex; align-items: center; justify-content: space-between; padding: 0 0.6em 0.4em; gap: 0.4em; } .drawer-heading { font-size: 0.85em; color: #888; font-family: 'Courier New', Courier, monospace; font-weight: normal; margin: 0; } .drawer-close { background: none; border: 1px solid #444; color: #aaa; cursor: pointer; font-size: 0.8em; padding: 0.1em 0.4em; font-family: 'Courier New', Courier, monospace; border-radius: 2px; flex-shrink: 0; line-height: 1.2; } .drawer-close:hover { border-color: #888; color: #fff; } .drawer-close:focus-visible { outline: 2px solid #4ECDC4; outline-offset: 2px; } .drawer-list { margin: 0; padding: 0 0 0 2.2em; } .drawer-item { display: block; width: 100%; text-align: left; background: none; border: none; border-left: 3px solid transparent; color: #ccc; font-family: 'Courier New', Courier, monospace; font-size: 0.85em; padding: 0.35em 0.6em; cursor: pointer; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } .drawer-item:hover { background: #1a1a1a; color: #fff; border-left-color: #4ECDC4; } .drawer-item:focus-visible { outline: 2px solid #4ECDC4; outline-offset: -2px; } /* ââ Custom selectors ââ */ #panel-footer { padding: 0.5em 0.8em; border-top: 1px solid #2a2a2a; font-size: 0.75em; color: #555; text-align: center; } #panel-footer a { color: #4ECDC4; text-decoration: none; } #panel-footer a:hover { text-decoration: underline; } #panel-footer a:focus-visible { outline: 2px solid #4ECDC4; outline-offset: 2px; border-radius: 2px; } .custom-disclosure-arrow { font-size: 0.8em; } .custom-input-area { padding: 0.5em 0.6em 0.6em; display: flex; flex-direction: column; gap: 0.4em; } .custom-textarea-label { font-family: 'Courier New', Courier, monospace; font-size: 0.8em; color: #888; display: block; margin-bottom: 0.3em; } .custom-textarea { width: 100%; background: #1a1a1a; border: 1px solid #444; border-radius: 2px; color: #e8e8e8; font-family: 'Courier New', Courier, monospace; font-size: 0.85em; padding: 0.4em; resize: vertical; min-height: 4em; box-sizing: border-box; } .custom-textarea:focus { outline: 2px solid #4ECDC4; border-color: #4ECDC4; } .custom-textarea::placeholder { color: #555; } .custom-add-btn { align-self: flex-end; background: #222; border: 1px solid #555; border-radius: 2px; color: #ccc; cursor: pointer; font-family: 'Courier New', Courier, monospace; font-size: 0.85em; padding: 0.25em 0.7em; } .custom-add-btn:hover { background: #333; color: #fff; border-color: #888; } .custom-add-btn:focus-visible { outline: 2px solid #4ECDC4; outline-offset: 2px; } .custom-error { color: #e63946; font-size: 0.8em; font-family: 'Courier New', Courier, monospace; } .custom-delete-btn { background: none; border: none; color: #555; cursor: pointer; font-size: 0.9em; padding: 0 0.2em; line-height: 1; flex-shrink: 0; font-family: 'Courier New', Courier, monospace; } .custom-delete-btn:hover { color: #e63946; } .custom-delete-btn:focus-visible { outline: 2px solid #4ECDC4; outline-offset: 2px; } `;
    shadow.appendChild(styleEl);
    const panel = document.createElement('div');
    panel.id = 'panel';
    const titleBar = document.createElement('div');
    titleBar.id = 'titlebar';
    const titleSpan = document.createElement('span');
    titleSpan.id = 'title';
    titleSpan.textContent = 'Structure Revealer';
    const minBtn = document.createElement('button');
    minBtn.className = 'icon-btn';
    minBtn.textContent = 'â¼';
    minBtn.setAttribute('aria-label', 'Minimise panel');
    minBtn.setAttribute('aria-expanded', 'true');
    minBtn.addEventListener('click', () => {
        const isMin = panel.classList.toggle('minimised');
        minBtn.textContent = isMin ? 'â²' : 'â¼';
        minBtn.setAttribute('aria-label', isMin ? 'Restore panel' : 'Minimise panel');
        minBtn.setAttribute('aria-expanded', isMin ? 'false' : 'true');
        host.style.width = isMin ? 'auto' : '435px';
    });

    function teardown() {
        removeAllHighlights();
        window.removeEventListener('scroll', repositionAll, {
            capture: true
        });
        window.removeEventListener('resize', repositionAll);
        const s = document.getElementById(`${TOOL_ID}-styles`);
        if (s) s.remove();
        host.remove();
    }
    host._cleanup = teardown;
    const closeBtn = document.createElement('button');
    closeBtn.className = 'icon-btn';
    closeBtn.textContent = 'â';
    closeBtn.setAttribute('aria-label', 'Close Structure Revealer');
    closeBtn.addEventListener('click', teardown);
    titleBar.appendChild(titleSpan);
    titleBar.appendChild(minBtn);
    titleBar.appendChild(closeBtn);
    const bodyEl = document.createElement('div');
    bodyEl.id = 'body';

    function buildCheckboxRow(labelText, highlightColour, onChange) {
        const wrap = document.createElement('div');
        wrap.className = 'cb-wrap';
        const lbl = document.createElement('label');
        lbl.className = 'cb-row';
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.addEventListener('change', () => {
            cb.style.background = cb.checked ? highlightColour : '#1a1a1a';
            cb.style.borderColor = cb.checked ? highlightColour : '#555';
            onChange(cb.checked);
        });
        const txt = document.createElement('span');
        txt.className = 'cb-label-text';
        txt.textContent = labelText;
        lbl.appendChild(cb);
        lbl.appendChild(txt);
        const countBtn = document.createElement('button');
        countBtn.className = 'count-btn';
        countBtn.hidden = true;
        const warnEl = document.createElement('span');
        warnEl.className = 'count-warn';
        warnEl.hidden = true;
        wrap.appendChild(lbl);
        wrap.appendChild(countBtn);
        wrap.appendChild(warnEl);
        return {
            wrap,
            cb,
            countBtn,
            warnEl
        };
    }

    function buildGroup(groupLabel, items) {
        const fs = document.createElement('fieldset');
        fs.style.position = 'relative';
        const legend = document.createElement('legend');
        legend.style.cssText = 'padding:0; width:100%; font-size:0;';
        const hdr = document.createElement('div');
        hdr.className = 'group-header';
        const hdrTxt = document.createElement('span');
        hdrTxt.textContent = groupLabel;
        hdr.appendChild(hdrTxt);
        legend.appendChild(hdr);
        fs.appendChild(legend);
        const allCb = document.createElement('input');
        allCb.type = 'checkbox';
        allCb.setAttribute('aria-label', `Toggle all ${groupLabel}`);
        allCb.style.cssText = 'position:absolute; top:-25px; left:0.6em; z-index:1;';
        fs.appendChild(allCb);
        hdr.addEventListener('click', e => {
            if (e.target === allCb) return;
            allCb.checked = !allCb.checked;
            allCb.dispatchEvent(new Event('change'));
        });
        const inner = document.createElement('div');
        inner.className = 'group-items';
        const childCbs = [];
        let updatingFromAll = false;

        function syncAll() {
            if (updatingFromAll) return;
            const n = childCbs.length;
            const on = childCbs.filter(c => c.checked).length;
            if (on === 0) {
                allCb.checked = false;
                allCb.indeterminate = false;
                allCb.style.background = '#1a1a1a';
                allCb.style.borderColor = '#555';
            } else if (on === n) {
                allCb.checked = true;
                allCb.indeterminate = false;
                allCb.style.background = '#4ECDC4';
                allCb.style.borderColor = '#4ECDC4';
            } else {
                allCb.checked = false;
                allCb.indeterminate = true;
                allCb.style.background = '#1a1a1a';
                allCb.style.borderColor = '#888';
            }
        }
        const SINGLETON_KEYS = new Set(['header', 'main', 'footer']);
        items.forEach(({
            key,
            label
        }) => {
            const {
                wrap,
                cb,
                countBtn,
                warnEl
            } = buildCheckboxRow(label, PALETTE[key].highlight, checked => {
                if (checked) {
                    applyHighlight(key);
                    const n = overlays.filter(o => o.key === key && !o.isChild).length;
                    countBtn.textContent = n;
                    countBtn.setAttribute('aria-label', `${n} ${label} element${n !== 1 ? 's' : ''} found. View details`);
                    countBtn.setAttribute('aria-pressed', 'false');
                    countBtn.hidden = false;
                    if (SINGLETON_KEYS.has(key)) {
                        if (n === 0) {
                            warnEl.textContent = `No ${label} elements found`;
                            warnEl.hidden = false;
                        } else if (n > 1) {
                            warnEl.textContent = `Multiple ${label} elements found (check scoping)`;
                            warnEl.hidden = false;
                        } else {
                            warnEl.hidden = true;
                        }
                    }
                } else {
                    removeHighlight(key);
                    countBtn.hidden = true;
                    countBtn.textContent = '';
                    countBtn.removeAttribute('aria-pressed');
                    warnEl.hidden = true;
                    warnEl.textContent = '';
                    if (drawer.dataset.activeKey === key) closeDrawer();
                }
                syncAll();
                saveCheckedState();
            });
            cb.dataset.srKey = key;
            countBtn.addEventListener('click', () => {
                const n = overlays.filter(o => o.key === key && !o.isChild).length;
                if (drawer.dataset.activeKey === key && !drawer.hidden) {
                    closeDrawer();
                    return;
                }
                openDrawer(key, label, n, countBtn);
            });
            childCbs.push(cb);
            inner.appendChild(wrap);
        });
        allCb.addEventListener('change', () => {
            updatingFromAll = true;
            allCb.style.background = allCb.checked ? '#4ECDC4' : '#1a1a1a';
            allCb.style.borderColor = allCb.checked ? '#4ECDC4' : '#555';
            childCbs.forEach(cb => {
                if (cb.checked !== allCb.checked) {
                    cb.checked = allCb.checked;
                    cb.dispatchEvent(new Event('change'));
                }
            });
            updatingFromAll = false;
            syncAll();
        });
        fs.appendChild(inner);
        return fs;
    }
    const drawer = document.createElement('div');
    drawer.id = 'drawer';
    drawer.hidden = true;
    drawer.dataset.activeKey = '';
    let activeCountBtn = null;
    const HEADING_KEYS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

    function getElementDescription(el, key) {
        const tag = el.tagName.toLowerCase();
        if (HEADING_KEYS.has(tag)) {
            const text = el.textContent.trim();
            return text ? `<${tag}> â ${text}` : `<${tag}> (empty)`;
        }
        const isCustom = key && key.startsWith('custom:');
        const prefix = isCustom ? ELEMENT_CONFIG[key].displayTag(el) : `<${tag}>`;
        const name = getAccessibleName(el);
        if (name) return `${prefix} â ${name}`;
        const siblings = Array.from(document.querySelectorAll(tag));
        const pos = siblings.indexOf(el) + 1;
        return `${prefix} (${ordinal(pos)} on page)`;
    }

    function ordinal(n) {
        const s = ['th', 'st', 'nd', 'rd'];
        const v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    function openDrawer(key, label, n, countBtn) {
        if (activeCountBtn && activeCountBtn !== countBtn) {
            activeCountBtn.setAttribute('aria-pressed', 'false');
        }
        activeCountBtn = countBtn;
        countBtn.setAttribute('aria-pressed', 'true');
        drawer.dataset.activeKey = key;
        drawer.hidden = false;
        drawer.setAttribute('role', 'region');
        drawer.setAttribute('tabindex', '-1');
        drawer.innerHTML = '';
        const headingId = `${TOOL_ID}-drawer-heading`;
        const drawerHeader = document.createElement('div');
        drawerHeader.className = 'drawer-header';
        const heading = document.createElement('h3');
        heading.className = 'drawer-heading';
        heading.id = headingId;
        heading.textContent = `${n} ${label} element${n !== 1 ? 's' : ''} found`;
        const drawerCloseBtn = document.createElement('button');
        drawerCloseBtn.className = 'drawer-close';
        drawerCloseBtn.textContent = 'â';
        drawerCloseBtn.setAttribute('aria-label', 'Close details panel');
        drawerCloseBtn.addEventListener('click', () => closeDrawer());
        drawerHeader.appendChild(heading);
        drawerHeader.appendChild(drawerCloseBtn);
        drawer.appendChild(drawerHeader);
        drawer.setAttribute('aria-labelledby', headingId);
        const list = document.createElement('ol');
        list.className = 'drawer-list';
        overlays.filter(o => o.key === key && !o.isChild).forEach((entry) => {
            const li = document.createElement('li');
            const btn = document.createElement('button');
            btn.className = 'drawer-item';
            btn.textContent = getElementDescription(entry.el, entry.key);
            btn.addEventListener('click', () => {
                entry.el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                pulseOverlay(entry);
            });
            li.appendChild(btn);
            list.appendChild(li);
        });
        drawer.appendChild(list);
        drawer.focus();
    }

    function closeDrawer() {
        if (activeCountBtn) {
            activeCountBtn.setAttribute('aria-pressed', 'false');
            activeCountBtn.focus();
            activeCountBtn = null;
        }
        drawer.hidden = true;
        drawer.dataset.activeKey = '';
        drawer.innerHTML = '';
    }

    function pulseOverlay(entry) {
        setTimeout(() => {
            const ov = entry.overlay;
            const beacon = document.createElement('div');
            beacon.className = 'sr-beacon';
            beacon.style.left = ov.style.left;
            beacon.style.top = ov.style.top;
            beacon.style.width = ov.style.width;
            beacon.style.height = ov.style.height;
            beacon.style.borderColor = ov.style.borderColor;
            document.body.appendChild(beacon);
            beacon.addEventListener('animationend', () => beacon.remove(), {
                once: true
            });
        }, 500);
    }
    const CUSTOM_PALETTE = [{
        highlight: '#F72585',
        labelBg: '#7A0040',
        labelFg: '#ffffff'
    }, {
        highlight: '#A855F7',
        labelBg: '#3A0060',
        labelFg: '#ffffff'
    }, {
        highlight: '#3A86FF',
        labelBg: '#003080',
        labelFg: '#ffffff'
    }, {
        highlight: '#FB5607',
        labelBg: '#7A2200',
        labelFg: '#ffffff'
    }, {
        highlight: '#38B000',
        labelBg: '#1A5200',
        labelFg: '#ffffff'
    }, {
        highlight: '#FFBE0B',
        labelBg: '#6B4E00',
        labelFg: '#ffffff'
    }, ];
    let customPaletteIndex = 0;
    const LS_DISCLOSURE_KEY = 'structure-revealer-custom-open';
    const LS_KEY = 'structure-revealer-custom-selectors';
    const LS_STATE_KEY = 'structure-revealer-checked-state';

    function loadSavedSelectors() {
        try {
            return JSON.parse(localStorage.getItem(LS_KEY) || '[]');
        } catch {
            return [];
        }
    }

    function saveSelectors(selectors) {
        try {
            localStorage.setItem(LS_KEY, JSON.stringify(selectors));
        } catch {}
    }

    function buildCustomGroup() {
        const fs = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.style.cssText = 'padding:0; width:100%; font-size:0;';
        const hdr = document.createElement('button');
        hdr.className = 'group-header';
        hdr.setAttribute('aria-expanded', 'false');
        hdr.style.width = '100%';
        hdr.style.textAlign = 'left';
        const arrow = document.createElement('span');
        arrow.className = 'custom-disclosure-arrow';
        arrow.textContent = 'â¶';
        arrow.setAttribute('aria-hidden', 'true');
        hdr.appendChild(arrow);
        const hdrTxt = document.createElement('span');
        hdrTxt.textContent = ' Custom';
        hdr.appendChild(hdrTxt);
        legend.appendChild(hdr);
        fs.appendChild(legend);
        const inputArea = document.createElement('div');
        inputArea.className = 'custom-input-area';
        inputArea.hidden = true;
        fs.appendChild(inputArea);
        const inner = document.createElement('div');
        inner.className = 'group-items';
        inputArea.appendChild(inner);
        const textareaId = `${TOOL_ID}-custom-textarea`;
        const textareaLabel = document.createElement('label');
        textareaLabel.htmlFor = textareaId;
        textareaLabel.className = 'custom-textarea-label';
        textareaLabel.textContent = 'CSS selectors (one per line)';
        inputArea.appendChild(textareaLabel);
        const textarea = document.createElement('textarea');
        textarea.id = textareaId;
        textarea.className = 'custom-textarea';
        textarea.placeholder = 'e.g.\n[aria-live]\ninput:not([type="hidden"])\n.my-component';
        inputArea.appendChild(textarea);
        const errorEl = document.createElement('p');
        errorEl.className = 'custom-error';
        errorEl.setAttribute('aria-live', 'polite');
        errorEl.hidden = true;
        inputArea.appendChild(errorEl);
        const addBtn = document.createElement('button');
        addBtn.className = 'custom-add-btn';
        addBtn.textContent = 'Add';
        inputArea.appendChild(addBtn);
        hdr.addEventListener('click', () => {
            const expanded = inputArea.hidden;
            inputArea.hidden = !expanded;
            hdr.setAttribute('aria-expanded', String(expanded));
            arrow.textContent = expanded ? 'â¼' : 'â¶';
            try {
                localStorage.setItem(LS_DISCLOSURE_KEY, expanded ? '1' : '0');
            } catch {}
        });
        try {
            if (localStorage.getItem(LS_DISCLOSURE_KEY) === '1') {
                inputArea.hidden = false;
                hdr.setAttribute('aria-expanded', 'true');
                arrow.textContent = 'â¼';
            }
        } catch {}

        function addCustomRow(selector, pal) {
            const key = `custom:${selector}`;
            PALETTE[key] = pal;
            ELEMENT_CONFIG[key] = {
                selector,
                displayTag: el => {
                    const tag = el.tagName.toLowerCase();
                    const simple = selector.split(/[\s>+~]/)[0];
                    const qualRaw = simple.replace(/^[a-zA-Z*]*/, '');
                    if (!qualRaw) return `<${tag}>`;
                    const classes = [];
                    const ids = [];
                    const attrs = [];
                    const tokenRe = /\.([^.#[]+)|#([^.#[]+)|\[([^\]]+)\]/g;
                    let m;
                    while ((m = tokenRe.exec(qualRaw)) !== null) {
                        if (m[1]) classes.push(m[1]);
                        else if (m[2]) ids.push(m[2]);
                        else if (m[3]) {
                            const attrName = m[3].split(/[=~|^$*!]/)[0].trim();
                            attrs.push(attrName);
                        }
                    }
                    let label = `<${tag}`;
                    if (ids.length) label += ` id="${ids.join(' ')}"`;
                    if (classes.length) label += ` class="${classes.join(' ')}"`;
                    if (attrs.length) label += ` ${attrs.map(a => `${a}="â¦"`).join(' ')}`;
                    label += '>';
                    return label;
                },
            };
            const {
                wrap,
                cb,
                countBtn,
                warnEl
            } = buildCheckboxRow(selector, pal.highlight, checked => {
                if (checked) {
                    applyHighlight(key);
                    const n = overlays.filter(o => o.key === key && !o.isChild).length;
                    countBtn.textContent = n;
                    countBtn.setAttribute('aria-label', `${n} match${n !== 1 ? 'es' : ''} found. View details`);
                    countBtn.setAttribute('aria-pressed', 'false');
                    countBtn.hidden = false;
                } else {
                    removeHighlight(key);
                    countBtn.hidden = true;
                    countBtn.textContent = '';
                    countBtn.removeAttribute('aria-pressed');
                    if (drawer.dataset.activeKey === key) closeDrawer();
                }
                saveCheckedState();
            });
            cb.dataset.srKey = key;
            countBtn.addEventListener('click', () => {
                const n = overlays.filter(o => o.key === key && !o.isChild).length;
                if (drawer.dataset.activeKey === key && !drawer.hidden) {
                    closeDrawer();
                    return;
                }
                openDrawer(key, selector, n, countBtn);
            });
            const delBtn = document.createElement('button');
            delBtn.className = 'custom-delete-btn';
            delBtn.textContent = 'â';
            delBtn.setAttribute('aria-label', `Remove selector: ${selector}`);
            delBtn.addEventListener('click', () => {
                if (active[key]) {
                    removeHighlight(key);
                    if (drawer.dataset.activeKey === key) closeDrawer();
                }
                delete PALETTE[key];
                delete ELEMENT_CONFIG[key];
                wrap.remove();
                const saved = loadSavedSelectors().filter(s => s.selector !== selector);
                saveSelectors(saved);
            });
            wrap.appendChild(delBtn);
            inner.appendChild(wrap);
        }
        addBtn.addEventListener('click', () => {
            errorEl.hidden = true;
            const lines = textarea.value.split('\n').map(l => l.trim()).filter(Boolean);
            if (!lines.length) return;
            const errors = [];
            const saved = loadSavedSelectors();
            const existingSelectors = new Set(saved.map(s => s.selector));
            lines.forEach(selector => {
                try {
                    document.querySelector(selector);
                } catch {
                    errors.push(`Invalid selector: ${selector}`);
                    return;
                }
                if (existingSelectors.has(selector)) {
                    errors.push(`Already saved: ${selector}`);
                    return;
                }
                const pal = CUSTOM_PALETTE[customPaletteIndex % CUSTOM_PALETTE.length];
                customPaletteIndex++;
                const entry = {
                    selector,
                    paletteIndex: customPaletteIndex - 1
                };
                saved.push(entry);
                existingSelectors.add(selector);
                addCustomRow(selector, pal);
            });
            saveSelectors(saved);
            if (errors.length) {
                errorEl.textContent = errors.join(' Â· ');
                errorEl.hidden = false;
            } else {
                textarea.value = '';
                inputArea.hidden = true;
                disclosure.setAttribute('aria-expanded', 'false');
                arrow.textContent = 'â¶';
            }
        });
        loadSavedSelectors().forEach(({
            selector,
            paletteIndex
        }) => {
            const pal = CUSTOM_PALETTE[paletteIndex % CUSTOM_PALETTE.length];
            customPaletteIndex = Math.max(customPaletteIndex, paletteIndex + 1);
            addCustomRow(selector, pal);
        });
        return fs;
    }

    function saveCheckedState() {
        try {
            const checked = Array.from(shadow.querySelectorAll('input[type="checkbox"][data-sr-key]')).filter(cb => cb.checked).map(cb => cb.dataset.srKey);
            localStorage.setItem(LS_STATE_KEY, JSON.stringify(checked));
        } catch {}
    }

    function loadCheckedState() {
        try {
            return new Set(JSON.parse(localStorage.getItem(LS_STATE_KEY) || '[]'));
        } catch {
            return new Set();
        }
    }
    bodyEl.appendChild(buildGroup('Page structure', [{
        key: 'header',
        label: 'header'
    }, {
        key: 'main',
        label: 'main'
    }, {
        key: 'footer',
        label: 'footer'
    }, {
        key: 'nav',
        label: 'nav'
    }, {
        key: 'aside',
        label: 'aside'
    }, {
        key: 'section',
        label: 'section / article (with name)'
    }, ]));
    bodyEl.appendChild(buildGroup('Headings', [{
        key: 'h1',
        label: 'h1'
    }, {
        key: 'h2',
        label: 'h2'
    }, {
        key: 'h3',
        label: 'h3'
    }, {
        key: 'h4',
        label: 'h4'
    }, {
        key: 'h5',
        label: 'h5'
    }, {
        key: 'h6',
        label: 'h6'
    }, ]));
    bodyEl.appendChild(buildGroup('Relationships', [{
        key: 'table',
        label: 'tables'
    }, {
        key: 'list',
        label: 'lists'
    }, {
        key: 'tabs',
        label: 'tabs'
    }, ]));
    bodyEl.appendChild(buildCustomGroup());
    bodyEl.appendChild(drawer);
    const footer = document.createElement('div');
    footer.id = 'panel-footer';
    footer.innerHTML = 'Brought to you by <a href="https://a11y-tools.com" target="_blank" rel="noopener noreferrer">a11y-tools</a>';
    panel.appendChild(titleBar);
    panel.appendChild(bodyEl);
    panel.appendChild(footer);
    shadow.appendChild(panel);
    document.body.appendChild(host);
    const savedChecked = loadCheckedState();
    if (savedChecked.size) {
        shadow.querySelectorAll('input[type="checkbox"][data-sr-key]').forEach(cb => {
            if (savedChecked.has(cb.dataset.srKey)) {
                cb.checked = true;
                cb.dispatchEvent(new Event('change'));
            }
        });
    }
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape' && document.getElementById(TOOL_ID)) {
            teardown();
            document.removeEventListener('keydown', escHandler);
        }
    });
    panel.setAttribute('tabindex', '-1');
    panel.focus();
})();