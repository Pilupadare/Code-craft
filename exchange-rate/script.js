const currency_one = document.getElementById("currency-one");
const currency_two = document.getElementById("currency-two");
const amount_one = document.getElementById("amount-one");
const amount_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// Function to fetch and calculate exchange rate
function calculate() {
  const baseCurrency = currency_one.value;
  const targetCurrency = currency_two.value;

  fetch(`https://open.exchangerate-api.com/v6/latest`)
    .then(res => res.json())
    .then(data => {
      const rates = data.rates;
      const rate = rates[targetCurrency] / rates[baseCurrency];
      rateEl.innerText = `1 ${baseCurrency} = ${rate.toFixed(4)} ${targetCurrency}`;
      amount_two.value = (amount_one.value * rate).toFixed(2);
    })
    .catch(error => {
      console.error("Error fetching exchange rate:", error);
      rateEl.innerText = "Unable to fetch rate.";
    });
}

// Event listeners
currency_one.addEventListener("change", calculate);
currency_two.addEventListener("change", calculate);
amount_one.addEventListener("input", calculate);

// Swap currencies
swap.addEventListener("click", () => {
  const temp = currency_one.value;
  currency_one.value = currency_two.value;
  currency_two.value = temp;
  calculate();
});

// Initial calculation
calculate();

