// Chargement des bookmarklets depuis le JSON
fetch(browser.runtime.getURL('bookmarklets.json'))
  .then(response => response.json())
  .then(bookmarklets => {
    console.log(bookmarklets);

    const list = document.getElementById('bookmarklet-list');

    bookmarklets.forEach(bm => {
        
        const li = document.createElement('li');
    
        const div = document.createElement('div');
        div.className = 'fr-toggle fr-toggle--border-bottom';
    
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'fr-toggle__input';
        input.id = bm.script;
        input.setAttribute('aria-describedby', bm.script + '-messages');
    
        const label = document.createElement('label');
        label.className = 'fr-toggle__label';
        label.htmlFor = bm.script;
        label.textContent = bm.id;
    
        const messages = document.createElement('div');
        messages.className = 'fr-messages-group';
        messages.id = bm.script + '-messages';
        messages.setAttribute('aria-live', 'polite');
    
        // lancement du scrit de test checked
        input.addEventListener('change', () => {
            console.log('clic :', bm.script);
            runScript(bm.script);
        });
    
        div.appendChild(input);
        div.appendChild(label);
        div.appendChild(messages);
        li.appendChild(div);
        list.appendChild(li);
    });

//////////////////////
    // Insertion des bookmarkles dans les options de liste déroulante 
    function displayOptionsList (element) {
      const option = document.getElementById('select-1');
      option.innerHTML = ''; 

      element.forEach((bmk, index) => {
        option.innerHTML += `
         <option value="${bmk.script}">${bmk.id}</option>
        `
      });
    };

    displayOptionsList(bookmarklets);

//////////////////////
    // distingtion entre les éléments de la taab de test et de celle des simulations
    //Création des deux listes
    const listBmkSimulations = bookmarklets.slice(-5); // prend uniquement les 5 derniers éléments de la liste
    console.log(listBmkSimulations);

    const listBmkTests = bookmarklets.slice(1, 35); // prend les éléments de 1 à 35 (le 0 c'est la valeur par défaut)
    console.log(listBmkTests);

    // affichage des éléments de la liste Simulations 
    function displaySimulations(groupe){
      
      const list = document.getElementById('dataList');
      list.innerHTML = '';

      groupe.forEach((bmk, index) => {
          list.innerHTML += 
          `<li>
               <div class="fr-toggle fr-toggle--border-bottom">
                   <input type="checkbox" class="fr-toggle__input" id="${bmk.script}" aria-describedby="toggle-10-2-messages">
                   <label class="fr-toggle__label" for="toggle-10-2">${bmk.id}</label>
                   <div class="fr-messages-group" id="toggle-10-2-messages" aria-live="polite"></div>
               </div>              
            </li>`;
      });
    };

    displaySimulations(listBmkSimulations);

    /////////////////////////////////////////
    // GESTION DES FAVORIS
    // récupération de la valeur du select 
    const optionSelect = document.getElementById('select-1');

    const tabFav = [];

    function addToFav () {
      const buttonAdd = document.getElementById('add')
      buttonAdd.addEventListener("click", () => {
        buttonAdd.style.color = "pink";


        const list = document.getElementById('favList');
        list.innerHTML += `<li>
                <div class="fr-toggle fr-toggle--border-bottom">
                    <input type="checkbox" class="fr-toggle__input" id="" aria-describedby="toggle-10-2-messages">
                    <label class="fr-toggle__label" for="toggle-10-2"><p id="test"></p></label>
                    <div class="fr-messages-group" id="toggle-10-2-messages" aria-live="polite"></div>
                </div>              
             </li>`;

        const optionValue = document.getElementById('select-1').value;
        // optionValue.setAttribute('id', optionValue);

        const newElement = tabFav.push(optionValue);
        console.log(tabFav);
        

        const valeur = document.getElementById('test').innerHTML = optionValue;
        console.log('changement de valeur : ' + optionValue); 
        valeur.appendChild;
        console.log('add un bmk');


      });
    };
    addToFav()


  // tabFav.forEach((element) => {
  //   addToFav()
  // });

    function deleteFromFav (){
      const buttonDelete = document.getElementById('delete')
      buttonDelete.addEventListener("click", () => {
        buttonDelete.style.color = "red";

        const optionValue = document.getElementById('select-1').value;
        // optionValue.setAttribute('id', optionValue);

        const deleteElement = tabFav.splice(optionValue);

        const nouveauTableau = tabFav.filter(criterias => criterias !== optionValue);
        console.log('new tab :', nouveauTableau);
        console.log(tabFav);
        console.log('delete : ' + optionValue);
        conso
      });
    };
    deleteFromFav();

// function optionSelectChange () {
//   optionSelect.addEventListener('change', () => {
//   const optionValue = document.getElementById('select-1').value;
//   console.log('changement de valeur : ' + optionValue); 
//   });
// };

//     <li>
//                <div class="fr-toggle fr-toggle--border-bottom">
//                    <input type="checkbox" class="fr-toggle__input" id="" aria-describedby="toggle-10-2-messages">
//                    <label class="fr-toggle__label" for="toggle-10-2">optionvalue</label>
//                    <div class="fr-messages-group" id="toggle-10-2-messages" aria-live="polite"></div>
//                </div>              
//             </li>


//     function gestionFav (groupe) {
//       const list = document.getElementById('favList');
//       list.innerHTML = '';
//         groupe.forEach(bmk, index){
//           list.innerHTML += 
//           `<li>
//                <div class="fr-toggle fr-toggle--border-bottom">
//                    <input type="checkbox" class="fr-toggle__input" id="${bmk.script}" aria-describedby="toggle-10-2-messages">
//                    <label class="fr-toggle__label" for="toggle-10-2">${bmk.id}</label>
//                    <div class="fr-messages-group" id="toggle-10-2-messages" aria-live="polite"></div>
//                </div>              
//             </li>`;
//       });
//       console.log('bmk ajouté à la liste des fav')
//     }; 
//     gestionFav();

    // CONDITION / 
    // IF la valeur de option n'est pas égale à {value=""}
    // ALORS récupérer et stocker la valeur par exemple {value="11_1_Formulaires"}
    //  

    // PUIS pour la valeur séléctionnée 

    // IF on clique sur le btn add alors on ajoute l'élément à la liste
    // IF on clique sur le btn delete alors on supprime l'élément de la liste 

    // let select = bookmarklets;
    // console.log(select);

  });

// récup le script des bmk
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

//////////////////////////////////////////////////////////////////////////////////////////
//fermeture de la popup
const button = document.querySelector("#closeExtension");
button.addEventListener("click", () => {
  window.close();
});



