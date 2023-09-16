document.addEventListener("DOMContentLoaded", function () {
    const sliderItems = document.querySelectorAll(".slider__item");
    const sliderArrows = document.querySelectorAll(".slider__arrow");
    const sliderDots = document.querySelectorAll(".slider__dot");

    let currentIndex = 0;

    function updateSlider() {
        sliderItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add("slider__item_active");
            } else {
                item.classList.remove("slider__item_active");
            }
        });

        sliderDots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add("slider__dot_active");
            } else {
                dot.classList.remove("slider__dot_active");
            }
        });
    }

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = sliderItems.length - 1;
        } else if (index >= sliderItems.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        updateSlider();
    }

    sliderArrows.forEach((arrow, index) => {
        arrow.addEventListener("click", function () {
            if (index === 0) {
                // Нажата кнопка "Влево"
                goToSlide(currentIndex - 1);
            } else {
                // Нажата кнопка "Вправо"
                goToSlide(currentIndex + 1);
            }
        });
    });

    sliderDots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            goToSlide(index);
        });
    });

    // Начнем с первого слайда
    updateSlider();
});