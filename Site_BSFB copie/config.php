<?php
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "bd_bsfb";

// Connexion à la base de données
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérification de la connexion
if ($conn->connect_error) {
    die("Connexion échouée: " . $conn->connect_error);
}
echo "Connexion réussie !";
?>
