
let moves = ['Rock', 'Paper', 'Scissors'];
let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    loss: 0,
    draw: 0
};

// Update the score on the screen as soon as the page loads
updateScoreElement();

function playGame(uMove) {
    // Prevent errors if playGame() is called without an argument on page load
    if (uMove === undefined) return; 

    let useMove = moves[uMove];
    let computerMove = moves[Math.floor(Math.random() * 3)];
    let result = "";

    if (useMove === computerMove) {
        result = `It's a tie!`;
        score.draw += 1;
    } else if (
        (useMove === 'Rock' && computerMove === 'Scissors') ||
        (useMove === 'Paper' && computerMove === 'Rock') ||
        (useMove === 'Scissors' && computerMove === 'Paper')
    ) {
        result = `You win!`;
        score.win += 1;
    } else {
        result = `You loss!`;
        score.loss += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    // UPDATE THE PAGE
    document.querySelector('#js-result').innerText = result;
    document.querySelector('#js-moves').innerText = `You picked ${useMove} - Computer picked ${computerMove}`;
    updateScoreElement();
}

function updateScoreElement() {
    document.querySelector('#js-score').innerText = 
        `Wins: ${score.win}, Losses: ${score.loss}, Draws: ${score.draw}`;
}

function resetScore() {
    score = { win: 0, loss: 0, draw: 0 };
    localStorage.removeItem("score");
    
    // Reset the UI
    document.querySelector('#js-result').innerText = '';
    document.querySelector('#js-moves').innerText = '';
    updateScoreElement();
    console.log('Score reset successfully');
}







// let useMove;
// let computerMove;

// let moves = ['Rock','Paper','Scissors'];
// let score  = JSON.parse(localStorage.getItem('score')) || {
//     win : 0,
//     loss : 0,
//     draw : 0
// };

// function playGame(uMove){
//     useMove = moves[uMove];
//     computerMove = moves[Math.floor(Math.random() * 3)];
//     let result = "";
//     if(useMove === computerMove){
//         result = ` It's a tie!`;
//         score.draw += 1;
//     }else if(useMove === 'Rock' && computerMove === 'Scissors' ||
//              useMove === 'Paper' && computerMove === 'Rock' ||
//              useMove === 'Scissors' && computerMove === 'Paper'
//     ){
//         result = `You'r  win!`
//         score.win += 1;
//     }else{
//         result = `You'r  loss!`;
//         score.loss += 1;
//     }
//  localStorage.setItem("score",JSON.stringify(score));

//     console.log( `You Picked ${useMove} and Computer Picked ${computerMove}. ${result}`);
// }
// function checkScore(){
//     console.log(`wins: ${score.win} | Lose: ${score.loss} | Draw: ${score.draw} `);
// };
   

// function resetScore(){
// score = {
//     win : 0,
//     loss : 0,
//     draw : 0
// };
// localStorage.removeItem("score");
// console.log('Score reset successfulyy');
// }
// playGame();