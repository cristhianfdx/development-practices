/**Parametros rest o agrupados */

//Los parametros llegan como un array

function hardware(...components){
    console.log(components);
}

hardware("RAM", "HDD", "Mother Board");