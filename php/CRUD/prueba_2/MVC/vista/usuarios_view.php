<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>USUARIOS</title>
    <style>
        td{border: 1px solid black;}
        th{background-color:#138D75; color:aliceblue;}
    </style>
</head>
<body>
    
    <table>
        <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>APELLIDO</th>
            <th>TELEFONO</th>
        </tr>

        <?php foreach($arregloUsuarios as $registro):?>

            <tr>
                <td> <?php echo $registro["ID"]?> </td>
                <td> <?php echo $registro["NOMBRE"]?> </td>
                <td> <?php echo $registro["APELLIDO"]?> </td>
                <td> <?php echo $registro["TELEFONO"]?> </td>

                 <td> 
                    <a href="controlador/usuarios_controlador.php?id=<?php echo $registro["ID"]?>">
                        <input type="button" value="Borrar" name="del">
                    </a>  
                </td>
                <td>
                    <a href="controlador/usuarios_controlador.php">
                        <input type="button" value="Actualizar" name="upd"> 
                    </a> 
                </td>
            </tr>

        <?php endforeach?>   
        
    </table>
    
</body>
</html>