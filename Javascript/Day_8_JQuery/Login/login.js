document.querySelector('.login-form').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        emailError.style.display = 'block';
        event.preventDefault();
    } else {
        emailError.style.display = 'none';
    }

    if (password.length < 6) {
        passwordError.style.display = 'block';
        event.preventDefault();
    } else {
        passwordError.style.display = 'none';
    }
});
