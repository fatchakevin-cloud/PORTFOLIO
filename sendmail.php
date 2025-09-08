<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $to = "fatchakevin@gmail.com";
    $subject = "Nouveau message depuis votre portfolio: " . $_POST['subject'];
    
    $message = "Nouveau message reçu depuis votre portfolio\n\n";
    $message .= "Nom: " . $_POST['name'] . "\n";
    $message .= "Email: " . $_POST['email'] . "\n";
    $message .= "Sujet: " . $_POST['subject'] . "\n\n";
    $message .= "Message:\n" . $_POST['message'] . "\n\n";
    $message .= "---\n";
    $message .= "Envoyé depuis votre site portfolio";
    
    $headers = "From: " . $_POST['email'] . "\r\n";
    $headers .= "Reply-To: " . $_POST['email'] . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if(mail($to, $subject, $message, $headers)){
        header("Location: merci.html");
        exit();
    } else {
        echo "Erreur, le message n'a pas pu être envoyé. Veuillez réessayer.";
    }
} else {
    echo "Méthode non autorisée.";
}
?>