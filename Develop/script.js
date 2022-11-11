// Assignment code here

//set options for password
const passwordOptions = {
  num: "1234567890",
  specialChar: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};

//pick length of password
function generatePassword() {
  let passwordText = ""
  let numberOfCharacters = prompt("How many characters do you want in your password? (more than 8 and less that 128)");
  while (numberOfCharacters < 8 || numberOfCharacters > 128) {
    numberOfCharacters = prompt("Entry must be more than 8 and less than 128.");
  }

  
//define criteria as false for default 
  let wantLowerCase = false;
  let wantUpperCase = false;
  let wantNumbers = false;
  let wantSpecialChar = false;

//if password has no criteria, it has no length, and repeats confirmations until it has on criteria (and therefore length)
    while (!passwordText.length) {


// when numberOfCharacters is good

  //confirm lowercase
  wantLowerCase = confirm("Would you like to include lowercase letters?");
  if (wantLowerCase == true) {
    passwordText = passwordText + passwordOptions.lowerCase;
  } else {
    passwordText = passwordText;
  }

  // confirm uppercase

  wantUpperCase = confirm("Would you like to include uppercase letters?");
  if (wantUpperCase == true) {
    passwordText = passwordText + passwordOptions.upperCase;
  } else {
    passwordText = passwordText;
  }
  
  // confirm numbers
  wantNumbers = confirm("Would you like to include numbers?");
  if (wantNumbers == true) {
    passwordText = passwordText + passwordOptions.num;
  } else {
    passwordText = passwordText;
  }

 // confirm special characters
 wantSpecialChar = confirm("Would you like to include special characters?");
 if (wantSpecialChar == true) {
   passwordText = passwordText + passwordOptions.specialChar;
 } else {
   passwordText = passwordText;
 }
 
} 

//define new password as nothing
  console.log(numberOfCharacters);
  let newPassword = "";

  // define index starts at 1, i grows one by one, stop at numberOfCharacters
  for (let i = 1; i <= numberOfCharacters; i++) {

  
    const numberOfTotalPossibleCharacters = passwordText.length; //total length of all characters in selected criteria
    const randomNumberZeroToOne = Math.random(); //define math.random 
    const randomeNumberZeroToTotal = Math.floor(numberOfTotalPossibleCharacters * randomNumberZeroToOne); // math.random * total length of criteria (defines top of length as "1"), bring back to floor
    const randoSingleCharacter = passwordText.charAt(randomeNumberZeroToTotal); //random character from that eqation
    console.log('passwordText.charAt(randomeNumberZeroToTotal',passwordText.charAt(randomeNumberZeroToTotal));

    newPassword = newPassword + randoSingleCharacter; // loops it and adds on until we have numberOfCharacter amount 


    console.log("The value of i is ", i)
    console.log("The value of passwordText is ", passwordText)
    console.log("The newPassword is ", newPassword);
  }

  return newPassword;
}

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

