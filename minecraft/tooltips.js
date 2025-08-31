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

// FACTIONS
document.addEventListener("mousemove", (event) => {
  const followerDiv = document.getElementById("seals-tooltip");
  followerDiv.style.left = event.clientX + "px";
  followerDiv.style.top = event.clientY + "px";
});

document.addEventListener("DOMContentLoaded", () => {
  const bureauElements = document.querySelectorAll(".seals");
  const tooltip = document.getElementById("seals-tooltip");

  bureauElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      tooltip.style.display = "block";
    });

    element.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
});
// dema faction

document.addEventListener("mousemove", (event) => {
  const followerDiv = document.getElementById("dema-tooltip");
  followerDiv.style.left = event.clientX + "px";
  followerDiv.style.top = event.clientY + "px";
});

document.addEventListener("DOMContentLoaded", () => {
  const bureauElements = document.querySelectorAll(".dema");
  const tooltip = document.getElementById("dema-tooltip");

  bureauElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      tooltip.style.display = "block";
    });

    element.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
});
// dema faction

document.addEventListener("mousemove", (event) => {
  const followerDiv = document.getElementById("bumps-tooltip");
  followerDiv.style.left = event.clientX + "px";
  followerDiv.style.top = event.clientY + "px";
});

document.addEventListener("DOMContentLoaded", () => {
  const bureauElements = document.querySelectorAll(".bumps");
  const tooltip = document.getElementById("bumps-tooltip");

  bureauElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      tooltip.style.display = "block";
    });

    element.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
});
// bumps faction

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
// populist faction

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
// trench faction

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
// bureau faction
