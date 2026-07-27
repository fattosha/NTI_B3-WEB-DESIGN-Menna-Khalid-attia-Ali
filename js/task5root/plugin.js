function Root() {
    let number = Number(prompt("Enter number"));
    let root = Number(prompt("Enter root"));

    let answer = -1;

    for (let i = 0; i <= number; i += 0.0001) {

        let power = 1;

        for (let j = 0; j < root; j++) {
            power *= i;
        }

        if (power >= number) {
            answer = i;
            break;
        }
    }

    alert(answer.toFixed(2));
}

Root();