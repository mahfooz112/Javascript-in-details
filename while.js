//While loop repeat some code while some condition is true

/*let userName = "";
while (userName === "") {
  userName = window.prompt(`Enter your name`);
}
console.log(`Hello ${userName}`);
*/
  // while loop

letloggedIn = false
let userName;
let password;

while (!loggedIn) {
  userName = window.prompt(`Enter your userName`);
  userName = window.prompt(`Enter your password`);


 if(userName === "myuserName" && password === "mypassword"){
  loggedIn = true;
  console.log("You are loggedin!");
 }
 else{
  console.log("Invalid please try again")
 }

}
