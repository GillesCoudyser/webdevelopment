const setup = () => {
    document.getElementById("calculate").addEventListener("click", calculate);
};

const calculate = () => {
    const input = document.getElementById("input").value;
    const argument1 = document.getElementById("argument1").value;
    const argument2 = document.getElementById("argument2").value;
    const calculation = input.substring(argument1, argument2);

    console.log(calculation);
    document.getElementById("output").textContent = calculation;
}

window.addEventListener("load", setup);