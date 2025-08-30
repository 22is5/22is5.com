document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "p") {
    const pumpkin = document.getElementById("pumpkin");
    pumpkin.style.display = pumpkin.style.display === "none" ? "block" : "none";
  }
});
