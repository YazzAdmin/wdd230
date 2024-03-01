function checkPasswordMatch() {
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");

    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords do not match");
    } else {
        confirm_password.setCustomValidity("");
    }
}


document.getElementById('rating').addEventListener('input', function() {
    document.getElementById('rangevalue').textContent = this.value;
});