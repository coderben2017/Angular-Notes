/*
 * coderben2016@126.com
 * 2017/08/14
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/* 字符串拼接 */
var name1 = "jinben";
var phone1 = 12345;
document.querySelector("#container").innerHTML +=
    "my name is " + name1 + ", phone number is " + (phone1 + 562) + "<hr />";
/* 数组、元组 */
var arr1 = [1, 2, 3, 4, 5];
var arr2 = ["string", 555];
for (var i = arr1.length - 1; i >= 0; i--) {
    document.querySelector("#container").innerHTML += arr1[i];
}
document.querySelector("#container").innerHTML += "<br />";
document.querySelector("#container").innerHTML += "\u5143\u7EC4\uFF1A" + arr2[0] + ", " + arr2[1] + "<hr />";
/* 枚举类型（根据value找key）*/
var en;
(function (en) {
    en[en["red"] = 1] = "red";
    en[en["yello"] = 2] = "yello";
    en[en["blue"] = 3] = "blue";
})(en || (en = {}));
;
var c = en[2];
document.querySelector("#container").innerHTML += "color2: " + c + "<hr />";
/* 任意类型（跳过类型检查器，可赋任意值，调用Number、String等类型的任意方法）*/
var str = "sss";
str = 13.4678;
document.querySelector("#container").innerHTML += "str: " + str.toFixed(2) + "<br />";
// 注：Object类型可赋任意值，但不能调任意方法
var obj = 11;
document.querySelector("#container").innerHTML += "obj: " + obj + "<br />";
// 定义复杂或未知类型数组
var arr = [1, false, "qweasd"];
document.querySelector("#container").innerHTML += "arr: " + arr + "<hr />";
/* 空类型void */
function getMsg() {
    document.querySelector("#container").innerHTML += "Hello World! here return void.<br />";
}
getMsg();
// 空类型变量只能是undefined或null
var v1 = undefined; // let v1: undefined = undefined;
var v2 = null; // let v2: null = null;
document.querySelector("#container").innerHTML += "void1: " + v1 + ", void2: " + v2 + "<hr />";
/* never类型 —— 永远无值，是任何类型的子类型（可以赋给任意类型）*/
function error(msg) {
    throw new Error(msg);
}
function loop() {
    while (true) {
    }
}
document.querySelector("#container").innerHTML += "这里是nerver类型<hr />";
/* 类型断言（强制类型转换）*/
var val = "hello";
var num1 = val.length; // JSX中不可用
var num2 = val.length; // 任何情况可用
document.querySelector("#container").innerHTML += "hello's length: " + num1 + " or " + num2 + "<hr />";
/* ES5函数作用域？？？*/
function f() {
    var a = 1;
    a = 2;
    var b = getA();
    a = 3;
    return b;
    function getA() {
        document.querySelector("#container").innerHTML += "a = 2 or 3 ? the answer is " + a;
    }
}
f(); // return 2
document.querySelector("#container").innerHTML += "<hr />";
/* ES6解构（重点重点重点重点） */
var arr3 = [1, 2, 3, 4, 5];
var first = arr3[0], third = arr3[2]; // 超强的灵活性
document.querySelector("#container").innerHTML += "first and second: " + first + " " + third + "<br />";
// 用解构来交换值
_a = [third, first], first = _a[0], third = _a[1];
document.querySelector("#container").innerHTML += "after swap: " + first + " " + third + "<br />";
// ...语法
var arr4 = [1, 2, 3, 4, 5];
var num_1 = arr4[0], num_rest = arr4.slice(1); // 不使用...则只赋值2给num_rest
document.querySelector("#container").innerHTML += "first: " + num_1 + " &emsp; rest: " + num_rest + "<br />";
// 对象解构
var car1 = {
    usr: "Ben",
    price: 200000,
    location: "Qingdao"
};
var usr = car1.usr, price = car1.price;
document.querySelector("#container").innerHTML += "car's user: " + usr + "&emsp; car's price: " + price + "<br />";
var car2 = {
    usr2: "Ben",
    price: 770000,
    location: "Qingdao"
};
var usr2 = car2.usr2, restMsg = __rest(car2, ["usr2"]);
document.querySelector("#container").innerHTML += "car2's usr: " + usr2 + " &emsp; restMsg: " + restMsg + "<br />";
var theName = car2.usr2, thePrice = car2.price; // 属性重命名？？？
document.querySelector("#container").innerHTML += "theName: " + theName + " &emsp; thePrice: " + thePrice + "<hr />";
/* 函数声明 */
// 指定默认值
function getABC(_a) {
    var _b = _a === void 0 ? { a: 111, b: "sss" } : _a, a = _b.a, b = _b.b;
    document.querySelector("#container").innerHTML += "funcetion default a is " + a + ", b is " + b + "<hr />";
}
getABC();
// 指定部分默认值
function getAB(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    // ...
}
getAB({ a: "yes" }); // ok, default b = 0
getAB(); // ok, default to {a: ""}, which then defaults b = 0
// getAB({}); // error, 'a' is required if you supply an argument
/* ES6展开（与解构相反） */
// 展开数组
var arr5 = [2, 3];
var arr6 = [4, 5];
var arr7 = [1].concat(arr5, arr6, [6]);
document.querySelector("#container").innerHTML += "\u5C55\u5F00\u7684arr7: " + arr7[0] + ", " + arr7[1] + ",\n" + arr7[2] + ", " + arr7[3] + ", " + arr7[4] + ", " + arr7[5] + "<br />";
// 展开对象
var obj1 = { id: 1, text: "texttexttext", date: 2017 };
var obj2 = __assign({ id: 2 }, obj1);
document.querySelector("#container").innerHTML += "\u5C55\u5F00\u7684obj2: id: " + obj2.id + ", text: " + obj2.text + ",\ndate: " + obj2.date + "<hr />";
var _a;
