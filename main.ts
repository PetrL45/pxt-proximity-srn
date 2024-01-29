let prumer: Number;
let lightLevel = input.lightLevel();
let tries: Number = 0;
let calibration: boolean = false;
basic.forever(function() {
    console.log(input.lightLevel())
    basic.pause(50)
    if(lightLevel > prumer + 10 || lightLevel < prumer - 10){
        music.playTone(300, 500)
    }
})
input.onButtonPressed(Button.A, function() {
    tries += 1;
    basic.pause(50)
    while(calibration = true){
        prumer = lightLevel / tries;
    }
})