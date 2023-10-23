class Train {
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }

    toggleLights(){
        this.lightsOn = !this.lightsOn; // didn't get this ! afterwards
        // it reverse the boolean
    }

    lightsStatus(){
        console.log('Light is on ?', this.lightsOn);
    }

    getSelf(){
        console.log(this);
    }

    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto)
    }

}

// var myFirstTrain = new Train('red', false);
// // console.log(myFirstTrain);
// // console.log(myFirstTrain.color)
// myFirstTrain.getSelf()
// myFirstTrain.toggleLights()
// console.log(myFirstTrain.lightsOn)
// myFirstTrain.getPrototype();



class HighSpeedTrain extends Train {
    constructor(passenger, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passenger = passenger;
        this.highSpeedOn = highSpeedOn;
    }

    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }


}
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);


