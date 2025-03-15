// Handle login functionality
const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirect to the next page after successful login
            window.location.href = "dashboard.html"; // Example redirect
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessageText = error.message;
            errorMessage.textContent = `Error: ${errorMessageText}`;
        });
});

// Discord Redirection
function goToDiscord() {
    window.location.href = "https://discord.gg/hPpHaZuR2R"; // Replace with your Discord invite link
}
