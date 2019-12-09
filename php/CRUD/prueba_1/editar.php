<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <?php

        include("conexion.php");

        if (!isset($_POST["btn-crea"])) {
            $id=$_GET["id"];
            $nombre=$_GET["nombre"]; 
            $apellido=$_GET["apellido"]; 
            $telefono=$_GET["telefono"];
        }else{
            $id=$_POST["id"];
            $nombre=$_POST["nombre"];
            $apellido=$_POST["apellido"];
            $telefono=$_POST["telefono"];

            $sql="UPDATE USUARIOS SET NOMBRE=:miNom, APELLIDO=:miApe, TELEFONO=:miTel WHERE ID=:miId";
            $resultado=$base->prepare($sql);
            $resultado->execute(array(":miId"=>$id, ":miNom"=>$nombre, ":miApe"=>$apellido, ":miTel"=>$telefono));

            header("Location:index.php");

        }   

    ?>

    <h1>ACTUALIZAR</h1>
    

    <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post" name="form-update">

        <div class="input-form">
            <label for=""></label>
            <input type="hidden" name="id" value="<?php echo $id?>"> 
        </div>
        </br>
        <div class="input-form">
            <label for="">NOMBRE:</label>
            <input type="text" name="nombre" value="<?php echo $nombre?>"> 
        </div>
        </br>
        <div class="input-form">
            <label for="">APELLIDO:</label>
            <input type="text" name="apellido" value="<?php echo $apellido?>"> 
        </div>
        </br>
        <div class="input-form">
            <label for="">TELEFONO:</label>
            <input type="text" name="telefono" value="<?php echo $telefono?>">  
        </div>
        </br>
        <div class="boton">
            <input type="submit" value="ACTUALIZAR" id="crea" name="btn-crea">
        </div>
        
    </form>
</body>
</html>