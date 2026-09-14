let car1 = new Object();
car1.color = "red";
car1.maxSpeed = 100;
car1.tuning = true;
car1.number_of_accidents = 0;

car1.driver = new Object();
car1.driver.name = "Mykola Popovych";
car1.driver.category = "C";
car1.driver.personal_limitations = "No driving at night";

console.log(car1);

car1["drive"] = function() {
    console.log("I am not driving at night");
};
car1["drive"]();

//------------------------------------------

let car2 = {
    color: "blue",
    maxSpeed: 90,
    tuning: false,
    number_of_accidents: 2,
    driver: {
        name: "Mykola Popovych",
        category: "B",
        personal_limitations: null
    }
};

console.log(car2);

car2["drive"] = function() {
    console.log("I can drive anytime");
};
car2["drive"]();

//------------------------------------------

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;

    this.trip = function() {
        if (!this.driver) {
            console.log("No driver assigned");
            return 0;
        }
        if (this.driver.nightDriving == true) {
            console.log("Driver " + this.driver.name + " drives at night and has " + this.driver.experience + " years of experience");
        }
        else console.log("Driver " + this.driver.name + " does not drive at night and has " + this.driver.experience + " years of experience");

    };
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
};
};

let truck1 = new Truck("black", 2000, 96.0, "Scania", "R500", );
truck1.AssignDriver("Mykola Popovych", true, 15);
truck1.trip();
console.log(truck1);

let truck2 = new Truck("white", 3000, 85.0, "Volvo", "FH16");
truck2.AssignDriver("Mykola Popovych", false, 10);
truck2.trip();
console.log(truck2);

//------------------------------------------

class Square {
    constructor(a) {
        this.a = a;
    }
    static help() {
        console.log("Квадрат - це чотирикутник, у якого всі сторони рівні і всі кути прямі");
    }
    length() {
        console.log("Периметр: " + 4 * this.a);
    }
    square() {
        console.log("Площа: " + this.a * this.a);
    }
    info() {
        console.log("Сторона квадрата: " + this.a + ", кути по 90 градусів, периметр: " + 4*this.a + ", площа: " + this.a * this.a);
    }
    
}

//------------------------------------------

class Rectangle extends Square {

    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("Прямокутник - це чотирикутник, у якого всі кути прямі");
    }

    length() {
        console.log("Периметр: " + (2 * this.a + 2 * this.b));
    }

    square() {
        console.log("Площа: " + (this.a * this.b));
    }

    info() {
        console.log("Сторона 1, 3: " + this.a);
        console.log("Сторона 2, 4: " + this.b);
        console.log("Кути по 90 градусів");
        console.log("Периметр: " + (2 * this.a + 2 * this.b));
        console.log("Площа: " + (this.a * this.b));
    }
}

//------------------------------------------

class Rhombus extends Square {

    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Ромб - це чотирикутник, у якого всі сторони рівні");
    }

    length() {
        console.log("Периметр: " + (4 * this.a));
    }

    square() {
        console.log("Площа: " + (this.a * this.a * Math.sin(this.beta * Math.PI / 180)));
    }

    info() {
        console.log("Сторони ромба: " + this.a);

        console.log("Кут alpha: " + this.alpha);
        console.log("Кут beta: " + this.beta);

        console.log("Периметр: " + (4 * this.a));
        console.log("Площа: " + (this.a * this.a * Math.sin(this.beta * Math.PI / 180)));
    }
}

//------------------------------------------

class Parallelogram extends Rectangle {

    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Паралелограм - це чотирикутник, у якого протилежні сторони паралельні");
    }

    length() {
        console.log("Периметр: " + (2 * this.a + 2 * this.b));
    }

    square() {
        console.log("Площа: " + (this.a * this.b * Math.sin(this.beta * Math.PI / 180)));
    }

    info() {
        console.log("Сторона 1, 3: " + this.a);
        console.log("Сторона 2, 4: " + this.b);

        console.log("Кут alpha: " + this.alpha);
        console.log("Кут beta: " + this.beta);

        console.log("Периметр: " + (2 * this.a + 2 * this.b));
        console.log("Площа: " + (this.a * this.b * Math.sin(this.beta * Math.PI / 180)));
    }
}

//------------------------------------------

Object.defineProperty(Rhombus.prototype, "side", {

    get: function() {
        return this.a;
    },

    set: function(value) {
        this.a = value;
    }

});

Object.defineProperty(Rhombus.prototype, "angleAlpha", {

    get: function() {
        return this.alpha;
    },

    set: function(value) {
        this.alpha = value;
    }

});

Object.defineProperty(Rhombus.prototype, "angleBeta", {

    get: function() {
        return this.beta;
    },

    set: function(value) {
        this.beta = value;
    }

});

//------------------------------------------

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

let square1 = new Square(5);
let rectangle1 = new Rectangle(5, 10);
let rhombus1 = new Rhombus(6, 120, 60);
let parallelogram1 = new Parallelogram(5, 8, 120, 60);

console.log("\nSquare");
square1.info();

console.log("\nRectangle");
rectangle1.info();

console.log("\nRhombus");
rhombus1.info();

console.log("\nParallelogram");
parallelogram1.info();

//------------------------------------------

function Triangular(a = 3, b = 4, c = 5) {

    return {
        a: a,
        b: b,
        c: c
    };

}

let triangle1 = Triangular();
let triangle2 = Triangular(5, 6, 7);
let triangle3 = Triangular(7, 8, 9);

console.log("\nTriangular");
console.log(triangle1);
console.log(triangle2);
console.log(triangle3);

//------------------------------------------

function PiMultiplier(number) {

    return function() {
        return Math.PI * number;
    };

}

let Pi2 = PiMultiplier(2);
let Pi2_2 = PiMultiplier(2);
let PiHalf = PiMultiplier(0.5);

console.log("\nPiMultiplier");

console.log(Pi2());
console.log(Pi2_2());
console.log(PiHalf());

//------------------------------------------

function Painter(color) {

    return function(object) {

        console.log("Color: " + color);

        if (object.type) {
            console.log("Type: " + object.type);
        }
        else {
            console.log("No ‘type’ property occurred!");
        }

    };

}

let PaintBlue = Painter("blue");
let PaintRed = Painter("red");
let PaintYellow = Painter("yellow");

//------------------------------------------

let object1 = {
    maxSpeed: 280,
    type: "Truck",
    color: "magenta"
};

let object2 = {
    maxSpeed: 180,
    type: "Sportcar",
    loadCapacity: 2400
};

let object3 = {
    avgSpeed: 90,
    color: "purple",
    isCar: true
};


console.log("\nPainter");

console.log("Object 1:");
PaintBlue(object1);
PaintRed(object1);
PaintYellow(object1);

console.log("Object 2:");
PaintBlue(object2);
PaintRed(object2);
PaintYellow(object2);

console.log("Object 3:");
PaintBlue(object3);
PaintRed(object3);
PaintYellow(object3);
