//@ Question 1

/* const person = {
  firstName: `Kaustubh`,
  lastName: `Tripathi`,
  age: 25,
  city: `Ghaziabad`,
};

console.log(person);
console.log(`\n`);

for (const key in person) {
  console.log(person[key]);
}

console.log(`\n`);
person.occupation = `Student`;
console.log(person); */

//@ Question 2

/* const person = {
  firstName: `Kaustubh`,
  lastName: `Tripathi`,
  age: 25,
  city: `Ghaziabad`,
  fullName: function fname() {
    console.log(` My full name is ${this.firstName} ${this.lastName}.`);
  },
  agein10: function () {
    return this.age + 10;
  },
};
person.fullName();
let age10 = person.agein10();
console.log(age10); */

//@ Question 3

/* const person = {
  firstName: `Kaustubh`,
  lastName: `Tripathi`,
  age: 25,
  city: `Ghaziabad`,
};

person.age = 24;
delete person.city;

console.log(person); */

//@ Question 4

/* const person = {
  firstName: `Kaustubh`,
  lastName: `Tripathi`,
  age: 25,
  city: `Ghaziabad`,
};

function printObjectKey(obj, key) {
  return obj[key];
}

let key1 = printObjectKey(person, "firstName");
console.log(key1);
console.log(person[`lastName`]);
console.log(person.city); */

//@ Question 5

/* const person = {
  firstName: `Kaustubh`,
  lastName: `Tripathi`,
  age: 25,
  city: `Ghaziabad`,
};

for (let key in person) {
  console.log(`${key} - ${person[key]}`);
} */

//@ Question 6

/* const students = [
  {
    rollNo: 1,
    firstName: `Kaustubh`,
    lastName: `Tripathi`,
    age: 25,
    city: `Ghaziabad`,
    grade: `9`,
  },
  {
    rollNo: 2,
    firstName: `Nakshatra`,
    lastName: `Gupta`,
    age: 25,
    city: `Ghaziabad`,
    grade: `9`,
  },
];

function printProperty(students) {
  for (const student of students) {
    console.log(`Name - ${student.firstName}\nGrade - ${student.grade}`);
  }
  for (let student = 0; student < students.length; student++) {
    console.log(
      `Name - ${students[student].firstName}\nGrade - ${students[student].grade}`
    );
  }
  for (let student = 0; student < students.length; student++) {
    console.log(
      `Name - ${students[student][`firstName`]}\nGrade - ${
        students[student][`grade`]
      }`
    );
  }
}

printProperty(students); */

//@ Question 7

/* const book = {
  title: `Let us C`,
  author: `S Ramanujan`,
  details: {
    publisher: `Classmate Books`,
    year: 2002,
  },
};

function displayAll(book) {
  for (const prop in book) {
    if (typeof book[prop] === `object`) {
      console.log(`${prop} : `);

      for (const details in book[prop]) {
        console.log(`${details} - ${book[prop][details]}`);
      }
    } else {
      console.log(`${prop} - ${book[prop]}`);
    }
  }
}

displayAll(book); */

//@ Question 7

/* const person = {
  firstName: `Kaustubh`,
  lastName: `Tripathi`,
  age: 25,
  city: `Ghaziabad`,
};

const { firstName: fn } = person;
const { lastName: ln } = person;
const { age: a } = person;

console.log(fn);
console.log(ln);
console.log(a); */

//@ Question 7
/* const car = {
  brand: `Tesla`,
  model: `Model 3`,
  price: 35000,
};

const { brand, price } = car;

console.log(brand);
console.log(price); */

//@ Question 8
