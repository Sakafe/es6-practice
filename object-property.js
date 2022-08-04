const students = [
    {id:21, Name:'Akash'},
    {id:31, Name:'Azan'},
    {id:41, Name:'Aman'},
    {id:51, Name:'Asif'}
];
// const output = [];
// for (let i = 0 ; i<students.length ; i++){
//     const element = students[i];
//     const result = element.Name;
//     output.push(result);

// }
// console.log(output);

// or
const names = students.map(s => s.Name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const bigger2 = students.find(s => s.id > 40);
console.log(bigger2)
console.log(bigger);
console.log(ids,names);