// script.js

const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const resetButton = document.getElementById('reset');

let score = 0;

// Function to generate random blocks
function generateBlocks() {
    gameBoard.innerHTML = ''; // Clear previous blocks
    for (let i = 0; i < 20; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.addEventListener('click', () => blastBlock(block));
        gameBoard.appendChild(block);
    }
}

// Function to blast a block
function blastBlock(block) {
    block.classList.add('blasted');
    score += 10; // Increase score by 10
    scoreDisplay.textContent = score;
}

// Function to reset the game
function resetGame() {
    score = 0;
    scoreDisplay.textContent = score;
    generateBlocks();
}

// Initialize the game
generateBlocks();

// Add reset button functionality
resetButton.addEventListener('click', resetGame);
