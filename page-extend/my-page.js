const params = new URLSearchParams(window.location.search);
const type = params.get("type");
const data = JSON.parse(decodeURIComponent(params.get("data") || "[]"));

// élément de ma page html 
const title = document.getElementById("title");
const total = document.getElementById("total");
const thead = document.getElementById("table-head");
const tbody = document.getElementById("table-body");

////////////////////////////
//button
  if (type === "buttons") {
    title.textContent = "Liste des boutons";
    total.textContent = data.length + " bouton(s) trouvé(s)";
    thead.innerHTML = `<tr>
      <th>Type</th>
      <th>Texte</th>
      <th>Type d'aria + valeur </th>
    </tr>`;
    data.forEach(btn => {
      const issue = !btn.text && Object.keys(btn.ariaAttrs).length === 0;
      const tr = document.createElement("tr");
      if (issue) tr.classList.add("issue");
  
      // Formater les attributs ARIA : "aria-label : fermer, aria-expanded : true"
      const ariaDisplay = Object.entries(btn.ariaAttrs)
          .map(([key, value]) => `${key} : ${value}`)
          .join("<br>") || "—";
  
      tr.innerHTML = `
          <td>${btn.type}</td>
          <td>${btn.text || "—"}</td>
          <td>${ariaDisplay}</td>
      `;
      tbody.appendChild(tr);
  });

////////////////////////////////////////////////////////
//liens
  } else if (type === "links") {
    title.textContent = "Liste des liens";
    total.textContent = data.length + " lien(s) trouvé(s)";
    thead.innerHTML = `<tr>
        <th>Type</th>
        <th>Libellé</th>
        <th>Title</th>
        <th>Aria</th>
        <th>href</th>

    </tr>`;
    data.forEach(link => {
      const issue = !link.text && Object.keys(link.ariaAttrs).length === 0;
      const tr = document.createElement("tr");
      if (issue) tr.classList.add("issue");

      // Formater les attributs ARIA : "aria-label : fermer, aria-expanded : true"
      const ariaDisplay = Object.entries(link.ariaAttrs)
          .map(([key, value]) => `${key} : ${value}`)
          .join("<br>") || "—";

      tr.innerHTML = `
        <td>${link.type || "/"}</td>
        <td>${link.text || "/"}</td>
        <td>${link.title || "/"}</td>
        <td>${ariaDisplay || ""}</td>
        <td>${link.href}</td>

      `;
      tbody.appendChild(tr);
    });

////////////////////////////////////////////////////////////
//images
  } else if (type === "images") {
    title.textContent = "Liste des images";
    total.textContent = data.length + " image(s) trouvée(s)";
    thead.innerHTML = `<tr>
      <th>Aperçu</th>
      <th>Source</th>
      <th>Alternative textuelle</th>
      <th>Notes</th>
    </tr>`;
    data.forEach(img => {
      const issue = !img.hasAlt || img.alt === null;
      const tr = document.createElement("tr");
      if (issue) tr.classList.add("issue");
      tr.innerHTML = `
        <td><img src="${img.view}" alt="" style="max-width:200px;max-height:200px;"></td>
        <td>${img.src}</td>
        <td>${img.alt ?? ""}</td>
        <td>${img.note ?? ""}</td>
      `;
      tbody.appendChild(tr);
    });
  
//cadres 
  } else if (type === "iframes") {
    title.textContent = "Cadres (iframes)";
    total.textContent = data.length + " iframe(s) trouvée(s)";
    thead.innerHTML = `<tr>
      <th>Title</th>
      <th>Src</th>
    </tr>`;

    data.forEach(iframe => {
    const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${iframe.title ?? ""}</td>
        <td>${iframe.src ?? ""}</td>
      `;
      tbody.appendChild(tr);
    });
  }