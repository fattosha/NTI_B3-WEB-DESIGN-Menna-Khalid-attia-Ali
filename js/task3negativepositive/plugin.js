alert("enter num to check if  negative or pos");
let num1 = Number(prompt("enter num1"));

negpositive(num1);

function negpositive(num1) {
    if (num1 == 0) { alert(`zero`) } else if (num1 < 0) { alert(`${num1} is negative`) } else { alert(`${num1} is poitive`) };
}