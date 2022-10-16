// program to find the largest among three numbers

// take input from the user
var num1 = parseInt(prompt("Enter first number: "));
var num2 = parseInt(prompt("Enter second number: "));
let largest;

// check the condition
if(num1 >= num2 ) {
    largest = num1;
}
else
    largest = num2;

// display the result
console.log("The largest number is " + largest);

