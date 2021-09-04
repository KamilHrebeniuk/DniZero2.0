<?php
     function mailTo($to,$passwd){
         ini_set("SMTP", "smtp.obozpwr.pl");
         ini_set("sendmail_from", "zapisy@obozpwr.pl");
         $subject = 'Hasło do strony';
         $message =
             "  <div class='container' style='width: 600px; line-height: 16px; font-size: 14px;'>
                <h2 class='header' style='text-align: center'>Ahoj kamracie!</h2>
                
                <p>Zasłużyłeś, by otrzymać hasło do ładowni. Użyć możesz go na burcie: obozpwr.pl w zakładce pirata. Wszelkie problemy zgłaszaj jak najszybciej do kapitanów lub załogi kadrowej.</p>
                
                <p>Login: ";
                    $message .= $to;
                    $message .= "</p>
                <p>Hasło: ";
                    $message .= $passwd;
                    $message .= "</p>
                <br>
                <p>Przypominamy również o konieczności posiadania dowodu tożsamości oraz zabraniu ze sobą <a style='color: black' href='https://www.api.obozpwr.pl/documents/Zalacznik_nr_2_1_Deklaracja_o_stanie_zdrowia_w_zwiazku_z_pandemia_COVID-19.pdf' target='_blank' rel='noreferrer'>oświadczenia o stanie zdrowia.</a></p>
                
                <p>Jeśli będziecie mieć jakiekolwiek pytania kontaktujcie się z nami przez nasze <a style='color: black' href='https://www.facebook.com/events/3190446271190442/?active_tab=discussion' target='_blank' rel='noreferrer'>media społecznościowe</a>.</p>
                <p>Do zobaczenia w Wieleniu!</p>
                <p>Organizatorzy Obozu</p>
                </div>";

         $headers  = "From:  <zapisy@obozpwr.pl>\n";
         $headers .= "FromName: Oboz PWr\n";
         $headers .= "X-Sender: Zapisy <zapisy@obozpwr.pl>\n";
         $headers .= 'X-Mailer: PHP/' . phpversion();
         $headers .= "Return-Path: oboz@samorzad.pwr.edu.pl\n";
         $headers .= "MIME-Version: 1.0\n";
         $headers .= "X-Priority: 1\n";
         $headers .= "Content-Type: text/html; charset=UTF-8\n";
         if(mail($to, $subject, $message, $headers)){
             echo "wyslano";
         }
    }
