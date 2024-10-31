/* //@ Question 1
let str = `My Name is Kaustubh Tripathi and I live in Ghaziabad.`;

function formalCapitilize(s) {
  let words = s.split(` `);
  let i;
  for (i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

let sentence = `kaustubh tripathi is my name`;

let capitilizedSentence = formalCapitilize(sentence);

console.log(capitilizedSentence); */

/* //@ Question 2

function stringLength(s) {
  let i,
    len = 0;

  for (i of s) {
    len++;
  }
  return len;
}

let string = "I live in Ghaziabad, Uttar Pradesh";

let len = stringLength(string);

console.log(`The length of the string is ${len}`); */

/* //@ Question 3

let str = `My Name is Kaustubh Tripathi and I live in Ghaziabad.`;

let substr = str.substring(0, 12);

console.log(substr); */

/* //@ Question 3

let str = `My Name is Kaustubh Tripathi and I live in Ghaziabad.`;

let substr = str.slice(0, 19);

console.log(substr); */

/* //@ Question 4

function reverse(str) {
  let start = 0;
  let end = str.length - 1;
  let charArray = str.split(``);

  while (start < end) {
    let temp = charArray[start];
    charArray[start] = charArray[end];
    charArray[end] = temp;
    start++;
    end--;
  }

  return charArray.join(``);
}

let str = `My Name is Kaustubh Tripathi and I live in Ghaziabad.`;

let rev = reverse(str);

console.log(rev); */

/* //@ Question 5

function reverse(str) {
  let start = 0;
  let end = str.length - 1;
  let charArray = str.split(``);

  while (start < end) {
    let temp = charArray[start];
    charArray[start] = charArray[end];
    charArray[end] = temp;
    start++;
    end--;
  }

  return charArray.join(``);
}

let str = `naman`;

let rev = reverse(str);

if (str === rev) console.log("String is a palindrome");
else console.log("String is not a palindrome"); */

/** //@ Question 6

function vowelCount(str) {
  let i,
    vowel = 0;
  for (i of str) {
    if (
      i === "a" ||
      i === "e" ||
      i === "i" ||
      i === "o" ||
      i === "u" ||
      i === "A" ||
      i === "E" ||
      i === "I" ||
      i === "O" ||
      i === "U"
    ) {
      vowel++;
    }
  }

  return vowel;
}

function spaceCount(str) {
  let i,
    space = 0;

  for (i of str) {
    if (i == ` `) {
      space++;
    }
  }

  return space;
}

let str = "Kaustubh Tripathi";

let len = str.length;

let vowel = vowelCount(str);

let spaces = spaceCount(str);

let consonants = len - (vowel + spaces);

console.log(`Vowels - ${vowel}\nConsonants - ${consonants}`); */

//@ Question 7

/* let str = `A fox went up the hill and didn't come back. The fox should've come back. I think the fox died.`;

let repStr = str.replace(`fox`, `hyeena`);
let repAllStr = str.replaceAll(`fox`, `hyeena`);

console.log(`${repStr}\n`);
console.log(repAllStr); */

/* //@ Question 8

let num = 4324;

let numString = num.toString();
numString += "3432";

console.log(Number(numString));
console.log(typeof Number(numString)); */

/* //@ Question 9

function valid(str) {
  let num = Number(str);
  if (isNaN(num)) {
    return NaN;
  } else {
    return num;
  }
}

let str = prompt("Enter a string - ");

let num = valid(str);

if (isNaN(num)) {
  alert("NaN");
} else {
  console.log(num);
  console.log(typeof num);
}
 */
