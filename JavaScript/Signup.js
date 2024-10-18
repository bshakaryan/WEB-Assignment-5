document.getElementById('registrationForm').addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (!username) {
        alert('Please enter your username.');
        return;
    }

    if (!email) {
        alert('Please enter your email address.');
        return;
    }

    if (!password || password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    alert('Registration successful!');
}