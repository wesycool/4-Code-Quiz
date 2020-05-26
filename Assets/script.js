// Assignment Code
var generateBtn = document.querySelector("#start");
var myTimer = document.querySelector('#timer');
var histBtn = document.querySelector('#history');

var myScore = {'Correct': '+','Wrong': '-'}
var myChoice = ['choice1','choice2','choice3','choice4']
var randIndex = 0;


// Start Quiz
function startQuiz(){
    document.querySelector('.start-display').style.display = 'none';
    document.querySelector('.timer-display').style.display = 'inline';
    document.querySelector('.question-display').style.display = 'inline';
    
    histBtn.setAttribute('disabled','');
    myTimer.innerHTML = 50;

    randomQ()

    var timer = setInterval( function (){
        if (Number(myTimer.textContent) > 0 && questions.length != 0) myTimer.textContent--;
        else {
            clearInterval(timer);
            histBtn.removeAttribute('disabled');
        }
    } , 1000);
}


// Get Random Question
function randomQ(){
    randIndex = Math.floor(Math.random() * questions.length)
    var chooseQ = questions[randIndex]
    
    Object.keys(chooseQ).forEach(function(value, index){
        document.querySelector(`#${value}`).textContent = myChoice.includes(value)? `${index}. ${chooseQ[value]}`: chooseQ[value]
    })
}


// Get Score on Click
myChoice.forEach(value => document.querySelector(`#${value}`).addEventListener('click',function(){
    var myAnswer = (value == document.querySelector('#answer').textContent)? 'Correct' : 'Wrong';
    myTimer.textContent = eval(`Number(myTimer.textContent) ${myScore[myAnswer]} 10`);
    questions.splice(randIndex,1)
    if(questions != 0) randomQ();
}))


// Get History on Click
function openHist() {
    console.log('clicked');
}


// Add event listener to generate button
generateBtn.addEventListener("click", startQuiz);
histBtn.addEventListener("click", openHist);


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

]