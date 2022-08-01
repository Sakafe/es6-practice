const age = [12,13,14,15];
const age2 = [16,17,18];
const age3 = [19,20,21];
const allAges = age.concat(age2).concat([5]).concat(age3);
const allAges2 = [...age, ...age2, 6, ...age3];
console.log(allAges2);
// or
const business = 750;
const minister = 850;
const sochib = 950;
// const maximum = Math.max(business,minister,sochib);
const takaPoisa = [750,850,950];
const maximum = Math.max(...takaPoisa);
console.log(maximum);