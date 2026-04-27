(function () {
    const buttons = document.querySelectorAll(
    "button, [role='button'], input[type='button'], input[type='submit']"
    );

    // Surligner 
    buttons.forEach((btn, index) => {
        btn.setAttribute("data-button-ref", index);
        btn.style.outline = "4px dashed orange";
        btn.style.outlineOffset = "-4px";
    });

    //données pour my-page
    const buttonData = Array.from(buttons).map((b, i) => ({
        ref: i,
        text: b.textContent.trim() || b.value || "",
        type: b.tagName.toLowerCase(),
        ariaAttrs: Object.fromEntries(
          [...b.attributes]
            .filter(a => a.name.startsWith("aria-"))
            .map(a => [a.name, a.value])
        )
      }));

    // open my-page
    const url =
    browser.runtime.getURL("page-extend/my-page.html") +
    "?data=" + encodeURIComponent(JSON.stringify(buttonData)) +
    "&type=buttons";

    window.open(url, "a11y-popup", "width=700,height=500");
})();