// Задание 4 (классы приборов):
function Device(name, power) {
    this.name = name;
    // this.power = power;
    this.condition = "off"
}
Device.prototype.on = function () {
    if (this.condition == "off") {
        this.condition = "on";
        console.log(`${this.name} turned ${this.condition}`)
    } else {
        console.log(`Wrond command: ${this.name} is already turned ${this.condition}`)
    }
}

Device.prototype.off = function () {
    if (this.condition == "on") {
        this.condition = "off";
        console.log(`${this.name} turned ${this.condition}`)
    } else {
        console.log(`Wrond command: ${this.name} is already turned ${this.condition}`)
    }
}

function Lamp(name, brand, power, setType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.setType = setType;
    this.condition = "off"
}
Lamp.prototype = new Device();

function Computer(name, brand, power, selfType, processor, friquency) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.plantType = selfType;
    this.processor = processor;
    this.friquency = friquency;
    this.condition = "off"
}
Computer.prototype = new Device();

const articul_1 = new Lamp("ProLite-123", "General Electric", 12, "Table lamp")
const articul_2 = new Lamp("MacBook Pro 13", "Apple", 37, "Laptop", "M-1", "2,4 GHz")

articul_1.on();
articul_2.off();