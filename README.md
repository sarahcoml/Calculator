
![Calculator ](https://github.com/sarahcoml/Calculator/assets/119999485/08e04992-db7d-4527-af32-501b57e60d5e)
# Calculator App

This is a simple calculator web application built with HTML, CSS, and JavaScript. The calculator allows you to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. 

## How to Use
Open the index.html file in your web browser.

The calculator interface will be displayed, showing a result screen and a set of buttons representing numbers, operators, and the clear button.

**Calculator Interface:**
The calculator interface consists of the following elements:

**Result Screen:**
The result screen displays the current calculation or the result of the previous calculation. It is denoted by the class name "ResultScreen" in the HTML file.

**Buttons:**
The buttons represent numbers (0-9) and operators (+, -, *, ÷) to perform arithmetic calculations. The buttons with specific IDs (plus, subtract, multiply, division, clear, equals) have unique styling, but all buttons function the same way.

## Usage
1. Click the number buttons (0-9) to input the desired numbers for your calculation.
2. Click the operator buttons (+, -, *, ÷) to choose the arithmetic operation.
3. The result will be displayed on the result screen immediately after you click the "=" button.
4. To clear the calculation, click the "C" button.
   The calculator supports chaining calculations. After obtaining a result, you can use it in the next calculation.

## JavaScript Code (app.js) 
The JavaScript code handles the logic behind the calculator's functionality. It defines an array calculation to store the entered values and operators for the calculation.

- When you click a button, the calculating() function is called. The function extracts the value of the clicked button and performs the corresponding action:
    - If the button value is "C," the calculation array is emptied, effectively clearing the calculator.
    - If the button value is "=", the calculation array elements are joined to form an expression, and the eval() function is used to evaluate the expression and calculate the result. The result is stored in the calculation array.
    - For other button values (numbers and operators), they are pushed into the calculation array.
- The displayScreen element is updated with the current calculation array joined as a string to show the input and result.

## Styling (styling.css)
The styling of the calculator is defined in the styling.css file. The calculator has a dark-themed appearance, and specific buttons have special hover and focus effects.
