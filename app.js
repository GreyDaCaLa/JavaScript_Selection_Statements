console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1

let favNumber =5;
let geussNumber = window.prompt()

if (geussNumber<favNumber) {
    console.log(`too low`)
}
else if (geussNumber>favNumber){
    console.log(`too high`)
} else {
    console.log(`Congratulations!!!`)
}




// Exercise 2
let userInput2 =window.prompt(`Pick a number between 1 - 9 Inclusively:`)

switch (userInput2) {
    case '1':
    case '2':
    case '3':
    case '4':
        console.log("Number chosen Rounds down to 0")
        break;
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
        console.log("Number chosen Rounds up to 10")
        break;
    default:
        console.log(`Not an option try again :)`)
}







/*

## Exercise 1

1. Initialize an integer to represent a favorite number and assign a value with a number of your choosing or you can assign a random number to this variable.<br>
2. Use `window.prompt()` to ask the user to input a number, and store the result in a variable<br>
3. Create an if-statement that if the guessed number is below the initial value, print out “too low”.<br>
4. Create an else-if statement that if the number is higher than the initial value, print out “too high”.<br>
5. Create an else statement that prints out “Congratulations!!!”.<br>

## Exercise 2

1. Declare a variable named userInput2 (or whatever topic you’ll ask about) and set the value to `window.prompt(“Whatever question you want to ask here”)`.<br>
2. Inside of the parentheses, ask a question on whatever (appropriate) topic you’d like.<br>
3. Create a switch-case statement with 5+ cases and a default case.<br>
4. Log a response to the console depending on the value of userInput2.<br>

*/