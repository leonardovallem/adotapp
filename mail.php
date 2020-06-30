<?php
if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['message']))
$message = $_POST['message'];
if(isset( $_POST['subject']))
$subject = $_POST['subject'];

$content="Nome: $name \n Email: $email \n Mensagem: $message";
$recipient = "leo.mvm@hotmail.com";
$mailheader = "De: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Erro!");
echo "Email enviado!";
?>