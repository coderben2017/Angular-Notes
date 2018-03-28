/*
 * 数据类型
 * 2017/08/14
 */
// 字符串拼接
var name1 = "jinben";
var phone1 = 12345;
console.log("my name is " + name1 + ", phone number is " + (phone1 + 562));
// 数组、元组
var arr1 = [1, 2, 3, 4, 5];
var arr2 = ["string", 555];
for (var i = arr1.length - 1; i >= 0; i--) {
    console.log(arr1[i]);
}
console.log("\u5143\u7EC4\uFF1A" + arr2[0] + ", " + arr2[1]);
// 枚举类型（根据value找key）
var en;
(function (en) {
    en[en["red"] = 1] = "red";
    en[en["yello"] = 2] = "yello";
    en[en["blue"] = 3] = "blue";
})(en || (en = {}));
;
var c = en[2];
console.log("color2: " + c);
// 任意类型（跳过类型检查器，可赋任意值，调用Number、String等类型的任意方法）
var str = "sss";
str = 13.4678;
console.log("str: " + str.toFixed(2));
// 注：Object类型可赋任意值，但不能调任意方法
var obj = 11;
console.log("obj: " + obj);
// 定义复杂或未知类型数组
var arr = [1, false, "qweasd"];
console.log("arr: " + arr);
// 空类型void
function getMsg() {
    alert("Hello World! return void.");
}
getMsg();
// 空类型变量只能是undefined或null
var v1 = undefined; // let v1: undefined = undefined;
var v2 = null; // let v2: null = null;
console.log("void1: " + v1 + ", void2: " + v2);
// never类型 —— 永远无值，是任何类型的子类型（可以赋给任意类型）
function error(msg) {
    throw new Error(msg);
}
function loop() {
    while (true) {
    }
}
// 类型断言（强制类型转换）
var val = "hello";
var num = val.length;
console.log("hello's length: " + num);
