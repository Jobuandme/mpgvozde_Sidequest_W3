// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawLose() → what the lose screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------
// Main draw function for lose screen
// ------------------------------
// drawEndingB() is called from main.js
// only when currentScreen === "EndingB"
function drawEndingB() {
  // Red-tinted background to communicate failure
  background(255, 210, 210);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main message
  textSize(40);
  text("You Lose?", width / 2, 300);

  // Instruction text
  textSize(20);
  text("You've been arrested, You were directly responsible for derailing the ION", width / 2, 360);
}

// ------------------------------
// Mouse input for lose screen
// ------------------------------
// Any mouse click returns the player to the start screen
// (no buttons needed for this simple end state)
function endBMousePressed() {
  currentScreen = "start";
}

