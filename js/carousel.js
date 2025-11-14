document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');

    let slideIndex = 0;

    function moveToSlide(index) {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        slideIndex = (slideIndex + 1) % slides.length;
        moveToSlide(slideIndex);
    });

    prevButton.addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        moveToSlide(slideIndex);
    });

    // Auto slide every 3 seconds
    setInterval(() => {
        slideIndex = (slideIndex + 1) % slides.length;
        moveToSlide(slideIndex);
    }, 3000);
});