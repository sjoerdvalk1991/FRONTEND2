var Person = {

name: 'Bob',

speak: function(){
console.log('Hi, my name is ' + this.name);

	},


eat: function() {
console.log('Hi, my favourite food is ' + this.name);

	},

walk: function (){
console.log('Hi, my favourite walktour is ' + this.name);

	}
}
Person.speak();
Person.eat();
