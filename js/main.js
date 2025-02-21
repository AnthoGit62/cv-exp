// Projets exemple
const projects = [
    {
        title: "Projet 1",
        description: "Description du projet 1",
        image: "https://picsum.photos/600/400",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "#"
    },
    {
        title: "Projet 2",
        description: "Description du projet 2",
        image: "https://picsum.photos/600/401",
        tags: ["React", "Node.js"],
        link: "#"
    },
    {
        title: "Projet 3",
        description: "Description du projet 3",
        image: "https://picsum.photos/600/402",
        tags: ["Vue.js", "Firebase"],
        link: "#"
    }
];

// Fonction pour charger les projets
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link">Voir le projet</a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

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

// Event Listeners
window.addEventListener('scroll', () => {
    handleScrollAnimation();
    updateActiveNavLink();
});

window.addEventListener('load', () => {
    loadProjects();
    handleScrollAnimation();
    updateActiveNavLink();
});
