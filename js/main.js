//here declare variables for the user, computer and result
//for both.
var computer;
var user;
var result;
//array for choices or R P or S
var selection = ["rock", "paper", "scissors"];
//this part connects to the HTML- goes to the h3 id
//Oddly when I had it as 'computer' it wouldn't work
var userLabel = document.getElementById("user");
var computerLabel = document.getElementById("comp");
var winnerLabel = document.getElementById("winner");

//random selection for computer selection
function computerChoice() {
  var index = Math.floor(Math.random() * selection.length);
  return selection[index];
}

//compare the two selections
function comparePicks() {
  //here set up the selections as INDEX- numeric
  userIndex = selection.indexOf(user);
  computerIndex = selection.indexOf(computer);

  //if else statement to determine win, lose or draw
  if (userIndex === computerIndex) {
    result = "Tie";
  } else if (
    (computerIndex === selection.length - 1 && userIndex == 0) ||
    userIndex > computerIndex
  ) {
    //stats[user + 'Wins']++
    result = "Win";
  } else {
    result = "Lose";
  }
}

//pass the selections and results to the HTML file
function printResults() {
  userLabel.innerHTML = "User: " + user;
  computerLabel.innerHTML = "Computer: " + computer;
  winnerLabel.innerHTML = "Result: " + result;
  var klass = "";
  if (result === "Win") {
    klass = "green";
  } else if (result == "Lose") {
    klass = "red";
  }
  winnerLabel.className = klass;
}

function startGame(e) {
  user = e.target.id;
  //stats[user]++
  computer = computerChoice();
  comparePicks();
  printResults();
  //calcTotals();
}

var choices = document.getElementsByClassName("choice");
for (var i in choices) {
  try {
    choices[i].addEventListener("click", startGame);
  } catch (err) {
    //First Load
  }
}
