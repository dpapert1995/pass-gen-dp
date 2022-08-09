// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Lowercase letters criteria is set to true by default, so this is ran no matter what.//
function addLowercase() {
  const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return lowercase;
}

// Uppercase letter criteria calls upon lowercase letter function.//
function addUppercase() {
  const upperCase = addLowercase().toString().toUpperCase().split(",");
  return upperCase;
}

// Function to add numbers if criteria is selected. //
function addNumbers() {
  const numbers = [0,1,2,3,4,5,6,7,8,9];
  return numbers;
}

// Function to add special characters if criteria is selected. //
function addSpecialChars() {
  const specialChar = ['!', '"', '#', "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "\\", "]", "^", "_", "`","{", "|", "}", "~"];
  return specialChar;
}