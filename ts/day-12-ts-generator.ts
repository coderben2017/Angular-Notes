function* generator() {
	while (true){
		yield Math.random() * 100;
	}
}

let limitPrice = 15;
let curPrice = 100;
while (curPrice > limitPrice){
	curPrice = generator().next().value;
	document.querySelector("#container").innerHTML += `the generator price is ${curPrice}<br />`;
}
document.querySelector("#container").innerHTML += `buy stock at the price ${curPrice}`;