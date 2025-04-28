// Array of image filenames in the /img/covers/ directory
const coverImages = [
  "emailsicantsendfwd.jpg",
  "shortnsweet.jpg",
  "shortnsweetdeluxe.jpg",
  "divineinnertension.jpg",
  "alongtheshadow.jpg",
  "amok.jpg",
  "myironlung.jpg",
  "hawaiipartii.jpg",
  "kida.jpg",
  "bullets.jpg",
  "juturna.jpg",
  "onlettinggo.jpg",
  "blackparade.jpg",
  "paramore.jpg",
  "allweknowisfalling.jpg",
  "tomorrowsmodernboxes.jpg",
  "eraser.jpg",
  "threecheers.jpg",
  "threecheersdeluxe.jpg",
  "hesitantalien.jpg",
  "riot.jpg",
  "moonshapedpool.jpg",
  "inrainbows.jpg",
  "hailtothethief.jpg",
  "bends.jpg"
];

// Function to select a random image and set it as the background
function setRandomBackground() {
  const randomIndex = Math.floor(Math.random() * coverImages.length);
  const randomImage = coverImages[randomIndex];
  const mainbgElement = document.querySelector(".mainbg");
  mainbgElement.style.backgroundImage = `url('img/covers/${randomImage}')`;
}

// Call the function to set the random background on page load
setRandomBackground();
