function zoomIn(niveau) {
    browser.tabs.query({active:true, currentWindow: true }).then(tabs => {
        browser.tabs.setZoom(tabs[0].id, niveau);
    });
    // body.style.zoom = '4';
    // document.body.style.backgroundColor = "pink";

};

zoomIn(2);