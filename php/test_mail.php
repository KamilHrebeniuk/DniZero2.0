<?php
$message =
"
<div class='container' style='width: 600px; line-height: 16px; font-size: 14px;'>
<h2 class='header' style='text-align: center'>Witamy na pokładzie!</h2>

<p>Udało Ci się dostać do naszej załogi. Chcielibyśmy potwierdzić wasze zgłoszenie. Poniżej znajdują się ważne informacje i czynności, które trzeba wykonać, aby wybrać się z nami na \"Kurs W Nieznane\".</p>

<h4>Dane do przelewu:</h4>
<div class='payment'>
Odbiorca: <b>Krzysztof Kwater End to End Services</b><br>
Adres: <b>ul. Działkowa 54/9, 50-538 Wrocław</b><br>
IBAN: PL85 1240 6768 1111 0010 8604 4025 (Bank Polska Kasa Opieki Spółka Akcyjna)</b><br>
BIC/SWIFT: <b>PKOPPLPW</b><br>
Kwota: <b>699,99 PLN/779,98 PLN (bez dojazdu/z dojazdem)</b><br>
</div>

<p>W tytule należy zawrzeć imiona i nazwisko uczestnika oraz oznaczenie, czy opłata jest za sam Obóz, czy również za dojazd.</p>

<p>Wzór dla opłaty za sam Obóz:</p>
<p>Jan Adam Kowalski - Obóz Studentów PWr 2021</p>

<p>Wzór dla opłaty za Obóz i transport:</p>
<p>Jan Adam Kowalski - Obóz Studentów PWr 2021 i transport</p>

<p>Po wykonaniu wpłaty należy przesłać potwierdzenie przelewu na adres:</p>
<p>oboz@samorzad.pwr.edu.pl</p>

<p>W wiadomości możecie również zamieścić informacje na temat diety, alergii i schorzeń, które zawarliście w formularzu zgłoszeniowym, a objęte zostały w regulaminie Obozu.</p>

<p>Jeżeli potrzebujecie fakturę należy zawrzeć takową informację w mailu wraz z potwierdzeniem przelewu.</p>

<h4>Dane do faktury:</h4>
<h5 style='margin: 10px 0;'>Faktura na osobę fizyczną (z wyłączeniem działalności gospodarczej):</h5>
<ul style='padding-left: 12px'>
    <li>Imiona i nazwisko</li>
    <li>Adres zamieszkania</li>
</ul>

<h5 style='margin: 10px 0;'>Faktura na \"firmę\":</h5>
<ul style='padding-left: 12px'>
    <li>Nazwa</li>
    <li>Adres siedziby</li>
    <li>NIP</li>
</ul>
<br>
<p>Przypominamy również o konieczności posiadania dowodu tożsamości oraz zabraniu ze sobą oświadczenia o stanie zdrowia [tutaj załącznik]</p>

<p>Jeśli będziecie mieć jakiekolwiek pytania kontaktujcie się z nami przez nasze media społecznościowe.</p>
<p>Do zobaczenia w Wieleniu!</p>
</div>";












echo "Start maila 2";

//echo ($message);

ini_set("SMTP", "smtp.obozpwr.pl");
ini_set("sendmail_from", "zapisy@obozpwr.pl");

$to      = 'kamil.hrebeniuk@gmail.com';
$subject = 'Zapisy na Obóz Studentów PWr';
$headers  = "From:  <zapisy@obozpwr.pl>\n";
$headers .= "Bcc: Test maila <zapisy@obozpwr.pl>\n";
$headers .= "X-Sender: Zapisy <zapisy@obozpwr.pl>\n";
$headers .= 'X-Mailer: PHP/' . phpversion();
$headers .= "X-Priority: 1\n";
$headers .= "Return-Path: oboz@samorzad.pwr.edu.pl\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\n";

mail($to, $subject, $message, $headers);

echo "Wysłano!";
