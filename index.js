const btn = document.querySelector(".btn");
const password = document.querySelector(".password");
const container = document.querySelector(".container");

btn.addEventListener("click", function () {
  let includeUppercase = confirm("Include uppercase letters?");
  let includeLowercase = confirm("Include lowercase letters?");
  let includeSpecialChars = confirm("Include special characters?");
  /////////////////////////
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
  ////////////////////////
  let allChars = "";
  if (includeUppercase === true) {
    allChars += uppercaseChars;
  }
  if (includeLowercase === true) {
    allChars += lowercaseChars;
  }
  if (includeSpecialChars === true) {
    allChars += specialChars;
  }
  //////////////////////
  if (allChars === "") {
    alert("Please select at least one character set.");
    return;
  }
  //////////////////////
  let passwordLength = parseInt(
    prompt("Enter password length (numeric value):")
  );

  if (isNaN(passwordLength) || passwordLength <= 0) {
    alert("Please enter a valid numeric password length.");
    return;
  }
  //////////////////////
  let newOne = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);

    newOne += allChars.charAt(randomIndex);
    // console.log(allChars.charAt(randomIndex));
  }

  password.innerText = newOne;
});

// let passwordLength = parseInt(
//   prompt("how many characters do you want in your password (8-20")
// );

///////
// function collectionOfPrompts() {
//   newPassword = " ";
//   let passwordLength = parseInt(
//     prompt("how many characters do you want in your password (8-20")
//   );
//   console.log(passwordLength);
//   // let collection = [name + age + location + specialChar + length];

//   // password.textContent = `Your New Password: ${collection}`;
// }

// function secondFunction() {
//   let name = prompt("whats your name?");
//   let age = prompt("how old are you?");
//   let location = prompt("whats your favorite vacation spot (one word) ?");
//   let specialChar = prompt(
//     " Type in a special character that you want at the end of your password    ( !@#$%^&* ) "
//   );
// }
