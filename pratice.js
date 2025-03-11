const student = [
  {
    id: 1, name: 'Jeevan', gender: 'male'
  },
  {
    id: 2, name: 'sita', gender: 'female'
  },
  {
    id: 3, name: 'john', gender: 'male'
  },
  {
    id: 4, name: 'priya', gender: 'female'
  }
];
function filtermalestudents(student) {
  return student.filter(student => student.gender === 'male');
}
console.log(filtermalestudents(student));

function findstudentByname(student, name) {
  return student.find(student => student.name === name) || 'student not found';
}
console.log(findstudentByname(student, 'priya'));
console.log(findstudentByname(student, 'neha'));


function countgender(student) {
  return student.reduce((count, student) => {
    count[student.gender] = (count[student.gender] || 0) + 1;
    return count;
  }, {});
}
console.log(countgender(student));




const students = [
  { id: 1, name: 'ram', gender: 'male', grade: 9 },
  { id: 2, name: 'shyam', gender: 'male', grade: 10 },
  { id: 3, name: 'hari', gender: 'male', grade: 11 },
  { id: 4, name: 'sita', gender: 'female', grade: 12 },
  { id: 5, name: 'gita', gender: 'female', grade: 8 },
  { id: 6, name: 'rita', gender: 'female', grade: 7, },
];
//find top grade.

const findtopgrader = (students) => students.reduce((top, student) =>
  student.grade > top.grade ? student : top, students[0]);
console.log(findtopgrader(students));


//group students by gender.
const groupbygender = (students) => students.reduce((groups, student) => {
  (groups[student.gender] = groups[student.gender] || []).push(student);
  return groups;
}, {});
console.log(groupbygender(students));

//claculate average grade.
const calculateaveragegrade = (students) => {
  const total = ((sum, student) => sum + student.grade, 0);
  return total / students.length;
};
console.log(calculateaveragegrade(students));


// add new student
const addstudent = (students, newstudent) => {
  students.push(newstudent);
  return students;
};
console.log(addstudent(students, { id: 7, name: 'asmita', gender: 'female', grade: 15 }));

//remove student by id
const removestudentbyid = (students, id) => students.filter(student => student.id !== id);
console.log(removestudentbyid(students, 5));

//update stdent grade by name
const updatestudentgrade = (students, name, newgrade) => {
  return students.map(student => student.name === name ? { ...student, grade: newgrade } : student);
};
console.log(updatestudentgrade(students, 'asmita', 20));


//check if all students passed

const allpassed = (students, passinggrade = 10) => students.every(student => student.grade >= passinggrade);
console.log(allpassed(students));

//find student in specific grade
const findstudentsbygrade = (students, grade) => students.filter(student => student.grade === grade);
console.log(findstudentsbygrade(students, 12));