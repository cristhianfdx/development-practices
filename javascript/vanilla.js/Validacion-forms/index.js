
window.onload = function(){
    document.getElementById("enviar").addEventListener("click", validarForm, false);
    document.getElementById("limpiar").addEventListener("click", limpiarForm, false);
};   



function validarForm(){
     var verificar= true;
     var expRegNombre =/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
     var expRegEmail =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

     var form = document.getElementById("frm-contacto");
     var nombre = document.getElementById("nombre");
     var edad = document.getElementById("edad");
     var email = document.getElementById("email");
     var masculino = document.getElementById("M");
     var femenino = document.getElementById("F");
     var asunto = document.getElementById("asunto");
     var comentario = document.getElementById("comentario");

     if(!nombre.value){
         alert("campo nombre requerido");
         nombre.focus();
         verificar = false;
     }else if(!expRegNombre.exec(nombre.value)){
        alert("Campo nombre solo acepta nombres y espacios en blanco");
        nombre.focus();
        verificar = false;
     }
     else if(!edad.value){
        alert("campo edad requerido");
        edad.focus();
        verificar = false;
    }else if(isNaN(edad.value)){
        alert("el campo edad no es numerico");
        edad.focus();
        verificar = false;
    }
    else if(edad.value < 18 || edad.value > 60){
        alert("Rango de edad in valido");
        edad.focus();
        verificar = false;
    }
    else if(!email.value){
        alert("campo email requerido");
        email.focus();
        verificar = false;
    }
    else if(!expRegEmail.exec(email.value)){
        alert("Campo email no es valido");
        email.focus();
        verificar = false;
    }
    else if(!masculino.checked && !femenino.checked){
        alert("Campo genero requerido");        
        verificar = false;

    }else if(!asunto){
        alert("campo asunto requerido");
        asunto.focus();
        verificar = false;
    }

     if(verificar){
        document.frm_contacto.submit();
     }

    
}

function limpiarForm(){
    
    document.getElementById("frm-contacto").reset();
}