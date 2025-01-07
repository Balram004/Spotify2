document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulating login request (can be replaced with an API call)
    if (email === "test@example.com" && password === "password123") {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to home
    } else {
        alert("Invalid email or password. Please try again.");
    }
});