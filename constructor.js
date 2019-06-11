//basic concept of constructor...
/**
 * Constructor is use for creating multiple object dynamically using a single functional template..
 *
 * 'new' keyword is must for creating constructor function
 */

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.detail = function() {
        console.log('Name : ' + this.name);
    }
}

var pr1 = new Person('AH Mobin', 23, 'Male', ' ');
var pr2 = new Person('HM Nayem', 25, 'Male');
var pr3 = new Person('Twinkle Cats', null, null);
///by this creating a new object, we can use the function for various time as we want.

console.log(p1);

var people = [pr1, pr2, pr3];
people.forEach(function(per) {
    console.log(per);
    // per.detail();
});


//ALL Object Properties - Checking Purposes;
// for (var props in p1){
//   console.log(props);
//   console.log(props + ' = ' + p1[props])
// }