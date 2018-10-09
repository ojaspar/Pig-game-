var scores, roundScores, activePlayer, dice, gamePlaying, lastDice;

init();

// dice = Math.floor(Math.random() * 6) + 1;

function btnRoll(){
  if (gamePlaying) {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    var diceDom1 = document.getElementById('dice-1');
    
    var diceDom2 = document.getElementById('dice-2');

    diceDom1.style.display = 'block';
    diceDom2.style.display = 'block'; 
    diceDom1.src = 'dice-' + dice1 + '.png';
    diceDom2.src = 'dice-' + dice2 + '.png';
    // if (dice1 === 6 && lastDice === 6) {
    //   scores[activePlayer] = 0;
    //   document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //   nextPlayer();
    // }
    // else if (dice1 !== 1) {
    //   roundScores += dice1;
    //   document.querySelector('#current-' + activePlayer).textContent = roundScores;
    // }else{
    //   nextPlayer();
    // }
    //  lastDice = dice1;
    if (dice1 !== 1 && dice2 !== 1) {
      roundScores += dice1 + dice2;
      document.querySelector('#current-' + activePlayer).textContent = roundScores;
    }else{
      nextPlayer();
    }

  }
    
}


function btnHold(){
  if (gamePlaying) {
    console.log('hold')
    scores[activePlayer] += roundScores;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    console.log(scores[activePlayer]);
    var input = document.querySelector('#input').value;
    var winningScore;
    if (input) {
       winningScore = input;
    }else{
      winningScore = 100
    }

    if(scores[activePlayer] >= winningScore){
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
      document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
      gamePlaying = false;

    }else{
      nextPlayer();
      document.getElementById('dice-1').style.display = 'block'
      document.getElementById('dice-2').style.display = 'block'

    }
  }
  
}


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 :activePlayer = 0;
    roundScores = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}
// function input(event){
//   if(event.keyCode === 13){
//     var input = document.getElementById('input').value
//     console.log(input.value)
//   }
// }
function init(){
  scores=[0,0];
  roundScores = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.querySelector('#name-0').textContent = 'player 1';
  document.querySelector('#name-1').textContent = 'player 2';
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('winner');

}

document.querySelector('.btn-roll').addEventListener('click', btnRoll)
document.querySelector('.btn-hold').addEventListener('click', btnHold);
document.querySelector('.btn-new').addEventListener('click', init);

