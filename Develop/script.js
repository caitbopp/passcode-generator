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
  var passwordLength = prompt("Please create a password between 8 and 128 characters");
  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var special = confirm("Do you want special characters in your password?");
}