<?php
include "connection.php";
include "mailpasswd.php";
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Origin: *");

            $conn = Database::getConnection();
            try{
                $stmt = $conn->prepare("SELECT `email`,`password` FROM `OBOZ_osoby` WHERE `id_uczestnika` BETWEEN 2 AND 38;");
                $stmt->execute();
                $DATA = $stmt->fetchAll();
                foreach ($DATA as $users) {
                    mailTo("michalgradzik1000@gmail.com", $users['email']);
                }
            }catch (PDOException $e){
                $response['message'] = "Niepowodzenie! Rejestracja nie powiodła się: ".$e->getMessage();

                $conn = null;
            }

        $conn = null;

?>