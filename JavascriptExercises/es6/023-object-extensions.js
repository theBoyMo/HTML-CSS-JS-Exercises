// 1. Object.assign() - merge multiple object, passing in a comma separated list of objects

let obj1 = {
	a: 1,
	b: 2, // overwritten
	c: 5 // overwritten
};

let obj2 = {
	b: 6,
	c: 3,
	d: 4
};

let obj12 = Object.assign(obj1, obj2);
console.log(obj12);

// merging objects with different constructors
class Obj3 {
	constructor(){
		this.a = 2; // overwritten
	}
}

class Obj4 {
	constructor() {
		this.a = 6;
		this.b = 3;
	}
}

let obj3 = new Obj3();
let obj4 = new Obj4();

// first object is the base object (uses it's prototype), all subsequent objects in the sequence are merged into it
let obj34 = Object.assign(obj3, obj4);
// console.log(obj34);

// console.log(obj34 instanceof Obj3); // true
// console.log(obj34 instanceof Obj4); // false

// console.log(obj34.__proto__ === Obj3.prototype); // true
// console.log(obj34.__proto__ === Obj4.prototype); // false

// you can use an empty object as the base
let obj5 = Object.assign({}, obj1, obj2);
// console.log(obj5);
// console.log(obj5 instanceof Object); // true
// console.log(obj5.__proto__ === Object.prototype); // true


// 2. Object.setPrototypeOf() - set the prototype of an object after it's been created
//		- there's already Object.create() which allows you to set the prototype at the time of object creation.
let person = {
	name: 'John Smith'
};

let employee = {
	name: 'Peter Jones',
	job: 'Developer'
};

console.log(person.__proto__ === Object.prototype); // true
console.log(employee.__proto__ === Object.prototype); // true

// reset the prototype of an object - sets the prototype of person to the employee object
Object.setPrototypeOf(person, employee);
console.log(person.__proto__ === Object.prototype); // false
console.log(person.__proto__ === employee); // true

console.log(person); // {name : 'John Smith}


// 3. Math Object

// Math.sign() returns the sign of a number, e.g
console.log(Math.sign(10)); // -1
console.log(Math.sign(-10)); // 1

// Math.trunk() - truncates a number, e.g
// - with positive numbers floor() and trunc() are the same
console.log(Math.trunc(0.78)); // 0
console.log(Math.trunc(3.67)); // 3
console.log(Math.trunc(-3.67)); // -3
console.log(Math.floor(-3.67)); // -4

// 4. String Methods

// startsWith(), endsWith() & includes() return a boolean, e.g
// - methods are case sensitive
let str = 'abcdefghijkl';
console.log(str.startsWith('abc')); // true
console.log(str.startsWith('bc')); // false
console.log(str.endsWith('jkl')); // true
console.log(str.endsWith('JKL')); // false
console.log(str.includes('def')); // true
