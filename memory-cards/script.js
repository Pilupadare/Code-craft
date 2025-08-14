const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');
// your code goes here
const cardsData = getCardsData();
let currentActiveCard = 0;
const cardsEl = [];

// Create all cards
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

// Create a single card
function createCard(data, index) {
  const card = document.createElement('div');
  card.classList.add('card');
  if (index === 0) card.classList.add('active');

  card.innerHTML = `
    <div class="inner-card">
      <div class="inner-card-front">
        <p>${data.question}</p>
      </div>
      <div class="inner-card-back">
        <p>${data.answer}</p>
      </div>
    </div>
  `;

  card.addEventListener('click', () => card.classList.toggle('show-answer'));

  cardsEl.push(card);
  cardsContainer.appendChild(card);

  updateCurrentText();
}

// Show current card number
function updateCurrentText() {
  currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
}

// Navigation
nextBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].classList.remove('active');
  currentActiveCard = (currentActiveCard + 1) % cardsEl.length;
  cardsEl[currentActiveCard].classList.add('active');
  updateCurrentText();
});

prevBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].classList.remove('active');
  currentActiveCard = (currentActiveCard - 1 + cardsEl.length) % cardsEl.length;
  cardsEl[currentActiveCard].classList.add('active');
  updateCurrentText();
});

// Show/hide add card container
showBtn.addEventListener('click', () => addContainer.classList.add('show'));
hideBtn.addEventListener('click', () => addContainer.classList.remove('show'));

// Add new card
addCardBtn.addEventListener('click', () => {
  const question = questionEl.value.trim();
  const answer = answerEl.value.trim();

  if (question && answer) {
    const newCard = { question, answer };
    createCard(newCard, cardsEl.length);
    questionEl.value = '';
    answerEl.value = '';
    addContainer.classList.remove('show');
    saveCardData(newCard);
  }
});

// Clear all cards
clearBtn.addEventListener('click', () => {
  localStorage.clear();
  cardsContainer.innerHTML = '';
  window.location.reload();
});

// Local storage functions
function getCardsData() {
  const cards = JSON.parse(localStorage.getItem('cards'));
  return cards === null ? [] : cards;
}

function saveCardData(card) {
  const cards = getCardsData();
  cards.push(card);
  localStorage.setItem('cards', JSON.stringify(cards));
}

// Initialize
createCards();
