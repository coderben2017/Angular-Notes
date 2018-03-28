/*
 * 父类
 */
class Shape{
	protected name: string;
	protected area: number;
	protected color?: string;
	protected width: number;
	protected height: number;
	protected nickname: string;

	constructor(name: string, width: number, height: number, color?: string){
		this.name = name;
		this.width = width;
		this.height = height;
		this.area = width * height;
		this.color = color;
		this.nickname = "benben";
	};

	public getMessage(){
		return this.name + " " + this.area + " " + this.color + " " + this.nickname;
	};
}

/*
 * 子类
 */
class Circle extends Shape{
	private r;

	constructor(name: string, r: number, color: string){
		super(name, r, r, color);
		this.r = r;
		this.area = Math.PI * Math.pow(r, 2);
	};

	public getMessage(){
		return this.name + " " + this.area.toFixed(2) + " " + this.color;
	};
}

// 实现父类
let shape = new Shape("myshape", 100, 20, "red");
document.querySelector("#parent").innerHTML = shape.getMessage();

// 实现子类
let circle = new Circle("mycircle", 10, "yellow");
document.querySelector("#child").innerHTML = circle.getMessage();