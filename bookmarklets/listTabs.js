(function () {
    browser.runtime.sendMessage({ action: "registerTab" });
  
    const tables = document.querySelectorAll("table");
  
    tables.forEach((table, tableIndex) => {
      // Bordure orange sur le tableau
      table.setAttribute("data-table-ref", tableIndex);
      table.style.outline = "4px dashed orange";
      table.style.outlineOffset = "-4px";
  
      // Surligner les <th> en rouge et afficher leurs attributs
      const ths = table.querySelectorAll("th");
      ths.forEach((th) => {
        th.style.outline = "3px solid red";
        th.style.position = "relative";
  
        // Construire le badge avec les attributs importants
        const attrs = [];
        if (th.getAttribute("id"))    attrs.push(`id="${th.getAttribute("id")}"`);
        if (th.getAttribute("scope")) attrs.push(`scope="${th.getAttribute("scope")}"`);
        if (th.getAttribute("role"))  attrs.push(`role="${th.getAttribute("role")}"`);
          
        if (attrs.length > 0) {
          const badge = document.createElement("span");
          badge.textContent = "<th " + attrs.join(" ") + ">";
          badge.style.cssText = `
            display: inline-block;
            background: #f5a623;
            color: #000;
            font-size: 10px;
            font-family: monospace;
            font-weight: bold;
            padding: 1px 3px;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 9999;
            white-space: nowrap;
            text-decoration: line-through;
            pointer-events: none;
          `;
          // Simuler le style "barré" vu dans la capture
          badge.style.textDecoration = "none";
          th.style.position = "relative";
          th.appendChild(badge);
        }
      });
  
      // Surligner les <caption> en vert
      const caption = table.querySelector("caption");
      if (caption) {
        caption.style.outline = "3px solid green";
      }
    });
  
   
  })();