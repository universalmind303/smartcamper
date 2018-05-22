package main

import (
	"fmt"

	"github.com/universalmind303/smartcamper/goServer/api"
	"github.com/universalmind303/smartcamper/goServer/gpio"
)

func main() {
	var Modes = gpio.CreateModes()
	fmt.Printf("hello world")
	gpio.SetPin(Modes.Off)
	api.Run()

}
