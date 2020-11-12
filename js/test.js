let cost;
const subscription = "premium";

if (subscription === "lask") {
  cost = 0;
} else if (subscription === "premium") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log("Invalid subscription type");
}

console.log(cost); // 500
