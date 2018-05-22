package api

import (
	"fmt"
	"log"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func Run() {
	http.HandleFunc("/", handler)
	http.HandleFunc("/thermostat", thermostatHandler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
