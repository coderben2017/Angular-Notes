/*
 * 数据类型
 * 2017/08/14
 */

// 字符串拼接
let name1: string = "jinben";
let phone1: number = 12345;
console.log(`my name is ${name1}, phone number is ${phone1 + 562}`);

// 数组、元组
let arr1: number[] = [1,2,3,4,5];
let arr2: [string, number] = ["string", 555];
for (var i = arr1.length - 1; i >= 0; i--) {
	console.log(arr1[i]);
}
console.log(`元组：${arr2[0]}, ${arr2[1]}`);

// 枚举类型（根据value找key）
enum en{red = 1, yello = 2, blue = 3};
let c: string = en[2];
console.log(`color2: ${c}`);

// 任意类型（跳过类型检查器，可赋任意值，调用Number、String等类型的任意方法）
let str: any = "sss";
str = 13.4678;
console.log(`str: ${str.toFixed(2)}`);
// 注：Object类型可赋任意值，但不能调任意方法
let obj: Object = 11;
console.log(`obj: ${obj}`);
// 定义复杂或未知类型数组
let arr: any[] = [1, false, "qweasd"];
console.log(`arr: ${arr}`);

// 空类型void
function getMsg(): void{
	alert(`Hello World! return void.`);
}
getMsg();
// 空类型变量只能是undefined或null
let v1: void = undefined; // let v1: undefined = undefined;
let v2: null = null;			// let v2: null = null;
console.log(`void1: ${v1}, void2: ${v2}`);

// never类型 —— 永远无值，是任何类型的子类型（可以赋给任意类型）
function error(msg: string): never{
	throw new Error(msg);
}
function loop(): never{
	while(true){

	}
}

// 类型断言（强制类型转换）
let val: any = "hello";
let num: number = (<string>val).length;
console.log(`hello's length: ${num}`);