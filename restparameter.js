//rest parameter = allow a function work with variable
// number of argument by bundling them into a array

//spread = expand an array into seperate elemnt
//rest = bundles seperate elment into array

function openFridge(...foods){
  console.log(...foods)
}
const food1 = "pixxa";
const food2 = "humburger";
const food3 = "hotdog";
const food4 = "sushi";

openFridge(food1,food2,food3,food4);


