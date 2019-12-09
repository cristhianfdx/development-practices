
navigator.geolocation.watchPosition(position=>{
    const socket = io();

    const miMap = L.map('map-template').setView([position.coords.latitude, position.coords.longitude], 13.89);
    L.tileLayer('https://api.mapbox.com/styles/v1/cristhianforerod/cjpptazr01g3v2sp4695mgnhi/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY3Jpc3RoaWFuZm9yZXJvZCIsImEiOiJjamp1ZXVjYmQ5ZzM5M3ZsZnhnZ3pqb2Y3In0.6gjPnJ7swac8tQAjk1wCsg')
        .addTo(miMap);

}, error=> console.log(error.code + ":" +error.message));


    















