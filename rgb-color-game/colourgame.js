var numSquares = 6;
var pickedColor;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode")

init();

function init() {
  setupButtons();
  setupSquares();
  reset();
}

function setupButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      //grab color of clicked square
      var clickedColor = this.style.background;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play again!";
        changeColors(pickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try again!";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  resetButton.textContent = "New colors";
  colorDisplay.textContent = pickedColor;
  insertNewColors();
  h1.style.background = "steelblue";
  messageDisplay.textContent = " ";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

function insertNewColors() {
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.background = colors[i];
  }
}

resetButton.addEventListener("click", function() {
  reset();
})

function changeColors(color) {
  //loop through colors
  for (var i = 0; i < squares.length; i++) {
    //change each color to match the given color
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  //return array
  return arr;
};

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
