document.addEventListener('DOMContentLoaded', () => {
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
            slides[currentSlide].classList.remove('opacity-100');
            slides[currentSlide].classList.add('opacity-0');
            
            currentSlide = (currentSlide + 1) % slides.length;
            
            slides[currentSlide].classList.remove('opacity-0');
            slides[currentSlide].classList.add('opacity-100');
        }, 3000); 
    }

    // --- 4. CARRUSEL DE CENTROS QUIRÚRGICOS ---
    const carouselQ = document.getElementById('carouselQuirofanos');
    const prevBtnQ = document.getElementById('prevBtnQuirofano');
    const nextBtnQ = document.getElementById('nextBtnQuirofano');

    if (carouselQ && prevBtnQ && nextBtnQ) {
        const scrollAmount = 400; 

        prevBtnQ.addEventListener('click', () => {
            carouselQ.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextBtnQ.addEventListener('click', () => {
            carouselQ.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }
});

// --- 5. FUNCIONES DEL MODAL DE WHATSAPP ---
function openWpModal() {
    const modal = document.getElementById('wpModal');
    const modalContent = document.getElementById('wpModalContent');
    
    modal.classList.remove('hidden');
    setTimeout(() => {
        modalContent.classList.add('modal-enter-active');
    }, 10);
}

function closeWpModal() {
    const modal = document.getElementById('wpModal');
    const modalContent = document.getElementById('wpModalContent');
    
    modalContent.classList.remove('modal-enter-active');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

document.getElementById('wpModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeWpModal();
    }
});