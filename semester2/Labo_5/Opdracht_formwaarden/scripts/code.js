const setup = () => {
    document.getElementById("toonResultaat").addEventListener("click", toonResultaat);
}

const toonResultaat = () => {
    let isRoker = document.getElementById("isRoker").checked;
    let moedertaalElement = document.querySelector('input[name="moedertaal"]:checked');
    let favorieteBuurland = document.getElementById("favorieteBuurland").value;
    let bestelling = Array.from(document.getElementById("bestelling").selectedOptions).map(option => option.value);

    console.clear();

    console.log(isRoker ? "is een roker" : "is geen roker");


    let moedertaal = moedertaalElement ? moedertaalElement.value : "niet geselecteerd";
    console.log("moedertaal is " + moedertaal);

    console.log("favoriete buurland is " + favorieteBuurland);

    let bestellingTekst = "bestelling bestaat uit " + (bestelling.length > 0 ? bestelling.join(" ") : "niets");
    console.log(bestellingTekst);
}

window.addEventListener("load", setup);
