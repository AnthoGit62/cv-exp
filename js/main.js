// Gestion du thème sombre/clair
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', body.dataset.theme);
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (body.dataset.theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Charger le thème sauvegardé
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.dataset.theme = savedTheme;
    updateThemeIcon();
}

// Animation au défilement
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight && elementBottom >= 0;
        
        if (isVisible) {
            element.classList.add('visible');
        }
    });
}

// Navigation fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mise à jour du lien actif dans la navigation
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scroll = window.scrollY;
        
        if (scroll >= sectionTop && scroll < sectionBottom) {
            const currentId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Gestion des cartes de projet sur mobile
document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');
    let activeItem = null;

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            // Si on est sur desktop (>768px), on ne fait rien
            if (window.innerWidth > 768) return;

            // Si un item était déjà actif, on le désactive
            if (activeItem && activeItem !== item) {
                activeItem.classList.remove('active');
            }

            // Toggle l'état actif de l'item cliqué
            item.classList.toggle('active');
            activeItem = item.classList.contains('active') ? item : null;
        });
    });

    // Fermer la carte active si on clique ailleurs
    document.addEventListener('click', (e) => {
        if (window.innerWidth > 768) return;
        
        if (!e.target.closest('.project-item') && activeItem) {
            activeItem.classList.remove('active');
            activeItem = null;
        }
    });
});

// Event Listeners
window.addEventListener('scroll', () => {
    handleScrollAnimation();
    updateActiveNavLink();
});

window.addEventListener('load', () => {
    handleScrollAnimation();
    updateActiveNavLink();
});
