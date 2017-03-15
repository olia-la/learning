

function countdown() {
  var minutes = document.getElementById("input").value;
  var timer = document.getElementById("timer");
  if (minutes < 0){
      alert("no");
      return;
  }

  var secondsToGo = minutes * 60;

  var intervalID = setInterval(function(){
      timer.innerHTML = secondsToGo - 1;
      secondsToGo -= 1;

      if (secondsToGo < 1) {
        clearInterval(intervalID);
      }
  }, 1000);
}

var b = document.getElementById("submit");
b.addEventListener("click", countdown);

// if (minutes < 10) {
//   timer.innerHTML = "0" + minutes + ":00";
// }
