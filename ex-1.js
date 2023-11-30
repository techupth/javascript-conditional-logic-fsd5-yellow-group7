//Exercise 1
let lightBulbStatus = "On";

let checkLightBulbStatus = (status) => {
  if (status === "On") {
    return "light bulb is On.";
  } else {
    return "Light bulb is Off.";
  }
};
let check = checkLightBulbStatus(lightBulbStatus);
console.log(check);
