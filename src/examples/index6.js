function foo(avar) {
	console.log(avar);
}

function bar() {
	var avar = "bar";
	foo.apply(this, [avar]);
}

var avar = "global";
bar();

//bar