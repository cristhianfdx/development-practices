navigator.getMedia = ( navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia);

navigator.getMedia (

// Restricciones (contraints) *Requerido
{
video: true,
audio: true
},

// Funcion de finalizacion (Succes-Callback) *Requerido
function(localMediaStream) {
var video = document.querySelector('video');
video.src = window.URL.createObjectURL(localMediaStream);
video.onloadedmetadata = function(e) {
// Haz algo con el video aquí.
};
},

// errorCallback *Opcional
function(err) {
console.log("Ocurrió el siguiente error: " + err);
}

);