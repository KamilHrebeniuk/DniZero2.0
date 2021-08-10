<?php
     function mailTo($to){
        $subject = 'Zapisy na Obóz!';
        $message = 'Treść maila';
        $headers ='Content-Type: text/html; charset=utf-8'."\r\n".'From: zapisy@obozpwr.pl'. "\r\n" .
                'Reply-To: oboz@samorzad.pwr.edu.pl' . "\r\n" .
                'X-Mailer: PHP/';
        return mail($to, $subject, $message, $headers);
    }