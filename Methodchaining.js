// Method chaining = Calling one method after another
                 // is one continious line of code

let userName = window.prompt("Enter a userName: ");

//NO METHOD CHAINING
userName = userName.trim();
userName = userName.charAt(0);
letter = letter.touppercase();

let extraChars = userName.slice(1);
extraChars = extraChars.toLowerCase();
userName = letter + extraChars;
console.log(userName); //BROCODE

//METHOD CHAINING

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLocaleLowerCase();
console.log(userName); //BROCODE

