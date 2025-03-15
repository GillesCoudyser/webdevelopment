const setup = () => {
    let dropdown = document.getElementById("gemeenten");
    let stop = false;
    const arr = [];

    while (stop === false) {
        let prompt = window.prompt("Geef een gemeente: ");

        if (prompt !== null) {
            prompt = prompt.trim();
            if (prompt.toLowerCase() === "stop") {
                stop = true;
            } else if (prompt !== "") {
                arr.push(prompt);
            }
        }
    }

    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        let option = document.createElement('option');
        option.text = option.value = arr[i];
        dropdown.add(option);
    }
};
window.addEventListener("load", setup);
