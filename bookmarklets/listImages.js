(function () {
    const images = document.querySelectorAll("img");

    // Surligner 
    images.forEach((img, index) => {
        img.setAttribute("data-img-ref", index);
        img.style.outline = "4px dashed red";
        img.style.outlineOffset = "-10px";
    });

    //données pour my-page
    const imgData = Array.from(images).map((img, index) => ({
        ref: index,
        view: img.src || "",
        src: img.getAttribute("src") || "",
        alt: img.getAttribute("alt"),
    }));

    // open my-page
    const url =
    browser.runtime.getURL("page-extend/my-page.html") +
    "?data=" + encodeURIComponent(JSON.stringify(imgData)) +
    "&type=images";

    window.open(url, "a11y-popup", "width=700,height=500");
})();