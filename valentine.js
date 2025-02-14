// Floating Hearts Effect
document.addEventListener("DOMContentLoaded", () => {
    setInterval(createHeart, 300);

    function createHeart() {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        const size = Math.random() * 30 + 10 + "px";
        heart.style.fontSize = size;

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";

        document.querySelector(".hearts").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
});

// Click Effect with Light Glow
document.body.addEventListener("click", (e) => {
    let sparkle = document.createElement("div");
    sparkle.className = "click-effect";
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 500);
});

function showMeme(answer) {
    const memeDiv = document.getElementById("meme");
    memeDiv.innerHTML = "";
    const img = document.createElement("img");

    if (answer === "no") {
        img.src = "rejection_valentine_meme.jpg"; 
        img.alt = "Rejection Valentine Meme";
    }

    memeDiv.appendChild(img);
}

// Open Flipbook on "Yes" Click
function openFlipBook() {
    window.location.href = "flipbook.html"; 
}
