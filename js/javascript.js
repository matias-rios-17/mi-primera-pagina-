document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const dotsNav = document.querySelector('.indicators');
    const dots = Array.from(dotsNav.children);

    let currentIndex = 0;

    // Set initial slide
    slides[0].classList.add('current-slide');
    dots[0].classList.add('active');

    function moveToSlide(index) {
        const slideWidth = 100 / slides.length;
        track.style.transform = `translateX(-${slideWidth * index}%)`;
        slides.forEach(slide => slide.classList.remove('current-slide'));
        dots.forEach(dot => dot.classList.remove('active'));
        slides[index].classList.add('current-slide');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    // Auto slide every 3 seconds
    /*setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        moveToSlide(currentIndex);
    }, 3000);*/

    // Next button
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        moveToSlide(currentIndex);
    });

    // Prev button
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        moveToSlide(currentIndex);
    });

    // Dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveToSlide(index);
        });
    });
});