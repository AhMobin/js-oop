/*
* 'new' keyword concept in - ES5
* Four tasks handled by new keyword
* 1. create an empty object for a constructor function
* 2. copy the constructor's prototype into the object
* 3. execute constructor (with 'this')
* 4. finally return object
*
*/

//// example of new keyword - using by default 'new' keyword
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.detail = function(){
//     return ('Hello, ' + this.name + `. [${this.age}]`);
// }

// var obj = new Person('Abu Horaira Mobin', 23);
// var objDtl = obj.detail();
// console.log(objDtl);

///// creating a 'new' keyword - (working procedure of new keyword) ====
function myNew(constructor){
    var obj = {}; /// 1. create an empty object
    Object.setPrototypeOf(obj, constructor.prototype); /// 2. coping prototype to object
    var argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, argsArray.slice(1)); /// 3. execute constructor by arguments..
    return obj; /// 4. return object
}

var Test = function(name, age){
    this.name = name;
    this.age = age;
}

var t1 = myNew(Test, 'ahm', 23);
t1;