const setup = () => {
    let button = document.getElementById("btn");
    button.addEventListener("click", print)
}
window.addEventListener("load", setup);

const print = () => {
    let input = document.getElementById("input").value;
    let spatiesVerwijderen = input.replaceAll(" ","");
    let stringSplits = spatiesVerwijderen.split("").join(" ");
    console.log(stringSplits);

}