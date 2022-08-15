// *** BEGIN STARTER CODE (with modifications). ***
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // Added criteria variable and get criteria variable so write password knows to use criteria in the generatePassword function. 
  var criteria = getCriteria();
  var password = generatePassword(criteria);
  var passwordText = document.querySelector("#password");

  // Specified which value this part of the starter code takes from.
  passwordText.value = password;

}
// *** END STARTER CODE (with modifications). ***

// *** BEGIN USER PROMPTING CODE ***
function getCriteria()
{
  const userCriteria = {
    // Default length is set to 8. 
    length: 0,
    // Default criteria are all set to false.
    includeLowercase: false,
    includeUppercase: false,
    includeNumbers: false,
    includeSpecialChar: false,
  }

  userCriteria.length = askPassLength();

  do {
    userCriteria.includeLowercase = confirm("Press okay to include lowercase letters.");
    userCriteria.includeUppercase = confirm("Press okay to include uppercase letters.");
    userCriteria.includeNumbers = confirm("Press okay to include numbers.");
    userCriteria.includeSpecialChar = confirm("Press okay to include special characters.");
    
    // Check if a criteria is selected. If none is 
  } while(!anyCriteria(userCriteria));

  return userCriteria;
}

// Function to determine wether or not character lists get pushed to the final list for password generation.
function getRequestedCharacters(userSelection) {
  let totalChars = [];
  
  if (userSelection.includeLowercase) {
    totalChars.push(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']);
  } 
  if (userSelection.includeUppercase) {
    totalChars.push(['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']);
  } 
  if (userSelection.includeNumbers) {
    totalChars.push([0,1,2,3,4,5,6,7,8,9]);
  } 
  if (userSelection.includeSpecialChar) {
    totalChars.push(['!', '"', '#', "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "\\", "]", "^", "_", "`","{", "|", "}", "~"]);
  }
  
  return totalChars;
  
}

// Function to prompt for password length. 
function askPassLength() {
  let length = prompt("Pick a password length 8 to 128.)");

// Prompts user for new length until a valid length is achieved, in which the while loop is broken.
  while (!passValid(length)) {
    length = prompt(`Sorry, ${length} is an invalid length.` + '\n The length must be: \n - An integer \n - At minimum, 8 \n - At maximum, 128 \nHow long would you like the password to be?');
  }
  return length;
}
// *** END USER PROMPTING CODE ***

// *** BEGIN CRITERIA CHECK FUNCTIONS ***
// Function to check for criteria: anyCriteria. 
function anyCriteria(userCriteria) {
  const userCriteriaChars = Object.values(userCriteria);
  
  for (let i = 1; i < userCriteriaChars.length; i ++) {
    if (userCriteriaChars[i]) {
      return true;
    }
  }
  alert("No character type selected. \n Please answer 'OK' at least to one of the character types.");
  return false;
}

// Rus logic check to make sure password is a valid length.
function passValid(length) {
  // Convert prompted string to a number.
  const numLength = Number(length);
  // Password length is a number
  const isPassLengthValid = (!Number.isNaN(numLength)
    // Password length is a whole number.
    && numLength % 1 === 0
    // Password length is greater than or equal to 8.
    && numLength >= 8
    // Password length is less than or equal to 128.
    && numLength <= 128); 

  return isPassLengthValid;
}
// *** END CRITERIA CHECK FUNCTIONS ***

// *** BEGIN PASSWORD GENERATION FUNCTION ***
// Function to generate password. Allows for repeating chars in each iteration of for loop.
function generatePassword(userCriteria) {
  const totalChars = getRequestedCharacters(userCriteria);
  // Since totalChars is a 2D array of length = (number of character types selected), it is necessary to specify the row of totalChars in the for loop.   
  totalTypes = totalChars.length;

  let password = [];

  for (let i = 0; i < userCriteria.length; i ++) {
    // Row.
    const typeIndex = Math.floor(Math.random()*totalTypes);
    // Character index of the row.
    const charIndex = Math.floor(Math.random() * (totalChars[typeIndex].length));
    password.push(totalChars[typeIndex][charIndex]);
  }

  // Removes commas in password  when converting the array to a string.
  password = password.toString().replace(/,/g,"");

  return password;
}
// *** END PASSWORD GENERATION FUNCTION ***
