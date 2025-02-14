const buttons = document.querySelectorAll(".color-button");
const body = document.body;
const colorDisplay = document.querySelector(".color-display");

// Function to darken a color
function darkenColor(color, percent) {
  const num = parseInt(color.slice(1), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = ((num >> 8) & 0x00ff) - amt;
  const B = (num & 0x0000ff) - amt;
  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1)}`;
}

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    const color = button.getAttribute("data-color");
    body.style.backgroundColor = color; // Change body color
    colorDisplay.style.backgroundColor = darkenColor(color, 40); // Darken color for the display div
  });

  button.addEventListener("mouseout", () => {
    body.style.backgroundColor = ""; // Reset body color
    colorDisplay.style.backgroundColor = "#333"; // Reset display div color
  });
});
