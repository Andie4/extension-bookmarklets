(function () {
    browser.runtime.sendMessage({ action: "registerTab" });
  
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  
    // Surligner tous les titres immédiatement
    headings.forEach((h, index) => {
      h.setAttribute("data-heading-ref", index);
      h.style.outline = "3px solid purple";
      h.style.outlineOffset = "2px";
    });
  
    const headingData = Array.from(headings).map((h, index) => {
      const level = parseInt(h.tagName[1]);
      const ariaAttrs = Object.fromEntries(
        [...h.attributes]
          .filter(a => a.name.startsWith("aria-"))
          .map(a => [a.name, a.value])
      );
      return {
        ref: index,
        level: level,
        tag: h.tagName.toLowerCase(),
        text: h.textContent.trim(),
        id: h.getAttribute("id") || "",
        ariaAttrs: ariaAttrs,
        isEmpty: !h.textContent.trim(),
      };
    });
  
    const url =
      browser.runtime.getURL("page-extend/my-page.html") +
      "?data=" + encodeURIComponent(JSON.stringify(headingData)) +
      "&type=headings";
  
    window.open(url, "a11y-popup", "width=700,height=500");
  })();

  