const outputLabel = document.querySelector(".output-label");
const numbersButton = document.querySelectorAll(".numbers-input");
const previousEntryLabel = document.querySelector(".previous-entry");
let prevNumber = null;
let currentNumber = null;
let finalNumber = null;

numbersButton.forEach((button) => {
  button.addEventListener("click", () => {
    outputLabel.textContent = button.textContent;
    if (prevNumber == null) {
      prevNumber = Number(button.textContent);
      // previousEntryLabel.textContent += `${prevNumber}`;
    } else {
      currentNumber = Number(button.textContent);
      previousEntryLabel.textContent += ` ${currentNumber}`;
    }
  });
});
// Equal operator
const equalOperator = document.querySelector(".equal-op-btn");
equalOperator.addEventListener("click", () => {
  if (prevNumber !== null && currentNumber !== null) {
    checkPreviousEntryOperator();
    outputLabel.textContent = finalNumber;
    previousEntryLabel.style.visibility = "hidden";
    prevNumber = finalNumber;
    currentNumber = null;
  }
});

// Clear All operator
const clearAllOperator = document.querySelector(".clear-all-operator");
clearAllOperator.addEventListener("click", () => {
  outputLabel.textContent = "0";
  previousEntryLabel.textContent = null;
  previousEntryLabel.style.visibility = "hidden";
  prevNumber = null;
  currentNumber = null;
  finalNumber = null;
});

// check and calculate previous entry operator function
const checkPreviousEntryOperator = () => {
  const prevOperation = previousEntryLabel.textContent.includes("+")
    ? "+"
    : previousEntryLabel.textContent.includes("-")
    ? "-"
    : previousEntryLabel.textContent.includes("x")
    ? "x"
    : null;
  if (prevOperation === "+") {
    finalNumber = prevNumber + currentNumber;
  } else if (prevOperation === "-") {
    finalNumber = prevNumber - currentNumber;
  } else if (prevOperation === "x") {
    finalNumber = prevNumber * currentNumber;
  }
  return prevOperation;
};

// Sum operator
const sumOperator = document.querySelector(".sum-operator");
sumOperator.addEventListener("click", () => {
  if (prevNumber !== null) {
    if (currentNumber !== null) {
      // Check if there was a previous operation
      checkPreviousEntryOperator();
      prevNumber = finalNumber;
      currentNumber = null;
      outputLabel.textContent = finalNumber;
    }
    previousEntryLabel.textContent = `${prevNumber} +`;
    previousEntryLabel.style.visibility = "visible";
  }
});

// Minus Operator
const minusOperator = document.querySelector(".minus-operator");
minusOperator.addEventListener("click", () => {
  if (prevNumber !== null) {
    if (currentNumber !== null) {
      checkPreviousEntryOperator();
      prevNumber = finalNumber;
      currentNumber = null;
      outputLabel.textContent = finalNumber;
    }
    previousEntryLabel.textContent = `${prevNumber} -`;
    previousEntryLabel.style.visibility = "visible";
  }
});

// Multiply operator
const multiplyOperator = document.querySelector(".multiply-operator");
multiplyOperator.addEventListener("click", () => {
  if (prevNumber !== null) {
    if (currentNumber !== null) {
      checkPreviousEntryOperator();
      prevNumber = finalNumber;
      currentNumber = null;
      outputLabel.textContent = finalNumber;
    }
    previousEntryLabel.textContent = `${prevNumber} x`;
    previousEntryLabel.style.visibility = "visible";
  }
});
