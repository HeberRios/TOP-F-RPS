"use strict";
// GAME LOGIC ------------------------------------------------------------
// VARIABLES -------------------------------------------------------------

const possibleChoices = ["rock", "paper", "scissors"];

let playerChoice = "";
let computerChoice = "";
let playersScore = [0, 0];
let roundCounter = 0;

// FUNCTIONS -------------------------------------------------------------

function getPlayerChoice() {
    playerChoice = prompt(
        "Type your choice, can be: rock, paper and scissors"
    ).toLowerCase();
    return playerChoice;
}

function getComputerChoice() {
    const getComputerChoiceIndex = Math.trunc(Math.random() * 3);

    if (getComputerChoiceIndex === 0) {
        computerChoice = possibleChoices[0];
    } else if (getComputerChoiceIndex === 1) {
        computerChoice = possibleChoices[1];
    } else if (getComputerChoiceIndex === 2) {
        computerChoice = possibleChoices[2];
    }
    return computerChoice;
}

function playRound(computerSelection, playerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playersScore[1]++;
        roundCounter++;
        return `You won!, ${playerSelection} beats ${computerSelection}. (Player choice: ${playerSelection}, computer choice: ${computerSelection})`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playersScore[1]++;
        roundCounter++;
        return `You won!, ${playerSelection} beats ${computerSelection}. (Player choice: ${playerSelection}, computer choice: ${computerSelection})`;
    } else if (
        playerSelection === "scissors" &&
        computerSelection === "paper"
    ) {
        playersScore[1]++;
        roundCounter++;
        return `You won!, ${playerSelection} beats ${computerSelection}. (Player choice: ${playerSelection}, computer choice: ${computerSelection})`;
    } else if (playerSelection === computerSelection) {
        roundCounter++;
        return `TIE!, both sides have the same choice. (Player choice: ${playerSelection}, computer choice: ${computerSelection})`;
    } else {
        playersScore[0]++;
        roundCounter++;
        return `You loose!, ${computerSelection} beats ${playerSelection}. (Player choice: ${playerSelection}, computer choice: ${computerSelection})`;
    }
}

function showScore() {
    return `Player score: ${playersScore[1]}, computer score: ${playersScore[0]}`;
}

function gameResults() {
    if (playersScore[1] > playersScore[0]) {
        return `Game results:\nPlayer score: ${playersScore[1]}, computer score: ${playersScore[0]} \nTHE PLAYER WINS!!!!`;
    } else if (playersScore[1] === playersScore[0]) {
        return `Game results:\nPlayer score: ${playersScore[1]}, computer score: ${playersScore[0]} \nTIE!!!!`;
    } else {
        return `Game results:\nPlayer score: ${playersScore[1]}, computer score: ${playersScore[0]} \nTHE COMPUTER WINS!!!!`;
    }
}

function game() {
    while (roundCounter < 5) {
        console.log(playRound(getComputerChoice(), getPlayerChoice()));
        console.log(showScore());
    }

    return gameResults();
}

// Calling the game function:
// console.log(game());

// RULES MODAL WINDOW ----------------------------------------------------

// SELECTING ELEMENTS ----------------------------------------------------

const rulesBtn = document.getElementById("rules-btn");
const modalWindow = document.getElementById("modal-window");
const closeModalBtn = document.getElementById("close-modal");
const overlay = document.getElementById("overlay");

// FUNCTIONS -------------------------------------------------------------

function openModal(e) {
    modalWindow.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
}

function closeModal(e) {
    modalWindow.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
}

// HANDLING EVENTS -------------------------------------------------------

rulesBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modalWindow.classList.contains("hidden")) {
        closeModal();
    }
});

// COMPARING CHOICES -----------------------------------------------------

// SELECTING ELEMENTS:
const paperChoice = document.querySelector(".paper-color");
const scissorsChoice = document.querySelector(".scissors-color");
const rockChoice = document.querySelector(".rock-color");
const choicesArray = [rockChoice, paperChoice, scissorsChoice];

const gameChoicesContainer = document.querySelector(".game-choices");
const choicesComparisonContainer = document.querySelector(
    ".choices-comparison"
);
const gameResultText = document.querySelector(".game-result-title");

const playerChoiceContainer = document.querySelector(".player-choice");
const computerChoiceContainer = document.querySelector(".computer-choice");

// FUNCTIONS -------------------------------------------------------------

function changeToComparisonContainer() {
    gameChoicesContainer.classList.toggle("hidden");
    choicesComparisonContainer.classList.toggle("hidden");
}

function getImageSource(selectedImage) {
    let imageSrc = "";
    if (selectedImage === "rock-color") {
        imageSrc = "assets/images/icon-rock.svg";
        return imageSrc;
    } else if (selectedImage === "paper-color") {
        imageSrc = "assets/images/icon-paper.svg";
        return imageSrc;
    } else if (selectedImage === "scissors-color") {
        imageSrc = "assets/images/icon-scissors.svg";
        return imageSrc;
    }
}

function createPlayerElement(colorClass) {
    // CREATING THE NEW ELEMENTS
    const newOuterChoiceCircle = document.createElement("div");
    const newInnerChoiceCircle = document.createElement("div");
    const newChoiceImg = document.createElement("img");

    // ADDING CSS CLASSES
    newOuterChoiceCircle.classList.add("outer-choice", colorClass);
    newInnerChoiceCircle.classList.add("choice");

    // ADDING SRC ATTRIBUTE TO THE NEW IMG
    newChoiceImg.src = getImageSource(colorClass);

    // APPENDING CHILD ELEMENTS
    newInnerChoiceCircle.appendChild(newChoiceImg);
    newOuterChoiceCircle.appendChild(newInnerChoiceCircle);
    playerChoiceContainer.appendChild(newOuterChoiceCircle);
}

function getPlayerChoice(colorClass) {
    let playerChoice = "";
    if (colorClass === "rock-color") {
        playerChoice = "rock";
        return playerChoice;
    } else if (colorClass === "paper-color") {
        playerChoice = "paper";
        return playerChoice;
    } else if (colorClass === "scissors-color") {
        playerChoice = "scissors";
        return playerChoice;
    }
}

function getComputerColorClass(computerChoice) {
    let colorClass = "";
    if (computerChoice === "rock") {
        colorClass = "rock-color";
        return colorClass;
    } else if (computerChoice === "paper") {
        colorClass = "paper-color";
        return colorClass;
    } else if (computerChoice === "scissors") {
        colorClass = "scissors-color";
        return colorClass;
    }
}

function createComputerElement(computerChoice) {
    //CREATING THE NEW ELEMENTS
    const newOuterChoiceCircle = document.createElement("div");
    const newInnerChoiceCircle = document.createElement("div");
    const newChoiceImg = document.createElement("img");

    // GETTING THE COMPUTER COLOR CLASS
    const colorClass = getComputerColorClass(computerChoice);

    // ADDING CSS CLASSES
    newOuterChoiceCircle.classList.add("outer-choice", colorClass);
    newInnerChoiceCircle.classList.add("choice");

    // ADDING SRC ATTRIBUTE TO THE NEW IMG
    newChoiceImg.src = getImageSource(colorClass);

    // APPENDING CHILD ELEMENTS
    newInnerChoiceCircle.appendChild(newChoiceImg);
    newOuterChoiceCircle.appendChild(newInnerChoiceCircle);
    computerChoiceContainer.appendChild(newOuterChoiceCircle);
}

function selectionComparison(playerChoice, computerChoice) {
    let roundResult = "";

    if (playerChoice === "rock" && computerChoice === "scissors") {
        roundResult = "YOU WIN!";
        return roundResult;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        roundResult = "YOU WIN!";
        return roundResult;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        roundResult = "YOU WIN!";
        return roundResult;
    } else if (playerChoice === computerChoice) {
        roundResult = "TIE!";
        return roundResult;
    } else {
        roundResult = "YOU LOOSE!";
        return roundResult;
    }
}

choicesArray.forEach((choice) => {
    choice.addEventListener("click", function () {
        const outerContainerColor = choice.classList[1];
        changeToComparisonContainer();
        createPlayerElement(outerContainerColor);

        const computerChoice = getComputerChoice();
        createComputerElement(computerChoice);

        // COMPARING CHOICES

        gameResultText.textContent = selectionComparison(
            getPlayerChoice(outerContainerColor),
            computerChoice
        );
    });
});
