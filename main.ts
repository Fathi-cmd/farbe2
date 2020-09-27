let Platzhalter = 0
input.onGesture(Gesture.Shake, function () {
    Platzhalter = randint(0, 5) + 1
    if (Platzhalter == 1) {
        images.createImage(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `).showImage(0)
    }
    if (Platzhalter == 2) {
        images.createImage(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `).showImage(0)
    }
    if (Platzhalter == 3) {
        images.createImage(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `).showImage(0)
    }
    if (Platzhalter == 4) {
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `).showImage(0)
    }
    if (Platzhalter == 5) {
        images.createImage(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `).showImage(0)
    }
    if (Platzhalter == 6) {
        images.createImage(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `).showImage(0)
    }
})
