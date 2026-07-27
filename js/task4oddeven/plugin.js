alert("enter num to check if odd or evevn");
let num1 = Number(prompt("enter num1"));

oddeven(num1);

function oddeven(num1) {
    if (num1 == 0) { alert(`${num1} is zero`); } else if (num1 % 2 == 0) { alert(`${num1} is even`); } else { alert(`${num1} is odd`) };
}