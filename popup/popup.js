const bookmarklet=""; 

fetch(browser.runtime.getURL('bookmarklets.json'))
  .then(response => response.json())
  .then(bookmarklets => {
    console.log(bookmarklets);

    allBookmarklets = bookmarklets.slice(1, 41);
    console.log(allBookmarklets);

    //création des deux listes
    const listBmkSimulations = bookmarklets.slice(-6); 
    const listBmkTests = bookmarklets.slice(1, bookmarklets.length - 6);

    // regroupement par groupe
    const groupes = {};
    listBmkTests.forEach(bm => {
      const g = bm.groupe || '';
      if (!groupes[g]) groupes[g] = [];
      groupes[g].push(bm);
    });

    // recherche liste tests 
    document.getElementById('search-tests').addEventListener('input', (e) => {
      const recherche = e.target.value.toLowerCase();
      document.querySelectorAll('#bookmarklet-list li').forEach(li => {
        const texte = li.textContent.toLowerCase();
        li.style.display = texte.includes(recherche) ? '' : 'none';
      });
    });

    const list = document.getElementById('bookmarklet-list');

    //affichage groupé
    Object.entries(groupes).forEach(([nomGroupe, items]) => {

      // titre du groupe
      const liTitre = document.createElement('li');
      liTitre.innerHTML = `<p class="fr-text--bold">${nomGroupe}</p>`;
      list.appendChild(liTitre);

      items.forEach(bm => {
        const li = document.createElement('li');
    
        if (bm.type === 'link') {
          li.innerHTML = `
            <a class="fr-link fr-link--icon-right fr-icon-external-link-line" 
               href="#" 
               id="${bm.script}">
              ${bm.id}
            </a>`;
      
          li.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            runScript(bm.script);
          });
      
        } else {
          li.innerHTML = `
            <div class="fr-toggle fr-toggle--border-bottom">
              <input type="checkbox" class="fr-toggle__input" id="${bm.script}" aria-describedby="${bm.script}-messages">
              <label class="fr-toggle__label" for="${bm.script}">${bm.id}</label>
              <div class="fr-messages-group" id="${bm.script}-messages" aria-live="polite"></div>
            </div>`;
      
          li.querySelector('input').addEventListener('change', () => {
            runScript(bm.script);
          });
        }
      
        list.appendChild(li);
      });
    });

    // ajout des bookmarkles dans les options de liste déroulante 
    function displayOptionsList (element) {
      const datalist = document.getElementById('datalist-bmk');
      datalist.innerHTML = ''; 

      element.forEach((bmk, index) => {
        datalist.innerHTML += `<option value="${bmk.id}" data-script="${bmk.script}"></option>`;
      });
    };
    displayOptionsList(bookmarklets);

    // affichage éléments de la liste simulations 
    function displaySimulations(groupe) {
      const list = document.getElementById('dataList');
      list.innerHTML = '';

      groupe.forEach((bmk) => {
        const li = document.createElement('li');
        const div = document.createElement('div');
        div.className = 'fr-toggle fr-toggle--border-bottom';

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'fr-toggle__input';
        input.id = bmk.script;

        const label = document.createElement('label');
        label.className = 'fr-toggle__label';
        label.htmlFor = bmk.script;
        label.textContent = bmk.id;

        const messages = document.createElement('div');
        messages.className = 'fr-messages-group';
        messages.id = bmk.script + '-messages';
        messages.setAttribute('aria-live', 'polite');

        input.addEventListener('change', () => {
          runScript(bmk.script);
        });

        div.appendChild(input);
        div.appendChild(label);
        div.appendChild(messages);
        li.appendChild(div);
        list.appendChild(li);
      });
    };
    displaySimulations(listBmkSimulations);


    // GESTION DES FAVORIS
    const optionSelect = document.getElementById('select-1');
    const tabFav = [];
    const nbrResult = document.getElementById('nbrResult'); 
    const replace = nbrResult;

    function updateCompteur () {
      browser.storage.local.get('favoris').then(result => {
        const favoris = result.favoris || [];
        document.getElementById('nbrResult').textContent = favoris.length;
        console.log( favoris.length + 'favoris' )
      });
    };

    function loadFav(favoris) {
      console.log(bookmarklets);

      browser.storage.local.get('favoris').then(result => {
        const favoris = result.favoris || [];
        favoris.forEach(optionValue => {
          afficherFavori(optionValue);
        });
          console.log('liste de fav: ',favoris);
          updateCompteur();
      });
    };

    // add to fav 
    function addToFav() {
      document.getElementById('add').addEventListener("click", () => {
        const inputValue = document.getElementById('select-1').value;
        const bmkTrouve = bookmarklets.find(b => b.id === inputValue);
        if (!bmkTrouve) return;
        const optionValue = bmkTrouve.script;

        console.log(optionValue);
        browser.storage.local.get('favoris').then(result => {
          const favoris = result.favoris || [];

          console.log(bookmarklets);

          if (!favoris.includes(optionValue)) {
            favoris.push(optionValue);
            browser.storage.local.set({ favoris });
            afficherFavori(optionValue);
            console.log('add to fav :' + optionValue);
            updateCompteur();
          }
        });
      });
    };

    //display fav 
    function afficherFavori(optionValue) {
      const bm = bookmarklets.find(b => b.script === optionValue);
      const optionText = bm ? bm.id : optionValue;
      const list = document.getElementById('favList');
      const li = document.createElement('li');
      li.className='item'
      const div = document.createElement('div');
      div.className = 'fr-toggle fr-toggle--border-bottom divItem';

      if (bm.type === 'link') {
        li.innerHTML = `
          <a class="fr-link fr-link--icon-right fr-icon-external-link-line" 
            href="#" 
            id="fav-${optionValue}">
            ${optionText}
          </a>`;
    
        li.querySelector('a').addEventListener('click', (e) => {
          e.preventDefault();
          runScript(optionValue);
        });
      } else {

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'fr-toggle__input';
        input.id = 'fav-' + optionValue;

        const label = document.createElement('label');
        label.className = 'fr-toggle__label';
        label.htmlFor = 'fav-' + optionValue;
        label.textContent = optionText;

        const messages = document.createElement('div');
        messages.className = 'fr-messages-group';
        messages.id = 'fav-' + optionValue + '-messages';
        messages.setAttribute('aria-live', 'polite');

        input.addEventListener('change', () => {
          runScript(optionValue);
        });

        div.appendChild(input);
        div.appendChild(label);
        div.appendChild(messages);
        li.appendChild(div);
      }

      //icone delete 
      const btnSupprimer = document.createElement('button');
      btnSupprimer.type = 'button';
      btnSupprimer.className = 'fr-btn fr-btn--secondary fr-btn--sm';
      btnSupprimer.innerHTML = '<span aria-hidden="true" class="fr-icon-delete-line"></span>';
      btnSupprimer.addEventListener('click', () => {
        browser.storage.local.get('favoris').then(result => {
          const favoris = result.favoris || [];
          const nouveauTableau = favoris.filter(f => f !== optionValue);
          browser.storage.local.set({ favoris: nouveauTableau });
          li.remove();
          updateCompteur();
        });
        console.log('delete from fav  : '+ optionValue);
      });
      li.prepend(btnSupprimer);
 
      list.appendChild(li);

    }

    //delete from fav
    // function deleteFromFav() {
    //   document.getElementById('delete').addEventListener("click", () => {
    //     const inputValue = document.getElementById('select-1').value;
    //     const bmkTrouve = bookmarklets.find(b => b.id === inputValue);
    //     if (!bmkTrouve) return;
    //     const optionValue = bmkTrouve.script;

    //     browser.storage.local.get('favoris').then(result => {
    //         const favoris = result.favoris || [];
    //         const nouveauTableau = favoris.filter(f => f !== optionValue);
    //         browser.storage.local.set({ favoris: nouveauTableau });
    //         const element = document.getElementById('fav-' + optionValue);
    //         if (element) {
    //           element.closest('li').remove();
    //         }
    //         updateCompteur();
    //     });
    //     console.log('delete from fav : '+ optionValue)
    //   });
    // };

    loadFav();
    addToFav();
    // deleteFromFav();


  });


// récup le script des bmk
function runScript(scriptName) {
  if (scriptName === 'zoom') {
    browser.tabs.query({active:true, currentWindow: true }).then(tabs => {
      browser.tabs.setZoom(tabs[0].id, 4);
    });
    return;
  };

  if (scriptName === 'vue_reduite') {
    browser.tabs.query({active:true, currentWindow: true }).then(tabs => {
      browser.windows.update(tabs[0].windowId, {
        width: 320,
        height: 256
      });
    });
    return;
  }

  browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    browser.tabs.executeScript(tabs[0].id, {
      file: `/bookmarklets/${scriptName}.js`
    }).then(() => {
      console.log('script: '+ scriptName);
    }).catch(err => {
      console.error('Erreur :', err);
    });
  });
}

//fermeture de la popup
// const button = document.querySelector("#closeExtension");
// button.addEventListener("click", () => {
//   window.close();
// });

// const body = document.getElementById('main');
// console.log(body.outerHTML);

////////////////////////////////////////////
// zoom script 
// document.getElementById('zoom').addEventListener('change', ()=> {
//       browser.tabs.query({active:true, currentWindow: true }).then(tabs => {
//         browser.tabs.setZoom(tabs[0].id, 4);
//     });
// })