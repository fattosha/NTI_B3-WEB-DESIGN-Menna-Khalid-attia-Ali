alert("enter 2 num and required operation (+,-,*,/)");
let num1 = Number(prompt("enter num1"));
let num2 = Number(prompt("enter num2"));
let operation = prompt("enter operation ");
switch (operation) {
    case '+':
        alert(`result of sum: ${num1} + ${num2} =${num1+num2}`)
        break;
    case '-':
        alert(`result of sub: ${num1} - ${num2} =${num1-num2}`)
        break;
    case '*':
        alert(`result of multiplication ${num1} x ${num2} =${num1*num2}`)
        break;
    case '/':
        alert(`result of division ${num1} / ${num2} =${num1/num2}`)
        break;
    default:
        alert(`invalid operation`)
}