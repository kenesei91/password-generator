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
alphaU = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var choices;

var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');

generateBtn.addEventListener('click', function() {
  password = generatePassword();
  passwordText = document.querySelector('#password');
});

// Create function to generate password
function generatePassword() {
  // Asks for user input
  passwordLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // First if statementS for user validation 
  if (!passwordLength) {
      alert("This needs a value");
      passwordLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  } if (passwordLength < 8 || passwordLength > 128) {
      // Validates user input
      // Start user input prompts
      passwordLength = parseInt(prompt("You must choose between 8 and 128"));

  } if(passwordLength) {
      // Once user input is validated
      confirmNumber = confirm("Will this contain numbers?");
      confirmCharacter = confirm("Will this contain special characters?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

    // If statements for four negative responses
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You must choose at least one criteria!");

  }
  // First if statement that uses user input prompts to determine choices
  // Else if for 4 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

      var choices = character.concat(number, alphaL, alphaU);
      console.log(choices);
  }
  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = character.concat(number, alphaU);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = character.concat(number, alphaL);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      choices = character.concat(alphaL, alphaU);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = number.concat(alphaL, alphaU);
  }
  // Else if for 2 positive options 
  else if (confirmCharacter && confirmNumber) {
      choices = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {
      choices = character.concat(alphaL);

  } else if (confirmCharacter && confirmUppercase) {
      choices = character.concat(alphaU);
  }
  else if (confirmLowercase && confirmNumber) {
      choices = alphaL.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
      choices = alphaL.concat(alphaU);

  } else if (confirmNumber && confirmUppercase) {
      choices = number.concat(alphaU);
  }
  // Else if for 1 positive option
  else if (confirmCharacter) {
      choices = character;
  }
  else if (confirmNumber) {
      choices = number; 
  }
  else if (confirmLowercase) {
      choices = alphaL;
  }
  else if (confirmUppercase) {
    choices = alphaU;
  }

  // empty array for password
  password = '';

  // using random solutions to select random variables
  for (var i = 0; i < passwordLength; i++){
    var selectChoices = choices[Math.floor(Math.random() * choices.length)];
    password += selectChoices;
    console.log(password);
    passwordText.value = password;
    

    
  }

}