// const age = 100;
// const some = () => {
//   const age = 90;
//   console.log(age);
// }
// some();

// class User {
// person = 'ram';
// address = 'newroad';

// constructor(personName, age) {
//   this.personName = personName;
//   this.age = age;
// }



//   reading() {
//     console.log(`${this.personName} is reading a book`);
//   }

//   sleeping() {
//     console.log(`${this.personName}is sleeping`);
//   }

//   set setVal(val) {
//     this.personName = val;
//   }
// }

// const user1 = new User('ram', 90);
// user1.reading();
// user1.sleeping();
// user1.setVal = 'rita';
// console.log(user1.personName);


// const numbers = [11, 22, 33];
// const [a, b, c] = numbers;
// const persons = {
//   name: 'ram',
//   age: 90,
//   address: 'npj',
// };
// const { name, age, address: [x, y] } = persons;
// console.log(name, age, address(x));
// const a = numbers[0];
// const b = numbers[1];
// const c = numbers[2];

const users = [
  { id: 1, name: 'ram', age: 90 },
  { id: 2, name: 'shyam', age: 70 },
  { id: 3, name: 'rita', age: 60 },
  { id: 4, name: 'hari', age: 50 },
];

//map name
// const names = posts.map(post => post.name);
// console.log(names);

const userName = users.map((age, id, name) => {
  return name;
})
console.log(userName);