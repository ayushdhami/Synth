document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // For a static site, you can simulate a successful login
        // with hardcoded credentials. This is NOT a secure solution for a real site.
        if (email === "test@example.com" && password === "password123") {
            alert("Login successful!");
            // You can uncomment the line below to redirect the user to a home page
            // window.location.href = "index.html"; 
        } else {
            alert("Invalid email or password.");
        }
    });
});