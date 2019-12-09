<?php require "app/controller.php"; ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="app/assets/css/styles.css">
    <title>CRUD</title>
</head>
<body>
    <header>
        <h1>CRUD SUPER H&Eacute;ROES</h1>
        <div>
            <img src="app/assets/img/super-heroes.png" alt="super héroes">
        </div>
    </header>

    <section id="contenido">

        <div id="tabla"><?php showSuperHeroes(); ?></div>
    
    </section>

    <script src="app/assets/js/despachador.js"></script>
</body>
</html>