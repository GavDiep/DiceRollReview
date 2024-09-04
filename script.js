// Dice Simulator stuff

// HTML Variables :P
var menu = document.getElementById("diceMenu");
var diceOne = document.getElementById("dice1");
var diceTwo = document.getElementById("dice2");
var whatWas = document.getElementById("history");
var sum = document.getElementById("sum");
var rollDiceBtn = document.getElementById("rollBtn");
var resetDiceBtn = document.getElementById("resetBtn");
let imgOption = document.getElementById("img-selector");

// General variables
var output;
var numRolls = 0;
var randNum;
var randNum2;
var diceIntervalVal = 50;
var sumOfDice = 0;

// Animated variables
var angle1 = 0;
var angle2 = 0;

// Event Listener stuff

rollDiceBtn.addEventListener("click", rollDice);
resetDiceBtn.addEventListener("click", resetDice);

// Function and etc

// Rolling/Resetting buttons
function rollDice() {
  clearInterval(diceOneInterval);

  let diceOption = document.getElementById("diceMenu").value;

  if (diceOption === "roll1") {
    // Selector option stuff
    randNum = Math.floor(Math.random() * 9 + 1);
    randNum2 = Math.floor(Math.random() * 9 + 1);

    // Choosing the random img
    diceOne.src = `images/spheal${randNum}.png`;
    diceTwo.src = `images/spheal${randNum2}.png`;

    var result = randNum + `,` + randNum2;

    whatWas.innerHTML += `<span>${result}</span>`;
    sumOfDice = randNum + randNum2;
    console.log(sumOfDice);
  } else if (diceOption === "roll5") {
    // looping the roll option
    for (let n = 1; n <= 5; n++) {
      randNum = Math.floor(Math.random() * 9 + 1);
      randNum2 = Math.floor(Math.random() * 9 + 1);

      // Choosing the random img
      diceOne.src = `images/spheal${randNum}.png`;
      diceTwo.src = `images/spheal${randNum2}.png`;

      var result = randNum + `,` + randNum2;

      whatWas.innerHTML += `<span>${result}</span>`;
    }
  } else if (diceOption === "rollX") {
    var X = +prompt("How many times do you want to roll the dice?");

    // looping the roll option
    for (let n = 1; n <= X; n++) {
      randNum = Math.floor(Math.random() * 6 + 1);
      randNum2 = Math.floor(Math.random() * 6 + 1);

      // Choosing the random img
      diceOne.src = `images/spheal${randNum}.png`;
      diceTwo.src = `images/spheal${randNum2}.png`;

      var result = randNum + `,` + randNum2;

      whatWas.innerHTML += `<span>${result}</span>`;
    }
  } else if (diceOption === "rollSnake") {
    // while loop until snake eyes (double ones)
    do {
      randNum = Math.floor(Math.random() * 9 + 1);
      randNum2 = Math.floor(Math.random() * 9 + 1);

      // rolling the dice
      diceOne.src = `images/spheal${randNum}.png`;
      diceTwo.src = `images/spheal${randNum2}.png`;

      var result = randNum + `,` + randNum2;
      numRolls++;
      // Outputing the outcome
      whatWas.innerHTML += `<span>${result}</span>`;
    } while (randNum != 1 && randNum2 != 1);
    alert(`It took ${numRolls} rolls to get snake eyes`);
  } else if (diceOption === "rollSum") {
  }
}

// Rotating functions

function dicesRotate() {
  // choosing random image
  var gen1 = Math.floor(Math.random() * 9 + 1);
  var gen2 = Math.floor(Math.random() * 9 + 1);

  diceOne.src = `images/spheal${gen1}.png`;
  diceTwo.src = `images/spheal${gen2}.png`;

  // rotating the image
  angle1 -= 12;
  angle2 += 8;
  diceOne.style.transform = `rotate(${angle1}deg)`;
  diceTwo.style.transform = `rotate(${angle2}deg)`;
}

// Setting the interval
let diceOneInterval = setInterval(dicesRotate, diceIntervalVal);

// Reset function
function resetDice() {
  whatWas.innerHTML = ` `;
  clearInterval(diceOneInterval);

  diceOneInterval = setInterval(dicesRotate, diceIntervalVal);
}
