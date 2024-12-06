const playButtons = document.querySelectorAll<HTMLButtonElement>(".play-button");
const audioElements = document.querySelectorAll<HTMLAudioElement>("audio");
const videoElements = document.querySelectorAll<HTMLVideoElement>("video");

playButtons.forEach((button, index) => {
    button.onclick = () => {

        audioElements.forEach((audio, audioIndex) => {
            if (index !== audioIndex) {
                audio.pause();
                audio.currentTime = 0;
            }
        });


        videoElements.forEach((video, videoIndex) => {
            const videoButtonIndex = videoIndex + audioElements.length;
            if (index !== videoButtonIndex) {
                video.pause();
                video.currentTime = 0;
            }
        });


        if (index < audioElements.length) {

            const audio = audioElements[index];
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        } else {
            const videoIndex = index - audioElements.length;
            const video = videoElements[videoIndex];
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    };
});
