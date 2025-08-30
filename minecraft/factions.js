document.addEventListener("mousemove", (event) => {
  const followerDiv = document.getElementById("bureau-tooltip");
  followerDiv.style.left = event.clientX + "px";
  followerDiv.style.top = event.clientY + "px";
});

document.addEventListener("DOMContentLoaded", () => {
  const bureauElements = document.querySelectorAll(".bureau");
  const tooltip = document.getElementById("bureau-tooltip");

  bureauElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      tooltip.style.display = "block";
    });

    element.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
});
//BUREAU

document.addEventListener("mousemove", (event) => {
  const followerDiv = document.getElementById("trench-tooltip");
  followerDiv.style.left = event.clientX + "px";
  followerDiv.style.top = event.clientY + "px";
});

document.addEventListener("DOMContentLoaded", () => {
  const bureauElements = document.querySelectorAll(".trench");
  const tooltip = document.getElementById("trench-tooltip");

  bureauElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      tooltip.style.display = "block";
    });

    element.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
});
//TRENCH

document.addEventListener("mousemove", (event) => {
  const followerDiv = document.getElementById("populist-tooltip");
  followerDiv.style.left = event.clientX + "px";
  followerDiv.style.top = event.clientY + "px";
});

document.addEventListener("DOMContentLoaded", () => {
  const bureauElements = document.querySelectorAll(".populist");
  const tooltip = document.getElementById("populist-tooltip");

  bureauElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      tooltip.style.display = "block";
    });

    element.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
});
//POPULIST
