var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
 * 父类
 */
var Shape = (function () {
    function Shape(name, width, height, color) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.area = width * height;
        this.color = color;
        this.nickname = "benben";
    }
    ;
    Shape.prototype.getMessage = function () {
        return this.name + " " + this.area + " " + this.color + " " + this.nickname;
    };
    ;
    return Shape;
}());
/*
 * 子类
 */
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(name, r, color) {
        var _this = _super.call(this, name, r, r, color) || this;
        _this.r = r;
        _this.area = Math.PI * Math.pow(r, 2);
        return _this;
    }
    ;
    Circle.prototype.getMessage = function () {
        return this.name + " " + this.area.toFixed(2) + " " + this.color;
    };
    ;
    return Circle;
}(Shape));
// 实现父类
var shape = new Shape("myshape", 100, 20, "red");
document.querySelector("#parent").innerHTML = shape.getMessage();
// 实现子类
var circle = new Circle("mycircle", 10, "yellow");
document.querySelector("#child").innerHTML = circle.getMessage();
