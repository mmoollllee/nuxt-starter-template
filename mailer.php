<?php


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

  //check if its an ajax request, exit if not
  // if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
    
  //   //exit script outputting json data
  //   $output = json_encode(
  //           array(
  //               'type' => 'error',
  //               'no' => '1',
  //               'text' => 'Request must come from Ajax'
  //   ));

  //   die($output);
  // }

  // Config
  $recipient = 'Admin <info@example.com>';
  $formAddress = 'form@example.com';

  // Setup Variables
  $name = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
  $phone = filter_var(trim($_POST["phone"]), FILTER_SANITIZE_STRING);
  $company = filter_var(trim($_POST["company"]), FILTER_SANITIZE_STRING);
  $mail = filter_var(trim($_POST["mail"]), FILTER_SANITIZE_EMAIL);
  $honeypot = $_POST['subject'];
  $message = nl2br(htmlspecialchars(filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING)));

    // application
    $application = filter_var(trim($_POST["application"]), FILTER_SANITIZE_STRING);
  
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
    if (!isset($message)) {
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

  // Get Referer
  if (array_key_exists('HTTP_ORIGIN', $_SERVER)) {
    $origin = $_SERVER['HTTP_ORIGIN'];
  }
  else if (array_key_exists('HTTP_REFERER', $_SERVER)) {
    $origin = $_SERVER['HTTP_REFERER'];
  }

  // GET IP
  if(!empty($_SERVER['HTTP_CLIENT_IP'])){
    //ip from share internet
    $ip = $_SERVER['HTTP_CLIENT_IP'];
  }
  elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
    //ip pass from proxy
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
  }
  else{
    $ip = $_SERVER['REMOTE_ADDR'];
  }

  if ($application) {
    $title = 'application';
  } else {
    $title = 'Nachricht';
  }

  // Message Body for Recipient
  $message_content = "<html>
  <body>
    <h2>{$title}</h2>
    <p>{$message}<br /><br /><br /><br /></p>
    <hr />
    <h2>Details</h2>
    <p>
    Von: $name $mail<br/>" . 
    ($phone ? "Phone: {$phone}<br />" : "") .
    ($company ? "Company: {$company}<br />" : "") .
    ($application ? "Application: {$application}<br />" : "") .
    ($origin ? "Origin: {$origin}<br />" : "") .
    ($ip ? "IP-Address: {$ip}" : "") .
    "</p>
  </body></html>";

  $to_email = $recipient;
  $from = $name . " <{$mail}>";
  $subject = "{$title} from example.com";

  $headers = array(
      'From: ' . $from,
      'Content-Type:text/html; charset=UTF-8',
      'Reply-To: ' . $from,
      'MIME-Version: 1.0',
      'X-Mailer: PHP/' . phpversion()
  );

  $recipientSent = @mail($to_email, $subject, $message_content, implode("\r\n", $headers));

  if ( $mail ) {
    // Message Body for Sender
    $message_content = "<html>
    <body>
      <p>Hello {$name},<br /><br />
      Thanks for your {$title}!<br /><br />
      Kind regards,<br />
      example.com<br /><br /><br /><br /></p>
        <hr />
      <h2>Your {$title}</h2>
      <p>{$message}<br /><br /><br /><br /></p>
        <hr />
      <h2>Details</h2>
      <p>" .
      ($phone ? "Phone: {$phone}<br />" : "") .
      ($application ? "Application: {$application}<br />" : "") .
      ($company ? "Company: {$company}<br />" : "") .
      "</p>
    </body></html>";

    $to_email = $from;
    $from = $formAddress;
    $subject = "Your {$title} to example.com";

    $headers = array(
        'From: ' . $from,
        'Content-Type:text/html; charset=UTF-8',
        'Reply-To: ' . $recipient,
        'MIME-Version: 1.0',
        'X-Mailer: PHP/' . phpversion()
    );

    $senderSent = @mail($to_email, $subject, $message_content, implode("\r\n", $headers));
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