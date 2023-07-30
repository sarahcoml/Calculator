const displayScreen = document.querySelector('.ResultScreen')
const button = document.querySelectorAll('button')


let calculation = []


function calculating(button) {
    const value = button.textContent;
    if (value == "C") {
      calculation.length = 0; // THE ENTIRE ARRAY IS NOW EMPTY
    } else if (value == "=") {
      expression = calculation.join("");
      result = eval(expression);
      calculation = []
      calculation.push(result);
    } else {
      calculation.push(value);
    }
  
    displayScreen.textContent = calculation.join("");
  }
  
  button.forEach(button => button.addEventListener("click", () => calculating(button)));
  
    
