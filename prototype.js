function Person(name, age, email){
    this.name = name;
    this.age = age;
    this.email = email;
}

Person.prototype.detail = function(){
    return 'Name : '+ this.name + ' Age : ' + this.age + ' Email : ' + this.email;
}

var p1 = new Person('ahm', 23, 'ahm@mail.com');
var p2 = new Person('dms', 21, 'dms@gmail.com');

// calling detail __proto__
var dt = p1.detail();
console.log(dt);


Person.prototype = {
    print : function(){
        console.log('Hello, Mr. '+ this.name);
    }
}
///same as ' Person.prototype.print = function(){ console.log('Hello, Mr. '+ this.name); }

console.log(p1);
console.log(p2);

var p3 = new Person('ahm', 23, 'ahm@mail.com');
var p4 = new Person('dms', 21, 'dms@gmail.com');

/// calling print __proto__
var prt1 = p3.print();
var prt2 = p4.print();


/// making MD __proto__
Person.prototype.MD = 'Mr. MD';