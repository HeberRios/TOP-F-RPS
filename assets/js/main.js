"use strict";

// VARIABLES ----------------------------------------------------------

const possibleChoices = ["rock", "paper", "scissors"];

let playerChoice = "";
let computerChoice = "";

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
        return `You won!, ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `You won!, ${playerSelection} beats ${computerSelection}`;
    } else if (
        playerSelection === "scissors" &&
        computerSelection === "paper"
    ) {
        return `You won!, ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        return `TIE!, both sides have the same choice. (Player choice: ${playerSelection}, computer choice: ${computerSelection})`;
    } else {
        return `You loose!, ${computerSelection} beats ${playerSelection}`;
    }
}

// Calling the playRPS function:
// console.log(playRound(getComputerChoice(), getPlayerChoice()));
