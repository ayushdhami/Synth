document.addEventListener("DOMContentLoaded", () => {
    const cart = document.querySelector(".cart-items");
    const totalPriceEl = document.querySelector(".cart-total-price");
    const checkoutBtn = document.querySelector(".checkout-btn");

    // Update total price
    function updateTotal() {
        let total = 0;
        const items = cart.querySelectorAll(".cart-item");
        items.forEach(item => {
            const price = parseFloat(item.dataset.price);
            const quantity = parseInt(item.querySelector(".quantity-input").value);
            total += price * quantity;
        });
        totalPriceEl.textContent = `£${total.toFixed(2)}`;
        checkoutBtn.disabled = total === 0;
    }

    // Quantity increase
    cart.addEventListener("click", (e) => {
        if (e.target.classList.contains("increase")) {
            const input = e.target.previousElementSibling;
            input.value = parseInt(input.value) + 1;
            updateTotal();
        }
        if (e.target.classList.contains("decrease")) {
            const input = e.target.nextElementSibling;
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
                updateTotal();
            }
        }
        if (e.target.classList.contains("remove-item")) {
            e.target.closest(".cart-item").remove();
            updateTotal();
        }
    });

    // Manual quantity input
    cart.addEventListener("input", (e) => {
        if (e.target.classList.contains("quantity-input")) {
            let value = parseInt(e.target.value);
            if (isNaN(value) || value < 1) e.target.value = 1;
            updateTotal();
        }
    });

    // Checkout
    checkoutBtn.addEventListener("click", () => {
        alert("✅ Checkout successful! Thank you for your purchase.");
        cart.innerHTML = ""; // clear cart
        updateTotal();
    });

    // Initial total calculation
    updateTotal();
});