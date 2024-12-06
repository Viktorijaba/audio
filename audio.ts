const playButtons = document.querySelectorAll<HTMLButtonElement>(".play-button");
const audioElements = document.querySelectorAll<HTMLAudioElement>("audio");


playButtons.forEach((button, index) => {
    button.onclick = () => {
        audioElements.forEach((audio, audioIndex) => {
            if (index !== audioIndex) {
                audio.pause();
                audio.currentTime = 0;
            }
        });


        const audio = audioElements[index];
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    };
});
