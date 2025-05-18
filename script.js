const outputLabel = document.querySelector(".output-label");
const numbersButton = document.querySelectorAll(".numbers-input");
const previousEntryLabel = document.querySelector(".previous-entry");
let prevNumber = null;
let currentNumber = null;
let finalNumber = null;

// Function to round decimals to 2 places ****
function roundToTwoDecimals() {
  outputLabel.textContent = Math.round(outputLabel.textContent * 100) / 100;
}

// stores input numbers and ready for next inputs
function storeNumbers() {
  if (prevNumber == null) {
    prevNumber = Number(outputLabel.textContent);
    outputLabel.textContent = 0;
  } else if (currentNumber == null) {
    currentNumber = Number(outputLabel.textContent);
    previousEntryLabel.textContent += ` ${currentNumber}`;
    outputLabel.textContent = 0;
  } else {
    outputLabel.textContent = 0;
  }
}

// when Number is Clicked
numbersButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (outputLabel.textContent == 0) {
      outputLabel.textContent = button.textContent;
    } else {
      outputLabel.textContent += button.textContent;
    }
  });
});

// Equal operator
const equalOperator = document.querySelector(".equal-op-btn");
equalOperator.addEventListener("click", () => {
  storeNumbers();
  if (prevNumber !== null && currentNumber !== null) {
    checkPreviousEntryOperator();
    outputLabel.textContent = finalNumber;
    previousEntryLabel.style.visibility = "hidden";
    prevNumber = null;
    currentNumber = null;
    roundToTwoDecimals();
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

// Remove number digits one by one
const digitsRemover = document.querySelector(".digit-remover");
let newNumberAfterRemove;
digitsRemover.addEventListener("click", () => {
  if (outputLabel.textContent !== 0) {
    newNumberAfterRemove = outputLabel.textContent.slice(0, -1);
    outputLabel.textContent = newNumberAfterRemove;
  }
});

// check and calculate previous entry operator function / also calculates all results
const checkPreviousEntryOperator = () => {
  const prevOperation = previousEntryLabel.textContent.includes("+")
    ? "+"
    : previousEntryLabel.textContent.includes("-")
    ? "-"
    : previousEntryLabel.textContent.includes("x")
    ? "x"
    : previousEntryLabel.textContent.includes("/")
    ? "/"
    : previousEntryLabel.textContent.includes("%")
    ? "%"
    : null;
  if (prevOperation === "+") {
    finalNumber = prevNumber + currentNumber;
  } else if (prevOperation === "-") {
    finalNumber = prevNumber - currentNumber;
  } else if (prevOperation === "x") {
    finalNumber = prevNumber * currentNumber;
  } else if (prevOperation === "/") {
    finalNumber = prevNumber / currentNumber;
  } else if (prevOperation === "%") {
    finalNumber = prevNumber % currentNumber;
  }
  return prevOperation;
};

// Sum operator +
const sumOperator = document.querySelector(".sum-operator");
sumOperator.addEventListener("click", () => {
  storeNumbers();
  if (prevNumber !== null) {
    if (currentNumber !== null) {
      // Check if there was a previous operation
      checkPreviousEntryOperator();
      prevNumber = finalNumber;
      currentNumber = null;
      // outputLabel.textContent = finalNumber;
      outputLabel.textContent = 0;
    }
    // i wrote this with math round to not be messy in UI
    previousEntryLabel.textContent = `${Math.round(prevNumber * 100) / 100} +`;
    previousEntryLabel.style.visibility = "visible";
  }
});

// Minus Operator -
const minusOperator = document.querySelector(".minus-operator");
minusOperator.addEventListener("click", () => {
  storeNumbers();
  if (prevNumber !== null) {
    if (currentNumber !== null) {
      checkPreviousEntryOperator();
      prevNumber = finalNumber;
      currentNumber = null;
      // outputLabel.textContent = finalNumber;
      outputLabel.textContent = 0;
    }
    previousEntryLabel.textContent = `${Math.round(prevNumber * 100) / 100} -`;
    previousEntryLabel.style.visibility = "visible";
  }
});

// Multiply operator X
const multiplyOperator = document.querySelector(".multiply-operator");
multiplyOperator.addEventListener("click", () => {
  storeNumbers();
  if (prevNumber !== null) {
    if (currentNumber !== null) {
      checkPreviousEntryOperator();
      prevNumber = finalNumber;
      currentNumber = null;
      // outputLabel.textContent = finalNumber;
      outputLabel.textContent = 0;
    }
    previousEntryLabel.textContent = `${Math.round(prevNumber * 100) / 100} x`;
    previousEntryLabel.style.visibility = "visible";
  }
});

// Devide operator /
const devideOperator = document.querySelector(".devide-operator");
devideOperator.addEventListener("click", () => {
  storeNumbers();
  if (prevNumber !== null) {
    if (currentNumber !== null) {
      checkPreviousEntryOperator();
      prevNumber = finalNumber;
      currentNumber = null;
      // outputLabel.textContent = finalNumber;
      outputLabel.textContent = 0;
    }
    previousEntryLabel.textContent = `${Math.round(prevNumber * 100) / 100} /`;
    previousEntryLabel.style.visibility = "visible";
  }
});

// Reminder Operator %
const reminderOperator = document.querySelector(".reminder-operator");
reminderOperator.addEventListener("click", () => {
  storeNumbers();
  if (prevNumber !== null) {
    if (currentNumber !== null) {
      checkPreviousEntryOperator();
      prevNumber = finalNumber;
      currentNumber = null;
      // outputLabel.textContent = finalNumber;
      outputLabel.textContent = 0;
    }
    previousEntryLabel.textContent = `${Math.round(prevNumber * 100) / 100} %`;
    previousEntryLabel.style.visibility = "visible";
  }
});

// Negative Button Operator
const negativeOperator = document.querySelector(".negative-operator");
negativeOperator.addEventListener("click", () => {
  if (outputLabel.textContent !== 0) {
    outputLabel.textContent = -outputLabel.textContent;
  }
});

// Decimal Add
const decimalOperator = document.querySelector(".decimal-operator");
decimalOperator.addEventListener("click", () => {
  if (outputLabel.textContent.includes(".") == false) {
    outputLabel.textContent += ".";
  }
});

// **** OPEN AND CLOSE CALC BUTTONS
const openCalcBtn = document.querySelector(".open-calc-btn");
const closeCalcBtn = document.querySelector(".close-calc-btn");
const calculator = document.querySelector(".calc-container");
openCalcBtn.addEventListener("click", () => {
  calculator.style.display = "flex";
  openCalcBtn.style.display = "none";
});
closeCalcBtn.addEventListener("click", () => {
  calculator.style.display = "none";
  openCalcBtn.style.display = "block";
});
