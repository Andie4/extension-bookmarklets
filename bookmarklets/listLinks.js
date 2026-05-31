(function () {
    const links = document.querySelectorAll("a, [role='link']");

    // surligner
    links.forEach((link, index) => {
        link.setAttribute("data-link-ref", index);
        link.style.outline = "4px dashed purple";
    });

    //données pour my-page
    const linkData = Array.from(links).map((link, index) => ({
        ref: index,
        type: link.tagName.toLowerCase(),
        text: link.textContent.trim() || link.value || "",
        href: link.getAttribute("href") || "",
        title: link.getAttribute("title") || "",
        ariaAttrs: Object.fromEntries(
          [...link.attributes]
            .filter(a => a.name.startsWith("aria-"))
            .map(a => [a.name, a.value])
        )
    }));

    // open my-page
    const url =
    browser.runtime.getURL("page-extend/my-page.html") +
    "?data=" + encodeURIComponent(JSON.stringify(linkData)) +
    "&type=links";

    window.open(url, "a11y-popup", "width=700,height=500");
})();