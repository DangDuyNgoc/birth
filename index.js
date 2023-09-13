const audio = document.getElementById('audio');
const toggleButton = document.getElementById('toggleButton');
const currentTimeDisplay = document.getElementById('currentTime');
const progressBar = document.getElementById('progressBar');

let isPlaying = false;

toggleButton.addEventListener('click', function () {
    if (isPlaying) {
        audio.pause();
        toggleButton.innerHTML = '<i class="gg-play-button-o"></i>';
    } else {
        audio.play();
        toggleButton.innerHTML = '<i class="gg-play-pause-o"></i>';
    }
    isPlaying = !isPlaying;
});

audio.addEventListener('timeupdate', function () {
    const currentTime = formatTime(audio.currentTime);
    currentTimeDisplay.textContent = currentTime;
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});

progressBar.addEventListener('input', function () {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
}