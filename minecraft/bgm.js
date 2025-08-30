document.addEventListener("DOMContentLoaded", function () {
  fetch("songs.json")
    .then((response) => response.json())
    .then((data) => {
      const audio = document.querySelector(".bgm");
      const songs = Array.isArray(data) ? data : [data];
      const randomSong = songs[Math.floor(Math.random() * songs.length)].url;
      audio.src = randomSong;
      audio.load();
    });

  document
    .querySelector(".music__checkbox")
    .addEventListener("click", function () {
      const checkbox = this;
      const audio = document.querySelector(".bgm");
      audio.muted = !audio.muted;
      checkbox.style.backgroundImage = audio.muted
        ? "url('textures/gui/sprites/widget/checkbox.png')"
        : "url('textures/gui/sprites/widget/checkbox_selected.png')";
      if (!audio.muted) audio.play();
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("songs.json")
    .then((response) => response.json())
    .then((data) => {
      const audio = document.querySelector(".bgm");
      const songs = Array.isArray(data) ? data : [data];
      const randomSong = songs[Math.floor(Math.random() * songs.length)].url;
      audio.src = randomSong;
      audio.load();
    });

  document
    .querySelector(".music__checkbox")
    .addEventListener("click", function () {
      const checkbox = this;
      const audio = document.querySelector(".bgm");
      const clickSound = new Audio("audio/click.wav");
      clickSound.volume = 0.05;
      clickSound.play();
      audio.muted = !audio.muted;
      checkbox.style.backgroundImage = audio.muted
        ? "url('textures/gui/sprites/widget/checkbox.png')"
        : "url('textures/gui/sprites/widget/checkbox_selected.png')";
      if (!audio.muted) audio.play();
    });
});
