// Import the rollDice and showDice functions from the script file.
const { rollDice, showDice } = require('./script');

// Describe block for the rollDice function tests
describe('rollDice function', () => {
    // Test to ensure the rollDice function returns a number between 1 and the maximum value (inclusive)
    it('should return a number between 1 and the max number', () => {
        const max = 6; // Define the maximum value for the dice roll
        const result = rollDice(max); // Call the rollDice function with the max value
        expect(result).toBeGreaterThanOrEqual(1); // Expect the result to be at least 1
        expect(result).toBeLessThanOrEqual(6); // Expect the result to not be greater than the max value
    });
});

// Describe block for the showDice function tests
describe('showDice function', () => {
    // Test to ensure the showDice function creates a dice image element and appends it to the dice container
    it('should create a dice image and append it to diceContainer', () => {
        // Setup of DOM simulation or ensure jsdom is properly configured
        document.body.innerHTML = '<div id="diceContainer"></div>'; // Setup a mock DOM with a diceContainer div
        const diceContainer = document.getElementById('diceContainer'); // Retrieve the mock diceContainer from the DOM
        showDice(4, diceContainer); // Execute showDice with a result of 4 and the mock diceContainer
        expect(diceContainer.innerHTML).toContain('div'); // Check that a div element has been added to the diceContainer
        expect(diceContainer.firstChild.className).toContain('die d4'); // Check that the class name includes 'die d4', indicating correct dice display
    });
});
