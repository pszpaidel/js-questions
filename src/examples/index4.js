function foo() {
	console.log(avar);
}

function bar() {
	var avar = "local";
	foo();
}

bar();
var avar = "global";

