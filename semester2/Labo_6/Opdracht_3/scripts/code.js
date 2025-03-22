const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", opdracht3);
}
window.addEventListener("load", setup);


const opdracht3 = () =>{
    let pElement = document.createElement("p");
    pElement.textContent = "Lorem ipsum dolor sit amet";

    let myDIV = document.getElementById("myDIV");
    myDIV.appendChild(pElement);
}