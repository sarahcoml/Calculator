const displayScreen = document.querySelector('.ResultScreen')
const button = document.querySelectorAll('button')


let calculation = []
let accumulativeCalculation


function calculateExpression() {

    calculation.join("");
    result = eval(expression);
    displayScreen.textContent = result;

}

function calculating(button) {
    const value = button.textContent;
    if (value == "C") {
      calculation.length = 0; // Clear one entry at a time
    } else if (value == "=") {
      calculateExpression();
      calculation = []; // Clear the calculation array after evaluation
    } else {
      calculation.push(value);
    }
  
    displayScreen.textContent = calculation.join("");
  }
  
  button.forEach(button => button.addEventListener("click", () => calculating(button)));
  
    