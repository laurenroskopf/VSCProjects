//console.log(firebase);

//for each loop
let p1 = {
  name: "Lauren",
  age: 24,
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

//to store documents = add() and set()
//add() - auto doc ID
//set() - specify doc ID

//db = firebase.firestore - set
//db.collection("temp").add(p1);

//overwrites every time saved - add
//db.collection("temp").doc("1234").set(p1);

arr.forEach((e) => {
  db.collection("temp1").add(e);
});
