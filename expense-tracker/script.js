const balance = document.getElementById('balance');
const incomes = document.getElementById('money-plus');
const expens = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// Load transactions from localStorage
const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// Generate unique ID
function generateId() {
  return Math.floor(Math.random() * 100000000);
}

// Add transaction
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add both text and amount');
    return;
  }

  const transaction = {
    id: generateId(),
    text: text.value,
    amount: +amount.value
  };

  transactions.push(transaction);
  addTransactionDOM(transaction);
  updatevalues();
  updateLocalStorage();

  text.value = '';
  amount.value = '';
}

// Add transaction to DOM
function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? '-' : '+';
  const item = document.createElement('li');

  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

  item.innerHTML = `
    ${transaction.text} <span>${sign}$${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
  `;

  list.appendChild(item);
}

// Update balance, income, and expense
function updatevalues() {
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);
  const income = amounts.filter(val => val > 0).reduce((acc, val) => acc + val, 0).toFixed(2);
  const expense = (
    amounts.filter(val => val < 0).reduce((acc, val) => acc + val, 0) * -1
  ).toFixed(2);

  balance.innerText = `$${total}`;
  incomes.innerText = `+$${income}`;
  expens.innerText = `-$${expense}`;
}

// Save to localStorage
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Remove transaction
function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);
  updateLocalStorage();
  init();
}

// Initialize app
function init() {
  list.innerHTML = '';
  transactions.forEach(addTransactionDOM);
  updatevalues();
}

init();
form.addEventListener('submit', addTransaction);
