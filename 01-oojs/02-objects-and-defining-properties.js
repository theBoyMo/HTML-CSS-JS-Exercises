/*
	PROPERTY DESCRIPTORS
 */

// 1. start with a factory function
let createPerson = function (firstName, lastName, age) {
	// 2. create a person object
	let person = {};
	
	// 3. define data descriptor properties
	// 1st arg - obj, 2nd arg - prop name, 3rd arg - descriptor obj contains options to be set for this property
	
	// Object.defineProperty(person, 'firstName', {
	// 	value: firstName, // value of the property
	// 	writable: false, // prop read only if omitted or set to false
	// });
	
	// Object.defineProperty(person, 'lastName', {
	// 	value: lastName
	// });
	
	// OR define multiple properties at once
	Object.defineProperties(person, {
		firstName: {
			value: firstName,
			writable: true
		},
		lastName: {
			value: lastName
		},
		age: {
			value: age
		}
	});
	
	
	return person;
};
