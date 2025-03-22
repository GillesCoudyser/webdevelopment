const setup = () => {
    opdracht2();
    newImg();
}
window.addEventListener("load", setup);

const opdracht2 = () =>{
    let listElementen = document.querySelectorAll("li");

    for(let i = 0; i < listElementen.length; i++){
        listElementen[i].className = "listItem";
    }
}

const newImg = () =>{
    let newImg = document.createElement("img");
    let body = document.querySelector("body");
    newImg.setAttribute("src","img/atomium.jpg");
    newImg.setAttribute("alt","atomium in Brussel");
    body.appendChild(newImg);
}