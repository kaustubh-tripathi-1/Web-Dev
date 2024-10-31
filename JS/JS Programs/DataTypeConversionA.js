/* //@ Question 1

function convertToNumber(s) {
  let num = parseInt(s);

  if (isNaN(s)) {
    console.log("The string is NaN");
    return;
  } else {
    console.log(num);
  }
}

let str = "832173";

let num = convertToNumber(str); */

/* //@ Question 2

function convertToString(n) {
  //   let s = n.toString();  //@ Using toString()
  //   let s = String(n); //@ Using String Constructor
  // let s = `${n}`; //@ Using Template Literals
  let s = n + ""; //@ Using Concatenation with an empty string

  console.log(s);
  console.log(typeof s);

  if (typeof s === `string`) {
    console.log(`A Valid String`);
  } else {
    console.log(`Not A Valid String`);
  }
}

let num = 3829;
convertToString(num); */

//@ Question 3

/* function convertToBoolean(s) {
  let bool;

  if (s === "true") {
    bool = true;
  } else if (s === "false") {
    bool = false;
  } else {
    bool = Boolean(s);
  }
  console.log(bool);
}

let str1 = "false";
let str2 = "";
let str3 = "true";
let str4 = "Kaustubh Tripathi";

convertToBoolean(str1);
convertToBoolean(str2);
convertToBoolean(str3);
convertToBoolean(str4);
 */
