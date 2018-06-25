function foo() {
  this.avar = "foo";

  return 2;
}

var o = new foo();
console.log(o.avar);

//foo