const setup = () => {
    let familieleden = ["Andy", "Evelyne", "Gust", "Juul", "Stijn"];
    console.log(familieleden.length);
    console.log(familieleden[0], familieleden[2],familieleden[4]);
    function VoegNaamToe(array) {
        let nieuweNaam = prompt("Voer een extra familielid naam in:");
        if (nieuweNaam) {
            array.push(nieuweNaam);
        }
    }
    VoegNaamToe(familieleden);
    console.log("Nieuwe lijst: ", familieleden);
    console.log("Familieleden string: ", familieleden.join(", "));

}
window.addEventListener("load", setup);