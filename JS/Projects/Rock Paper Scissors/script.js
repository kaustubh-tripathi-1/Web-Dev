const icons = document.querySelectorAll("img");

const userScorePara = document.querySelector("#user-score-digits");

const compScorePara = document.querySelector("#comp-score-digits");

const msg = document.querySelector("#display-msg");

const msgContainer = document.querySelector(`#msg-container`);

let userScore = 0;
let compScore = 0;

function compChoiceGen() {
    let compChoiceArray = [`rock`, `paper`, `scissors`];

    let compChoice = compChoiceArray[Math.floor(Math.random() * 3)];
    return compChoice;
}

function drawMsg() {
    msg.innerHTML = `Result is draw. Both chose the same!`;
    msgContainer.style.backgroundColor = `#090929`;
}

function userWins(userChoice, compChoice) {
    userScore++;
    userScorePara.innerHTML = `${userScore}`;
    msg.innerHTML = `You Won.<br>You chose - ${userChoice} and Comp chose - ${compChoice}`;
    msgContainer.style.backgroundColor = `#60b400`;
}
function compWins(userChoice, compChoice) {
    compScore++;
    compScorePara.innerHTML = `${compScore}`;
    msg.innerHTML = `Comp Won.<br>You chose - ${userChoice} and Comp chose - ${compChoice}`;
    msgContainer.style.backgroundColor = `#ff0000`;
}

function playgame(userChoice) {
    let compChoice = compChoiceGen();

    if (userChoice === compChoice) {
        drawMsg();
    } else if (
        (userChoice === `rock` && compChoice === `scissors`) ||
        (userChoice === `paper` && compChoice === `rock`) ||
        (userChoice === `scissors` && compChoice === `paper`)
    ) {
        userWins(userChoice, compChoice);
    } else {
        compWins(userChoice, compChoice);
    }
}

icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        let userChoice = icon.getAttribute(`id`);
        playgame(userChoice);
    });
});
