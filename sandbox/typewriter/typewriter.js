const text = "This text will get written character-by-character."; // what gets said
const element = document.getElementById("typeWriter");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // ms per character
  }
}

typeWriter();
