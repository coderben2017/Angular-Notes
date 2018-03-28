/* 对象解构 */
function getObj() {
    return {
        code: "IBM",
        price: {
            price1: 1000,
            price2: 2000
        }
    };
}
var _a = getObj(), company = _a.code, _b = _a.price, price1 = _b.price1, price2 = _b.price2;
console.log("company\uFF1A" + company);
console.log("price1\uFF1A" + price1);
/* 数组解构 */
var arr = [1, 2, 3, 4, 5];
var a = arr[0], b = arr[1];
console.log("a: " + a + "  b: " + b);
var d = arr[3];
console.log("d: " + d);
var first = arr[0], others = arr.slice(1);
console.log("others: " + others); // 整数组形式输出
// console.log(`...others: ${...others}`);// 数组所有元素输出
/* 函数形参解构 */
function start(first, seconde) {
    var others = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        others[_i - 2] = arguments[_i];
    }
    console.log("function start and print out: " + others);
}
start(1, 2, 3, 4, 5);
