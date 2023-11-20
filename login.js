document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // You can replace this with your own validation logic
    if (username === 'admin' && password === 'password') {
        window.location.href = "home.html";
    } else {
        alert('Invalid username or password');
    }
});