// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword());

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
  
//   passwordText.value = password;}

  function generatePassword() {
    // start function 
    // ask character length 
    var goodLength = false
    var charGood = false
    for (i = 0; i < 2; i++) {   
        if (goodLength === false) {
        var passwordLength = prompt("How many characters should your password be?")
            // if the length is invalid:
            if (passwordLength < 8 || passwordLength > 128) {
                var passwordLength = alert("Password must be between 8 and 128 characters.")
                console.log(i)
                i = i-1
                console.log(i)
            } 
            // if the length is good: 
            else {
                goodLength = true
            }
        }
    }

    // ask what types of characters should be used 
    for (j = 0; j < 2; j++) {
        if (charGood === false) {
            var passwordSpecial = confirm("Use special characters?");
            console.log("Special Characters: " + passwordSpecial);
            var passwordNumbers = confirm("Use numbers?");
            console.log("Numbers: " + passwordNumbers);
            var passwordUpper = confirm("Use uppercase characters?");
            console.log("Uppercase: " + passwordUpper);
            var passwordLower = confirm("Use lowercase characters?");
            console.log("Lowercase: " + passwordLower);
            }
            
    // if no character type is selected 
        if (passwordSpecial === false && 
            passwordNumbers === false &&
            passwordUpper === false &&
            passwordLower === false) {
            alert("You must select at least one kind of characters.")
            j = j-1
            }

        else {
        charGood === true
        j = j + 1
        }   
        }   

            // arrays containing possible characters 
                var specialCharacters = ["!", "#", "$", "%", "&", "*", "+", "-", "/", ":", ";", "<", ">", "=", "?", "@", "^", "_", "~"];
                var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
                var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
                var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

                var passwordCharacters = [];

            // if a type of character is selected, this puts it into the character selection array 
                if (passwordSpecial) {
                        passwordCharacters.push(specialCharacters);
                    }
                if (passwordNumbers) {
                        passwordCharacters.push(numberCharacters);
                    }
                if (passwordUpper) {
                        passwordCharacters.push(upperCharacters);
                    }
                if (passwordLower) {
                        passwordCharacters.push(lowerCharacters);
                    }
                

                var passwordString = ""

            // this randomizes the password 
                for (j = 0; j < passwordLength; j++) {

                    var arraySelectOuter = Math.floor(Math.random() * passwordCharacters.length);
                    var arraySelectInner = Math.floor(Math.random() * (passwordCharacters[arraySelectOuter].length));
                    var newEntry = passwordCharacters[arraySelectOuter][arraySelectInner]
                        passwordString = passwordString + newEntry;

                    };
                    console.log(passwordString);

                    var passwordText = document.getElementById("password");
                    passwordText.value = passwordString


                    // document.getElementById("password").innerHTML = passwordString

      // end function 
}




