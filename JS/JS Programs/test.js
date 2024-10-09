/* function arrayInput(arr) {
  let n = prompt("Enter the no. of values for array -");
  for (let i = 0; i < n; i++) {
    arr[i] = prompt();
  }
  return arr;
}
let arr = [];
arr = arrayInput(arr);

console.log(arr);
 */

/* //@ Iterating over an object using for-in
const languages = {
  c: "C",
  cpp: `C++`,
  js: `Javascript`,
  java: `Java`,
};

for (let key in languages) {
  console.log(`${key} file extension is for ${languages[key]}`);
}
 */

//@ DOM

/* let div = document.querySelector("body");
let i = `dark`;
if (i === `dark`) {
  div.style.backgroundColor = "#201e1e";
  div.style.color = "white";
}
div.style.fontSize = "1rem";
div.style.textAlign = "center";

let submit = document.createElement("button");

submit.setAttribute("type", "submit");
submit.innerText = "CLick ME!!";
submit.style.backgroundColor = "red";
submit.style.color = "white";

let outerdiv = document.querySelector(".text");

const body = document.querySelector("body");
body.prepend(submit);

document.querySelector("#heading2").remove();

document.querySelector(".text").style.backgroundColor = "#201e1e";

let para = document.createElement("p");

para.innerHTML = "<em>I live in XYZ.</em>";
body.append(para);

para.setAttribute("class", "p1");
para.classList.add("p2");
// para.classList.remove("p2");

console.dir(para.classList);

// para.innerText = "ABCD";

const textp = document.createTextNode(`EFGH`);

para.append(textp); */

//@ Events

/* let body = document.querySelector("body");

let btn = document.createElement("button");

btn.innerHTML = "Mode";

body.append(btn);

let mode = "light";
let darkm = () => {
  if (mode === "light") {
    mode = "dark";
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    mode = "light";
    body.classList.remove("dark");
    body.classList.add("light");
  }
};

const dark = btn.addEventListener("mouseover", darkm);
const light = btn.addEventListener("mouseout", darkm); */

//@ Classes and Objects

//$ Prototype
/* const emp = {
    calTax() {
        console.log(`Tax`);
    },
};

const Ram = {
    salary: 200000,
};

Ram.__proto__ = emp;

Ram.calTax(); */

//$ Class

/* class Car {
    constructor(brand, mileage) {
        console.log(
            `Constructor is called by new keyword as soon as the object is created and it initializes the object.`
        );
        this.brand = brand; //& Can set properties while initializing the objects with the help of constructors
        this.mileage = mileage;
    }

    start() {
        console.log(`start`);
    }
    stop() {
        console.log(`stop`);
    }

    setBrandName(brand) {
        this.brand = brand; //& this.brand is a property defined for all objects that will be created through this class and brand is the parameter which the function will accept
    } 
}

//* Creating new object of class Car with new Keyword
let fortuner = new Car(`Toyota`, 20);
//* Setting Property for Fortuner Car object
// fortuner.setBrandName(`Toyota`);
let Camero = new Car(`Chevorlet`, 22);
// Camero.setBrandName(`Chevorlet`); */

//$Inheritance

/*//& Parent Class ( Superset )
/& class Person {
    eat() {
        console.log(`eating`);
    }
    sleep() {
        console.log(`sleeping`);
    }
}

//& Child Class of Person
class Engineer extends Person {
    work() {
        console.log(`working`);
    }
}
//& Child Class of Person
class Doctor extends Person {
    operate() {
        console.log(`operating`);
    }
}

let doctor = new Engineer();

//& Now eat and sleep methods will be accesible to objects of Engineer and Doctor as they're the child class of Person

//& Method Overriding - If there are same methods in Parent and Child classes, child class method is called.
 */

//$ Super Keyword

class Person {
    constructor() {}
    eat() {
        console.log(`eating`);
    }
    sleep() {
        console.log(`sleeping`);
    }
}

//& Child Class of Person
class Engineer extends Person {
    work() {
        console.log(`working`);
    }
}

//& Child Class of Person
class Doctor extends Person {
    operate() {
        console.log(`operating`);
    }
}

let doctor = new Engineer();
