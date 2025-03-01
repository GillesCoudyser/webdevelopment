const setup = () => {

    let btn = document.getElementById("btn");
    btn.addEventListener("click",herbereken);
}
window.addEventListener("load", setup);

const herbereken = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btwTarieven = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let totaals = document.getElementById("totaal");
    let totaal = 0;

    for (let i = 0; i < prijzen.length; i++) {
        let prijs = parseFloat(prijzen[i].textContent.replace(" Eur", ""));
        let aantal = parseFloat(aantallen[i].value);
        let btw = parseFloat(btwTarieven[i].textContent.replace("%", "")) / 100;


        let subtotal = (prijs * aantal) * (1 + btw);
        subtotalen[i].textContent = subtotal.toFixed(2) + " Eur";


        totaal += subtotal;
    }



    totaals.textContent = totaal.toFixed(2) + " Eur";
}



