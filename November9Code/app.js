// function

function del_doc(id) {
  db.collection("people")
    .doc(id)
    .delete()
    .then(() => alert("user deleted"));
}

function update_doc(ele, id) {
  // console.log(ele);
  // change every input element that is hidden to become a text input element
  // access the parent of the button and look inside of the parent

  let inputs = ele.parentNode.querySelectorAll("input");

  // change the type from hidden to text
  // inputs.forEach((i) => {
  //   i.type = "text";
  //   db.collection("people").doc(id).update({
  //     name: i.value,
  //   });
  // });

  inputs[0].type = "text";
  inputs[1].type = "text";

  db.collection("people").doc(id).update({
    name: inputs[0].value,
    color: inputs[1].value,
  });
}

// console.log(firebase);

// attach a click event listener to the button

let btn = document.querySelector("#submit");

btn.addEventListener("click", () => {
  //   alert("hello");

  let person = {
    name: document.querySelector("#name").value,
    age: parseInt(document.querySelector("#age").value),
    color: document.querySelector("#favcolor").value,
  };

  console.log(person);

  //   submit the object to firestore

  db.collection("people")
    .add(person)
    .then(() => alert("new person added!"));

  // reset the form

  document.querySelector("#name").value = "";
  document.querySelector("#age").value = "";

  //   make a call to the Db to get the latest data

  //   getData();
});

// display a list of all people
// get()

db.collection("people")
  .get()
  .then((data) => {
    // console.log(data.docs[0].data().name);

    let docs = data.docs;
    // loop through the docs array
    let html = ``;
    docs.forEach((doc) => {
      //   console.log(doc.data().name);

      html += `<p id="${doc.id}" class="box" >${doc.data().name}
      
     
      
      <input type="hidden" value= "${doc.data().name}" />

      ${doc.data().color}

      <input type="hidden" value= "${doc.data().color}" />

      <button class="is-pulled-right" onclick="update_doc(this, '${
        doc.id
      }')">update</button>
      
      <button onclick="del_doc('${
        doc.id
      }')" class="is-pulled-right">X</button> </p>`;
    });

    // console.log(html);

    document.querySelector("#all_people").innerHTML += html;
  });

//   update tim's age

// db.collection("people").doc("wAFp5SvigD9mmNEXlyS5").update({
//   name: "kelly j",
//   color: "white",
//   age: 55,
// });

// delete the user tim

// db.collection("people").doc("M8bGqfszewlni3vHYpWT").delete();

//query

//show all people who have jackie as a friend
//array-contains-any to pass more than one element (array)
// db.collection("people")
//   .where("age", "<", 20)
//   .where("color", "==", "red")
//   .where("friends", "array-contains", "Jackie")
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

//show all people who have jackie or tom as friend
// db.collection("people")
//   .where("friends", "array-contains-any", ["Jackie","Tom"])
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

//show all people with red or pink as their favorite color
db.collection("people")
  .where("color", "in", ["red", "pink"])
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
    });
  });
