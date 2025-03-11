//reference type array,object,function
const person = {
  name: 'asmita',
  age: 23,
  address: 'kohalpur',
  habbit: ['coding', 'reading'],

};
// person.job = 'Web deeloper';
// person.age = 100;
console.log({
  person, name: 'ram', some: 'thing'
});

person.job = 'developer';
person.age = 100;
delete person.habbit;
console.log(person);

const colors = ['red', 'green', 'yellow', 'white'];
const newcolors = ['golden', 'silver', 'pink'];
console.log(newcolors);