// Assignment Code
var generateBtn = document.querySelector("#start");

var myScore = {'Correct':0,'Wrong':0}
var myChoice = ['choice1','choice2','choice3','choice4']

// Start Quiz
function startQuiz(){
    var timer = setInterval( function (){
        (document.getElementById('timer').innerHTML == 0)? clearInterval(timer) : document.getElementById('timer').innerHTML--;
    } , 1000);

    document.querySelector('.start-display').style.display = 'none';
    document.querySelector('.question-display').style.display = 'inline';

    randomQ()
}

// Get Random Question
function randomQ(){
    var randIndex = Math.floor(Math.random()* questions.length)
    var chooseQ = questions[randIndex]
    
    Object.keys(chooseQ).forEach(function(value, index){
        document.querySelector(`#${value}`).textContent = myChoice.includes(value)? `${index}. ${chooseQ[value]}`: chooseQ[value]
    })
    questions.splice(randIndex,1)
    console.log(questions)
}

// Get Score on Click
myChoice.forEach(value => document.querySelector(`#${value}`).addEventListener('click',function(){
    myScore[(value == document.querySelector('#answer').textContent)? 'Correct' : 'Wrong']++;
    console.log(myScore)
    randomQ()
}))


// Add event listener to generate button
generateBtn.addEventListener("click", startQuiz);


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
    }

]