document.addEventListener("mousemove", (event) => {
  const followerDiv = document.getElementById("information-tooltip");
  followerDiv.style.left = event.clientX + "px";
  followerDiv.style.top = event.clientY + "px";
});

document.addEventListener("DOMContentLoaded", () => {
  const bureauElements = document.querySelectorAll(".information");
  const tooltip = document.getElementById("information-tooltip");

  bureauElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      tooltip.style.display = "block";
    });

    element.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
});
// INFORMATION button

document.addEventListener("mousemove", (event) => {
  const followerDiv = document.getElementById("discord-tooltip");
  followerDiv.style.left = event.clientX + "px";
  followerDiv.style.top = event.clientY + "px";
});

document.addEventListener("DOMContentLoaded", () => {
  const bureauElements = document.querySelectorAll(".discord");
  const tooltip = document.getElementById("discord-tooltip");

  bureauElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      tooltip.style.display = "block";
    });

    element.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
});
// DISCORD button
