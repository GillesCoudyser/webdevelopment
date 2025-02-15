const setup = () => {
    window.alert("Dit is een mededeling");

    const confirmResultaat = window.confirm("Weet u het zeker?");
    console.log("Return value van confirm:", confirmResultaat);

    const promptResultaat = window.prompt("Wat is uw naam?", "onbekend");
    console.log("Return value van prompt:", promptResultaat);

};
window.addEventListener("load", setup);

