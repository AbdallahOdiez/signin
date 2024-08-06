/* ERROR */
document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Perform basic validation
    if (username === 'admin' && password === 'password'){
    alert('Login successful!'); // Replace with your actual login logic
    }
    else{
    var errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = 'Invalid email or password. Please try again.';
    }
});
/* SHOW/HIDE PASSWORD */
document.getElementById('eyeicon').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const passwordType = passwordInput.getAttribute('type');
    if (passwordType === 'password') {
        passwordInput.setAttribute('type', 'text');
        this.textContent = '';
        this.classList.replace("fa-eye-slash","fa-eye");
    } else {
        passwordInput.setAttribute('type', 'password');
        this.textContent = '';
        this.classList.replace("fa-eye","fa-eye-slash");
    }
});