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

let { code: company, price: {price1, price2} } = getObj();

console.log(`company：${company}`);
console.log(`price1：${price1}`);


/* 数组解构 */
let arr = [1, 2, 3, 4, 5];

let [a, b] = arr;
console.log(`a: ${a}  b: ${b}`);

let [, , , d] = arr;
console.log(`d: ${d}`);

let [first, ...others] = arr;
console.log(`others: ${others}`);// 整数组形式输出
// console.log(`...others: ${...others}`);// 数组所有元素输出


/* 函数形参解构 */
function start(first, seconde, ...others) {
	console.log(`function start and print out: ${others}`);
} 

start(1, 2, 3, 4, 5);