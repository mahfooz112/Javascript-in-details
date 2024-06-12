//spread operator = is denote by ... dots
//allows an itreable such as an array or string to be expanded into 
// seperate elemnet


let numbers = [1,2,3,4,5,6]
let Maximum = Math.max(...numbers);
let Minimum = Math.min(...numbers);
console.log(numbers);

let fruits = ["orange", "apple", "grapes"]
let veg = ["carrot", "potatoes", "celery"]
let foods = [...fruits, ...veg];
console.log(foods);



