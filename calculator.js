var currentDisplay = document.getElementById("currentDisplay");
var sumDisplay = document.getElementById("sumDisplay");

var currentValue = currentDisplay.value;
var sumValue = Number(0);

var isDecimal = false;
var currentOperation = "None";

function inputNum(inputValue) {
  console.log(inputValue);
  currentDisplay.value += inputValue;
}

function inputDecimal() {
  if (isDecimal) {
    return;
  } else {
    currentDisplay.value += ".";
    isDecimal = true;
  }
}

function clearInput() {
  currentDisplay.value = "CLEARED";
  isDecimal = false;
  setTimeout(() => {
    currentDisplay.value = null;
  }, 150);
}

function allClear() {
  clearInput();
  sumValue = 0;
  sumDisplay.value = "CLEARED";
  isDecimal = false;
  setTimeout(() => {
    sumDisplay.value = null;
  }, 150);
}

function inputCommand(theInput) {
  sumValue = currentDisplay.value;
  currentDisplay.value = "";
  currentOperation = theInput;
  sumDisplay.value += sumValue;
  sumDisplay.value += theInput;
}

function inputEqual() {
  switch (currentOperation) {
    case "+":
      sumValue = Number(sumValue) + Number(currentValue);
    case "-":
      sumValue = Number(sumValue) - Number(currentValue);
    case "x":
      sumValue = Number(sumValue) * Number(currentValue);
    case "/":
      sumValue = Number(sumValue) / Number(currentValue);
    default:
      console.log("No Operation in action");
  }
  sumDisplay.value = sumValue;
  currentDisplay = "";
}
