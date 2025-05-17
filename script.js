const outputLabel = document.querySelector(".output-label");
const numbersButton = document.querySelectorAll(".numbers-input");
let firstNumberMemory;
let secondNumberMemory;
numbersButton.forEach((button) => {
  button.addEventListener("click", () => {
    outputLabel.textContent = button.textContent;
    if (firstNumberMemory == null) {
      firstNumberMemory = Number(button.textContent);
    } else {
    }
  });
});

const sumOperator = document.querySelector(".sum-operator");
sumOperator.addEventListener("click", () => {
  if (secondNumberMemory == null) {
    secondNumberMemory = firstNumberMemory;
  } else {
    secondNumberMemory += Number(firstNumberMemory);
    outputLabel.textContent = secondNumberMemory;
  }
  firstNumberMemory = null;
});
