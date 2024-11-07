document.addEventListener("DOMContentLoaded", () => {
    const keys = document.querySelectorAll(".key");
    keys.forEach((key, index) => {
        setTimeout(() => {
            key.classList.add("light-up");
        }, index * 100);
    });
});
