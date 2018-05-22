package gpio

// Modes either off or on
type Modes struct {
	Off string
	On  string
}

// CreateModes is mode factory
func CreateModes() *Modes {
	return &Modes{
		Off: "off",
		On:  "on",
	}
}

type mode string

const (
	// Off = off
	Off mode = "off"
	// On = on
	On mode = "on"
)
