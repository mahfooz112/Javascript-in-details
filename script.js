//console.log(`Hello`);
//console.log('I Love Pizza!');
//window.alert(`This is an Alert`);
//window.alert(`This is an  not an Alert`);

//document.getElementById("myh1").textContent = Hello
//document.getElementById("paragraphy").textContent = helloworld;


/*
//variable = A container that stores a value

let x;
x=100;
console.log(x);

//Number

let age1 = 25;
let price = 10.99;
let gpa = 2.1;
console.log(typeof age);
console.log(typeof price);
console.log(typeof gpa);

console.log(`You are ${age} year old`);
console.log(`The ${price} is the price of the content`);
console.log(`I got ${gpa} in the previous year`);

//String


let firstName = "Bro";
let favoriteFood = "Pizza"
console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`My favourite food is ${favoriteFood}`);



//Boolean 


let online = true;
let forSale = false;
console.log(`Bro is online:${online}`);
console.log(`Is this car for sale: ${forSale}`);
*/
/*
let fullName = "Bro Code";
let age = 25;
let student = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your are  ${age} years of old`;
document.getElementById("p3").textContent = 'The ${student} is failed in diploma';

//arithmetic operator 

let student1 = 30;
student1 = student1 + 1;
student1 = student1 - 1;
student1 = student1 * 2;
student1 = student1 / 2;
student1 = student1 ** 2;
student1 +=1;
student1 -=1;
student1 *=2;
student1 /=2;
student **=2;
student1++;
student1--;
console.log(student1);

let result = 1 + 2 + 3 + 16;
console.log(result);
*/

//How to accept user input
// professional way = html textbox


//let userName;
//document.getElementById("mysubmit").onclick = function(){
//  userName= document.getElementById("mytext").textContent;
//  document.getElementById("myh1").textContent = `Hello ${userName};
//}

//(5)  type conversion= change the datatype of a value top another value
 //      (strings, number, boolean)

//let age = window.prompt("How old arew you?");
//age = number(age);
//age +=1;
//console.log(age);


//const = A variable that can't be change

//Counter program
/*
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countlabel");
let count = 0;

increaseBtn.onclick = function(){
  count++;
  countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
  count--;
  countLabel.textContent = count;
}

resetBtn.onclick = function(){
  count = 0;
  countLabel.textContent = count;
}



//Maths built in object that provides a 
// collection of properties and methods

let x = 3.99;
let y = 2;
let z;
z= Math.round(x); //3
z=Math.floor(x);  //3
z=Math.ceil(x);  //4
z=Math.trunc(x); //3


let randonNumber = Math.floor(Math.random()*100)+1;
console.log(randonNumber);



//Ifelse statement

let age = 25;
let hasLicence = false;
if(age>=16){
  console.log("You are old enough to drive");

  if(hasLicence){
    console.log('You have your licence');
  }
}
else{
  console.log("you must be 16+ to have a licence");
}

let age1 = 18;
if (age1>=18) {
  console.log("You can Drink");
}else if(age<0){
  console.log("Not Born");
}else if(age>=100){
  console.log("you are too old")
}
 else {
  console.log("Cannot Drink");
}

*/

/*
  const myCheckBox = document.getElementById("myCheckBox");

 const VisaBtn = document.getElementById("Visabtn");

 const MasterCardBtn = document.getElementById("masterCardBtn");

 const payPal = document.getElementById("payPal"); 

 const mySubmit = document.getElementById("mysubmit");

 const subResult = document.getElementById("subResult");
 
 const paymentResult = document.getElementById("paymentResult");

 mySubmit.onclick = function(){
  if(myCheckBox.checked){
    subResult.textContent = `You are subscribed!`;
  }
  else{
    subResult.textContent = `You are not Sunscribed`;
  }
  if(VisaBtn.checked){
    paymentResult.textContent = `You are paying with Visa`;
  }
  else if(MasterCardBtn.checked){
    paymentResult.textContent = `you are paying with MasterCard`;
 }
 else if(payPal.checked){
  paymentResult.textContent = `you are paying with Paypal`;
 }
 else{
  paymentResult.textContent = `You must select a payment type`;
 }
}*/





































































































