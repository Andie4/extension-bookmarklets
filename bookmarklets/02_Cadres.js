(function () {
    const iframes = document.querySelectorAll("iframe");

    // surligner
    iframes.forEach((iframe, index) => {
        iframe.setAttribute("data-iframe-ref", index);
        iframe.style.outline = "4px dashed green";
        iframe.style.padding = "2rem";
    });

    //données pour my-page
    const linkData = Array.from(iframes).map((iframe, index) => ({
        ref: index,
        view: iframe.src || "",
        src: iframe.getAttribute("src") || "",
        title: iframe.getAttribute("title") || "",
    }));


    // open my-page
    const url =
    browser.runtime.getURL("page-extend/my-page.html") +
    "?data=" + encodeURIComponent(JSON.stringify(linkData)) +
    "&type=iframes";

    window.open(url, "a11y-popup", "width=700,height=500");
})();