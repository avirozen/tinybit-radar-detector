let dsitance = 0
basic.forever(function () {
    if (dsitance < 15) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showArrow(ArrowNames.South)
    }
})
basic.forever(function () {
    dsitance = Tinybit.Ultrasonic_Car()
    if (dsitance < 15) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 60)
        basic.pause(200)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 60)
        basic.pause(400)
    } else {
        Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 53, 55)
    }
})
basic.forever(function () {
    if (dsitance < 15) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
    } else {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
    }
})
basic.forever(function () {
    if (dsitance < 15) {
        music.playTone(988, music.beat(BeatFraction.Whole))
        basic.pause(100)
    } else {
        music.playTone(494, music.beat(BeatFraction.Eighth))
        basic.pause(400)
    }
})
