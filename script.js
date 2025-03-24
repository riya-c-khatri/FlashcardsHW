const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

let currentIndex = 0;  
let showingTerm = true; 

// Function to display the current flashcard
function displayCard() {
    const cardContent = document.getElementById('card-content');
    const currentCard = flashcards[currentIndex];

    if (showingTerm) {
        cardContent.textContent = currentCard.term;
    } else {
        cardContent.textContent = currentCard.definition;
    }
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayCard();
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        displayCard();
    }
});

document.getElementById('flashcard').addEventListener('click', () => {
    showingTerm = !showingTerm; 
    displayCard();
});

// Add new flashcard to the list
document.getElementById('add-card-btn').addEventListener('click', () => {
    const term = document.getElementById('new-term').value;
    const definition = document.getElementById('new-definition').value;

    if (term && definition) {
        flashcards.push({ term, definition }); 
        document.getElementById('new-term').value = '';
        document.getElementById('new-definition').value = '';
        currentIndex = flashcards.length - 1;  
        displayCard();
    } else {
        alert('Please enter both term and definition!');
    }
});

window.onload = displayCard;
