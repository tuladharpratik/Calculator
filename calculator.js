// Get all the necessary DOM elements
const display = document.getElementById("display");
const clearButton = document.getElementById("clearButton");
const equalsButton = document.getElementById("equalsButton");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      button.value === "+" ||
      button.value === "-" ||
      button.value === "*" ||
      button.value === "/"
    ) {
      display.value = display.value + " " + button.value + " ";
    } else if (button.value === "=") {
      display.value = eval(display.value);
    } else if (button.id === "clearButton") {
      display.value = "";
    } else {
      display.value = display.value + button.value;
    }
  });
});
