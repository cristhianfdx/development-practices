<?php

    require_once "model.php";    
    
          
    //GET view super_heroes
    function showSuperHeroes(){

        $heroe = new SuperHeroesModel();
        $array_super_heroes = $heroe->getSuperHeroes();

        require "view_super_heroes.php";
        viewSuperHeroes($array_super_heroes);
        
        $heroe->getSuperHeroes()->close();
    }    

    //GET view new
    function newSuperHeroe(){

    }

    //POST
    function createSuperHeroe(){

    }

    //GET view edit
    function editSuperHeroe(){

    }

    //POST-PATCH-PUT
    function updateSuperHeroe(){

    }

    //DELETE
    function deleteSuperHeroe(){

    }
   
    
?>