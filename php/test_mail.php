<?php
echo "Start maila";

$to      = 'kamil.hrebeniuk@gmail.com';
$subject = 'Zapisy na Obóz!';
$message = 'Treść maila';
$headers = 'From: zapisy@obozpwr.pl'       . "\r\n" .
    'Reply-To: oboz@samorzad.pwr.edu.pl' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

echo "Wysłano!";
