"use strict";

// 1. CONSTANTS
const oneToSix = document.querySelector(".js-onetosix");
const wager = document.querySelector(".js-howmuch");
const btn = document.querySelector(".btn");
const output = document.queryCommandIndeterm(".output");
const balance = document.querySelector(".balance");

// 2. FUNCTIONS
// Function to generate random no
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// Function to compare user-chosen no with random no
function checkNo() {

    // Get values
    const chosenNoString = oneToSix.value;
    const wagerValueString = wager.value;
    const balanceValueString = balance.value;
    
    // Get random no value
    const randomNo = getRandomNumber(6);

    // Turn values from string type into no type
    const chosenNo = parseInt(chosenNoString);
    const balanceValue = parseInt(balanceValueString); 
    const wagerValue = parseInt(wagerValueString); 

    console.log(chosenNo);
    console.log(randomNo);
    if (chosenNo === randomNo) {
        // Same number - Double bet
        output.innerHTML = `<p>Has ganado el doble de lo apostado 😃</p>`;
        balanceValue = wagerValue + wagerValue;
     
    } else {
        // Different number - Lost
        output.innerHTML = `<p>Has perdido lo apostado 😦</p>`;
        balanceValue = 0;
    }
}

// Handling function
function handleClickBtn(event) {
    event.preventDefault();

    checkNo();
}

//3. LISTEN FOR CLICK EVENT ON BUTTON
btn.addEventListener("click",handleClickBtn);