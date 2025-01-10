// function moveImages() {
//   const slider = document.querySelector(".image-slider");
//   slider.style.transform = "translateX(-100%)";

//   setTimeout(() => {
//     slider.style.transition = "none";
//     slider.style.transform = "translateX(100%)";

//     // Allow browser to reset before restarting animation
//     setTimeout(() => {
//       slider.style.transition = "transform 10s linear";
//       slider.style.transform = "translateX(-100%)";
//     }, 100);
//   }, 10000); // Reset after animation
// }

// // Start initial animation
// moveImages();

// // Repeat every 30 seconds
// setInterval(moveImages, 30000);
