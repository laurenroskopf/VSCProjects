let p1 = {
  name: "john",
  born: 1942,
  died: 2015,
  nationality: ["American"],
  occupations: ["Novelist", "Poet", "Satirist", "Essayist"],
  books: [
    {
      title: "A Smile in the Mind",
      published: 1961,
      pages: 300,
      copies_sold: 10000000,
    },
    {
      title: "The Power of Now",
      published: 1972,
      pages: 200,
      copies_sold: 9000000,
    },
    {
      title: "A Town Like Alice",
      published: 1988,
      pages: 400,
      copies_sold: 8000000,
    },
  ],
  novels_published: 20,
  books_published: 12,
  poems_published: 100,
  spouse: {
    name: "Sarah",
    born: 1940,
    occupations: ["Nurse"],
    retired: 2000,
  },
};

// number of years lived
console.log(p1.died - p1.born);

//current age of sarah
console.log(2023 - p1.spouse.born);

//total works published
console.log(p1.books_published + p1.novels_published + p1.poems_published);

//john types of writer
console.log(p1.occupations.length);

//age of sarah when retired
console.log(p1.spouse.retired - p1.spouse.born);

//total count of all top 3 book copies sold
let total_count = 0;
p1.books.forEach((book) => (total_count += book.copies_sold));

console.log(total_count);

//most recent publication year of top 3 books
// let most_recent_publication = "";
// p1.books.forEach((book) => (if(book.published>most_recent_publication){
//   most_recent_publication = book.published;
//   })
// )
// console.log(p1.books);

//update sarah location to california'
p1.spouse.location = "california";
console.log(p1.spouse.location);

//update A Smile in the Mind copies sold
if ((p1.books.title = "A Smile in the Mind")) {
  p1.books.copies_sold += 1000000;
}

console.log(p1.books[0].copies_sold);
