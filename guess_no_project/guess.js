const max = prompt('Enter the max number')
const random = Math.floor(Math.random() * max) + 1 ;

let guess = prompt('guess the number');

while(true){
    if(guess == 'quit'){
        console.log('User quit');
        break;
    }

    if(guess == random){
        console.log('You are right! congrats!! random numbers was',random);
        break;
    }else if(guess < random){
        guess = prompt('hint: Your guess was to small, please try again!')

    }else{
        guess = prompt('hint: your guess was to large, plese try again!')
    }
}