// const username = prompt("please enter your username:");
// const password = prompt("please enter your password:");

// if (username === "admin" && password === "admin") {
//   console.log("welcome back 👋");
// } else {
//   console.error("username or password is wrong!");
// }

// ---------- separator ---------- //

// you are going to a zoo

// if your age is 0-5 it's free
// if your age is 5-10 it's £10
// if your age is 10-65 it's £20
// if your age is 65+ it's free AGAIN

// const userAge = prompt("please enter your age");

// if ((userAge > 0 && userAge < 5) || (userAge >= 65 && userAge < 130)) {
//   console.log("your ticket is free");
// } else if (userAge >= 5 && userAge < 10) {
//   console.log("please £10");
// } else if (userAge >= 10 && userAge < 65) {
//   console.log("please £20");
// } else {
//   console.error("invalid number");
// }

// ---------- separator ---------- //

// const value = "ali";
// if (value) {
//   console.log(`${value} is true`);
// } else {
//   console.log(`${value} is false`);
// }

// ---------- separator ---------- //

const password = "123456";

function test() {
  if (password.length >= 6) {
    if (!password.indexOf(" ")) {
      console.log("congratulation, login was successfully");
      return;
    }
    console.log("your password is wrong!");
  }
}
test();
