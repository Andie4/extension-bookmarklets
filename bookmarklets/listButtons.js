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
    const buttonData = Array.from(buttons).map((btn, index) => ({
        ref: index,
        text: btn.textContent.trim() || btn.value || btn.getAttribute("aria-label") || "",
        type: btn.tagName.toLowerCase(),
        ariaLabel: btn.getAttribute("aria-label") || "",
    }));

    // open my-page
    const url =
    browser.runtime.getURL("page-extend/my-page.html") +
    "?data=" + encodeURIComponent(JSON.stringify(buttonData)) +
    "&type=buttons";

    window.open(url, "a11y-popup", "width=700,height=500");
})();