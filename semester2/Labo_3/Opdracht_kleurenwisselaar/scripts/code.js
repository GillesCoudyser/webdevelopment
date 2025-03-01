const setup = () => {
    let buttons = document.getElementsByClassName("button");

    buttons[0].addEventListener("click", clickButton);
    buttons[1].addEventListener("click", clickButton);
    buttons[2].addEventListener("click", clickButton);

}
window.addEventListener("load", setup);

const clickButton = (e) => {
    e.target.classList.toggle("pressed")

}