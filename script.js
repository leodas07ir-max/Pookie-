// Handle Intro Video
const video = document.getElementById("intro-video");
const introScreen = document.getElementById("intro-screen");
const mainContent = document.getElementById("main-content");

video.addEventListener("ended", () => {
  introScreen.style.display = "none";
  mainContent.classList.remove("hidden");
});

// Menu Panel Toggle
function togglePanel() {
  document.getElementById("menu-panel").classList.toggle("active");
}
