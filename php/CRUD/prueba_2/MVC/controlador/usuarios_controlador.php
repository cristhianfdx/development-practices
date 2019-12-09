<?php
    
    require_once("modelo/usuarios_modelo.php");
    
    $usuario=new usuariosModelo(); 
    $arregloUsuarios=$usuario->getUsuarios();
    
    
        
    require_once("vista/usuarios_view.php");

       
?>