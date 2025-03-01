const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", spaties);
}
window.addEventListener("load", setup);

const maakMetSpaties = (inputText) => {
    let spatiesVerwijderen = inputText.replaceAll(" ","");
    return spatiesVerwijderen.split("").join(" ");
}

const spaties = ()=>{
    let inputTxt = document.getElementById("input").value;
    console.log(maakMetSpaties(inputTxt));
}