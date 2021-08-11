<?php
     function mailTo($to,$name,$bus){
         ini_set("SMTP", "smtp.obozpwr.pl");
         ini_set("sendmail_from", "zapisy@obozpwr.pl");
         $subject = 'Zapisy na Obóz Studentów PWr';
         $message =
             "  <div class='container' style='width: 600px; line-height: 16px; font-size: 14px;'>
                <h2 class='header' style='text-align: center'>Witamy na pokładzie!</h2>
                
                <p>Udało Ci się zaciągnąć do naszej załogi. Chcielibyśmy potwierdzić Wasze zgłoszenie. Poniżej znajdują się ważne informacje i czynności, które trzeba wykonać, aby wybrać się z nami na \"Kurs w Nieznane\".</p>
                
                <h4>Dane do przelewu:</h4>
                <div class='payment'>
                Odbiorca: <b>Krzysztof Kwater End to End Services</b><br>
                Adres: <b>ul. Działkowa 54/9, 50-538 Wrocław</b><br>
                IBAN: <b>PL85 1240 6768 1111 0010 8604 4025 (Bank Polska Kasa Opieki Spółka Akcyjna)</b><br>
                BIC/SWIFT: <b>PKOPPLPW</b><br>";
                if($bus=="without"){
                    $message .= "Kwota: <b>699,99 PLN</b><br>";
                }else{
                    $message .= "Kwota: <b>779,98 PLN (z transportem)</b><br>";
                }
                $message.="</div>
                
                <p>W tytule należy zawrzeć imiona i nazwisko uczestnika oraz oznaczenie, czy opłata jest za sam Obóz, czy również za transport.</p>
                ";
                 if($bus=="without"){
                     $message .= "<p>Wzór dla opłaty za sam Obóz:</p>
                                  <p><b>".$name." - Obóz Studentów PWr 2021</b></p>  ";
                 }else{
                     $message .= "<p>Wzór dla opłaty za Obóz i transport:</p>
                                  <p><b>".$name." - Obóz Studentów PWr 2021 i transport</b></p>";
                 }
                 $message.="
                <p>Po wykonaniu wpłaty należy przesłać potwierdzenie przelewu na adres:</p>
                <p>oboz@samorzad.pwr.edu.pl</p>
                
                <p>W wiadomości możecie również zamieścić informacje na temat specjalnej diety zaznaczonej w formularzu, alergii, schorzeń i dolegliwości, o których mowa w <a style='color: black' href='https://www.api.obozpwr.pl/documents/Regulamin_Obozu_Studentow_PWr_2021.pdf' target='_blank' rel='noreferrer'>Regulaminie Obozu</a>.</p>
                
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
                <p>Przypominamy również o konieczności posiadania dowodu tożsamości oraz zabraniu ze sobą <a style='color: black' href='https://www.api.obozpwr.pl/documents/Zalacznik_nr_2_1_Deklaracja_o_stanie_zdrowia_w_zwiazku_z_pandemia_COVID-19.pdf' target='_blank' rel='noreferrer'>oświadczenia o stanie zdrowia.</a></p>
                
                <p>Jeśli będziecie mieć jakiekolwiek pytania kontaktujcie się z nami przez nasze <a style='color: black' href='https://www.facebook.com/events/3190446271190442/?active_tab=discussion' target='_blank' rel='noreferrer'>media społecznościowe</a>.</p>
                <p>Do zobaczenia w Wieleniu!</p>
                <p>Organizatorzy Obozu</p>
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
