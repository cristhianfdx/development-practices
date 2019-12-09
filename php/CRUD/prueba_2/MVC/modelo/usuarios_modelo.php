<?php

    class UsuariosModelo{

        private $db;
        private $usuarios;

        public function __construct(){
            require_once("modelo/conexion.php");
            $this->db=Conectar::conexion();
            $this->usuarios=array();
        }        

        #CREATE
        public function createUsuarios(){

        }

        #READ
        public function getUsuarios(){
            $consulta=$this->db->query("SELECT * FROM USUARIOS");

            while ($filas=$consulta->fetch(PDO::FETCH_ASSOC)) {
                $this->usuarios[]=$filas;
            }

            return $this->usuarios;
        }

        #UPDATE
        public function updateUsuarios(){

        }

        #DELETE
        public function deleteUsuarios($id){
            $this->db->query("DELETE FROM USUARIOS WHERE ID='$id' ");            
        }

    }
?>