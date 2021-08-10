<?php
    include "src/actions/General/connection.php";

    $data = file_get_contents("php://input");
    $DATA = json_decode($data,true);

    $response= Array(
        'result' => false,
        'message' => '',
    );
    if($DATA){
        $conn = Database::getConnection();
        try{
            $stmt = $conn->prepare("INSERT INTO OBOZ_zapisy (id_osoby, name, email, phone, shirt, year, bus, diet, ICE_name, ICE_phone, ICE_adr, health, age_confirmation, rules_acceptance) VALUES (NULL,'".$DATA["name"]."', '".$DATA['email']."', '".$DATA['phone']."', '".$DATA['shirt']."', '".$DATA['year']."', '".$DATA['bus']."', '".$DATA['diet']."', '".$DATA['ICE_name']."', '".$DATA['ICE_phone']."', '".$DATA['ICE_adr']."', '".$DATA['health']."', '".$DATA['age']."', '".$DATA['rules']."' )");
            $stmt->execute();
            /*
            $to = $DATA['email'];
            $subject = 'Oboz';
            $message = 'Dzialam';
            $headers = 'Content-Type: text/html; charset=utf-8'."\r\n".'From: oboz@oboz.pwr'."\r\n";
            if(mail($to,$subject,$message,$headers)){ */
                   $response['result'] = true;
                   $response['message'] = "To dopiero część skonćzonej przygody! Teraz wejdz na maila i postępuj zgodnie z instrukcjami!";
                   echo json_encode($response, JSON_UNESCAPED_UNICODE);
 	       /* }else{
                $response['message'] = "Nie udało sie wysłać maila";
 	             echo json_encode($response, JSON_UNESCAPED_UNICODE);
            }*/
        }catch (PDOException $e){
            $response['message'] = "Niepowodzenie! Rejestracja nie powiodła się: ".$e->getMessage();
            echo json_encode($response,JSON_UNESCAPED_UNICODE);
            $conn = null;
        }
    }
    $conn = null;
?>