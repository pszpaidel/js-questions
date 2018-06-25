var p = {
	a: 2
};

var object = Object.create(p);
object.a++;

console.log(object.a)
console.log(p.a)

//2
//3