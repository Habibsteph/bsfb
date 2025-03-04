<?php
include 'config.php'; // Inclure le fichier de connexion

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom_equipe = $_POST['nom_equipe'];
    $numero_telephone = $_POST['numero_telephone'];
    $type_equipe = $_POST['type_equipe']; 
    $commune = $_POST['commune'];

    // Vérifier si tous les champs sont remplis
    if (empty($nom_equipe) || empty($numero_telephone) || empty($type_equipe) || empty($commune)) {
        echo "Tous les champs doivent être remplis.";
        exit();
    }

    // Requête SQL pour insérer les données
    $sql = "INSERT INTO equipes (nom_equipe, numero_telephone, type_equipe, commune) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("siss", $nom_equipe, $numero_telephone, $type_equipe, $commune);

    if ($stmt->execute()) {
        echo "Inscription réussie !";
    } else {
        echo "Erreur lors de l'inscription : " . $stmt->error;
    }

    // Fermer la connexion
    $stmt->close();
    $conn->close();
}
?>
