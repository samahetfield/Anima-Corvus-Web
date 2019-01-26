<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = $_POST["email"];;
    $nombre = $_POST["nombre"];
	$correo = $_POST["email"];
	$mensaje = $_POST["msg"];
    $to = "animacorvusband@gmail.com";
    $subject = "Contacto";
    $message = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nMensaje: " . $mensaje;;
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);

	header("Location: index.html");

?>
