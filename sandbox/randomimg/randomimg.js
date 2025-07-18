// images
const coverImages = [
  "https://github.com/22is5/cdn.22is5.org/blob/main/img/covers/cs-2005_juturna.jpg?raw=true",
  "https://github.com/22is5/cdn.22is5.org/blob/main/img/covers/cs-2007_onlettinggo.jpg?raw=true",
  "https://github.com/22is5/cdn.22is5.org/blob/main/img/covers/mcr-2004_threecheers.jpg?raw=true",
  "https://github.com/22is5/cdn.22is5.org/blob/main/img/covers/mcr-2025_threecheersdeluxe.png?raw=true",
];

// get image from array and set it as bg
function setRandomBackground() {
  const randomIndex = Math.floor(Math.random() * coverImages.length);
  const randomImage = coverImages[randomIndex];
  const coverElement = document.querySelector(".cover");
  coverElement.style.backgroundImage = `url('${randomImage}')`;
}

// call function
setRandomBackground();
