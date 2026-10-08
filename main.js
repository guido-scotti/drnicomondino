document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MENÚ MÓVIL ---
    const btnMenu = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = menu.querySelectorAll('a');

    if(btnMenu && menu) {
        btnMenu.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }

    // --- 2. CARRUSEL DE CONSULTORIOS ---
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (carousel && prevBtn && nextBtn) {
        const scrollAmount = 400; 

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

    // --- 3. CARRUSEL DE IMÁGENES TRAYECTORIA (FADE IN/OUT) ---
    const slides = document.querySelectorAll('#trayectoria-slides .slide');
    let currentSlide = 0;

    if (slides.length > 0) {
        setInterval(() => {
            // Ocultar la actual
            slides[currentSlide].classList.remove('opacity-100');
            slides[currentSlide].classList.add('opacity-0');
            
            // Siguiente slide
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Mostrar la nueva
            slides[currentSlide].classList.remove('opacity-0');
            slides[currentSlide].classList.add('opacity-100');
        }, 3000); // Cambia cada 3 segundos
    }
});

// --- 4. FUNCIONES DEL MODAL DE WHATSAPP ---
// Estas funciones están fuera del DOMContentLoaded para poder llamarlas con onclick desde HTML
function openWpModal() {
    const modal = document.getElementById('wpModal');
    const modalContent = document.getElementById('wpModalContent');
    
    modal.classList.remove('hidden');
    // Forzamos un pequeño delay para que la animación CSS se ejecute
    setTimeout(() => {
        modalContent.classList.add('modal-enter-active');
    }, 10);
}

function closeWpModal() {
    const modal = document.getElementById('wpModal');
    const modalContent = document.getElementById('wpModalContent');
    
    modalContent.classList.remove('modal-enter-active');
    // Esperamos a que termine la transición (0.3s) para ocultarlo del todo
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Cerrar modal al hacer click fuera del cuadro blanco
document.getElementById('wpModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeWpModal();
    }
});