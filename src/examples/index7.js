function bar() {
	var avar = "bar";

	return function()  {
		console.log(this.avar);
	}
}

var avar = "global";
var foo = bar();
foo();