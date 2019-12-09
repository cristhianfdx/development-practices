<?php

    class SuperHeroesModel{

        private $db;
        private $super_heroes;

        public function __construct(){
            require_once "connection.php";
            $this->db=Connection::conex();
            $this->super_heroes=array();
        }

        public function getSuperHeroes(){
            $sql="SELECT * FROM heroes";
            $resulset=$this->db->query($sql);

            while($rows=$resulset->fetch(PDO::FETCH_ASSOC)){

                $this->super_heroes[]=$rows;
            }

            return $this->super_heroes;
        }
        
    }
?>