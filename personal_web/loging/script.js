function scrollToLogin() {
    document.getElementById('login-section').scrollIntoView({ behavior: 'smooth' });
}
function showSignupPopup() {
    document.getElementById('signup-popup').style.display = 'flex';
}

function hideSignupPopup() {
    document.getElementById('signup-popup').style.display = 'none';
}

// Optional: Hide popup if clicking outside of it
window.onclick = function(event) {
    const popup = document.getElementById('signup-popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}
