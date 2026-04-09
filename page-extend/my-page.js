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
      <th>Accessible name</th>
    </tr>`;
    data.forEach(btn => {
      const issue = !btn.text && !btn.ariaLabel;
      const tr = document.createElement("tr");
      if (issue) tr.classList.add("issue");
      tr.innerHTML = `
        <td>${btn.type}</td>
        <td>${btn.text || ""}</td>
        <td>${btn.ariaLabel || ""}</td>
      `;
      tbody.appendChild(tr);
    });

////////////////////////////////////////////////////////
//liens
  } else if (type === "links") {
    title.textContent = "Liste des liens";
    total.textContent = data.length + " lien(s) trouvé(s)";
    thead.innerHTML = `<tr>
        <th>Link type</th>
        <th>Texte</th>
        <th>href</th>
        <th>Title</th>
    </tr>`;
    data.forEach(link => {
      const issue = !link.text && !link.ariaLabel;
      const tr = document.createElement("tr");
      if (issue) tr.classList.add("issue");
      tr.innerHTML = `
        <td>${link.type || ""}</td>
        <td>${link.text || ""}</td>
        <td>${link.href}</td>
        <td>${link.title || ""}</td>
      `;
      tbody.appendChild(tr);
    });

////////////////////////////////////////////////////////////
//images
  } else if (type === "images") {
    title.textContent = "Liste des images";
    total.textContent = data.length + " image(s) trouvée(s)";
    thead.innerHTML = `<tr>
      <th>image thumbnail</th>
      <th>src</th>
      <th>alt</th>
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
  
}