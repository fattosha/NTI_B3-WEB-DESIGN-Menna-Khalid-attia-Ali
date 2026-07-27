alert("enter 3 num to get min max");
let num1 = Number(prompt("enter num1"));
let num2 = Number(prompt("enter num2"));
let num3 = Number(prompt("enter num3"));
getminmax(num1, num2, num3);

function getminmax(num1, num2, num3) {
    let min = num1;

    if (num2 < min) {
        min = num2;

    }
    if (num3 < min) {
        min = num3;

    }
    alert(`min num is ${min}`);
    let max = num1;

    if (num2 > max) {
        max = num2;

    }
    if (num3 > max) {
        max = num3;
    }
    alert(`max num is ${max}`);


}