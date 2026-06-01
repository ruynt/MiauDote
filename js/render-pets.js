/* ==========================================================================
   Motor de renderização de Pets
   Gerencia a criação dos cards, filtros e navegação (setas).
   ========================================================================== */
let currentPage = 1;
const petsPerPage = 3;

function renderPets(data, container, isHome = false) {
  const grid = document.querySelector(container);
  grid.innerHTML = "";
  
  const petsToDisplay = isHome ? data.slice(0, 3) : data;

  petsToDisplay.forEach(pet => {
    const card = document.createElement("article");
    card.className = "pet-card";
    card.dataset.especie = pet.especie;
    card.dataset.porte = pet.size;
    
    card.innerHTML = `
      <img src="${pet.img}" alt="${pet.name}" width="450" height="600" loading="lazy">
      <div class="pet-info">
        <h3>${pet.name}</h3>
        <p>Idade: ${pet.age} ano(s)</p>
        <p>Porte: ${pet.size}</p>
        <p>Localização: ${pet.location}</p>
        <a href="https://wa.me/5583999999999?text=Olá!%20Tenho%20interesse%20em%20${pet.name}" target="_blank" class="btn-adotar">Tenho interesse</a>
      </div>
    `;
    grid.appendChild(card);
  });
}