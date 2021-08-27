<?php
session_start();
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: *");

include "DbSQL.php";



if(isset($_SERVER['HTTP_ORIGIN'])) {
    if ($_SERVER['HTTP_ORIGIN'] == 'https://dev.obozpwr.pl' || $_SERVER['HTTP_ORIGIN'] == 'https://www.dev.obozpwr.pl' || $_SERVER['HTTP_ORIGIN'] == 'https://obozpwr.pl' || $_SERVER['HTTP_ORIGIN'] == 'https://www.obozpwr.pl' || $_SERVER['HTTP_ORIGIN'] == 'http://localhost:3000') {
        $data = file_get_contents("php://input");
        $DATA = json_decode($data, true);
        $key = hash('sha256',strtotime("now"),false);
        $_SESSION['key'] = $key;
        $com = new Commands();
        $response = $com -> loginUser($DATA['login'],$key);
        if(strval($response['message']['password'])===$DATA['passwd'] && $response['result']===true){
            $result['id']=$response['message']['id_uczestnika'];
            $result['name']=$response['message']['imie_i_nazwisko'];
            $result['role']=$response['message']['role'];
        }else{
            $result=false;
        }
        echo json_encode($result,JSON_UNESCAPED_UNICODE);
    }
}