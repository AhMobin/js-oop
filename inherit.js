/// inheritance with prototype ///

function Person(){
    this.name = 'AH Mobin';
}

Person.prototype.print = function(){
    console.log('Hello, ' + this.name);
}

function Name(){
    Person.call(this);
}

Name.prototype = Object.create(Person.prototype);  /// high performance
//another procedure
// Object.setPrototypeOf(Name.prototype, Person.prototype);  /// low performance

/// resolve overwriting person constructor in name......
Name.prototype.constructor = Name;

var myName = new Name();
console.log(myName);

myName.print();
