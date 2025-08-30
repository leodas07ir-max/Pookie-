// script.js

// 🎉 Small Confetti Effect (for Love Notes / Special clicks)
function launchConfetti() {
  const confettiContainer = document.createElement("div");
  confettiContainer.classList.add("confetti-container");
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    confetti.style.backgroundColor = randomColor();
    confettiContainer.appendChild(confetti);
  }

  setTimeout(() => confettiContainer.remove(), 5000);
}

function randomColor() {
  const colors = ["#ff6b6b", "#feca57", "#1dd1a1", "#54a0ff", "#ff9ff3"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// 💌 Love Notes Data
const loveNotes = [
  "I love you ❤️",
  "I miss you 💭",
  "I need you 🌹",
  "You make my world brighter ✨",
  "Forever my favorite person 💕",
  "I choose you, always 💍",
  "I found you and I’ll never let go 🌈",
  "I feel you in every heartbeat 💓",
  "I remember us and smile 😊",
  "I hug you even when we’re apart 🤗"
];

function showRandomNote() {
  const noteDisplay = document.getElementById("note-display");
  if (noteDisplay) {
    const random = loveNotes[Math.floor(Math.random() * loveNotes.length)];
    noteDisplay.innerText = random;
    launchConfetti();
  }
}

// 📝 Memories Data
const memories = [
  "Our first hug ❤️",
  "That rainy day walk 🌧️",
  "Our endless talks under the sky 🌌",
  "Laughing so hard until tears came 😂",
  "That time we stayed up late sharing dreams ✨",
  "The way we teased each other like best friends 🤭",
  "The day we sat in silence but it felt complete 🌙",
  "The way you smiled at me when I was low 💫",
  "That bike ride where we just kept going 🚴",
  "The birthday surprise moment 🎂",
  "The afternoon with music and laughs 🎶",
  "That time we argued but laughed right after 😂❤️"
];

function showRandomMemory() {
  const memoryDisplay = document.getElementById("memory-display");
  if (memoryDisplay) {
    const random = memories[Math.floor(Math.random() * memories.length)];
    memoryDisplay.innerText = random;
  }
}

// ✨ Intro Loader (for homepage)
window.addEventListener("load", () => {
  const intro = document.getElementById("intro-screen");
  if (intro) {
    setTimeout(() => {
      intro.classList.add("fade-out");
      setTimeout(() => intro.style.display = "none", 1000);
    }, 2500); // stays visible for 2.5s before fade
  }
});
