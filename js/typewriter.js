const text = "22is5.com";
const element = document.getElementById("title");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();
