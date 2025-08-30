document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");
  const audio = new Audio("audio/click.wav");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      audio.play().catch((error) => {});
      audio.volume = 0.05;
    });
  });
});
