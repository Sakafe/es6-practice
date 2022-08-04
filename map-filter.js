// const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for(let i= 0 ; i < numbers.length ; i++){
//     const element = numbers[i];
//     const result  = element * element ;
//     output.push(result);
// }
// console.log(output);

// or.......
// const numbers = [3,4,5,6,7];
// function square (element){
//     return element * element;
// }
// numbers.map(function(element,index,array){
//     console.log(element,index,array);
// })

// const numbers = [3,4,5,6,7];
// function square (element){
//     return element * element;
// }
// const result = numbers.map(function(element,index,array){
//     return element * element;
// })
// console.log(result);

// or......
// const numbers = [9,8,7,6,5,4]
// const result = numbers.map(x => x*x);
// console.log(result);

// filter Method:
const numbers = [5,7,8,2,3];
const bigger = numbers.filter(x => x > 5);
const bigger2 = numbers.find(x =>x > 5);
console.log(bigger2);
console.log(bigger);

