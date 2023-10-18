class Device {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.condition = "off"
    }
    on() {
        if (this.condition == "off") {
            this.condition = "on";
            console.log(`${this.name} turned ${this.condition}`)
        } else {
            console.log(`Wrond command: ${this.name} is already turned ${this.condition}`)
        }
    }

    off() {
        if (this.condition == "on") {
            this.condition = "off";
            console.log(`${this.name} turned ${this.condition}`)
        } else {
            console.log(`Wrond command: ${this.name} is already turned ${this.condition}`)
        }
    }
}

class Lamp extends Device {
    constructor(name, brand, power, setType) {
        super(name, power);
        this.brand = brand;
        this.setType = setType;
        this.condition = "off"
    }
}
class Computer extends Device {
    constructor(name, brand, power, selfType, processor, friquencyname) {
        super(name, power);
        this.brand = brand;
        this.plantType = selfType;
        this.processor = processor;
        this.friquency = friquency;
        this.condition = "off"
    }
}

const theLamp = new Lamp("ProLite-123", "General Electric", 12, "Table lamp")
const theComputer = new Lamp("MacBook Pro 13", "Apple", 37, "Laptop", "M-1", "2,4 GHz")

theLamp.on();
theLamp.off();
theComputer.on();
theComputer.on();
theComputer.off();