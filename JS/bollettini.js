function iniziaCaricamento() {
    fetch('../src/bollettini.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Errore nel caricamento del file JSON");
            }
            return response.json();
        })
        .then(json => {
            caricaBollettini(json);
        })
        .catch(error => {
            console.error('Si è verificato un problema:', error);
        });
}

function caricaBollettini(json) {
    //verifica che ci siano dati
    if (!json.bollettini || json.bollettini.length === 0) return;

    //imposta l'ultimo titolo (primo elemento dell'array)
    document.getElementById("ultimo-titolo").innerText = json.bollettini[0].titolo;
    document.getElementById("src-titolo").href = json.bollettini[0].percorso;

    let listaBollettini = document.getElementById("lista-scrollabile");
    
    //pulisce la lista prima di aggiungere nuovi elementi (opzionale ma consigliato)
    listaBollettini.innerHTML = ''; 

    //ciclo per creare le righe
    for (let i = 0; i < json.bollettini.length; i++) {
        listaBollettini.innerHTML += 
        '<div class="riga-archivio">' +
            '<span class="data-archivio">' + json.bollettini[i].data + '</span>' +
            '<a href="' + json.bollettini[i].percorso + '" class="link-archivio">' + json.bollettini[i].titolo + '</a>' +
        '</div>';
    }
}

iniziaCaricamento();