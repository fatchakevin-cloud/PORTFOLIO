<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $to = "fatchakevin@gmail.com";
    $subject = $_POST['subject'];
    $message = "Nom: " . $_POST['name'] . "\n";
    $message .= "Email: " . $_POST['email'] . "\n\n";
    $message .= "Message:\n" . $_POST['message'];
    $headers = "From: " . $_POST['email'];

    if(mail($to, $subject, $message, $headers)){
        echo "Message envoyé avec succès !";
    } else {
        echo "Erreur, le message n'a pas pu être envoyé.";
    }
}
?>