document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    const flipButton = document.getElementById("flipButton");
    let currentPage = 0;

    flipButton.addEventListener("click", function () {
        if (currentPage < pages.length) {
            pages[currentPage].classList.toggle("flipped");
            currentPage++;
        } else {
            // Reset the book when all pages are flipped
            pages.forEach(page => page.classList.remove("flipped"));
            currentPage = 0;
        }
    });
});
