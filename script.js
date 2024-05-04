// Function that simulates rolling a die and returns a random number between 1 and the maximum value.
function rollDice(max) {
    return Math.floor(Math.random() * max) + 1;
}

// Function that visually displays the result of the die roll on the user interface.
function showDice(result, diceContainer) {
    diceContainer.innerHTML = ''; // Clears any previous content in the dice container.
    const diceImage = document.createElement('div'); // Creates a new div element to display the die.
    diceImage.className = `die d${result}`; // Assigns a class based on the die result for specific styling.
    diceContainer.appendChild(diceImage); // Adds the new div to the dice container on the page.
}

// This block determines how functions are exported depending on the environment in which the code is executed.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { rollDice, showDice }; // Exports functions for use in tests or in a Node.js environment.
} else {
    window.rollDice = rollDice; // Adds rollDice to the global window object for use in the browser.
    window.showDice = showDice; // Adds showDice to the global window object for use in the browser.
}

// Listens for the 'DOMContentLoaded' event which indicates that the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("rollButton"); // Retrieves the button to roll the die.
    const diceTypeSelect = document.getElementById("diceType"); // Retrieves the selector to choose the type of die.
    const resultDisplay = document.getElementById("resultDisplay"); // Retrieves the element where the result will be displayed.
    const diceContainer = document.getElementById("diceContainer"); // Retrieves the container where the die image will be displayed.

    // Adds a click event to the roll dice button.
    rollButton.addEventListener("click", function () {
        const diceType = diceTypeSelect.value; // Gets the selected value of the type of die.
        const maxNumber = parseInt(diceType.substring(1)); // Converts the value of the type of die to an integer.
        if (!isNaN(maxNumber) && maxNumber > 0) { // Checks if the number is valid.
            const result = rollDice(maxNumber); // Rolls the die and gets the result.
            resultDisplay.textContent = `You rolled a ${result}!`; // Displays the result on the user interface.
            showDice(result, diceContainer); // Visually displays the die on the interface.
        } else {
            resultDisplay.textContent = "Please select a valid dice type."; // Error message if the dice type is not valid.
            diceContainer.innerHTML = ''; // Clears the dice container in case of error.
        }
    });
});
