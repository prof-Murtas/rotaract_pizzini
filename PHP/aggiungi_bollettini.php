<?php


$percorsoJSON = "../JSON/bollettini.json";

$cartellaPDF = "../PDF/";

if ($_SERVER["REQUEST_METHOD"] === "POST") {


    $titolo = $_POST["titolo"];
    $data = $_POST["data"];

    // Prendo il nome del file caricato
    $nomeFile = $_FILES["file"]["name"];

    // Prendo il percorso temporaneo del file (cartella temporanea del server)
    $tmpFile = $_FILES["file"]["tmp_name"];

    // Percorso finale dove salvare il file
    $percorsoFile = $cartellaPDF . $nomeFile;

    

    // Sposto il file dalla cartella temporanea alla cartella PDF
    move_uploaded_file($tmpFile, $percorsoFile);

    // Leggo il contenuto del JSON
    $json = file_get_contents($percorsoJSON);

  
    $dati = json_decode($json, true);

  
    $dati["bollettini"][] = [
        "titolo" => $titolo,
        "data"   => $data,
        "file"   => "../PDF/" . $nomeFile
    ];

    // Salvo il JSON aggiornato
    file_put_contents($percorsoJSON, json_encode($dati, JSON_PRETTY_PRINT));


    header("Location: ../Pagine/modifiche.html");
    exit;
}
?>
