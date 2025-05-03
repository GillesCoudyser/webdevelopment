let input;

const setup = () => {
    input = document.getElementById('searchInput');
    document.getElementById('searchButton').addEventListener('click', maakcommando);

    if (localStorage.history) {
        toonHistory(JSON.parse(localStorage.history));
    }
};

const maakcommando = () => {
    const waarde = input.value.trim();
    const delen = waarde.split(' ');

    if (delen.length < 2) {
        alert('Type een commando met een zoekterm.');
        return;
    }

    const commando = delen[0];
    const zoekterm = delen.slice(1).join('+');
    const zoektekst = zoekterm.replace(/\+/g, ' ');

    let titel, url, kleur;

    if (commando === '/g') {
        titel = 'Google';
        url = 'https://www.google.com/search?q=' + zoekterm;
        kleur = '#6495ED';
    } else if (commando === '/y') {
        titel = 'YouTube';
        url = 'https://www.youtube.com/results?search_query=' + zoekterm;
        kleur = '#D30000';
    } else if (commando === '/x') {
        titel = 'X';
        url = 'https://x.com/hashtag/' + zoekterm;
        kleur = '#000000';
    } else if (commando === '/i') {
        titel = 'Instagram';
        url = 'https://www.instagram.com/explore/tags/' + zoekterm + '/';
        kleur = '#7851A9';
    } else {
        alert('Ongeldig commando!');
        return;
    }

    const item = { title: titel, text: zoektekst, url: url, color: kleur };

    let history = [];
    if (localStorage.history) {
        history = JSON.parse(localStorage.history);
    }
    history.push(item);
    localStorage.history = JSON.stringify(history);

    window.open(url, '_blank');
    input.value = '';
    toonHistory(history);
};

const toonHistory = (history) => {
    const container = document.getElementById('historyRow');
    container.innerHTML = '';

    const kop = document.createElement('h2');
    kop.textContent = 'History';
    container.appendChild(kop);

    history.forEach((item, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-3 col-sm-5 mb-3';

        const card = document.createElement('div');
        card.className = 'card text-white';
        card.style.backgroundColor = item.color;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = item.title;

        const text = document.createElement('p');
        text.className = 'card-text';
        text.textContent = item.text;

        const link = document.createElement('a');
        link.href = item.url;
        link.className = 'btn btn-light';
        link.textContent = 'Go!';

        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn-close float-end';
        


        removeBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            history.splice(index, 1);
            localStorage.history = JSON.stringify(history);
            toonHistory(history);
        });


        cardBody.appendChild(removeBtn);
        cardBody.appendChild(title);
        cardBody.appendChild(text);
        cardBody.appendChild(link);
        card.appendChild(cardBody);
        col.appendChild(card);
        container.appendChild(col);

    });
};

window.addEventListener("load", setup);