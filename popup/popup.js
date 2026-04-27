fetch(browser.runtime.getURL('bookmarklets.json'))
.then(response => response.json())
.then(bookmarklets => {
    const select = document.getElementById('bookmarklet-list');

    // Option désactiver
    const resetOption = document.createElement('option');
    resetOption.value = "__reset__";
    resetOption.textContent = "↩ Désactiver / Recharger la page";
    select.appendChild(resetOption);

    bookmarklets.forEach(bm => {
        if (!bm.id) return;
        const option = document.createElement('option');
        option.value = bm.script;
        option.textContent = bm.id;
        select.appendChild(option);
    });

    select.addEventListener('change', () => {
        if (select.value === "__reset__") {
            // Recharger la page active pour tout effacer
            browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
                browser.tabs.reload(tabs[0].id);
                select.value = "";
            });
        } else if (select.value) {
            runScript(select.value);
        }
    });
});

function runScript(scriptName) {
    browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
        browser.tabs.executeScript(tabs[0].id, {
            file: `/bookmarklets/${scriptName}.js`
        }).catch(err => {
            console.error('Erreur :', err);
        });
    });
}