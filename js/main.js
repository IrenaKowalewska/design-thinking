const hamburgerMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.overlay');
    const menu = document.querySelector('.navigation');

    const closeMenu = () => {
        overlay.classList.toggle('hidden');
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('show_menu');
        document.body.style.overflow = document.body.style.overflow === "hidden" ? "auto" : "hidden";
    }

    hamburger.addEventListener('click', () => {
        closeMenu();
    });

    overlay.addEventListener('click', () => {
        closeMenu();
    });

    menu.addEventListener('click', (event) => {
        if (event.target.classList.contains('navigation__link')) {
            closeMenu();
        }
    });
    
}


hamburgerMenu();