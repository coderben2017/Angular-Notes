/* ts class review */

class Car{
  name: string;
  age: number;
  
  constructor(name){
  	this.name = name;
  }

  run(){
    document.querySelector("#container").innerHTML += `${this.name} is to run...<hr />`;
  }
}

let car1 = new Car("Ben's BMW7");
car1.run();



/* ts interface */

interface ShapeConfig{
	width: number;
	height: number;
	color?: string;// 允许省略，使用默认值
}

function createSquare(config: ShapeConfig): {color: string; square: number}{
	let newShape = {square: 100, color: "red"};// 定义默认值

	if(config.width && config.height){
		newShape.square = config.width * config.height;
	}
	if(config.color){
		newShape.color = config.color;
	}

	return newShape;
}

let shape1 = createSquare({width: 10, height: 20});
document.querySelector("#container").innerHTML += 
	`square: ${shape1.square} &emsp; color: ${shape1.color}<hr />`;


