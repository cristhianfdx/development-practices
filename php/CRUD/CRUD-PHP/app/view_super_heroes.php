<?php

    function viewSuperHeroes($array_super_heroes){
        
        $tabla="<table class='tabla'>";
            $tabla .= "<thead>";            
                $tabla .= "<tr>";
                    $tabla .="<th>Id Héroe</th>";
                    $tabla .="<th>Nombre</th>";
                    $tabla .="<th>Imagen</th>";
                    $tabla .="<th>Descripci&oacute;n</th>";
                    $tabla .="<th>Editorial</th>";
                    $tabla .="<th></th>";
                    $tabla .="<th></th>";
                $tabla .= "</tr>";
            $tabla .= "</thead>";

            $tabla .= "<tbody>";
                foreach($array_super_heroes as $register){
                    $tabla .= "<tr>";
                        $tabla .= "<td>".$register["id_heroe"]."</td>";
                        $tabla .= "<td> <h2>".$register["nombre"]." </h2></td>";
                        $tabla .= "<td> <img src='app/assets/img/".$register["imagen"]."'/></td>";
                        $tabla .= "<td> <p>".$register["descripcion"]."</p></td>";
                        $tabla .= "<td><h3>".$register["editorial"]."</h3></td>";
                        $tabla .= "<td><a href='#'><button>Editar</button></a></td>";
                        $tabla .= "<td><a href='#'><button>Eliminar</button></a></td>";
                    $tabla .= "</tr>";
                }
            
            $tabla .= "</tbody>";
        $tabla .= "</table>";

        return printf($tabla);

    }
    
    
    
?>