<?php
     function mailTo($to,$amount){
         ini_set("SMTP", "smtp.obozpwr.pl");
         ini_set("sendmail_from", "zapisy@obozpwr.pl");
         $subject = 'Zapisy na listę rezerwową Obozu Studentów PWr';
         $message =
             "  <div class='container' style='width: 600px; line-height: 16px; font-size: 14px;'>
                <h2 class='header' style='text-align: center'>Ahoj!</h2>
                
                <p>Kajuty mamy już pełne, jednak będziemy o Tobie pamiętali. Zapisujemy Cię na listę rezerwowych piratów. Gdy jakiś z naszych obecnych załogantów wyleci przez burte, albo polegnie podczas bitwy, odezwiemy się do Ciebie. Kandydatów jest wielu, a o powołaniu będzie decydować kolejność zgłoszeń. Aktualnie jesteś [" . $amount . "] osobą na liście.</p>
                
                <p>Do zobaczenia na morzu Szczurze Lądowy!</p>
                </div>";

         $headers  = "From:  <zapisy@obozpwr.pl>\n";
         $headers .= "FromName: Oboz PWr\n";
         $headers .= "Bcc: Test maila <zapisy@obozpwr.pl>\n";
         $headers .= "X-Sender: Zapisy <zapisy@obozpwr.pl>\n";
         $headers .= 'X-Mailer: PHP/' . phpversion();
         $headers .= "X-Priority: 1\n";
         $headers .= "Importance: High\n";
         $headers .= "X-MSMail-Priority: High\n";
         $headers .= "Return-Path: oboz@samorzad.pwr.edu.pl\n";
         $headers .= "MIME-Version: 1.0\n";
         $headers .= "Priority: urgent\n";

         $headers .= "Content-Type: text/html; charset=UTF-8\n";
        return mail($to, $subject, $message, $headers);
    }
