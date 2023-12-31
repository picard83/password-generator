const btn = document.querySelector(".btn");
const password = document.querySelector(".password");
const container = document.querySelector(".container");

btn.addEventListener("click", function () {
  collectionOfPrompts();
});

function collectionOfPrompts() {
  let name = prompt("whats your name?");
  let age = prompt("how old are you?");
  let location = prompt("whats your favorite vacation spot (one word) ?");
  let collection = [name + age + location];
  // console.log(collection);
  password.append(`Your New Password: ${collection}`);
}
