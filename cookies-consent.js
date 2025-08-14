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

// Check if the user has already consented and show the banner if not
if (!getCookie(cookieName)) {
    cookieBanner.style.display = 'flex';
}

// Add event listener to the accept button
acceptButton.addEventListener('click', () => {
    setCookie(cookieName, 'true', 365);
    cookieBanner.style.display = 'none';
});