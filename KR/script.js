function TriangleArea(base = 5, height = 4) {
    let area = (base * height) / 2;
    console.log("Площа трикутника:", area);
    return area;
}

TriangleArea(3, 6);
TriangleArea();

function Jet(color, avgSpeed, maxAltitude, brand, pointOfDestination) {
    this.color = color;
    this.avgSpeed = avgSpeed;
    this.maxAltitude = maxAltitude;
    this.brand = brand;
    this.pointOfDestination = pointOfDestination;
}

Jet.prototype.AssignPilot = function(name, yearsOfExperience, hasChildren) {
    this.pilot = {
        name: name,
        yearsOfExperience: yearsOfExperience,
        hasChildren: hasChildren
    };
};

let jet1 = new Jet(
    "white",
    850.5,
    12000,
    "Boeing",
    "London"
);

jet1.AssignPilot(
    "John Smith",
    12,
    true
);

console.log("Jet:", jet1);


//---
class EquilateralTriangle {

    constructor(equalSide) {
        this.equalSide = equalSide;
    }

    // Getter
    get side() {
        return this.equalSide;
    }
}

class IsoscelesTriangle extends EquilateralTriangle {

    constructor(equalSide, base) {
        super(equalSide);
        this.base = base;
    }

    static area(a, b) {
        return (b / 4) * Math.sqrt(4 * a * a - b * b);
    }
}

let triangle1 = new EquilateralTriangle(6);

console.log("EquilateralTriangle:", triangle1);
console.log("Сторона:", triangle1.side);


let triangle2 = new IsoscelesTriangle(5, 6);

console.log("IsoscelesTriangle:", triangle2);

console.log(
    "Площа рівнобедреного трикутника:",
    IsoscelesTriangle.area(triangle2.equalSide, triangle2.base)
);


//---

function AddGenerator(number) {

    return function(value) {
        return number + value;
    };
}

let add5 = AddGenerator(5);
let add10 = AddGenerator(10);

console.log("AddGenerator(5), 3 =", add5(3));
console.log("AddGenerator(10), 7 =", add10(7));
