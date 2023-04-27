let loginButton = document.querySelector('.user-texts .user-text-ico:nth-child(1)'),
    registerButton = document.querySelector('#regis-btn'),
    loginPopup = document.getElementById('login-popup'),
    closePopup = document.getElementById('close-popup'),
    registerPopup = document.getElementById('registo-popup');

    registerButton.addEventListener('click', showRegisterPopup);

function showRegisterPopup() {
    let registerPopup = document.getElementById('registo-popup');
    registerPopup.style.display = 'block';
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