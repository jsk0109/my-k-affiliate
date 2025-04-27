function initMobileNavigation() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;


    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    body.appendChild(overlay);


    menuToggle.addEventListener('click', toggleMenu);


    overlay.addEventListener('click', closeMenu);

    function toggleMenu() {
        if (mainNav.classList.contains('menu-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    function openMenu() {
        menuToggle.classList.add('mobile-menu-active');
        mainNav.classList.add('menu-open');
        body.style.overflow = 'hidden'; 

        menuToggle.setAttribute('aria-expanded', 'true');
        menuToggle.setAttribute('aria-label', '메뉴 닫기');
    }

    function closeMenu() {
        menuToggle.classList.remove('mobile-menu-active');
        mainNav.classList.remove('menu-open');
        body.style.overflow = '';

        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', '메뉴 열기');
    }

    function handleResize() {
        if (window.innerWidth > 768 && mainNav.classList.contains('menu-open')) {
            closeMenu();
        }
    }

    window.addEventListener('resize', handleResize);
}

function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll('.main-nav .menu a');

    menuLinks.forEach(link => {

        if (link.getAttribute('href') === currentPath || 
            (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initMobileNavigation();
    highlightCurrentPage();
});