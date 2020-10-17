// Assignment Code
var generateBtn = document.querySelector("#generate");
nums = "1234567890"
lowerletters = "abcdfghijklmnñopqrstuvwxyz"
special = "!#$%&/()=?¡+}{-.:;"


function generatePassword(){
  sort = ""

  var long = prompt("how long your password is going to be? (min. 8 max 128)")
  if(long < 8){
    alert("The password should be longer that 8 characters")
    return
  }

  var lower = confirm("Do you want that your password contain lower characters?")
  if (lower == true){
    sort = sort + lowerletters
  }

  var number = confirm("Do you want that your password contain numbers?")
  if (number== true){
    sort = sort + nums
  }
  var specialCharacters = confirm("Do you want that your password contain special characters?")
  if (specialCharacters== true){
    sort = sort + special
  }

  if (lower||number||specialCharacters){

    genPass = ""
    for (i = 0; i < long; i++){
      var sortinghat = sort[Math.floor(Math.random() * sort.length)]
      genPass = genPass + sortinghat
    }
    return genPass
  }


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
