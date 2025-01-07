// script.js

// Log when a download button is clicked
const downloadButtons = document.querySelectorAll('.download-button');

downloadButtons.forEach(button => {
    button.addEventListener('click', function() {
        console.log(`User clicked on the download link for: ${button.textContent}`);
    });
});