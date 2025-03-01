const setup = () => {
    const zoekAn = () =>{
        let text = "De man van An geeft geen hand aan ambetante verwanten";
        let indexOf = document.getElementById("indexOf");
        let counter = 0;
        let index = 0;
        while (text.indexOf("an", index) !== -1){
            counter++;
            index = text.indexOf("an", index)+1;
        }
        indexOf.textContent += counter;
        console.log(counter);
    }

    const zoekAnLastIndexOf = () =>{
        let text = "De man van An geeft geen hand aan ambetante verwanten";
        let lastIndexOf = document.getElementById("lastIndexOf");
        let counter = 0;
        let index = text.lastIndexOf("an");
        while(text.lastIndexOf("an", index) !== -1){
            counter++;
            index = text.lastIndexOf("an", index) -1;
        }
        lastIndexOf.textContent += counter;
        console.log(counter);
    }

    zoekAn();
    zoekAnLastIndexOf();
}
window.addEventListener("load", setup);