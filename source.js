let output = document.getElementById("result");
let button = document.getElementById("calculate");

button.addEventListener("click", function () {
    let operator = document.getElementById("operator").value;
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    switch(operator) {
        case "+":
            output.innerHTML = parseInt(num1.value) + parseInt(num2.value);
            break;
        case "-":
            output.innerHTML = parseInt(num1.value) - parseInt(num2.value);
            break;
        case "/":
            output.innerHTML = parseInt(num1.value) / parseInt(num2.value);
            break;
        case "*":
            output.innerHTML = parseInt(num1.value) * parseInt(num2.value);
            break;
    }
});
