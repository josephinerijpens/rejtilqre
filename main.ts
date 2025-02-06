basic.forever(function () {
    let kompas = 0
    if (kompas <= 45 && kompas >= 135) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (kompas <= 135 && kompas >= 225) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (kompas <= 225 && kompas >= 315) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (kompas <= 315 && kompas < 0) {
    	
    }
    if (kompas < 0 && kompas < 0) {
    	
    }
})
