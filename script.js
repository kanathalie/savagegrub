const quotes = [
  "Good food is the foundation of happiness.",
  "Life is short. Eat the burger.",
  "Savor the flavor, live the moment.",
  "Food that hits different.",
  "Eat savage. Live savage."
];

document.getElementById("quoteBtn").addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[random];
});
