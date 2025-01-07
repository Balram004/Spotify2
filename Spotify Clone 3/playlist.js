// script.js

function togglePlay(songId) {
    const audio = document.getElementById(songId);

    if (audio.paused) {
        audio.play();
        document.getElementById(songId).nextElementSibling.textContent = 'Pause';
    } else {
        audio.pause();
        document.getElementById(songId).nextElementSibling.textContent = 'Play';
    }
}