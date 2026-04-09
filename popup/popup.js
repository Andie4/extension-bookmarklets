fetch(browser.runtime.getURL('bookmarklets.json'))
.then(response => response.json())
.then(bookmarklets => {
 console.log(bookmarklets); 

    const list = document.getElementById('bookmarklet-list');
    bookmarklets.forEach(bm => {

        const btn = document.createElement('button');
        btn.textContent = bm.id;

        btn.addEventListener('click', () => {
            console.log('clic :', bm.script); 
            runScript(bm.script);
        });

        list.appendChild(btn);
    });
});

function runScript(scriptName) {
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
        
        console.log("fenetre", tabs[0].id); 

        browser.tabs.executeScript(tabs[0].id, {
            file: `/bookmarklets/${scriptName}.js`
            }).then(() => {
                console.log('script ok');
            }).catch(err => {
                console.error('Erreur :', err); 
        });
    });
}