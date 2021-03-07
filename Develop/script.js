// Assignment Code
var generateBtn = document.querySelector("#generate");

// Special characters for password
const specialCharacters = "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Adding prompts once generate password button is clicked
function generatePassword() {
  var passwordLength = prompt("Please enter a password character length between 8 and 128 characters");
  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var special = confirm("Do you want special characters in your password?");
}

var minimumCount = 0;

var minimumNumbers = "";
var minimumLowerCases = "";
var minumumUpperCases = "";
var minimumSpecialCharacters = "";

// Generate functions
var functionArray = {

  getNumbers: function() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  },

  getLowerCases: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  },

  getUpperCases: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  },

  getSpecialCharacters: function() {
    return specialCharacters(Math.floor(Math.random() * specialCharacters.length));
  }
  
};

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


 // return randomPasswordGenerated;

