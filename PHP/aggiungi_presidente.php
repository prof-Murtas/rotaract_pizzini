<?php
$percorso = "../JSON/presidenti.json";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = $_POST["nome"];
    $mandato = $_POST["mandato"];

    $json = file_get_contents($percorso);
    $dati = json_decode($json, true); 

    $dati["presidenti"][] = [
        "nome" => $nome,
        "mandato" => $mandato
    ];

    file_put_contents($percorso, json_encode($dati, JSON_PRETTY_PRINT));

    header("Location: ../Pagine/modifiche.html");
    exit;
}
