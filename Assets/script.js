// Assignment Code
var generateBtn = document.querySelector("#start");
var myTimer = document.querySelector('#timer');
var highScoreBtn = document.querySelector('#highscore');


var randIndex;
var correctAnswer;


// Start Quiz
function startQuiz(){
    document.querySelector('.start-display').style.display = 'none';
    document.querySelector('.timer-display').style.display = 'inline';
    document.querySelector('.question-display').style.display = 'inline';
    highScoreBtn.setAttribute('disabled','');
    
    myTimer.textContent = 50;
    randomQ()

    var runTimer = setInterval( function (){
        if (Number(myTimer.textContent) > 0 && questions.length != 0) myTimer.textContent--;
        else {
            clearInterval(runTimer);

            document.querySelector('.question-display').style.display = 'none';
            document.querySelector('.save-display').style.display = 'inline';
            document.querySelector('#saveBtn').addEventListener('click',saveResults)

            
        }
    } , 1000);
}


// Get Random Question
function randomQ(){
    randIndex = Math.floor(Math.random() * questions.length);

    Object.entries(questions[randIndex]).forEach( ([key,value],index) => {
        switch (key) {
            case 'answer': correctAnswer = value; break;
            case 'question': document.querySelector(`#${key}`).textContent = value; break;
            default: document.querySelector(`#${key}`).textContent = `${index}. ${value}`; break;
        }
    })
}


// Get Score on Click
document.querySelector('#choice').addEventListener('click', function(){
    var condition = (event.target.id == correctAnswer);
    condition? myTimer.textContent = Number(myTimer.textContent) + 10 : myTimer.textContent -= 10;
    
    var showAnswer = document.querySelector('#answerChoice');
    showAnswer.textContent = condition? 'Correct!' : 'Wrong!';

    showAnswer.style.visibility = 'visible';
    setTimeout( function(){showAnswer.style.visibility = 'hidden'},1000)

    questions.splice(randIndex,1);
    if(questions.length != 0) randomQ();
})

// Save Results
function saveResults(){
    event.preventDefault();

    if (event.path[1][0].value != ''){
        if (myTimer.textContent > Number(sessionStorage.score) || sessionStorage.length == 0 ) {
            sessionStorage.time = new Date();
            sessionStorage.initials = event.path[1][0].value;
            sessionStorage.score = myTimer.textContent;
        }

        var saved = document.querySelector('#saved')
        saved.style.visibility = 'visible';
        setTimeout( function(){saved.style.visibility = 'hidden'},500)
        setTimeout( highScore ,800)
    }
    
    highScoreBtn.removeAttribute('disabled');
}


// Get High Score
function highScore() {
    document.querySelector('.quiz-display').style.display = 'none'
    document.querySelector('.highscore-display').style.display = 'inline';

    document.querySelector('#nameHS').textContent = sessionStorage.initials
    document.querySelector('#scoreHS').textContent = sessionStorage.score
}


// Add event listener to generate button
generateBtn.addEventListener("click", startQuiz);
highScoreBtn.addEventListener("click", highScore);
document.querySelector('#exitBtn').addEventListener('click', function(){location.reload();})


// List of Questions
var questions = [
    {
        'question': 'What are variables used for in JavaScript Programs?',
        'choice1': 'Storing numbers, dates, or other values',
        'choice2': 'Varying randomly',
        'choice3': 'Causing high-school algebra flashbacks',
        'choice4': 'None of the above',
        'answer': 'choice1'  
    },
    {
        'question': 'Which of the following are capabilities of functions in JavaScript?',
        'choice1': 'Return a value',
        'choice2': 'Accept parameters and Return a value',
        'choice3': 'Accept parameters',
        'choice4': 'None of the above',
        'answer': 'choice3'  
    },
    {
        'question': 'Which types of image maps can be used with JavaScript?',
        'choice1': 'Server-side image maps',
        'choice2': 'Client-side image maps',
        'choice3': 'Server-side image maps and Client-side image maps',
        'choice4': 'None of the above',
        'answer': 'choice2'  
    },
    {
        'question': 'Which of the following best describes JavaScript?',
        'choice1': 'a low-level programming language.',
        'choice2': 'a scripting language precompiled in the browser.',
        'choice3': 'a compiled scripting language.',
        'choice4': 'an object-oriented scripting language.',
        'answer': 'choice4'  
    }
];