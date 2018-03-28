// way 1
function printLog() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
}
printLog(1, 2, 3, 4, 5);

// way 2 
// 需要使用ES6编译，否则报错，但在官网能正确执行。
// function printLog2(a: number, b:string, c:boolean){
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }
// let args: [number, string, boolean] = [1, 'a', true];
// printLog2(...args); 
