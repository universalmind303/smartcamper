package api

import (
	"fmt"
	"net/http"
)

func thermostatHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "thermostat")
}
