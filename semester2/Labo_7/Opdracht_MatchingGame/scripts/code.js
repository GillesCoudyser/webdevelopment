let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    kaarten: [],
    geselecteerd: [],
    isBusy: false,
    clickSound: new Audio('geluiden/flipcard.mp3'),
    correctSound: new Audio('geluiden/correct.mp3'),
    wrongSound: new Audio('geluiden/incorrectBuzzer.mp3')
};

const setup = () => {
    const grid = document.querySelector('.afbeelding');
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${global.AANTAL_HORIZONTAAL}, 100px)`;
    grid.style.gridTemplateRows = `repeat(${global.AANTAL_VERTICAAL}, 100px)`;
    grid.style.gap = "10px";

    global.kaarten = [];
    for (let i = 1; i <= global.AANTAL_KAARTEN; i++) {
        global.kaarten.push(`image/kaart${i}.jpg`, `image/kaart${i}.jpg`);
    }
    global.kaarten.sort(() => Math.random() - 0.5);

    global.kaarten.forEach(kaart => {
        const div = document.createElement('div');
        div.classList.add('kaart');
        div.dataset.kaart = kaart;
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.backgroundImage = "url('image/background.png')";
        div.style.backgroundSize = "cover";
        div.style.cursor = "pointer";

        div.addEventListener('click', draaiKaartOm);
        grid.appendChild(div);
    });
};

const draaiKaartOm = (event) => {
    if (global.isBusy) return;

    const kaart = event.target;
    if (kaart.classList.contains('open')) return;

    global.clickSound.play();
    kaart.style.backgroundImage = `url(${kaart.dataset.kaart})`;
    kaart.classList.add('open');
    global.geselecteerd.push(kaart);

    if (global.geselecteerd.length === 2) {
        global.isBusy = true;
        setTimeout(controleren, 1000);
    }
};

const controleren = () => {
    if (global.geselecteerd[0].dataset.kaart === global.geselecteerd[1].dataset.kaart) {
        global.correctSound.play();
        global.geselecteerd.forEach(kaart => kaart.style.visibility = 'hidden');
    } else {
        global.wrongSound.play();
        global.geselecteerd.forEach(kaart => {
            kaart.style.backgroundImage = "url('image/background.png')";
            kaart.classList.remove('open');
        });
    }

    global.geselecteerd = [];
    global.isBusy = false;
};

window.addEventListener("load", setup);
