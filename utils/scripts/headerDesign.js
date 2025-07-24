// Attend que le contenu de la page soit entièrement chargé
export function headerDesign() {
    // --- Gestion du header au défilement ---
    const header = document.querySelector('header');
    if (!header) return; // Ne rien faire si le header n'est pas présent
    // Seuil de défilement en pixels avant de changer le style du header
    const scrollThreshold = 50;

    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // --- Gestion du menu mobile ---
    const menuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            const isNavVisible = mainNav.style.display === 'block';
            mainNav.style.display = isNavVisible ? 'none' : 'block';
            mainNav.classList.toggle('active');
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
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
    }
}

export function headerActive() {
  // Active le lien correspondant à la page courante
  const navLinks = document.querySelectorAll('#mainNav a');
  const currentPage = location.pathname.split('/').pop();
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}