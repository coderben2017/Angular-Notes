/*
 * coderben2016@126.com
 * 2017/08/14
 */

/* 字符串拼接 */

let name1: string = "jinben";
let phone1: number = 12345;
document.querySelector("#container").innerHTML += 
	`my name is ${name1}, phone number is ${phone1 + 562}<hr />`;



/* 数组、元组 */

let arr1: number[] = [1,2,3,4,5];
let arr2: [string, number] = ["string", 555];
for (var i = arr1.length - 1; i >= 0; i--) {
	document.querySelector("#container").innerHTML += arr1[i];
}
document.querySelector("#container").innerHTML += "<br />";
document.querySelector("#container").innerHTML += `元组：${arr2[0]}, ${arr2[1]}<hr />`;



/* 枚举类型（根据value找key）*/

enum en{red = 1, yello = 2, blue = 3};
let c: string = en[2];
document.querySelector("#container").innerHTML += `color2: ${c}<hr />`;



/* 任意类型（跳过类型检查器，可赋任意值，调用Number、String等类型的任意方法）*/

let str: any = "sss";
str = 13.4678;
document.querySelector("#container").innerHTML += `str: ${str.toFixed(2)}<br />`;

// 注：Object类型可赋任意值，但不能调任意方法
let obj: Object = 11;
document.querySelector("#container").innerHTML += `obj: ${obj}<br />`;

// 定义复杂或未知类型数组
let arr: any[] = [1, false, "qweasd"];
document.querySelector("#container").innerHTML += `arr: ${arr}<hr />`;



/* 空类型void */

function getMsg(): void{
	document.querySelector("#container").innerHTML += `Hello World! here return void.<br />`;
}
getMsg();

// 空类型变量只能是undefined或null
let v1: void = undefined; // let v1: undefined = undefined;
let v2: null = null;			// let v2: null = null;
document.querySelector("#container").innerHTML += `void1: ${v1}, void2: ${v2}<hr />`;



/* never类型 —— 永远无值，是任何类型的子类型（可以赋给任意类型）*/

function error(msg: string): never{
	throw new Error(msg);
}
function loop(): never{
	while(true){

	}
}
document.querySelector("#container").innerHTML += "这里是nerver类型<hr />";



/* 类型断言（强制类型转换）*/

let val: any = "hello";
let num1: number = (<string>val).length;// JSX中不可用
let num2: number = (val as string).length;// 任何情况可用
document.querySelector("#container").innerHTML += `hello's length: ${num1} or ${num2}<hr />`;



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
f();// return 2
document.querySelector("#container").innerHTML += "<hr />";



/* ES6解构（重点重点重点重点） */

let arr3: number[] = [1, 2, 3, 4, 5];
let [first, ,third] = arr3;// 超强的灵活性
document.querySelector("#container").innerHTML += `first and second: ${first} ${third}<br />`;

// 用解构来交换值
[first, third] = [third, first];
document.querySelector("#container").innerHTML += `after swap: ${first} ${third}<br />`;

// ...语法
let arr4: number[] = [1,2,3,4,5];
let [num_1, ...num_rest] = arr4;// 不使用...则只赋值2给num_rest
document.querySelector("#container").innerHTML += `first: ${num_1} &emsp; rest: ${num_rest}<br />`;

// 对象解构
let car1 = {
	usr: "Ben",
	price: 200000,
	location: "Qingdao"
}; 
let {usr, price} = car1;  
document.querySelector("#container").innerHTML += `car's user: ${usr}&emsp; car's price: ${price}<br />`;

let car2 = {
	usr2: "Ben",
	price: 770000,
	location: "Qingdao"
};
let {usr2, ...restMsg} = car2;
document.querySelector("#container").innerHTML += `car2's usr: ${usr2} &emsp; restMsg: ${restMsg}<br />`;

let {usr2: theName, price: thePrice } = car2;// 属性重命名？？？
document.querySelector("#container").innerHTML += `theName: ${theName} &emsp; thePrice: ${thePrice}<hr />`;



/* 函数声明 */

// 指定默认值
function getABC({a, b} = {a: 111, b: "sss"}){
	document.querySelector("#container").innerHTML += `funcetion default a is ${a}, b is ${b}<hr />`;
}
getABC();

// 指定部分默认值
function getAB({ a, b = 0 } = { a: "" }): void {
    // ...
}
getAB({ a: "yes" }); // ok, default b = 0
getAB(); // ok, default to {a: ""}, which then defaults b = 0
// getAB({}); // error, 'a' is required if you supply an argument



/* ES6展开（与解构相反） */

// 展开数组
let arr5: number[] = [2, 3];
let arr6: number[] = [4, 5];
let arr7: number[] = [1, ...arr5, ...arr6, 6];
document.querySelector("#container").innerHTML += `展开的arr7: ${arr7[0]}, ${arr7[1]},
${arr7[2]}, ${arr7[3]}, ${arr7[4]}, ${arr7[5]}<br />`;

// 展开对象
let obj1 = {id: 1, text: "texttexttext", date: 2017};
let obj2 = {id: 2, ...obj1};
document.querySelector("#container").innerHTML += `展开的obj2: id: ${obj2.id}, text: ${obj2.text},
date: ${obj2.date}<hr />`;