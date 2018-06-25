function foo() {
  this.avar = "foo";

  return {avar: 2};
}

var o = new foo();
console.log(o.avar);

//2