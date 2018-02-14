var rpsArray = [ "rock", "paper", "scissors"]
var index =  Math.floor(Math.random()* 3)

function startGame(e)
  {
    var choice = e.target.id
    console.log(choice)
   
    //var rpsArray = [ "rock", "paper", "scissors"]
    //var index =  Math.floor(Math.random()* 3)
    console.log(rpsArray[index])
    var div = document.getElementById("computer")
    div.innerHTML = rpsArray[index]
    winOrLose(choice, index)
  }
 

  var choices = document.getElementsByClassName('choice')
  for (var i in choices) {
    try {
      choices[i].addEventListener('click', startGame) 
    
       } 
    catch(err) 
       {
      //First load
        }
      
      }

var user = choices[i]
var puter = rpsArray[index]

function winOrLose(user, puter)
{ 
  //need to compare user choice with computer choice to see who wins
  //use if/else statement here...
  // rock wins over scissors 0 --> 2
  // paper wins over rock  2 --->  1
  // scissors win over paper 2 ---> 1
  // tie - done
  
  if (user[0] == puter[0])
     if (user[1] == puter[1])
       if (user[2] == puter[2])
         console.log("A tie!")
  else
     console.log("who won?")

}
  
  
  
  
