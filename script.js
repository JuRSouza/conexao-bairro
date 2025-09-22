document.addEventListener("DOMContentLoaded", () => {
  // Página de Trocas
  if (document.body.contains(document.getElementById("items-list"))) {
    const itemsList = document.getElementById("items-list");
    let items = [
      { title: "Roupas de Inverno", desc: "Em bom estado", cat: "Roupas" },
      { title: "Coleção de livros", desc: "Diversos gêneros", cat: "Livros" },
    ];
    function renderItems() {
      itemsList.innerHTML = "";
      items.forEach(it => {
        itemsList.innerHTML += `
          <article class="card">
            <h3>${it.title}</h3>
            <p>${it.desc}</p>
            <small>Categoria: ${it.cat}</small><br>
            <button class="btn-secondary">Entrar em contato</button>
          </article>
        `;
      });
    }
    renderItems();
  }

  // Página de Contato
  if (document.getElementById("contact-form")) {
    document.getElementById("contact-form").addEventListener("submit", e => {
      e.preventDefault();
      alert("Mensagem enviada com sucesso!");
      e.target.reset();
    });
  }
});

