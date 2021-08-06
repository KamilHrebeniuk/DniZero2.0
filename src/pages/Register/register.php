<?php
    include "src/actions/General/connection.php";

    $data = file_get_contents("php://input");
    $DATA = json_decode($data,true);
    $keys = ['name', 'email', 'phone', 'shirt', 'year', 'bus', 'diet', 'ICE_name', 'ICE_phone', 'ICE_adr', 'health', 'age', 'rules'];
    $person = Array(
        'name' => '',
        'email' => '',
        'phone' => '',
        'shirt' => '',
        'year' => '',
        'bus' => '',
        'diet' => '',
        'ICE_name' => '',
        'ICE_phone' => '',
        'ICE_adr' => '',
        'health' => '',
        'age' => '',
        'rules' => ''
    );
    foreach($keys as $key){
        $person[$key]=$DATA[$key];
    }
    if($person){
        $conn = Database::getConnection();
        try{
            $stmt = $conn->prepare("INSERT INTO OBZ_persons (name, email, phone, shirt, year, bus, diet, ICE_name, ICE_phone, ICE_adr, health, age, rules) VALUES (".$person["name"].", ".$person["email"].", ".$person["phone"].", ".$person["shirt"].", ".$person["year"].", ".$person["bus"].", ".$person["diet"].", ".$person["ICE_name"].", ".$person["ICE_phone"].", ".$person["ICE_adr"].", ".$person["health"].", ".$person["age"].", ".$person["rules"]." )");
            $to = $person["email"];
            $subject = 'Oboz';
            $message = 'Dzialam';
            $headers = 'Content-Type: text/html; charset=utf-8'."\r\n".'From: oboz@oboz.pwr'."\r\n";
            if(mail($to,$subject,$message,$headers)){
                echo "To dopiero część skonćzonej przygody! Teraz wejdz na maila i postępuj zgodnie z instrukcjami!";
            }else{
                echo "Nie udało sie wysłać maila";
            }
        }catch (PDOException $e){
            echo "Niepowodzenie! Rejestracja nie powiodła się: ".$e->getMessage();
        }
        $conn = null;
    }