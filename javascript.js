const container = document.getElementById("gameContainer");
const squareArray = [];
let nextMove = "X";

//determine if game is over

function gameOver(message) {
  document.getElementById("winner").innerHTML = message;
  container.style.display = "none";
  document.getElementById("gameOver").style.display = "block";
}

//determine if game is a tie
function isDraw() {
  let shouldReturn = true;
  squareArray.forEach(({ state }) => {
    if (state == "") shouldReturn = false;
  });
  return shouldReturn;
}

