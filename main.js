// main.js
document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.querySelector(".btn");
    const searchInput = document.querySelector(".srch");

    // Search functionality
    searchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert(`Searching for: ${searchInput.value}`);
    });

    // Sticky header
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 50);
    });

    // Add featured item to cart
    document.querySelectorAll(".Featured .row").forEach(row => {
        row.addEventListener("click", () => {
            const name = row.querySelector("h2").innerText;
            const price = Math.floor(Math.random() * 50) + 10; // sample price
            const imgSrc = row.querySelector("img").src;

            // Save to localStorage so cart.html can load it
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push({ name, price, imgSrc, quantity: 1 });
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${name} added to cart!`);
        });
    });
});