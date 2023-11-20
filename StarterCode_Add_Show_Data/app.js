//function

function del_doc(id) {
  db.collection("people")
    .doc(id)
    .delete()
    .then(() => alert("user deleted"));
}

function update_doc(element, id) {
  // console.log(element);
  //  change every hidden element that is hidden to become a text input element
  //access parent of button and look inside of the parent

  let inputs = element.parentNode.querySelectorAll("input");
  console.log(inputs);

  //change type from hidden to text
  inputs.forEach((i) => {
    i.type = "text";
    db.collection("people").doc(id).update({
      name: i.value,
    });
  });
}

//console.log(firebase);

//attach click event listener to the button
//look through entire document for id submit
let btn = document.querySelector("#submit");

btn.addEventListener("click", () => {
  let person = {
    name: document.querySelector("#name").value,
    age: parseInt(document.querySelector("#age").value),
    color: document.querySelector("#favcolor").value,
  };

  //   console.log(person);

  db.collection("people")
    .add(person)
    .then(() => alert("new person added!"));

  //reset form
  document.querySelector("#name").value = "";
  document.querySelector("#age").value = "";

  //make a call to get latest data - wrap below in a function
  getData();
});

//display a list of all people
db.collection("people")
  .get()
  .then((data) => {
    // console.log(data.docs[0].data().name);

    //array
    let docs = data.docs;
    let html = ``;
    //loop through docs array
    docs.forEach((doc) => {
      //   console.log(doc.data());
      html += `<p id = "${doc.id}" class = "box">${doc.data().name}

      <input type = "hidden" value= "${doc.data().name}"></input>

    
      <button class = "is-pulled-right" onclick = "update_doc(this, ${
        doc.id
      })">update</button>

      <button onclick = "del_doc('${
        doc.id
      }')" class = "is-pulled-right">X</button><p>`;
    });

    // console.log(html);

    document.querySelector("#all_people").innerHTML += html;
  });

// update Meghan age

db.collection("people").doc("p2TL0fiB4wUrdyRGYHZ7").update({
  age: 16,
  name: "Meg",
  friend: "Charlotte",
});

//delete the user Meghan
db.collection("people").doc("p2TL0fiB4wUrdyRGYHZ7").delete();

db.collection("people").doc("SQrFDq65phVNEAYGnq6D").update({
  name: "kelly",
  color: "white",
});

//update jessica friends
// db.collection("people")
//   .doc("TpShEmFpkWHmyRhhnb2D")
//   .update({
//     friends: firebase.firestore.FieldValue.arrayUnion("Mike"),
//     friends: firebase.firestore.FieldValue.arrayUnion("Julie"),
//   });

//update friends - remove jackie
//update document - add her favs
db.collection("people")
  .doc("TpShEmFpkWHmyRhhnb2D")
  .update({
    friends: firebase.firestore.FieldValue.arrayRemove("Jackie"),
    favorites: {
      color: "pink",
      city: "Madison",
    },
  });
