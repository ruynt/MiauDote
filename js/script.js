console.log("MiauDote carregado com sucesso!");

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