document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('video');
    const playPauseButton = document.getElementById('play-pause');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');

    playPauseButton.addEventListener('click', () => {
        if (video.paused || video.ended) {
            video.play();
            playPauseButton.textContent = 'Pause';
        } else {
            video.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    video.addEventListener('timeupdate', () => {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.value = progress;

        currentTimeDisplay.textContent = formatTime(video.currentTime);
        durationDisplay.textContent = formatTime(video.duration);
    });

    progressBar.addEventListener('input', () => {
        const time = (progressBar.value / 100) * video.duration;
        video.currentTime = time;
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});
