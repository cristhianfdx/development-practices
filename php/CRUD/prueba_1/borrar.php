<?php
    include("conexion.php");

    $id=$_GET["id"];
    $base->query("DELETE FROM USUARIOS WHERE ID='$id' ");
    header("Location:index.php");
?>