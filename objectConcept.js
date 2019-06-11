/// concept of JavaScript Object

var obj = {
  name : 'AH Mobin',
  skill : 'JavaScript, PHP',
  education : 'BSc in CSE',
  age : 23,
  detail : function(){
    console.log('Name : ' + this.name + '\nSkills : '+this.skill + '\nAge : '+this.age + '\nEducation : '+this.education) ;
  }
}

// output details properties
obj.detail();

// output name properties
console.log(obj.name); // DOT(objectName.objectPropertyName) Notation**

// output skills properties
console.log(obj['skill']);  /// Bracket(objectName['objectPropertyName']) Notation


//// Extend object properties ********
obj.relation = 'Single';
console.log(obj.relation);

/// Traverse the full object properties & properties value

//traverse object properties
for( var props in obj){
  console.log(props);
}

///traverse properties value
for(props in obj){
  console.log(props + ' = ' + obj[props]);
}
