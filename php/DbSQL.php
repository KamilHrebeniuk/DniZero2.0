<?php
session_start();
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: *");
    include "connection.php";


    class Commands{
        private $status = Array(
            'result' => false,
            'message' => 'error',
        );
        private function getData($what, $src, $opt)
        {
            $con = Database::getConnection();
            try {
                $sql = $con->prepare("SELECT ".$what." FROM ".$src." ".$opt);
                $sql ->execute();
                return $sql -> fetchAll();
            }catch (PDOException $e){
                $this->status['message'] = "Error: ".$e->getMessage();
                return $this->status;

            }
        }

        private function sendData($src,$what,$val){
            $con = Database::getConnection();
            try {
                $sql = $con->prepare("INSERT INTO ".$src." (".$what.") VALUES (".$val.")");
                $sql ->execute();
                $this ->status['result'] = true;
                $this ->status['message'] = "Poprawnie dodano do bazy";
                return $this->status;
            }catch (PDOException $e){
                $this ->status['message'] = "Error: ".$e->getMessage();
                return $this ->status;
            }
        }

        private function delData($src,$what){
            $con = Database::getConnection();
            try {
                $sql = $con->prepare("DELETE FROM ".$src." WHERE ".$what);
                $sql ->execute();
                $this ->status['result'] = true;
                $this ->status['message'] = "Poprawnie usunieto z bazy";
                return $this ->status;
            }catch (PDOException $e){
                $this ->status['message'] = "Error".$e->getMessage();
                return $this ->status;
            }
        }

        private function upData($src,$what,$opt){
            $con = Database::getConnection();
            try {
                $sql = $con->prepare("UPDATE ".$src." SET ".$what." WHERE ".$opt);
                $sql ->execute();
                $this ->status['result'] = true;
                $this ->status['message'] = "Poprawnie zmodyfikowano baze";
                return $this ->status;
            }catch (PDOException $e){
                $this ->status['message'] = "Error".$e->getMessage();
                return $this ->status;
            }
        }
        private function log_in($email){
            $con = Database::getConnection();
            try{
                $sql = $con->prepare("SELECT password, imie_i_nazwisko, id_uczestnika, role FROM OBOZ_osoby WHERE email = :email");
                $sql->bindParam(':email', $email,PDO::PARAM_STR);
                $sql -> execute();
                $this ->status['result'] = true;
                $this ->status['message'] = $sql->fetch();
                return $this->status;
            }catch (PDOException $e){
                $this ->status['message'] ="Error".$e->getMessage();
            }
        }

        public function select($what, $src, $opt, $key){
            if($key == $_SESSION['key']){
                return $this->getData($what, $src, $opt);
            }else{
                return $this->status;
            }

        }

        public function insert($src,$what,$val, $key){
            if($key == $_SESSION['key']){
                return $this->sendData($src,$what,$val);
            }else{
                return $this->status;
            }
        }
        public function delete($src,$what, $key){
            if($key == $_SESSION['key']){
                return $this->delData($src,$what);
            }else{
                return $this->status;
            }
        }

        public function update($src,$what,$opt, $key){
            if($key == $_SESSION['key']){
                return $this->upData($src,$what,$opt);
            }else{
                return $this->status;
            }
        }
        public function loginUser($email, $key){
            if($key == $_SESSION['key']){
                return $this->log_in($email);
            }else{
                return $this->status;
            }
        }
    }


