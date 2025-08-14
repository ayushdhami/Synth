document.addEventListener('DOMContentLoaded', (event) => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const cookieName = 'cookieConsent';

    // Function to set a cookie
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    // Function to get a cookie value
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Check if the user has already consented
    if (!getCookie(cookieName)) {
        cookieBanner.style.display = 'flex'; // Use flex to center content
    }

    // Add event listener to the accept button
    acceptButton.addEventListener('click', () => {
        setCookie(cookieName, 'true', 365); // Set the cookie for 1 year
        cookieBanner.style.display = 'none'; // Hide the banner
    });
});