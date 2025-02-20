// Parallax effect pour le fond de la section hero
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero-background');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    hero.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
});

// Animation des compétences
const skills = document.querySelectorAll('.skill');
skills.forEach((skill, index) => {
    skill.style.animationDelay = `${index * 0.1}s`;
});

// Animation du texte de la section hero
const animateHeroText = () => {
    const text = document.querySelector('.hero h1').textContent;
    const heroTitle = document.querySelector('.hero h1');
    heroTitle.textContent = '';
    
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${index * 0.05}s`;
        span.classList.add('char-animation');
        heroTitle.appendChild(span);
    });
};

// Animation des cartes de projet au survol
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// Animation du scroll progressif
window.addEventListener('scroll', () => {
    const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    document.body.style.setProperty('--scroll-progress', scrollProgress);
});

// Animation des boutons
const buttons = document.querySelectorAll('button, .cta-primary, .cta-secondary');
buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
    });
});

// Animation du formulaire de contact
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
});

// Animation de la navbar au scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Initialisation des animations
window.addEventListener('load', () => {
    animateHeroText();
});
