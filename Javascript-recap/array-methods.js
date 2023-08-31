const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
  { name: "Charlie", grade: 92 },
];

 
students.push({ name: "aziz", grade: 88 });
students.push({ name: "Omar", grade: 95 });
students.push({ name: "daoud", grade: 78 });

 
students.pop();

 
students.unshift({ name: "Grace", grade: 87 });
students.unshift({ name: "Henry", grade: 91 });

 
students.shift();

 
const highAchievers = students.filter(student => student.grade > 90);

 
const sortedHighAchievers = highAchievers.sort((a, b) => b.grade - a.grade);

 
const squaredGrades = students.map(student => ({ name: student.name, grade: student.grade ** 2 }));

 
const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);

 
const allPassing = students.every(student => student.grade > 60);

 
const anyFailing = students.some(student => student.grade < 60);

 
const firstAverageStudent = students.find(student => student.grade === 85);

console.log(students);
console.log(highAchievers);
console.log(sortedHighAchievers);
console.log(squaredGrades);
console.log(totalGrade);
console.log(allPassing);
console.log(anyFailing);
console.log(firstAverageStudent);
