<?php

$credenziali_admin = [
    "username" => "admin",
    "password" => "admin"
];

if ($_SERVER["REQUEST_METHOD"] === "POST") {

        if (
            $_POST["username"] === $credenziali_admin["username"] &&
            $_POST["password"] === $credenziali_admin["password"]
        ) {
            header("Location: ../Pagine/modifiche.html");
            exit;
        }

    
}

header("Location: ../Pagine/form.html");
exit;
