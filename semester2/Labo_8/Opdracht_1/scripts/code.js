const setup = () => {
    const verjaardag = new Date(2006, 2, 20);
    const vandaag = new Date();
    const verschilInMilliseconden = vandaag - verjaardag;
    const verschilInDagen = Math.floor(verschilInMilliseconden / (1000 * 60 * 60 * 24));
    console.log(`verschil tussen je geboortedatum en vandaag is: ${verschilInDagen} dagen.`);

}
window.addEventListener("load", setup);