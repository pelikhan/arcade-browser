game.splash("press A to browse to makecode.com")
controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    web.open("https://makecode.com/")
})