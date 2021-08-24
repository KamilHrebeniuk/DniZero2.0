<?php
    include "connection.php";
    include "mail_reserve.php";
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Origin: *");
    $response= Array(
    'result' => false,
    'message' => 'Niepoprawny URL',
    );
    if(isset($_SERVER['HTTP_ORIGIN'])){
        if ($_SERVER['HTTP_ORIGIN'] == 'https://dev.obozpwr.pl' || $_SERVER['HTTP_ORIGIN'] == 'https://www.dev.obozpwr.pl'||$_SERVER['HTTP_ORIGIN'] == 'https://obozpwr.pl' || $_SERVER['HTTP_ORIGIN'] == 'https://www.obozpwr.pl'){
            $data = file_get_contents("php://input");
            $DATA = json_decode($data,true);
            $date = date("Y-m-d H:i:s");

            if($DATA){
                $conn = Database::getConnection();
                try{
                    $stmt = $conn->prepare("INSERT INTO OBOZ_rezerwowa 
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

                    $stmt = $conn->prepare("SELECT COUNT(DISTINCT pesel) AS amount FROM OBOZ_rezerwowa WHERE email <> 'kamil.hrebeniuk@gmail.com'");
                    $stmt->execute();

                    $users_amounts = $stmt->fetchAll(PDO::FETCH_ASSOC);

                    foreach ($users_amounts as $users_amount) {
                        $response['result'] = mailTo($DATA['email'],$users_amount['amount']);
                    }

                    if($response['result']){
                        $response['message'] = "Udało dopisać się do listy rezerwowej!";
                    }else{
                        $response['message'] = "Nie udało sie wysłać maila";
                    }

                }catch (PDOException $e){
                    $response['message'] = "Niepowodzenie! Rejestracja nie powiodła się: ".$e->getMessage();

                    $conn = null;
                }
            }
            $conn = null;
        }
    }
    echo json_encode($response,JSON_UNESCAPED_UNICODE);

?>