// Gestion du thème clair et sombre

function toggleTheme() {
    console.log('Toggle theme function called'); // Vérifier si la fonction est appelée
    const body = document.body;
    const currentTheme = body.dataset.theme;
    console.log('Current theme:', currentTheme); // Afficher le thème actuel
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.dataset.theme = newTheme;
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = document.querySelector('.theme-toggle i');
    if (icon) {
        icon.className = document.body.dataset.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Ajouter l'écouteur d'événements pour le bouton de basculement
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}
