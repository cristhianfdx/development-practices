<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/styles.css">
    <title>CRUD</title>
</head>
<body>

    <?php
        include("conexion.php");

        /*$conexion=$base->query("SELECT * FROM USUARIOS");

        $registros=$conexion->fetchAll(PDO::FETCH_OBJ);*/

        $registros=$base->query("SELECT * FROM USUARIOS")->fetchAll(PDO::FETCH_OBJ);

        if(isset($_POST["crea"])){

            $nombre=$_POST["nombre"];
            $apellido=$_POST["apellido"];
            $telefono=$_POST["telefono"];

            $sql="INSERT INTO USUARIOS (NOMBRE, APELLIDO, TELEFONO) VALUES(:nom, :ape, :tel)";
            $resultado=$base->prepare($sql);
            $resultado->execute(array(":nom"=>$nombre, ":ape"=>$apellido, ":tel"=>$telefono));

            header("Location:index.php");

        }

    ?>

    <h1>CRUD</h1>

    <div class="tabla">
        <table>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    NOMBRE
                </th>
                <th>
                    APELLIDO
                </th>
                <th>
                    TELEFONO
                </th>
            </tr>

            <?php foreach ($registros as $persona) :?>

            <tr>
                <td> <?php echo $persona->ID?> </td>
                <td> <?php echo $persona->NOMBRE?> </td>
                <td> <?php echo $persona->APELLIDO?> </td>
                <td> <?php echo $persona->TELEFONO?> </td>

                <td> 
                    <a href="borrar.php?id=<?php echo $persona->ID?>">
                        <input type="button" value="Borrar" name="del">
                    </a>  
                </td>
                <td>
                    <a href="editar.php?id=<?php echo $persona->ID?> & nombre=<?php echo $persona->NOMBRE?>
                        & apellido=<?php echo $persona->APELLIDO?> & telefono= <?php echo $persona->TELEFONO?>">
                        <input type="button" value="Actualizar" name="upd"> 
                    </a> 
                </td>
                    
            </tr>

            <?php endforeach; ?>
            
        </table>
    </div>

    <form method="post" name="form-create" action="<?php echo $_SERVER['PHP_SELF'];?>">
        <div class="input-form">
            <label for="">NOMBRE:</label>
            <input type="text" name="nombre">
        </div>
        </br>
        <div class="input-form">
            <label for="">APELLIDO:</label>
            <input type="text" name="apellido">
        </div>
        </br>
        <div class="input-form">
            <label for="">TELEFONO:</label>
            <input type="text" name="telefono">
        </div>
        </br>
        <div class="boton">
            <input type="submit" value="INSERTAR" id="crea" name="crea">
        </div>
        
    </form>
    
</body>
</html>