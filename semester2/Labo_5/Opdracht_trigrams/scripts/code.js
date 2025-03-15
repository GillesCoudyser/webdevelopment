const setup = () => {
    let woord = "onoorbaar";
    for(let i = 0; i < woord.length; i++){
        if(woord.substring(i,i+3).length === 3) {
            console.log(woord.substring(i, i + 3));
        }
    }
}

window.addEventListener("load", setup);