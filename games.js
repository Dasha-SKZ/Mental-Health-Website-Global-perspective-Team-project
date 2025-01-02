const cardData = [
    "Stress", "Anxiety", "Depression", "Hope",
    "Meditation", "Self-Care", "Gratitude", "Mindfulness",
    "Stress", "Anxiety", "Depression", "Hope",
    "Meditation", "Self-Care", "Gratitude", "Mindfulness"
];

let flippedCards = [];
let matchedCards = [];
let moveCount = 0;

// Shuffle the cards
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Create the game board
function createGameBoard() {
    shuffleArray(cardData);
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; // Clear existing cards

    cardData.forEach((cardValue, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-index', index);
        card.setAttribute('data-value', cardValue);
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
}

// Flip the card
function flipCard() {
    if (flippedCards.length === 2 || this.classList.contains('flipped')) return;

    this.classList.add('flipped');
    this.textContent = this.getAttribute('data-value');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        moveCount++;
        document.getElementById('move-count').textContent = moveCount;

        if (flippedCards[0].getAttribute('data-value') === flippedCards[1].getAttribute('data-value')) {
            matchedCards.push(...flippedCards);
            flippedCards = [];
            if (matchedCards.length === cardData.length) {
                setTimeout(() => alert("You win!"), 500);
            }
        } else {
            setTimeout(() => {
                flippedCards.forEach(card => card.classList.remove('flipped'));
                flippedCards = [];
            }, 1000);
        }
    }
}

// Reset the game
function resetGame() {
    matchedCards = [];
    flippedCards = [];
    moveCount = 0;
    document.getElementById('move-count').textContent = moveCount;
    createGameBoard();
}

// Initialize the game
window.onload = createGameBoard;

document.getElementById('reset-button').addEventListener('click', resetGame);
