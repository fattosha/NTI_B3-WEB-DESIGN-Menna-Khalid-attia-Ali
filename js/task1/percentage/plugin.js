//percentage of subjects 
let biology = Number(prompt("enter biology degree of 20"));
let Computer = Number(prompt("enter Computer degree  of 20"));
let Chemistry = Number(prompt("enter biology Chemistry degree  of 20"));
let math = Number(prompt("enter math degree of 20"));
let physics = Number(prompt("enter physics  degree of 20"));
let total = biology + Computer + Chemistry + math + physics;
let percentage = total / 100;
if (percentage >= .90) { alert(`Grade A`) } else if (percentage >= .80) { alert(`Grade B`) } else if (percentage >= .70) { alert(`Grade C`) } else if (percentage >= .60) { alert(`Grade D`) } else if (percentage >= .40) { alert(`Grade E`) } else { alert(`Grade F`) };