// Gestion des cartes de projet sur mobile

document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
        // Empêcher le comportement de "touch and hold" sur mobile
        item.addEventListener('touchstart', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                toggleProjectCard(item);
            }
        });

        // Pour les clics sur desktop
        item.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                toggleProjectCard(item);
            }
        });
    });

    // Fonction pour basculer l'état d'une carte
    function toggleProjectCard(item) {
        item.classList.toggle('active');
    }

    // Fermer la carte si on clique en dehors
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && !e.target.closest('.project-item')) {
            projectItems.forEach(item => {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
        }
    });
});
