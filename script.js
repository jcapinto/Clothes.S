let loginButton = document.getElementById('log-button'),
    registerButton = document.getElementById('regis-btn'),
    loginPopup = document.getElementById('login-popup'),
    closeButton = document.getElementById('close-btn'),
    registerPopup = document.getElementById('registo-popup');


loginButton.addEventListener('click', showLoginPopup);
closeButton.addEventListener('click', closePopup);
registerButton.addEventListener('click', showRegisterPopup);

function showLoginPopup() {
    loginPopup.style.display = 'block';
}

function showRegisterPopup() {
    registerButton.style.display = 'block';
}

function closePopup() {
    loginPopup.style.display = 'none';
    registerPopup.style.display = 'none';
}