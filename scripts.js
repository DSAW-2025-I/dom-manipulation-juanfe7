const imagesContainer = document.querySelector('.carousel-images');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const indicators = document.querySelectorAll('.indicator');
let index = 0;

function updateCarousel() {
    imagesContainer.style.transform = `translateX(${-index * 100}%)`;
    prevButton.disabled = index === 0;
    nextButton.disabled = index === indicators.length - 1;
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[index].classList.add('active');
}

nextButton.addEventListener('click', () => {
    if (index < indicators.length - 1) {
        index++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

indicators.forEach(indicator => {
    indicator.addEventListener('click', (e) => {
        index = parseInt(e.target.dataset.index);
        updateCarousel();
    });
});
