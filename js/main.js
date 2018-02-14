function startGame(e) {
    var choice = e.target.id
    console.log(choice)
  }
  
  var choices = document.getElementsByClassName('choice')
  for (var i in choices) {
    try {
      choices[i].addEventListener('click', startGame)
    } catch(err) {
      //First load
     
    
    }
}

function computerTurn()
  { 
   //var picked = e.target.id
    var rpsArray = [ "rock", "paper", "scissors"]
    var picked =  Math.floor(Math.random() * 3)
    console.log(rpsArray[picked])

    div.innerHTML = rpsArray[picked]
  }
  var picked = document.getElementsByClassName('computer')

function winOrLose()
{ 
  //need to compare user choice with computer choice to see who wins
  // rock wins over scissors
  // paper wins over rock
  // scissors win over paper
  // tie
}

  
  
  
  
