var aObject = {
	a: 2
};

var b = Object.create( aObject );
b.a++;

console.log(aObject.a)
console.log(b.a)

//2
//3