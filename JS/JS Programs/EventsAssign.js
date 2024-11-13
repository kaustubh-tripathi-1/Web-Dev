//@ Question 1

/* const para = document.querySelector(`#text`);
const button = document.querySelector(`#myButton`);

button.addEventListener(`click`, () => {
    para.textContent = `Text Changed!`;
}); */

//@ Question 2

/* const div = document.querySelector(`#div1`);

div.addEventListener(`mouseover`, () => {
    div.classList.add(`container`);
});
div.addEventListener(`mouseout`, () => {
    div.classList.remove(`container`);
}); */

//@ Question 3

/* window.addEventListener(`keydown`, (event) => {
    event.preventDefault();
    if (event.key === ` `) {
        console.log(`Space`);
    } else {
        console.log(event.key);
    }
}); */

//@ Question 4

//$ With HTML collection using children property
/* const listDatas = document.querySelector(`#list`).children;

let listDataArray = Array.from(listDatas);

listDataArray.forEach((li, index, listDataArray) => {
    li.addEventListener(`click`, () => {
        console.log(li.textContent);
    });
}); */

//$ Directly Accesing Node list with querySelectorAll
/* const listDatas = document.querySelectorAll(`.listdata`);

listDatas.forEach((li, index, listDataArray) => {
    li.addEventListener(`click`, () => {
        console.log(li.textContent, listDataArray);
    });
}); */

//@ Question 5

/* const btn = document.querySelector(`#btn`);

const div = document.querySelector(`#div1`);

btn.addEventListener(`click`, () => {
    div.classList.toggle(`hide`);
}); */

//@ Question 6

/*const btn = document.querySelector(`#btn`);

 btn.addEventListener(
    `click`,
    (event) => {
        console.log(`Clicked`);
    },
    { once: true }
); */

//@ Question 7

/* const form = document.querySelector(`#myForm`);

form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    console.log(`Form Submission Prevented`);
});
 */

//@ Question 8

/* const div = document.querySelector(`#container`);

// div.addEventListener(`click`, (event) => {
//     if (event.target.tagName === `BUTTON`) {
//         console.log(`Button clicked.`);
//     }
// });

div.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`buttons`)) {
        console.log(`${event.target.textContent}`);
    }
}); */

//@ Question 9

/* let clickCount = 0;
const clickThreshold = 3;
let timer;

const btn = document.querySelector(`#customEventButton`);

const para = document.querySelector(`#customEventMessage`);

const tripleClickEvent = new CustomEvent(`tripleClick`, {
    detail: { message: `Triple Click detected!` },
});

btn.addEventListener(`click`, () => {
    clickCount++;

    console.log(clickCount);

    if (clickCount === clickThreshold) {
        btn.dispatchEvent(tripleClickEvent);
        clickCount = 0;
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
        clickCount = 0;
    }, 1000);
});

btn.addEventListener(`tripleClick`, (event) => {
    console.log(`Custom Event Triggered!`);
    console.log(event.detail.message);

    para.textContent = `${event.detail.message}`;
}); */

//@ Question 10

/* const outDiv = document.querySelector(`#out`);
const inDiv = document.querySelector(`#in`);

outDiv.addEventListener(
    `click`,
    () => {
        console.log(`Capturing Phase - Parent`);
    },
    true
);
inDiv.addEventListener(
    `click`,
    () => {
        console.log(`Capturing Phase - Child`);
    },
    true
);
outDiv.addEventListener(
    `click`,
    () => {
        console.log(`Bubbling Phase - Parent`);
    },
    false
);
inDiv.addEventListener(
    `click`,
    () => {
        console.log(`Bubbling Phase - Child`);
    },
    false
); */

//@ Question 11

/* const fruits = [
    "Apple",
    "Apricot",
    "Avocado",
    "Banana",
    "Blackberry",
    "Blueberry",
    "Cherry",
    "Coconut",
    "Dragon Fruit",
    "Fig",
    "Grape",
    "Guava",
    "Kiwi",
    "Lemon",
    "Lime",
    "Mango",
    "Orange",
    "Papaya",
    "Peach",
    "Pear",
    "Pineapple",
    "Plum",
    "Pomegranate",
    "Raspberry",
    "Strawberry",
];

//@ DOM elements
const searchInput = document.querySelector("#searchInput");
const suggestionsList = document.querySelector("#suggestionsList");
const statuss = document.querySelector("#status");

//@ Debounce Function to wait for a specific delay before searching
function debounce(callback, delay) {
    let timeoutId;

    return function (...args) {
        //$ Clear previous timeout
        if (timeoutId) {
            clearTimeout(timeoutId);
            statuss.textContent = `Waiting for user to stop typing...`;
        }

        //$ Set new timeout
        timeoutId = setTimeout(() => {
            callback.apply(this, args);
            if (statuss.value === ``) {
                statuss.textContent = `Searching...`;
            }
        }, delay);
    };
}

//@ Function to simulate API call for suggestions
async function fetchSuggestions(query) {
    //$ Simulating network delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    return fruits.filter((fruit) => {
        return fruit.toLowerCase().includes(query.toLowerCase());
    });
}

//@ Function to update suggestions list
async function updateSuggestion(query) {
    if (query.trim().length === 0) {
        suggestionsList.innerHTML = ``;
        statuss.textContent = ``;
        return;
    }

    try {
        const suggestions = await fetchSuggestions(query);

        suggestionsList.innerHTML = suggestions
            .map((suggestion) => {
                return `<li class = 'suggestion-item'>
                ${suggestion}
            </li>
             `;
            })
            .join(``);

        statuss.textContent = `Found ${suggestions.length} suggestion(s)`;
    } catch (error) {
        statuss.textContent = `Error fetching suggestions`;
        console.log(`Error :`, error);
    }
}

//@ Create debounced version of updateSuggestions, args - callback, delay and var. timeoutId is available to debounceUpdate through closure
const debounceUpdate = debounce(updateSuggestion, 500);

//@ Add event listener to input
searchInput.addEventListener(`input`, (event) => {
    debounceUpdate(event.target.value);
});

suggestionsList.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`suggestion-item`)) {
        searchInput.value = event.target.textContent.trim();
        suggestionsList.innerHTML = ``;
        statuss.textContent = ``;
    }
}); */

//@ Question 12

/* const scrollXDisplay = document.querySelector("#scrollX");
const scrollYDisplay = document.querySelector("#scrollY");
const logEntries = document.querySelector("#logEntries");

//@ Throttle function
function throttle(callback, limit) {
    let inThrottle;

    return function (...args) {
        //$ If we're not in throttle, execute the function
        if (!inThrottle) {
            callback.apply(this, args);
            inThrottle = true;

            //$ Reset throttle after specified time
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

//@ Function to log scroll position
function logScrollPosiiton() {
    //$ Get Scroll posiiton
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    //$ Update real-time display
    scrollXDisplay.textContent = scrollX;
    scrollYDisplay.textContent = scrollY;

    const entry = document.createElement(`div`);
    entry.className = `log-entry`;
    entry.textContent = `Position X - ${scrollX}px, Y - ${scrollY}px | Time - ${new Date().toLocaleTimeString()}`;

    logEntries.prepend(entry);

    if (logEntries.children.length > 10) {
        logEntries.lastChild.remove();
    }
}

const throttledLogPosition = throttle(logScrollPosiiton, 500);

window.addEventListener(`scroll`, throttledLogPosition); */

//@ Question 13

/* const button = document.querySelector(`button`);
let clickCount = 0;

const callback = () => {
    clickCount++;

    console.log(`Button Clicked!`);

    if (clickCount === 3) {
        button.removeEventListener(`click`, callback);
        console.log(`Listener Removed`);
    }
};

button.addEventListener(`click`, callback); */

//@ Question 14

/* const div = document.querySelector(`#container`);
const btn = document.querySelector(`#btn`);

div.addEventListener(`click`, (event) => {
    console.log(`Div Clicked.`);
});

btn.addEventListener(`click`, (event) => {
    event.stopPropagation();
    console.log(`Button Clicked.`);
}); */

//@ Question 15

/* const input = document.querySelector(`#searchInput`);

input.addEventListener(`focus`, (e) => {
    input.classList.toggle(`focus`);
});

input.addEventListener(`blur`, (e) => {
    input.classList.toggle(`focus`);
}); */

//@ Question 16

/* const input = document.querySelector(`#search`);

function debounce(callback, delay) {
    let timeoutId;

    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

function logInput(string) {
    if (string !== ``) console.log(string);
}

let debounced = debounce(logInput, 300);

input.addEventListener(`input`, (e) => {
    debounced(e.target.value);
}); */

//@ Question 17

/* const input = document.querySelector(`#inputField`);
const para = document.querySelector(`#displayText`);

input.addEventListener(`input`, (event) => {
    para.textContent = event.target.value;
}); */

//@ Question 18

/* const form = document.querySelector(`#nameForm`);
const input = document.querySelector(`#nameInput`);
const para = document.querySelector(`#nameDisplay`);

form.addEventListener(`submit`, (event) => {
    event.preventDefault();

    para.textContent = input.value;

    input.value = ``;
}); */

//@ Question 19

/* const dragDiv = document.querySelector(`#dragItem`);
const dropDiv = document.querySelector(`#dropZone`); */

/* let draggedElement = null;

dragDiv.addEventListener(`dragstart`, (event) => {
    draggedElement = event.target;
});

dropDiv.addEventListener(`dragover`, (event) => {
    event.preventDefault();
});

dropDiv.addEventListener(`drop`, (event) => {
    event.preventDefault();

    draggedElement.parentElement.removeChild(draggedElement);

    if (`dropZone` === dropDiv.getAttribute(`id`)) {
        dropDiv.firstChild.remove();
        dropDiv.append(draggedElement);
    }
}); */

/* dragDiv.addEventListener(`dragstart`, (event) => {
    event.dataTransfer.setData(`text`, event.target.id);
    event.target.style.opacity = `0.5`;
});

dragDiv.addEventListener(`dragend`, (event) => {
    event.target.style.opacity = `1`;
});

dropDiv.addEventListener(`dragover`, (event) => {
    event.preventDefault();
    dropZone.style.backgroundColor = "#e0e0e0";
});
dropDiv.addEventListener(`dragleave`, (event) => {
    dropDiv.style.backgroundColor = "";
});

dropDiv.addEventListener(`drop`, (event) => {
    const itemId = event.dataTransfer.getData(`text`);

    const draggedElement = document.querySelector(`#${itemId}`);

    while (dropDiv.firstChild) {
        dropDiv.firstChild.remove();
    }

    dropDiv.append(draggedElement);

    dropDiv.style.backgroundColor = ``;
}); */
