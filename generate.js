// Start working code
// User input variables: 
var passwordLength;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Start Password variable values: 
// Special symbols/characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Number characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Lowercase letters 
alphaL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase letters
alphaL = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var choices;

var button = document.querySelector('#generate');
var passwordText = document.querySelector('#password');

button.addEventListener('click', function() {
  password = generatePassword();
  //passwordText = document.querySelector('#password');
});

// Breate function to generate password
function generatePassword() {
  // Asks for user input
  passwordLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // First if statement for user validation 
  if (!passwordLength) {
      alert("This needs a value");
      passwordLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  } if (passwordLength < 8 || passwordLength > 128) {
      // Validates user input
      // Start user input prompts
      passwordLength = parseInt(prompt("You must choose between 8 and 128"));

  } if(passwordLength) {
      // Continues once user input is validated
      confirmNumber = confirm("Will this contain numbers?");
      confirmCharacter = confirm("Will this contain special characters?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

}