/* ts class review */
var Car = (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.run = function () {
        document.querySelector("#container").innerHTML += this.name + " is to run...<hr />";
    };
    return Car;
}());
var car1 = new Car("Ben's BMW7");
car1.run();
function createSquare(config) {
    var newShape = { square: 100, color: "red" }; // 定义默认值
    if (config.width && config.height) {
        newShape.square = config.width * config.height;
    }
    if (config.color) {
        newShape.color = config.color;
    }
    return newShape;
}
var shape1 = createSquare({ width: 10, height: 20 });
document.querySelector("#container").innerHTML +=
    "square: " + shape1.square + " &emsp; color: " + shape1.color + "<hr />";
