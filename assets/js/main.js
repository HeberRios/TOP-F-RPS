"use strict";

// VARIABLES ----------------------------------------------------------

const possibleChoices = ["rock", "paper", "scissors"];

let playerChoice = "";
let computerChoice = "";
let playersScore = [0, 0];
let roundCounter = 0;

// FUNCTIONS ----------------------------------------------------------

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
