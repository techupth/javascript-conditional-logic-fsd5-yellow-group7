//Exercise 4
// Switch Statement
let lightBulbStatus = "On";
let checkLightBulbStatus;
switch (lightBulbStatus) {
  case "On":
    checkLightBulbStatus = "light bulb is On.";
    break;
  case "Off":
    checkLightBulbStatus = "light bulb is Off.";
    break;
  default:
    checkLightBulbStatus = "Please choose the correct input (On/Off/Broken)";
}

console.log(checkLightBulbStatus);
