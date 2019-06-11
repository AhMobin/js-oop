/*
* Bind objects with function by three binding methods
* 1. bind()
* 2. call()
* 3. apply() - need [] to declare arguments inside
*
*/

//// Binding example 1

function Bio(){
    console.log ('Hello, Mr. ' + this.name + ' [' + this.age + '].');
}

var obj1 = {
    name : 'AH Mobin',
    age : 23
}

var obj2 = {
    name : 'DMS Kabir',
    age : 25
}

var obj3 = {
    name : 'John Kabir',
    age: 21
}

var rs1 = Bio.bind(obj1);  //// declared by bind()
rs1(); 
var rs2 = Bio.call(obj2); /// declared by call()
var rs3 = Bio.apply(obj3); /// declared by apply()



//// Binding example 2

var Person = {
    name : 'ahm',
    age: 23,
    email : function(){
        console.log('Email : '+ this.email);
    }
}

var mail = {
    email: 'ahm@gmail.com'
}

var binded = Person.email.bind(mail);
binded();



/// Binding example 3

function add(a,b){
    console.log((a + b) * this.c);
}

var mlt1 = {
    c: 5
}
var mlt2 = {
    c: 10
}
var mlt3 = {
    c: 15
}

var rslt1 = add.bind(mlt1, 10, 5);  /// using bind()
rslt1();

var rslt2 = add.call(mlt2, 10, 5);  /// using call()

var rslt3 = add.apply(mlt3, [10, 5]);  /// using apply()