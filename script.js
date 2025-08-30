const memories = [
  "Our first long chat that lasted hours 💬",
  "The way you called me your golgappa 🥰",
  "That day you made me laugh so hard I couldn’t breathe 😂",
  "When you cheered me up on my saddest day 💕",
  "Every little goodnight we shared 🌙💤"
];

function showMemory() {
  const random = Math.floor(Math.random() * memories.length);
  document.getElementById("memory").innerText = memories[random];
}

// Mini Game 1: Guess the Number
function playGuess() {
  const number = Math.floor(Math.random() * 10) + 1;
  const guess = prompt("Guess a number between 1-10 🎲:");
  if (guess == number) alert("🎉 You guessed right, my love!");
  else alert(`Not this time 💔. The number was ${number}. Try again!`);
}

// Mini Game 2: Click the Hearts
function playHearts() {
  alert("❤️ Imagine me sending you 1000 kisses & hugs ❤️");
}
