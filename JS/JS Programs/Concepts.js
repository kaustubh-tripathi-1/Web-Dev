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

//& Constructor control flow in parent and child class and use of super keyword
/* class Person {
    constructor(name) {
        this.species = "Homo Sapiens";
        this.name = name;
        console.log(`Entered Parent Constructor`);
    }
    eat() {
        console.log(`eating`);
    }
    sleep() {
        console.log(`sleeping`);
    }
}
//& Child Class of Person
class Engineer extends Person {
    constructor(name) {
        console.log(`Entered Child Constructor`);

        super(name); //& Passing the name argument to parent class with super()

        this.name = name;
        console.log(`Exited Child Constructor`);
    }

    work() {
        console.log(`working`);
    }
}

// let eng = new Engineer(`CS`);
let obj = new Engineer(`Kaustubh`); */

//@ Advanced JS - Async Await, Promises, Callbacks

//$ Async Programming
/* 
console.log(`1`);
console.log(`2`);

//& Asynchronous ( will be executed parallely and code after it will still execute immediately w/o waiting for this)
setTimeout(() => {
    console.log(`hello`);
}, 5000);

console.log(`3`);
console.log(`4`); */

//$ Callback Hell / Nesting

/* function getData(data, nextData) {
    setTimeout(() => {
        console.log(data);
        if (nextData) {
            nextData();
        }
    }, 2000);
}

//& Difficult to manage this code of callback nesting/hell
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
}); */

//$ To resolve this, Promise was introduced

//& Creating promises to understand the concept
/* let prom = new Promise((resolve, reject) => {
    console.log(`I'm a promise`);

    // resolve(`Promise fulfilled.`); //& Fulfilled State using resolve

    reject(`Promise unfulfilled, some error occurred.`); //& Value passed to reject will be shown as an error
}); */

//& Generally we don't create our Promises, Promises are returned to us by some API etc. Then we handle that promise -

/* function getData(data, nextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data);
            resolve(`success`); //& If not resolved, the promise state will always remain pending
            if (nextData) {
                nextData();
            }
        }, 5000);
    });
}

let val = getData(23); */

//& Actually using a promise returned by an API or something else

/*function returnPromise() {
    return new Promise((resolve, reject) => {
        console.log(`Inside Promise`);

        const state = true;

        if (state) {
            resolve(`Promise fulfilled!`);
        } else {
            reject(`Promise rejected coz of some error`);
        }
    });
} //& A function that returns a promise ( mimicing the behaviour of an API)

let promise = returnPromise(); //& Storing the returned promise in a var.

promise
    .then((result) => {
        console.log(`In then, resolved msg - ${result}`);
    }) //& What to do when promise was fulfilled
    .catch((error) => {
        console.log(`In catch, error msg - ${error}`);
    }); //& What to do when promise was rejected */

//$ Promise Chains

/* //$ Simple working Promise
//& API work kind of
function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data1`);
            resolve(`success`);
        }, 3000);
    });
}

let p1 = asyncFunc();

//& Handling the promise returned by API
console.log(`fetching data 1`);
p1.then((result) => {
    console.log(result);
}); */

//$ Promise chaining basic

/* //& API work kind of
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data1`);
            resolve(`success`);
        }, 3000);
    });
}
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data2`);
            resolve(`success`);
        }, 3000);
    });
}

let p1 = asyncFunc1();
let p2 = asyncFunc2();

//# In this case, both promises will be resolved together
//& Handling the promise1 returned by API
console.log(`fetching data 1`);
p1.then((result) => {
    console.log(result);
});
//& Handling the promise2 returned by API
console.log(`fetching data 2`);
p2.then((result) => {
    console.log(result);
}); */

//& So to avoid and implement async prog., we chain promises

//& API work kind of
/* function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data1`);
            resolve(`success`);
        }, 3000);
    });
}
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data2`);
            resolve(`success`);
        }, 3000);
    });
}

let p1 = asyncFunc1();

//% Now both promises are chained together so that 1st one is executed first and data is fetched & then after 3 more seconds, 2nd is executed and 2nd data is fetched
//% like in a login page, we want to fetch the username first and after it is found then we match the password
//& Handling the promise1 returned by API
console.log(`fetching data 1`);
p1.then((result) => {
    //& Handling the promise2 returned by API
    let p2 = asyncFunc2();
    console.log(`fetching data 2`);
    p2.then((result) => {
        console.log(result);
    });
}); */

//& Actual/Better way to chain promises

/* function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data1`);
            resolve(`success`);
        }, 3000);
    });
}
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data2`);
            resolve(`success`);
        }, 3000);
    });
}

console.log(`fetching data 1`);
asyncFunc1().then((result) => {
    console.log(`fetching data 2`);
    asyncFunc2().then((result) => {
        console.log(result);
    });
}); */

//& Previous Example with Promises
/* function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data);
            resolve(`success`);
        }, 2000);
    });
}

//& Actual Promise Chain
getData(1)
    .then((result) => {
        return getData(2);
    })
    .then((result) => {
        return getData(3);
    })
    .then((result) => {
        return getData(4);
    })
    .then((result) => {
        console.log(result);
    }); */

//$ Async - Await

//^ Better, simpler and more readable way to write Async programming code

//& Basic Example to understand
//& API that returns weather data
/* function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`weather data`);
            resolve(`successfully gave weather data`);
        }, 2000);
    });
}

async function getWeatherData() {
    await api(); //& All ahead execution will be stopped until this process is done
    await api();
}

getWeatherData(); */

//& Previous getData() example with Async - Await

/* function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data);
            resolve(`success`);
        }, 2000);
    });
}

async function getDataAgain() {
    await getData(1);
    await getData(2);
    await getData(3);
}

// getDataAgain(); //& Unnecessary Call to async Function

//% To avoid that unnecessary call, Use IIFE, but can use IIFE only once as it doesn't have any name
(async function () {
    await getData(1);
    await getData(2);
    await getData(3);
})(); */

//@ setTimeout(), clearTiemout() and setInterval(), clearInterval() function funcitoning

const displayDate = () => {
    let date = new Date();
    console.log(date.toLocaleTimeString());
};

let dateStop;

let dateCall = () => {
    dateStop = setInterval(displayDate, 1000);
};

document.querySelector(`#start`).addEventListener(`click`, dateCall);
document.querySelector(`#stop`).addEventListener(`click`, () => {
    clearInterval(dateStop);
});

function changeText() {
    document.querySelector(`h1`).innerHTML = `KT`;
}
let change;
function changeName() {
    change = setTimeout(changeText, 3000);
}
document.querySelector(`#start`).addEventListener(`click`, changeName);
document.querySelector(`#stop`).addEventListener(`click`, () => {
    clearTimeout(change);
});
