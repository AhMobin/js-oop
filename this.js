/* 'this' keyword has no relation between function. 'this' works with the object.
* when 'this' declare inside a object, it refer the object.
*
* when 'this' declare inside a function or others it refer the window object in BROWSER & GLOBALLY refer in NODE.
*
*when a function is constructed (by new keyword - make a object) that time the 'this' inside the function will refer the created object for the constructed function.
*
* To bind any object with a function - use bind() method.....
*
*/



var me = {
    name: 'AH Mobin',
    print: function(){
        console.log(this);  ///refer full of object.
        console.log(this.name);
    }
}

// me.print();

// var myName = function(){
//     console.log(this);
//     console.log(this.name);
// }
// similer as var myName = me.print;

// console.log(myName);
// myName();

var myName = me.print.bind(me);
myName();

// =================================================================

function add(num){
    return this.value + num;
}

var obj = {
    value: 10
}

var bnd = add.bind(obj);
var r = bnd(10);
// console.log(r);

// var r = add(10);
// console.log(r);


///===========================================================

var person = {
    name: 'Abu Horaira Mobin',
    print: function(){
        // var name = this.name;
        setTimeout(function(){
            console.log('Name : ' + this.name);
        }.bind(this),5000);
    }
}

person.print();