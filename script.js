document.addEventListener('DOMContentLoaded', function () {
    const passwordField = document.getElementById('password');
    const confirmField = document.getElementById('confirm_password');
    const submitButton = document.getElementById('submit_button');
    const myForm = document.getElementById('myform');

    function checkPassword() {
        const password = passwordField.value;
        const confirmPassword = confirmField.value;

        if (password === confirmPassword) {
            submitButton.disabled = false;
            confirmField.setCustomValidity('');
        } else {
            submitButton.disabled = true;
            confirmField.setCustomValidity('Passwords do not match');
        }

        myForm.reportValidity();
    }

    myForm.addEventListener('submit', function (event) {
        checkPassword();
        if (!this.checkValidity()) {
            event.preventDefault();
        }
    });

    passwordField.addEventListener('input', checkPassword);
    confirmField.addEventListener('input', checkPassword);
});
