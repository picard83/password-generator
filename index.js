const btn = document.querySelector(".btn");
const password = document.querySelector(".password");
const container = document.querySelector(".container");

btn.addEventListener("click", function () {
  collection();
});

function collection() {
  let name = prompt("whats your name?");
  let age = prompt("how old are you?");
  let location = prompt("whats your favorite vacation spot (one word) ?");

  // let length = prompt("how long do you want your password? max 8 ");
  let collection = [name + age + location];
  // console.log(collection);
  password.append(collection);
}
