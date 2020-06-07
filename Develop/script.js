// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    var passwordLength = prompt("How many characters should your password be?")
                
    if (passwordLength < 8 || passwordLength > 128) {
        var passwordLength = alert("Password must be between 8 and 128 characters.")
        console.log(i)
        i = i-1
        console.log(i)
    } 

    else {
    
    console.log("Length: " + passwordLength)
    
    
    var passwordSpecial = confirm("Use special characters?")
    console.log("Special Characters: " + passwordSpecial)
    var passwordNumbers = confirm("Use numbers?")
    console.log("Numbers: " + passwordNumbers)
    var passwordUpper = confirm("Use uppercase characters?")
    console.log("Uppercase: " + passwordUpper)
    var passwordLower = confirm("Use lowercase characters?")
    console.log("Lowercase: " + passwordLower)
    i = i+1
    }
}
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
