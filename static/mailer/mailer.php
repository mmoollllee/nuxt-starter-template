<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

  require_once '../../vendor/autoload.php';
  require_once 'etc/message-details.php';

  $dotenv = Dotenv\Dotenv::createImmutable(__DIR__.'/../..');
  $dotenv->load();

  // Config
  $recipientName = $_ENV['RECIPIENTNAME'];
  $recipientMail = $_ENV['RECIPIENTMAIL'];
  $testMail = $_ENV['TESTMAIL'];

  // Setup Message Contents
  $name = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
  $phone = filter_var(trim($_POST["tel"]), FILTER_SANITIZE_STRING);
  $company = filter_var(trim($_POST["company"]), FILTER_SANITIZE_STRING);
  $mail = filter_var(trim($_POST["mail"]), FILTER_SANITIZE_EMAIL);
  $honeypot = $_POST['subject'];
  $message = nl2br(htmlspecialchars(filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING)));
  $origin = get_message_origin();
  $ip = get_message_ip();

    // Message Content for Anfragen
    $preislisten = filter_var(trim($_POST["preislisten"]), FILTER_SANITIZE_STRING);
  
  // Validation
    // Honeypott
    if ($honeypot) {
        $output = json_encode(
          array(
            'type' => 'error',
            'no' => '3',
            'text' => 'This seems to be spam.'
          )
        );
        die($output);
    }
    // Name
    if (!isset($name)) {
      $output = json_encode(
        array(
          'type' => 'error',
          'no' => '2',
          'field' => 'name',
          'text' => 'Name needs to be set.'
        )
      );
      die($output);
    }
    // Email
    if (!isset($mail) && filter_var($useremail, FILTER_VALIDATE_EMAIL)) {
      $output = json_encode(
        array(
          'type' => 'error',
          'no' => '2',
          'field' => 'mail',
          'text' => 'Mail needs to be set and valid.'
        )
      );
      die($output);
    }
    // Message
    if (!isset($preislisten) && !isset($message)) {
      $output = json_encode(
        array(
          'type' => 'error',
          'no' => '2',
          'field' => 'message',
          'text' => 'Message needs to be set.'
        )
      );
      die($output);
    }
  
  if (isset($preislisten)) {
    $title = 'Anfrage';
  } else {
    $title = 'Nachricht';
  }

  // Message Body for Recipient
  $message_content = "
    <h2>{$title}</h2>
    <p>{$message}<br /><br /><br /><br /></p>
    <hr />" .
    ($preislisten ? "
    <h3>Anfrage</h3><p>{$preislisten}<br /><br /></p><hr />" : "") .
    "<h2>Details</h2>
    <p>
    Von: $name $mail<br/>" . 
    ($phone ? "Telefon: {$phone}<br />" : "") .
    ($company ? "Firma: {$company}<br />" : "") .
    ($origin ? "Origin: {$origin}<br />" : "") .
    ($ip ? "IP-Address: {$ip}" : "") .
    "</p>";

  $subject = "{$title} von {$recipientName}";

  $phpmailer = new PHPMailer(true);                              // Passing `true` enables exceptions
  try {

      //Recipients
      $phpmailer->setFrom($mail, $name);
      if ($mail == $testMail) {
        $phpmailer->addAddress($testMail);
      } else {
        $phpmailer->addAddress($recipientMail, $recipientName);
      }

      //Content
      $phpmailer->isHTML(true);                                  // Set email format to HTML
      $phpmailer->CharSet = 'UTF-8';
      $phpmailer->Subject = $subject;
      $phpmailer->Body    = "<html><body>" . $message_content . "</body></html>";

      $phpmailer->send();
      $recipientSent = true;
  } catch (Exception $e) {
    $output = json_encode(
      array(
        'type' => 'error',
        'no' => '4',
        'text' => $phpmailer->ErrorInfo
      )
    );
    die($output);
  }

  if ( $mail ) {
    // Message Body for Sender
    $message_content = "
      <p>Vielen Dank für Ihre {$title}!<br /><br />
      Wir werden uns baldmöglichst mit Ihnen in Verbindung setzen.<br /><br />
      Mit besten Grüßen,<br />
      {$recipientName}<br /><br /><br /><br /></p>
      <hr />" .
      ($message ? "<h2>Ihre {$title}</h2>
      <p>{$message}<br /><br /><br /><br /></p>
        <hr />" : "" ) . 
      (($preislisten || $phone || $company) ? 
      "<h2>Details</h2>
      <p>" .
      ($preislisten ? "Preislisten: {$preislisten}<br />" : "") .
      ($phone ? "Telefon: {$phone}<br />" : "") .
      ($company ? "Firma: {$company}<br />" : "") .
      "</p>" : "" );

    $subject = "Ihre {$title} an {$recipientName}";

    $phpmailer = new PHPMailer(true);                              // Passing `true` enables exceptions
    try {
  
        //Recipients
        $phpmailer->setFrom($recipientMail, $recipientName);
        if ($mail == $testMail) {
          $phpmailer->addAddress($testMail);
        } else {
          $phpmailer->addAddress($mail, $name);
        }
  
        //Content
        $phpmailer->isHTML(true);                                  // Set email format to HTML
        $phpmailer->CharSet = 'UTF-8';
        $phpmailer->Subject = $subject;
        $phpmailer->Body    = "<html><body>" . $message_content . "</body></html>";
  
        $phpmailer->send();
        $senderSent = true;
    } catch (Exception $e) {
      $output = json_encode(
        array(
          'type' => 'error',
          'no' => '4',
          'text' => $phpmailer->ErrorInfo
        )
      );
      die($output);
    }

  }

  if (!$recipientSent) {
    $output = json_encode(
      array(
        'type' => 'error',
        'no' => '4',
        'text' => 'Could not send mail! Please contact administrator.'
      )
    );
    die($output);
  }
  else if ( !$senderSent) {
    $output = json_encode(
      array(
        'type' => 'error',
        'no' => '5',
        'text' => 'Could not send copy of mail! Please contact administrator.'
      )
    );
    die($output);
  }
  else {
    $output = json_encode(
      array(
        'type' => 'success',
        'no' => '0'
      )
    );
    die($output);
  }

}

?> 