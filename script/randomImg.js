// Array of image filenames in the /img/covers/ directory
const coverImages = ["dangerdays.jpg", "violentwaves.jpg", "shortnsweetdeluxe.jpg"];

// Function to select a random image and set it as the background
function setRandomBackground() {
  const randomIndex = Math.floor(Math.random() * coverImages.length);
  const randomImage = coverImages[randomIndex];
  const mainbgElement = document.querySelector(".mainbg");
  mainbgElement.style.backgroundImage = `url('img/covers/${randomImage}')`;
}

// Call the function to set the random background on page load
setRandomBackground();
