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
    $secondName =  $_POST['secondName'];
    $lastName =  $_POST['lastName'];
    $email =  $_POST['email'];
    $pagos =  $_POST['pagos'];

    $nombre1 =  $_POST['firstCompanyName'];
    $nombre2 =  $_POST['secondCompanyName'];
    $nombre3 =  $_POST['thirdCompanyName'];
    $rama =  $_POST['rama'];
    $file_tmp = $_FILES['selfie']['tmp_name'];
    $file_name = $_FILES['selfie']['name'];
    $type = $_POST['type'];

    echo json_encode($_POST);

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {

    //Server settings
    $username = $_ENV['USERNAME'];
    $password = $_ENV['PASSWORD'];
    $host = $_ENV['HOST'];
    $smtpsecure = $_ENV['SMTPSECURE'];
    $port = $_ENV['PORT'];
    
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    // $mail->Host       = 'mail.tuempresa.us';                     //Set the SMTP server to send through
    $mail->Host       = $port;                     //Set the SMTP server to send through
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
    $mail->AddAttachment($file_tmp, $file_name);

    $cantidad_pass = intval($_POST['cantidad_pass']);

    for($i=0; $i<$cantidad_pass; $i++) {

        $file_tmp_pass = $_FILES['passport-'.$i]['tmp_name'];
        $file_name_pass = $_FILES['passport-'.$i]['name'];
        $mail->AddAttachment($file_tmp_pass, $file_name_pass);
    }
  
    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
                $message = '
    
                <h1>Información del cliente</h1>

                <ul>
                    <li>Primer Nombre: '. $firstName . '</li>
                    <li>Segundo Nombre: '. $secondName . '</li>
                    <li>Apellidos:'. $lastName . '</li>
                    <li>Correo electrónico: '. $email . '</li>
                    <li>Nombre de empresa 1: '. $nombre1 . '</li>
                    <li>Nombre de empresa 2: '. $nombre2 . '</li>
                    <li>Nombre de empresa 3: '. $nombre3 . '</li>
                    <li>Rama actividad: '. $rama .'</li>
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
