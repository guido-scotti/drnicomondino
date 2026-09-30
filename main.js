document.addEventListener('DOMContentLoaded', () => {
    // 1. Menú Móvil
    const btnMenu = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = menu.querySelectorAll('a');

    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });

    // 2. Carrusel de Consultorios
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (carousel && prevBtn && nextBtn) {
        // Scroll amount based on card width + gap (approx 360 + 32)
        const scrollAmount = 400; 

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }
});