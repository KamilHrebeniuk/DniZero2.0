<?php

include "DbSQL.php";
session_start();

if(isset($_SERVER['HTTP_ORIGIN'])) {
    if ($_SERVER['HTTP_ORIGIN'] == 'https://dev.obozpwr.pl' || $_SERVER['HTTP_ORIGIN'] == 'https://www.dev.obozpwr.pl'||$_SERVER['HTTP_ORIGIN'] == 'https://obozpwr.pl' || $_SERVER['HTTP_ORIGIN'] == 'https://www.obozpwr.pl' || $_SERVER['HTTP_ORIGIN'] == 'http://www.1z13.dnizero.pl') {
        $data = file_get_contents("php://input");
        $DATA = json_decode($data, true);
        $key = hash('sha256',strtotime("now"),false);
        $SID = ltrim($DATA['SID'],"PHPSESSID=");
        $_SESSION['key'] = $key;
        if ($SID == $_SESSION['SSID']) {
            $com = new Commands();
            switch ($DATA['ch']){
                case 1:
                    $response = $com->select($DATA['what'], $DATA['src'], $DATA['opt'], $key);
                    break;
                case 2:
                    $response = $com->insert($DATA['src'], $DATA['col'], $DATA['val'], $key);
                    break;
                case 3:
                    $response = $com->delete($DATA['src'], $DATA['what'], $key);
                    break;
                case 4:
                    $response = $com->update($DATA['src'], $DATA['col'], $DATA['opt'], $key);
                    break;
            }
            echo json_encode($response,JSON_UNESCAPED_UNICODE);
        }
    }
}





