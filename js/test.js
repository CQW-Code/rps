var choices = document.getElementsByClassName('choice')

for (var i in choices) 
{
  try {
    choices[i].addEventListener('click', startGame)
  } 
  catch(err) 
  {
    //First load
  }
}


function computerChoice() 
{
    var choices = ['rock', 'paper', 'scissors']
    var index = Math.floor(Math.random() * 3)
    console.log(choices[index])
}