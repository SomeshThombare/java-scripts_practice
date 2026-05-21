
let useMove;
let computerMove;

let moves = ['Rock','Paper','Scissors'];
let score  = JSON.parse(localStorage.getItem('score')) || {
    win : 0,
    loss : 0,
    draw : 0
};

function playGame(uMove){
    useMove = moves[uMove];
    computerMove = moves[Math.floor(Math.random() * 3)];
    let result = "";
    if(useMove === computerMove){
        result = ` It's a tie!`;
        score.draw += 1;
    }else if(useMove === 'Rock' && computerMove === 'Scissors' ||
             useMove === 'Paper' && computerMove === 'Rock' ||
             useMove === 'Scissors' && computerMove === 'Paper'
    ){
        result = `You'r  win!`
        score.win += 1;
    }else{
        result = `You'r  loss!`;
        score.loss += 1;
    }
 localStorage.setItem("score",JSON.stringify(score));

    console.log( `You Picked ${useMove} and Computer Picked ${computerMove}. ${result}`);
}
function checkScore(){
    console.log(`wins: ${score.win} | Lose: ${score.loss} | Draw: ${score.draw} `);
};
   

function resetScore(){
score = {
    win : 0,
    loss : 0,
    draw : 0
};
localStorage.removeItem("score");
console.log('Score reset successfulyy');
}
playGame();