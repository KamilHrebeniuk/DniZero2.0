<?php
include "mail.php";
include "connection.php";

function toDatabase($DATA,$response,$KEY){
    session_start();
    if(!empty($DATA) && $KEY == $_SESSION['key']) {
        $conn = Database::getConnection();
        try{
            $date = date("Y-m-d H:i:s");
            $stmt = $conn->prepare("INSERT INTO OBOZ_testy
            (id_osoby, name, email, phone, pesel, adr, list_adr, shirt, year, bus, diet, ICE_name, ICE_phone, health, age_confirmation, rules_acceptance, date) 
            VALUES (NULL, :name , :email , :phone, :pesel, :adr, :list_adr, :shirt, :year, :bus, :diet, :ICE_name, :ICE_phone, :health, :age, :rules , :date)");
            $stmt ->bindParam(':name',$DATA['name'],PDO::PARAM_STR);
            $stmt ->bindParam(':email',$DATA['email'],PDO::PARAM_STR);
            $stmt ->bindParam(':phone',$DATA['phone'],PDO::PARAM_STR);
            $stmt->bindParam(':pesel',$DATA['pesel'],PDO::PARAM_STR);
            $stmt->bindParam(':adr',$DATA['adr'],PDO::PARAM_STR);
            $stmt->bindParam(':list_adr',$DATA['list_adr'],PDO::PARAM_STR);
            $stmt ->bindParam(':shirt',$DATA['shirt'],PDO::PARAM_STR);
            $stmt ->bindParam(':year',$DATA['year'],PDO::PARAM_INT);
            $stmt ->bindParam(':bus',$DATA['bus'],PDO::PARAM_STR);
            $stmt ->bindParam(':diet',$DATA['diet'],PDO::PARAM_STR);
            $stmt ->bindParam(':ICE_name',$DATA['ICE_name'],PDO::PARAM_STR);
            $stmt ->bindParam(':ICE_phone',$DATA['ICE_phone'],PDO::PARAM_STR);
            $stmt ->bindParam(':health',$DATA['health'],PDO::PARAM_BOOL);
            $stmt ->bindParam(':age',$DATA['age'],PDO::PARAM_BOOL);
            $stmt ->bindParam(':rules',$DATA['rules'],PDO::PARAM_BOOL);
            $stmt ->bindParam(':date',$date,PDO::PARAM_STR);
            $stmt->execute();
            $response['result'] = mailTo($DATA['email'],$DATA['name'],$DATA['bus']);
            if($response['result']){
                $response['message'] = "To dopiero część skonćzonej przygody! Teraz wejdz na maila (sprawdź spam) i postępuj zgodnie z instrukcjami!";
            }else{
                $response['message'] = "Wystąpił problem z wysłaniem maila. Skontatkuj się z nami przez nasz fanpage";
            }

        }catch (PDOException $e){
            $response['message'] = "Niepowodzenie! Rejestracja nie powiodła się: ".$e->getMessage()."<br/> Skontaktuj się z nami przez fanpage";

            $conn = null;
        }
        $conn = null;
    }
    return $response;
}



