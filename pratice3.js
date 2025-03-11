function helloworld() {
  console.log('Hello', 'World');
}
helloworld();

//Add two numbers

function add(a, b) {
  return a + b;
}
console.log(10 + 10);

//Multiply two numbers
function mul(p, q) {
  return p * q;
}
console.log(14 * 14);

//Check even or odd
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(10));
console.log(isEven(7));

//find maximum of two numbers
function maxofTwo(u, v) {
  return u > v ? u : v;
}
console.log(maxofTwo(10, 20));

//Convert Celsius to Fahreneit
function CelsiustoFahreneit(Celsius) {
  return (Celsius * 9 / 5) + 32;
}
console.log(CelsiustoFahreneit(0));

//Find the length of strng
function stringlength(str) {
  return str.length;
}
console.log(stringlength('Web Developer'));


//Check if string contains a specific

function containword(sentence, word) {
  return sentence.includes(word);
}
console.log(containword('hello asmita', 'world'));
console.log(containword('hello world', 'world'));

//Return first character of a string
function firstchar(str) {
  return str.charAt(0);
}
console.log(firstchar('Asmita'));

//Repeat s string
function repeatString(str, times) {
  return str.repeat(times);
}
console.log(repeatString('hello', 5))
