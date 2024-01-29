let prumer: Number;
let lightLevel = input.lightLevel();
let tries = 0;
basic.forever(function() {
    console.log(input.lightLevel())
    basic.pause(50)
    if(lightLevel > prumer + 10 || lightLevel < prumer - 10){
        music.playTone(300, 500)
    }
})
input.onButtonPressed(Button.A, function() {
    tries += 1
    console.log(input.lightLevel())
    for(tries; tries = 5; tries + )
    basic.pause(50)
})