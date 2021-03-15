let output = document.getElementById("result");
let button = document.getElementById("calculate");
let custom = document.getElementById("throwCustomButton");

button.addEventListener("click", function () {
    let operator = document.getElementById("operator").value;
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    switch(operator) {
        case "+":
            missingNum();
            output.innerHTML = parseInt(num1.value) + parseInt(num2.value);
            break;
        case "-":
            missingNum();
            output.innerHTML = parseInt(num1.value) - parseInt(num2.value);
            break;
        case "/":
            missingNum();
            output.innerHTML = parseInt(num1.value) / parseInt(num2.value);
            break;
        case "*":
            missingNum();
            let successful = true;
            try {
                output.innerHTML = parseInt(num1.value) * parseInt(num4.value);
            } catch (err) {
                alert("Purposefully making a false reference.")
                console.log("Error", err.message);
                successful = false;
            } finally {
                if (successful == false) {
                    console.log("We caught a reference error!");
                }
                else {
                    console.log("The code worked as intended!");
                }
            }
            break;
    }

    function missingNum() {
        if (num1.value === "" || num2.value === "") {
            throw new SyntaxError("Equation is missing numerical input.");
        }
    }
});

class CustomError extends Error {
    constructor (message) {
        super(message);
        this.name = " --- Custom-error has been called! ---";
    }
}

custom.addEventListener("click", function () {
    throw new CustomError(" \"This is a follow-up custom error message!\" ");
})

TrackJS.track('Testing TrackJS!');
                        