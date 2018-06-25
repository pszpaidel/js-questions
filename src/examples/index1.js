function foo() {
    this.name = 'foo';
    this.getName = function () {
        return this.name
    };
}

foo();
console.log(this.getName());

//foo
