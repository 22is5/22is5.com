// Array of image filenames in the /img/covers/ directory
const coverImages = [
  "emailsicantsendfwd.jpg",
  "shortnsweet.jpg",
  "shortnsweetdeluxe.jpg",
  "divineinnertension.jpg",
  "alongtheshadow.jpg",
  "amok.jpg",
  "hawaiipartii.jpg",
  "kida.jpg",
  "bullets.jpg",
  "juturna.jpg",
  "onlettinggo.jpg",
  "blackparade.jpg",
  "allweknowisfalling.jpg",
  "threecheers.jpg",
  "threecheersdeluxe.jpg",
  "hesitantalien.jpg",
  "riot.jpg",
  "moonshapedpool.jpg",
  "bends.jpg",
  "flairforthedramatic.jpg",
  "withearstosee.jpg",
  "twodreams.jpg",
  "twodreams.jpg",
  "twodreams.jpg",
  "twodreams.jpg",
  "twodreams.jpg",
  "twodreams.jpg",
  "twodreams.jpg",
  "twodreams.jpg",
  "violentwaves.jpg",
  "dangerdays.jpg"
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
