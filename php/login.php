<?php

include "DbSQL.php";
session_start();



if(isset($_SERVER['HTTP_ORIGIN'])) {
    if ($_SERVER['HTTP_ORIGIN'] == 'https://dev.obozpwr.pl' || $_SERVER['HTTP_ORIGIN'] == 'https://www.dev.obozpwr.pl' || $_SERVER['HTTP_ORIGIN'] == 'https://obozpwr.pl' || $_SERVER['HTTP_ORIGIN'] == 'https://www.obozpwr.pl') {
        $data = file_get_contents("php://input");
        $DATA = json_decode($data, true);
        $key = hash('sha256',strtotime("now"),false);
        $_SESSION['key'] = $key;
        $com = new Commands();
        $response = $com -> loginUser($DATA['login'],$key);
        if(strval($response['message']['password'])===$DATA['passwd'] && $response['result']===true){
            $result=true;
        }else{
            $result=false;
        }
        echo json_encode($result,JSON_UNESCAPED_UNICODE);
    }
}