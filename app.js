console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let mynumber = 91
let guessnumber = prompt("guess a number")




if (guessnumber < mynumber) {
 console.log("too low")

}

else if (guessnumber > mynumber){
 console.log("too high")
}

else if (guessnumber == mynumber){
  console.log("congratulations!")
}

else {
  console.log("input a number")
  window.alert("input a number")
}


// exercise 2

let birthMonth = window.prompt("what is your birth month?")

switch (birthMonth) {
  case "december":
    console.log("you were born during the winter")
    break;
  case "march":
  console.log("you were born in the spring")
    break;
    case "june":
  console.log("you were born in summer")
  break;
  case "november":
  console.log("you were born in autumn");

  default:
    console.log("you were born during different months")
    break;
}
// exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);

