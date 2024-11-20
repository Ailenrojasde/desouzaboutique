let currentIndex = 0;

// Escucha cambios de tamaño de ventana para ajustar la vista
window.addEventListener('resize', () => {
    showSlide(currentIndex);
});

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const carouselInner = document.querySelector('.carousel-inner');
    const itemsPerView = getItemsPerView();  // Obtiene cuántas imágenes deben mostrarse

    // Asegura que el índice esté dentro del rango correcto para el loop infinito
    currentIndex = (index + totalSlides) % totalSlides;

    // Calcula el desplazamiento basado en el número de elementos visibles
    const offset = -(currentIndex * (100 / itemsPerView));
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    const itemsPerView = getItemsPerView();  // Obtiene cuántas imágenes deben mostrarse
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Cambia el índice y asegura que no se salga del rango
    currentIndex = (currentIndex + direction * itemsPerView + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Función para obtener la cantidad de elementos por vista según el tamaño de la ventana
function getItemsPerView() {
    if (window.innerWidth < 420) {
        return 1;  // Para pantallas menores a 420px, se muestra 1 imagen por slide
    } else if (window.innerWidth <= 820) {
        return 2;  // Para pantallas entre 421px y 820px, se muestran 2 imágenes por slide
    } else {
        return 3;  // Para pantallas más grandes, se muestran 3 imágenes por slide
    }
}

// Inicia el carrusel en la primera imagen
showSlide(currentIndex);
