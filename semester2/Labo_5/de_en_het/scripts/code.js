const setup = () => {
    let oudeTekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let nieuweTekst = "";

    let i = 0;

    while (i < oudeTekst.length) {
        if (oudeTekst.substring(i, i + 4) === " de ") {
            nieuweTekst += " het ";
            i += 4;
        } else {
            nieuweTekst += oudeTekst[i];
            i++;
        }
    }

    console.log(nieuweTekst);
}
window.addEventListener("load", setup);