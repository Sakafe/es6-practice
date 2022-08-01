// function doubleIt(num1){
//     return num1*2 ;
// }
const doubleIt = function muFun(num1){
    return num1*2;
}
const result = doubleIt(15);
console.log(result);

// in es6 for single perameter
const doubleIt2 = num => num*2;
const total =doubleIt2(10);
console.log(total);

// in es6 for more perameter
const add = (x,y) => x+y;
const give5 = () => 5;
const total2 = add(5,7);
const total3 = give5();
console.log(total3);
console.log(total2);
// for mor calculation
const doMath = (x,y) =>{
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}
const result4 = doMath(8,6);
console.log(result4);