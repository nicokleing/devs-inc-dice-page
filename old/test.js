import '@testing-library/jest-dom';

// Mocking document.getElementById to return dummy elements
const setUpDomEnvironment = () => {
  const dummyElements = {
    rollButton: { addEventListener: jest.fn() },
    diceType: { value: 'd6' },
    resultDisplay: { textContent: '' },
    diceContainer: { innerHTML: '', appendChild: jest.fn() }
  };

  global.document.getElementById = jest.fn((id) => dummyElements[id]);
};

describe('dice game', () => {
  beforeEach(() => {
    setUpDomEnvironment();
  });

  it('rollDice should return a number between 1 and the max value', () => {
    const max = 6;
    const rollDice = (max) => Math.floor(Math.random() * max) + 1;
    const result = rollDice(max);
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThanOrEqual(max);
  });

  it('showDice should create a dice image and append it to diceContainer', () => {
    const result = 4;
    const diceContainer = document.getElementById('diceContainer');
    const showDice = (result) => {
      diceContainer.innerHTML = ''; // Clear previous dice images
      const diceImage = document.createElement('div');
      diceImage.className = 'die d' + result; // Set the appropriate class for the dice face
      diceContainer.appendChild(diceImage);
    };
    showDice(result);
    expect(diceContainer.innerHTML).toContain('div');
    expect(diceContainer.innerHTML).toContain('die d4');
  });
});
