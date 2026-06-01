/* ==========================================================================
   MiauDote - Script Principal
   Este arquivo gerencia a interatividade global do site.
   Funcionalidades: 
   1. Alternância de Tema (Light/Dark Mode) com salvamento no LocalStorage.
   2. Sistema de filtragem dinâmica para a página de catálogo de pets.
   ========================================================================== */
   
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  htmlElement.setAttribute('data-theme', savedTheme);
  updateButtonIcon(savedTheme);
}

function updateButtonIcon(theme) {
  if (theme === 'dark') {
    themeToggleBtn.textContent = '☀️';
  } else {
    themeToggleBtn.textContent = '🌙';
  }
}

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateButtonIcon(newTheme);
});

const selects = document.querySelectorAll('.filter-group select');
const petCards = document.querySelectorAll('.pet-card');

const activeFilters = {
  especie: 'todos',
  porte: 'todos'
};

if (selects.length > 0) {
  selects.forEach(select => {
    select.addEventListener('change', (e) => {
      const filterType = select.getAttribute('data-filter-group');
      activeFilters[filterType] = e.target.value;
      filterPets();
    });
  });
}

function filterPets() {
  petCards.forEach(card => {
    const petEspecie = card.getAttribute('data-especie');
    const petPorte = card.getAttribute('data-porte');

    const matchEspecie = activeFilters.especie === 'todos' || activeFilters.especie === petEspecie;
    const matchPorte = activeFilters.porte === 'todos' || activeFilters.porte === petPorte;

    if (matchEspecie && matchPorte) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}