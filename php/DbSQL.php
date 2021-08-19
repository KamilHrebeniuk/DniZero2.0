<?php
    session_start();
    include "connection.php";

    interface SQL{
        public static function select($what,$src,$opt,$key);
        public static function insert($src,$what,$val,$key);
        public static function delete($src,$what,$key);
        public static function update($src,$what,$opt,$key);
    }

    class commands implements SQL{

        private static array $status = Array(
            'result' => false,
            'message' => 'error',
        );

        private function getData($what,$src,$opt){
            $con = Database::getConnection();
            try {
                $sql = $con->prepare("SELECT :what FROM :tbl :opt");
                $sql ->bindParam(':what',$what,PDO::PARAM_STR);
                $sql ->bindParam(':tbl',$src,PDO::PARAM_STR);
                $sql ->bindParam(':opt',$opt,PDO::PARAM_STR);
                $sql ->execute();
                return $sql -> fetchAll();
            }catch (PDOException $e){
                $this->status['message'] = "Error".$e->getMessage();
                return $this->status;
            }
        }

        private function sendData($src,$what,$val){
            $con = Database::getConnection();
            try {
                $sql = $con->prepare("INSERT INTO :tbl (:col) value (:val)");
                $sql ->bindParam(':tbl',$src,PDO::PARAM_STR);
                $sql ->bindParam(':col',$what,PDO::PARAM_STR);
                $sql ->bindParam(':val',$val,PDO::PARAM_STR);
                $sql ->execute();
                return $sql -> fetchAll();
            }catch (PDOException $e){
                $this->status['message'] = "Error".$e->getMessage();
                return $this->status;
            }
        }

        private function delData($src,$what){
            $con = Database::getConnection();
            try {
                $sql = $con->prepare("DELETE FROM :tbl WHERE :con");
                $sql ->bindParam(':tbl',$src,PDO::PARAM_STR);
                $sql ->bindParam(':con',$what,PDO::PARAM_STR);
                $sql ->execute();
                return $sql -> fetchAll();
            }catch (PDOException $e){
                $this->status['message'] = "Error".$e->getMessage();
                return $this->status;
            }
        }

        private function upData($src,$what,$opt){
            $con = Database::getConnection();
            try {
                $sql = $con->prepare("UPDATE :tbl SET :col WHERE :con");
                $sql ->bindParam(':tbl',$src,PDO::PARAM_STR);
                $sql ->bindParam(':col',$what,PDO::PARAM_STR);
                $sql ->bindParam(':con',$opt,PDO::PARAM_STR);
                $sql ->execute();
                return $sql -> fetchAll();
            }catch (PDOException $e){
                $this->status['message'] = "Error".$e->getMessage();
                return $this->status;
            }
        }

        public static function select($what, $src, $opt, $key){
            if($key == $_SESSION['key']){
                self::getData($what,$src,$opt);
            }else{
                self::$status['message'] = "Niepoprawny klucz";
                return self::$status;
            }
        }

        public static function insert($src,$what,$val,$key){
            if($key == $_SESSION['key']){
                self::sendData($src,$what,$val);
            }else{
                self::$status['message'] = "Niepoprawny klucz";
                return self::$status;
            }
        }

        public static function delete($src,$what,$key){
            if($key == $_SESSION['key']){
                self::delData($src,$what);
            }else{
                self::$status['message'] = "Niepoprawny klucz";
                return self::$status;
            }
        }

        public static function update($src,$what,$opt,$key){
            if($key == $_SESSION['key']){
                self::upData($src,$what,$opt);
            }else{
                self::$status['message'] = "Niepoprawny klucz";
                return self::$status;
            }
        }
    }

