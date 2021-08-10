<?php
    include "src/actions/General/connection.php";
    include "src/actions/General/mail.php";

    $data = file_get_contents("php://input");
    $DATA = json_decode($data,true);

    $response= Array(
        'result' => false,
        'message' => '',
    );
    if($DATA){
        $conn = Database::getConnection();
        try{
            $stmt = $conn->prepare("INSERT INTO OBOZ_zapisy 
            (id_osoby, name, email, phone, shirt, year, bus, diet, ICE_name, ICE_phone, ICE_adr, health, age_confirmation, rules_acceptance) 
            VALUES (NULL, :name , :email , :phone , :shirt, :year, :bus, :diet, :ICE_name, :ICE_phone, :ICE_adr, :health, :age, :rules )");
            $stmt ->bindParam(':name',$DATA['name'],PDO::PARAM_STR);
            $stmt ->bindParam(':email',$DATA['email'],PDO::PARAM_STR);
            $stmt ->bindParam(':phone',$DATA['phone'],PDO::PARAM_STR);
            $stmt ->bindParam(':shirt',$DATA['shirt'],PDO::PARAM_STR);
            $stmt ->bindParam(':year',$DATA['year'],PDO::PARAM_INT);
            $stmt ->bindParam(':bus',$DATA['bus'],PDO::PARAM_STR);
            $stmt ->bindParam(':diet',$DATA['diet'],PDO::PARAM_STR);
            $stmt ->bindParam(':ICE_name',$DATA['ICE_name'],PDO::PARAM_STR);
            $stmt ->bindParam(':ICE_phone',$DATA['ICE_phone'],PDO::PARAM_STR);
            $stmt ->bindParam(':ICE_adr',$DATA['ICE_adr'],PDO::PARAM_STR);
            $stmt ->bindParam(':health',$DATA['health'],PDO::PARAM_BOOL);
            $stmt ->bindParam(':age',$DATA['age'],PDO::PARAM_BOOL);
            $stmt ->bindParam(':rules',$DATA['rules'],PDO::PARAM_BOOL);
            $stmt->execute();

            $response['result'] = mailTo($DATA['email']);
            if($response['result']){
                $response['message'] = "To dopiero część skonćzonej przygody! Teraz wejdz na maila i postępuj zgodnie z instrukcjami!";
            }else{
                $response['message'] = "Nie udało sie wysłać maila";
            }
            echo json_encode($response, JSON_UNESCAPED_UNICODE);
        }catch (PDOException $e){
            $response['message'] = "Niepowodzenie! Rejestracja nie powiodła się: ".$e->getMessage();
            echo json_encode($response,JSON_UNESCAPED_UNICODE);
            $conn = null;
        }
    }
    $conn = null;
?>