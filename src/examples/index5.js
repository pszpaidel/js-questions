function foo() {
	console.log(this.avar);
}

var tObject = {
	avar: "object"
}

function bar() {
	var avar = "bar";
	foo.call(tObject);
}

var avar = "global";
bar();
