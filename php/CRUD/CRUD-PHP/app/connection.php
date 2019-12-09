<?php    

    class Connection{
        
        public static function conex(){
            

            try{

                $conexion= new PDO('mysql:host=localhost; dbname=super_heroes', 'root', '');
                $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $conexion->exec("SET CHARACTER SET UTF8");

            }catch(Exception $e){

                die("Error".$e->getMessage());
                echo "Linea del error". $e->getLine();

            }

            return $conexion;
        }
    }
?>