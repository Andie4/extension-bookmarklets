(function () {
    const tables = document.querySelectorAll("table");


    // Surligner 
    tables.forEach((tab, index) => {
        tab.setAttribute("data-tab-ref", index);
        tab.style.outline = "4px dashed red";
        tab.style.outlineOffset = "-10px";
        console.log('step 1');
    });

    //données pour my-page
    const tabData = Array.from(tables).map((tab, index) => ({
        
        ref: index,
        caption: tab.caption|| "",
        summary: tab.getAttribute("summary") || "",
        
    }));
            console.log('step 2');


    // open my-page
    const url =
    browser.runtime.getURL("my-page.html") +
    "?data=" + encodeURIComponent(JSON.stringify(tabData)) +
    "&type=tables";
    
    console.log('step 3');


    window.open(url, "a11y-popup", "width=700,height=500");
})();

