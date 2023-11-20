//console.log("hello");

let temp = "hello";

//restaurant object
let r1 = {
  ID: "d10",
  name: "Nonna's Kitchen",
  location_code: 13,
  city: "Edinbrugh",
  country: "UK",
  cuisine_style: ["italian", "chinese"],
  rating: 4.5,
};

//add info about restaurant owner
console.log(r1.ID);

r1.owner = {
  name: "john",
  address: "123 Main St",
  other_restaurants: ["rand res1", "rand res2"],
};

console.log(
  `${r1.owner.name} owns ${r1.owner.other_restaurants.length} other restaurants`
);

//add mexican CS to r1
r1.cuisine_style.push("Mexican");
console.log(r1.cuisine_style);

//for each loop
let p1 = {
  name: "Mike",
  age: 22,
  email: "mike@mike.com",
};

let p2 = {
  name: "jakie",
  age: 20,
  email: "jakie@jakie.com",
};

let arr = [];
arr.push(p1);
arr.push(p2);

arr.forEach((e) => {
  console.log(`${e.name} has the email ${e.email}`);
});
