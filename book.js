document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    const flipButton = document.getElementById("flipButton");
    let currentPage = 0;

    flipButton.addEventListener("click", function () {
        if (currentPage < pages.length) {
            pages[currentPage].classList.toggle("flipped");
            currentPage++;
        } else {
            pages.forEach(page => page.classList.remove("flipped"));
            currentPage = 0;
        }
    });

    // Floating Hearts Effect
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 800);
});
