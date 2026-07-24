// ❤️ Together since June 24, 2026
const startDate = new Date("June 24, 2026 00:00:00");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const counter = document.getElementById("counter");
    if (counter) {
        counter.innerHTML =
            `❤️ Together for <br><strong>${days} days ${hours} hours ${minutes} minutes ${seconds} seconds</strong>`;
    }
}

setInterval(updateCounter, 1000);
updateCounter();

// ❤️ Floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);

// ❤️ Open message button
const openBtn = document.getElementById("openBtn");

if (openBtn) {
    openBtn.addEventListener("click", () => {
        document.getElementById("letter").scrollIntoView({
            behavior: "smooth"
        });
    });
}
