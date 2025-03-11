// // //mutable and immutable (update)
// // //primitive type immutable (non modify)
// // //reference type

// // const pers = 'shyam';
// // console.log(pers[0]);

// // const numbers = [11, 12, 14, 16];
// // numbers[0] = 99;
// // console.log(numbers);

// // let a = 90;
// // let b = a;

// // a = 100;
// // console.log(b);


// // const person = {
// //   name: 'ram',
// //   age: 90
// // };
// // const m = person;
// // person.age = 100;
// // console.log(m);

// const person = {
//   firstname: 'asmita',
//   lastname: 'pariyar',
//   address: 'npj',
//   getfullname: function () {
//     console.log(this.firstname + this.lastname);
//   }
// };


// // const user1 = {
// //   name: 'ram',
// //   age: 80,
// //   hobby: 'reading'
// // };
// // const user2 = {
// //   name: 'shyam',
// //   age: 80,
// //   hobby: 'reading'
// // };
// // const user3 = {
// //   name: 'sita',
// //   age: 80,
// //   hobby: 'reading'
// // };

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const user1 = new User('ram', 90);
// const user2 = new User('hari', 10);
// console.log(user1);
// console.log(user2);
// const nim = new User();
// console.log(nim.name);

// function Vechile(brand, model, color) {
//   this.brand = brand;
//   this.color = color;
// }
// const car1 = new Vechile('tyota', 'black');
// const car2 = new Vechile('bulero', 'white');
// console.log(car1);
// console.log(car2);


// const add = () => {
//   const s = 10;
//   return 10 + s;
// }
// // const a = addSum();
// // console.log(a);

// // const addSum = () => 10 + 10;// in single line there is no finction

// const addTwoNumber = (a, b) => {
//   if (typeof a === 'number' && typeof b === 'number') {
//     return a + b;
//   } else {
//     return 'please provide valid number';
//   }
// }
// const some = addTwoNumber(1200, 1400);
// console.log(some);



// const sumofArray(Numbers){

// }



function sumofArray(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumofArray([2, 5, 10, 11]));

