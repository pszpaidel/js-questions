function foo() {
    this.name = 'foo';
    this.getName = function() {
        return this.name
    } 
};

var fObject = new foo();
console.log(fObject.getName())

//foo


