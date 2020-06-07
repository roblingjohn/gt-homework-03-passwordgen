// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    // start function 
    for (i = 0; i < 2; i++) {   
      var passwordLength = prompt("How many characters should your password be?")
          
          if (passwordLength < 8 || passwordLength > 128) {
              var passwordLength = alert("Password must be between 8 and 128 characters.")
              console.log(i)
              i = i-1
              console.log(i)
          } 

          else {
          console.log(i)
          
          console.log("Length: " + passwordLength)
          
          
          // need to get back to this point if all are false
          var passwordSpecial = confirm("Use special characters?");
          console.log("Special Characters: " + passwordSpecial);
          var passwordNumbers = confirm("Use numbers?");
          console.log("Numbers: " + passwordNumbers);
          var passwordUpper = confirm("Use uppercase characters?");
          console.log("Uppercase: " + passwordUpper);
          var passwordLower = confirm("Use lowercase characters?");
          console.log("Lowercase: " + passwordLower);
          i = i+1;
          console.log(i);
          }

          if (i > 0){
              if (passwordSpecial === false && 
                  passwordNumbers === false &&
                  passwordUpper === false &&
                  passwordLower === false) {
                  alert("You must select at least one kind of characters.")
                  i = i-1
                  }
              else {
                  console.log("All good bro.")
                  var specialCharacters = ["!", "#", "$", "%", "&", "*", "+", "-", "/", ":", ";", "<", ">", "=", "?", "@", "^", "_", "~"]
                  var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
                  var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
                  var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
                  
              }
              
          }

      }
      // end function 
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
