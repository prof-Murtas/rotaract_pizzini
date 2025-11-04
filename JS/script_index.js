cambia_anno("dati_service_anno")




function cambia_anno(id) {

    let data_corrente = new Date();

    let anno_corrente = data_corrente.getFullYear();

    let anno_di_inizio = anno_corrente - 2;
    let anno_di_fine = anno_corrente - 1;

    document.getElementById(id).textContent = anno_di_inizio + "/" + anno_di_fine;
}    