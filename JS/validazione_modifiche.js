// Seleziono i form
const formPresidente = document.getElementById("formPresidente");
const formBollettino = document.getElementById("formBollettino");

formPresidente.addEventListener("submit", e => { checkMandato(e) });
formBollettino.addEventListener("submit", e => { checkPDF(e) });

function checkMandato(event) {
    // Prendo direttamente il valore del campo mandato
    const mandato = document.getElementById("mandato").value.trim();

    if (!/^\d{4}-\d{4}$/.test(mandato)) {
        alert("Il mandato deve essere nel formato AAAA-AAAA.");
        event.preventDefault();
    }
}

function checkPDF(event) {
    // Prendo direttamente il valore del campo file
    const file = document.getElementById("file").value.trim();

    if (!/\.pdf$/i.test(file)) {
        alert("Il percorso del file deve terminare con .pdf");
        event.preventDefault();
    }
}
