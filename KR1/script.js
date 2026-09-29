//завдання 1
function TriangleArea(a = 5, b = 4) {
    let S = (a * b) / 2;
    console.log("Площа трикутника:", S);
    return S;
}

TriangleArea(3, 6);
TriangleArea();

//завдання 2
function Jet(color, avgSpeed, max_altitude, brand, point_of_destination) {
    Jet.color = color;
    Jet.avgSpeed = avgSpeed;
    Jet.max_altitude = max_altitude;
    Jet.brand = brand;
    Jet.point_of_destination = point_of_destination;
}

Jet.prototype.AssignPilot = function(name,years_of_experience,hasChildren) {
    this.pylot = {
        name:name,
        years_of_experience:years_of_experience,
        hasChildren:hasChildren
    };
};

let jet1 = new Jet("white", 850.5, 12000, "AN", "Kyiv");
jet1.AssignPilot("Mykola Popovych", 15, true);
console.log("Jet:", jet1);

//завдання 3
class EquilateralTriangle {
    constructor(equalSide) {
        this.equalSide = equalSide;
    }
    get side() {
        return this.equalSide;
    }
}

//завдання 4
class IsoscelesTriangle extends EquilateralTriangle {
    constructor(equalSide, base) {
        super(equalSide);
        this.base = base;
    }
    static area(a, b) {
        return (b / 4) * Math.sqrt(4 * a**2 - b**2);
    }
}

let triangle1 = new EquilateralTriangle(6);
console.log("Рівносторонній трикутник:", triangle1);
console.log("Сторона:", triangle1.side);

let triangle2 = new IsoscelesTriangle(5, 6);
console.log("Рівнобедрений трикутник:", triangle2);
console.log("Площа:", IsoscelesTriangle.area(triangle2.equalSide, triangle2.base));

//завдання 5
function AddGenerator(number) {
    return function(value) {
        return number + value;
    };
}

let add1 = AddGenerator(5);
let add2 = AddGenerator(10);
console.log("AddGenerator(5) + 3 =", add1(3));
console.log("AddGenerator(10) + 7 =", add2(7));
