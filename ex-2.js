//Exercise 2
let lightBulbStatus = "On";

let checkLightBulbStatus = (status) => {
  if (status === "On") {
    return "light bulb is On.";
  } else if (status === "Broken") {
    return "light bulb is Broken.";
  } else {
    return "Please choose the correct input (On/Off/Broken)";
  }
};

let check = checkLightBulbStatus(lightBulbStatus);
console.log(check);
