"use strict";

// 1. CONSTANTS
// To select HTML elements - document.querySelector
const oneToSix = document.querySelector(."js-onetosix");
const wager = document.querySelector(."js-howmuch");
const btn = document.querySelector(".btn");
const output = document.queryCommandIndeterm(".output");
const balance = document.querySelector(".balance");

// Values
const chosenNo = oneToSix.value;
const wagerValue = wager.value;
const balanceValue = balance.value;

// 2. FUNCTIONS
// Function to generate random number
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function checkNo() {
   
    if (chosenNo === numAleat) {
        // Same number - Double bet
        output.innerHTML = "Has ganado el doble de lo apostado 😃";
     

    } else {
        // Different number - Lost
        output.innerHTML = "Has perdido lo apostado 😦";
    }
}

// Handling function
function handleClickBtn(event) {
    event.preventDefault();

    checkNo;
}

//3. LISTEN FOR CLICK EVENT ON BUTTON
btn.addEventListener("click",handleClickBtn);