// script.js

// Toggle play/pause for each song
function togglePlay(songId) {
    const audio = document.getElementById(songId); // Get the audio element by its ID

    // If the audio is paused, play it
    if (audio.paused) {
        audio.play();
        document.getElementById(songId).nextElementSibling.textContent = 'Pause'; // Change button text to 'Pause'
    } else {
        audio.pause(); // Pause the song if it's already playing
        document.getElementById(songId).nextElementSibling.textContent = 'Play'; // Change button text back to 'Play'
    }
}