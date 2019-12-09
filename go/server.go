package main

import (
	"net/http"
)

func main(){

	//Routes
	http.HandleFunc("/", homeHandler)

	//Start the server
	http.ListenAndServe(":3000", nil)
	
}

func homeHandler(w http.ResponseWriter, r *http.Request ){
	w.Write([]byte("Hello world"))
}