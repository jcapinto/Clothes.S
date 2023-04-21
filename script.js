let loginButton = document.querySelector('.user-texts .user-text-ico:nth-child(1)'),
loginPopup = document.getElementById('login-popup'),
closePopup = document.getElementById('close-popup');

loginButton.addEventListener('click', function() {
  loginPopup.style.display = 'block';
});

closePopup.addEventListener('click', function() {
  loginPopup.style.display = 'none';
});
