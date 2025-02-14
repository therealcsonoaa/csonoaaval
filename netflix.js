document.addEventListener("DOMContentLoaded", function () {
    const moviesContainer = document.querySelector(".movies");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let scrollAmount = 0;
    const scrollStep = 220; // Adjust based on image width

    nextButton.addEventListener("click", function () {
        scrollAmount += scrollStep;
        moviesContainer.style.transform = `translateX(-${scrollAmount}px)`;
    });

    prevButton.addEventListener("click", function () {
        scrollAmount -= scrollStep;
        if (scrollAmount < 0) scrollAmount = 0;
        moviesContainer.style.transform = `translateX(-${scrollAmount}px)`;
    });
});
