let loginButton = document.getElementById('.log-button'),
    registerButton = document.getElementById('regis-btn'),
    loginPopup = document.getElementById('login-popup'),
    closePopup = document.getElementById('close-popup'),
    registerPopup = document.getElementById('registo-popup');

registerButton.addEventListener('click', showRegisterPopup);

function showRegisterPopup() {
    console.log('showRegisterPopup called');
    registerPopup.classList.add('active');
    loginPopup.classList.remove('active');
}

function showLoginPopup() {
    let loginPopup = document.getElementById('login-popup');
    loginPopup.style.display = 'block';
}

function closeLoginPopup() {
    let loginPopup = document.getElementById('login-popup'),
        registerPopup = document.getElementById("registo-popup");
    loginPopup.style.display = 'none';
    registerPopup.style.display = 'none';
}