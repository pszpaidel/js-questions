function foo() {
	console.log(avar);
}

function bar() {
	var avar = "local";
	foo.call(this);
}

avar = "global";
bar();
var avar;