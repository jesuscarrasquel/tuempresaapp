<?php

header('Access-Control-Allow-Origin: *');
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

    $method = $_SERVER['REQUEST_METHOD'];

    unset($_POST['METHOD']);

    $firstName =  $_POST['firstName'];
    $lastName =  $_POST['lastName'];
    $email =  $_POST['email'];
    $pagos =  $_POST['pagos'];

    $nombre1 =  $_POST['firstCompanyName'];
    $nombre2 =  $_POST['secondCompanyName'];
    $nombre3 =  $_POST['thirdCompanyName'];
    $plan =  $_POST['plan'];
    $actividad =  $_POST['actividad'];
    // $file_tmp = $_FILES['selfie']['tmp_name'];
    // $file_name = $_FILES['selfie']['name'];
    $type = $_POST['type'];

    echo json_encode($_POST);

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {

    //Server settings
    $username = $_ENV['USERNAME_DEV'];
    $password = $_ENV['PASSWORD_DEV'];
    $host = $_ENV['HOST_DEV'];
    $smtpsecure = $_ENV['SMTPSECURE_DEV'];
    $port = $_ENV['PORT_DEV'];
    
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->IsSMTP();                                            //Send using SMTP
    // $mail->Host       = 'mail.tuempresa.us';                     //Set the SMTP server to send through
    $mail->Host       = $host;                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    // $mail->Username   = 'info@tuempresa.us';                     //SMTP username
    $mail->Username   = $username;                     //SMTP username
    // $mail->Password   = 'tqmO$X*pFMq~';                               //SMTP password
    $mail->Password   = $password;                               //SMTP password
    $mail->SMTPSecure = $smtpsecure;            //Enable implicit TLS encryption
    $mail->Port       = $port;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($username, 'Tu Empresa US');
    $mail->addAddress($username, 'Tu Empresa US');     //Add a recipient
    // $mail->addAddress('ellen@example.com');               //Name is optional
    $mail->addReplyTo($username, 'Tu Empresa US');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->AddAttachment($file_tmp, $file_name);

    $cantidad_pass = intval($_POST['cantidad_pass']);

    for($i=0; $i<$cantidad_pass; $i++) {

        $file_tmp_pass = $_FILES['passport-'.$i]['tmp_name'];
        $file_name_pass = $_FILES['passport-'.$i]['name'];
        $mail->AddAttachment($file_tmp_pass, $file_name_pass);
    }

    $cantidad_selfie = intval($_POST['cantidad_selfie']);

    for($i=0; $i<$cantidad_selfie; $i++) {

        $file_tmp_selfie = $_FILES['selfie-'.$i]['tmp_name'];
        $file_name_selfie = $_FILES['selfie-'.$i]['name'];
        $mail->AddAttachment($file_tmp_selfie, $file_name_selfie);
    }
  
    $cantidad_socios = intval($_POST['cantidad_socios']);
    $sociosFirstNameArr = array();
    $sociosLastNameArr = array();
    $sociosEmailArr = array();


    for($i=1; $i<$cantidad_socios; $i++) {

        array_push($sociosFirstNameArr, $_POST['sociosFirstName-'.$i]);
        array_push($sociosLastNameArr, $_POST['sociosLastName-'.$i]);
        array_push($sociosEmailArr, $_POST['sociosEmail-'.$i]);
    }

    // Mensaje de socios.
    $countPartner = count($sociosFirstNameArr);
    $messagePartner = '
                        <li>Primer Nombre socio 1: '. $firstName . '</li>
                        <li>Apellidos socio 1:'. $lastName . '</li>
                        <li>Correo electrónico socio 1: '. $email . '</li>
    ';

    foreach ($sociosFirstNameArr as $key => $value) {

        $messagePartner .= '<li>Primer nombre socio '. $key+2 .': '.$value.'</li>';
    };

    // <li>Apellidos socio '. $i+2 .': '.$sociosLastNameArr[$i].'</li>
    // <li>Email socio '. $i+2 .': '.$sociosEmailArr[$i].'</li>

    //Content
    $mail->isHTML(true);   //Set email format to HTML



                    $message = '
                        <h1>Información del cliente</h1>
                    <ul>'.
                        $messagePartner .'
                        <li>Nombre de empresa 1: '. $nombre1 . '</li>
                        <li>Nombre de empresa 2: '. $nombre2 . '</li>
                        <li>Nombre de empresa 3: '. $nombre3 . '</li>
                        <li>Plan: '. $plan .'</li>
                        <li>Actividad económica: '. $actividad .'</li>
                        <li>Forma de pago: '. $pagos .'</li>    
                    </ul>  
                ';

                $mail->Subject = 'Tu Empresa US';
                $mail->Body    = $message;
                $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
                $mail->send();
                echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}


// <li>Primer Nombre: '. $firstName . '</li>
// <li>Apellidos:'. $lastName . '</li>
// <li>Correo electrónico: '. $email . '</li>