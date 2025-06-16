function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
menu.classList.toggle("open");
icon.classList.toggle("open");

}

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "🌝";
    } else {
        toggleBtn.textContent = "🌚";
    }
});

const togglleBtn = document.getElementById("toggle");

togglleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        togglleBtn.textContent = "🌝";
    } else {
        togglleBtn.textContent = "🌚";
    }
});