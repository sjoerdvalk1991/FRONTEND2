
function Person(name){

	this.name = name;

	this.speak = function () {
		console.log('Hi, my name is ' + this.name);
	
	}

	Person.prototype.walk = function () {

		console.log ("wiehoe")
	}

	Person.prototype.eat = function () {

		console.log ("I like this momomomemmomomom")
	}



}
var bob = new Person ('Bob');
bob.speak();
bob.walk();
bob.eat();
