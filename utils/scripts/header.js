// Attend que le contenu de la page soit entièrement chargé
export function header() {
document.addEventListener('DOMContentLoaded', () => {

    // --- Gestion du header au défilement ---
    const header = document.querySelector('header');
    // Seuil de défilement en pixels avant de changer le style du header
    const scrollThreshold = 50; 

    const handleScroll = () => {
        // Si l'utilisateur a défilé plus que le seuil défini
        if (window.scrollY > scrollThreshold) {
            // Ajoute la classe 'scrolled' au header
            header.classList.add('scrolled');
        } else {
            // Sinon, enlève la classe 'scrolled'
            header.classList.remove('scrolled');
        }
    };

    // Écoute l'événement de défilement sur la fenêtre
    window.addEventListener('scroll', handleScroll);
    // Vérifie l'état au chargement au cas où la page est déjà défilée
    handleScroll();


    // --- Gestion du menu mobile ---
    const menuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            // Affiche ou cache la navigation
            const isNavVisible = mainNav.style.display === 'block';
            mainNav.style.display = isNavVisible ? 'none' : 'block';
            mainNav.classList.toggle('active');

            // Change l'icône du bouton (barres vs croix)
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- Gestion du bouton "Retour en haut" ---
    const backToTopBtn = document.getElementById('backToTopBtn');
    if(backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
    }
});
}