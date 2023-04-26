let loginButton = document.querySelector('.user-texts .user-text-ico:nth-child(1)'),
    loginPopup = document.getElementById('login-popup'),
    closePopup = document.getElementById('close-popup');

function showLoginPopup() {
    let loginPopup = document.getElementById('login-popup');
    loginPopup.style.display = 'block';
}

function closeLoginPopup() {
    let loginPopup = document.getElementById('login-popup');
    loginPopup.style.display = 'none';
}


