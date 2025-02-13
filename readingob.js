let person = {fname:"John", lname:"Doe", age:25};
person.age=30;

console.log(person);
console.log(person.fname);
console.log(person.lname);
console.log(person.age);
delete person
delete person.lname
console.log(person.fname);
console.log(person.lname);
console.log(person.age);
