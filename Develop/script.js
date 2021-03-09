// Assignment Code
var generateButton = document.querySelector("#generate");

// Characters and special characters for password
var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!@#$%^&*()";


// Write password fuction
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
  var lowerCases = confirm("Do you want lowercase letters in your password?");
  var upperCases = confirm("Do you want uppercase letters in your password?");
  var special = confirm("Do you want special characters in your password?");


var minimumCount = 0;

var minimumNumbers = "";
var minimumLowerCases = "";
var minumumUpperCases = "";
var minimumSpecialCharacters = "";

// Generate password functions
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
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }
  
};

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

  
  var randomPasswordGenerated = "";

  // Getting random characters for password
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  // Adding characters to password 
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


 return randomPasswordGenerated;
}