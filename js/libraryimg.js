// Array of image filenames in the /img/covers/ directory
const coverImages = ["https://github.com/22is5/cdn.22is5.org/blob/main/img/covers/cs-2005_juturna.jpg?raw=true", "https://github.com/22is5/cdn.22is5.org/blob/main/img/covers/cs-2007_onlettinggo.jpg?raw=true", "https://github.com/22is5/cdn.22is5.org/blob/main/img/covers/mcr-2004_threecheers.jpg?raw=true", "https://github.com/22is5/cdn.22is5.org/blob/main/img/covers/mcr-2025_threecheersdeluxe.png?raw=true"];

// Function to select a random image and set it as the background
function setRandomBackground() {
  const randomIndex = Math.floor(Math.random() * coverImages.length);
  const randomImage = coverImages[randomIndex];
  const mainbgElement = document.querySelector(".mainbg");
  mainbgElement.style.backgroundImage = `url('${randomImage}')`;
}

// Call the function to set the random background on page load
setRandomBackground();
