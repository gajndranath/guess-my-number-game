let number = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click',function(){
    //document.querySelector('.message').textContent = 'Correct Number!';
    const guess = Number(document.querySelector('.guess').value);
    //console(type of guess, guess);
    if(!guess){  //
        document.querySelector('.message').textContent = 'No Number!';

    } else if(guess === number){
        document.querySelector('.message').textContent = 
        `${guess} is Corret guess Number!`;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        //highscore
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if(guess > number){
        if(score > 1){
            document.querySelector('.message').textContent = `${guess} is Greater then Secret Number!`;
            score--;
            document.querySelector('.score').textContent = score; 
        } else {
            document.querySelector('.message').textContent = 
            `you lost the game`;
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < number) {
        if(score > 1){
            document.querySelector('.message').textContent = 
            `${guess} is Lower then Secret Number!`;
            document.querySelector('.message').textContent = `${guess} is lower then Secret Number!`;
            score--;
            document.querySelector('.score').textContent = score; 
        } else {
            document.querySelector('.message').textContent = 
            `you lost the game`;
            document.querySelector('.score').textContent = 0;
        }
    }
});


//try again
document.querySelector('.again').addEventListener('click', function(){
    //reseting score value
    score = 20;
    //when game start create new and reasigning to number
    number = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent;
    //Restoring the initial condition of the message, number, score and guess input field
    document.querySelector('.message').textContent = `Start guessing...`;
    document.querySelector('.score').textContent = score;
    // document.querySelector('.number').textContent ='?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '12rem';
});

