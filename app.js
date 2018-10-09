var scores, roundScores, activePlayer, dice, gamePlaying;

init();

// dice = Math.floor(Math.random() * 6) + 1;

function btnRoll(){
  if (gamePlaying) {
    dice = Math.floor(Math.random() * 6) + 1;
    var diceDom = document.querySelector('.dice');

    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    if (dice !== 1) {
      roundScores += dice;
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

    if(scores[activePlayer] >= 100){
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
      gamePlaying = false;

    }else{
      nextPlayer();
      document.querySelector('.dice').style.display = 'block'

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
    document.querySelector('.dice').style.display = 'none';
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
  document.querySelector('.dice').style.display = 'none';
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
document.querySelector('#input').addEventListener('keyup', input);
