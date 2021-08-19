<?php
    session_start();
    include "DbSQL.php";


    $response= Array(
    'result' => false,
    'message' => 'Niepoprawny URL',
    );
    ini_set('session.use_strict_mode', 1);
    if(isset($_SERVER['HTTP_ORIGIN'])) {
        if ($_SERVER['HTTP_ORIGIN'] == 'https://dev.obozpwr.pl' || $_SERVER['HTTP_ORIGIN'] == 'https://www.dev.obozpwr.pl'||$_SERVER['HTTP_ORIGIN'] == 'https://obozpwr.pl' || $_SERVER['HTTP_ORIGIN'] == 'https://www.obozpwr.pl') {
            $data = file_get_contents("php://input");
            $DATA = json_decode($data, true);
            $SID = ltrim($DATA['SID'],'PHPSESSID=');
            $key = hash('sha256',time(),false);
            $_SESSION['key'] = $key;
            if ($SID == $_SESSION['SSID'] && time() - $_SESSION['time'] >= 60) {
               $response = commands::select($DATA['what'],$DATA['src'],$DATA['opt'],$SID);
            }
        }
    }
    echo json_encode($response,JSON_UNESCAPED_UNICODE);

