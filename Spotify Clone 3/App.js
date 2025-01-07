document.addEventListener("DOMContentLoaded", () => {
    // Play button functionality
    const playButtons = document.querySelectorAll(".spotify-playlists .item .play .fa");
    playButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const playlistName = button.closest(".item").querySelector("h4").innerText;
            console.log(`Playing playlist: ${playlistName}`);
            // Placeholder: Trigger audio playback here if needed.
        });
    });

    // Navigation buttons functionality
    const backButton = document.querySelector(".prev-next-buttons .fa-chevron-left");
    const nextButton = document.querySelector(".prev-next-buttons .fa-chevron-right");

    backButton.addEventListener("click", () => {
        console.log("Navigated backward");
        // Placeholder: Add logic for navigation
    });

    nextButton.addEventListener("click", () => {
        console.log("Navigated forward");
        // Placeholder: Add logic for navigation
    });

    // Sign-up and log-in button actions
    const signUpButton = document.querySelector(".navbar button");
    signUpButton.addEventListener("click", () => {
        console.log("Sign up button clicked");
        // Placeholder: Redirect to sign-up page
    });

    const logInButton = document.querySelector(".topbar .navbar button");
    logInButton.addEventListener("click", () => {
        console.log("Log in button clicked");
        // Placeholder: Redirect to log-in page
    });

    // Preview button functionality
    const previewSignUpButton = document.querySelector(".preview button");
    previewSignUpButton.addEventListener("click", () => {
        console.log("Preview sign-up button clicked");
        // Placeholder: Redirect to sign-up page
    });

    console.log("Spotify clone initialized!");
});