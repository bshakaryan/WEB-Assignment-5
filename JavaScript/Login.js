document.getElementById('loginForm').addEventListener('submit', validateForm);

function validateForm(event) {
    event.preventDefault();

    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var formIsValid = true;

    if (email.value === "" || email.value.indexOf("@") === -1) {
        alert("Please enter a valid email address.");
        formIsValid = false;
    }

    if (password.value.length < 6) {
        alert("Password must be at least 6 characters long.");
        formIsValid = false;
    }

    if (formIsValid) {
        alert("Form submitted successfully!");
        event.target.submit();
    }
}