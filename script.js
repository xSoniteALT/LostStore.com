// Firebase Auth Logic in script.js

// Get references to the DOM elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signInButton = document.getElementById("signIn");

// Sign in function
signInButton.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    // Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log("Logged in as:", user.email);
            window.location.href = "dashboard.html"; // Redirect to the dashboard or home
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error:", errorMessage);
        });
});
