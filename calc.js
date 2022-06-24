let operator = window.prompt("Enter an operator e.g +, -, *, /");
let num1 = window.prompt("Enter a number");
let num2 = window.prompt("Enter a number");
let result= 0;

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (operator =="+")  {
    result = alert(num1+num2);
}
if (operator =="-")  {
    result = alert(num1-num2);
}if (operator =="*")  {
    result = alert(num1*num2);
}if (operator =="/")  {
    result = alert(num1/num2);
}