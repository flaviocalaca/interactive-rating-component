const card = document.querySelector(".card");
const thankYou = document.querySelector(".thank-you");
const buttons = document.querySelectorAll(".buttons button");
const btnSubmit = document.querySelector(".btn-submit");
const form = document.querySelector("#form");
const selectedPhrase = document.querySelector("#selected");



form.addEventListener("submit", (e) => {
  e.preventDefault();
  const optionSelected = document.querySelector(".selected");
  if (!optionSelected) return;
  console.log(optionSelected.textContent);
  card.classList.add("hidden");
  thankYou.classList.remove("hidden");
  selectedPhrase.textContent = `You selected ${optionSelected.textContent} out of 5`;
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("selected");
    });
    button.classList.add("selected");
  });
});
