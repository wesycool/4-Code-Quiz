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
    
    myTimer.textContent = 100;
    randomQ()

    var runTimer = setInterval( function (){
        if (Number(myTimer.textContent) > 0 && questions.length > 35) myTimer.textContent--;
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
    if(questions.length > 35) randomQ();
})

// Save Results
function saveResults(){
    event.preventDefault();

    if (event.path[1][0].value != ''){
        if (myTimer.textContent > Number(localStorage.score) || localStorage.length == 0 ) {
            localStorage.time = new Date();
            localStorage.initials = event.path[1][0].value;
            localStorage.score = myTimer.textContent;
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

    document.querySelector('#nameHS').textContent = localStorage.initials
    document.querySelector('#scoreHS').textContent = localStorage.score
}


// Add event listener to generate button
generateBtn.addEventListener("click", startQuiz);
highScoreBtn.addEventListener("click", highScore);
document.querySelector('#exitBtn').addEventListener('click', function(){location.reload();})


// List of Questions
var questions = [
    {
        "question":`Why so JavaScript and Java have similar name?`,
        "choice1":`JavaScript is a stripped-down version of Java`,
        "choice2":`JavaScript's syntax is loosely based on Java's`,
        "choice3":`They both originated on the island of Java`,
        "choice4":`None of the above`,
        "answer":`choice2`
        
    },
    {
        "question":`When a user views a page containing a JavaScript program, which machine actually executes the script?`,
        "choice1":`The User's machine running a Web browser`,
        "choice2":`The Web server`,
        "choice3":`A central machine deep within Netscape's corporate offices`,
        "choice4":`None of the above`,
        "answer":`choice1`
        
    },
    {
        "question":`______ JavaScript is also called client-side JavaScript.`,
        "choice1":`Microsoft`,
        "choice2":`Navigator`,
        "choice3":`LiveWire`,
        "choice4":`Native`,
        "answer":`choice2`
        
    },
    {
        "question":`__________ JavaScript is also called server-side JavaScript.`,
        "choice1":`Microsoft`,
        "choice2":`Navigator`,
        "choice3":`LiveWire`,
        "choice4":`Native`,
        "answer":`choice3`
    },
    {
        "question":`What are variables used for in JavaScript Programs?`,
        "choice1":`Storing numbers, dates, or other values`,
        "choice2":`Varying randomly`,
        "choice3":`Causing high-school algebra flashbacks`,
        "choice4":`None of the above`,
        "answer":`choice1`
        
    },
    {
        "question":`_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.`,
        "choice1":`Client-side`,
        "choice2":`Server-side`,
        "choice3":`Local`,
        "choice4":`Native`,
        "answer":`choice1`
        
    },
    {
        "question":`Which of the following can't be done with client-side JavaScript?`,
        "choice1":`Validating a form`,
        "choice2":`Sending a form's contents by email`,
        "choice3":`Storing the form's contents to a database file on the server`,
        "choice4":`None of the above`,
        "answer":`choice3`
    },
    {
        "question":`Which of the following are capabilities of functions in JavaScript?`,
        "choice1":`Return a value`,
        "choice2":`Accept parameters and Return a value`,
        "choice3":`Accept parameters`,
        "choice4":`None of the above`,
        "answer":`choice3`
    },
    {
        "question":`Which of the following is not a valid JavaScript variable name?`,
        "choice1":`2names`,
        "choice2":`_first_and_last_names`,
        "choice3":`FirstAndLast`,
        "choice4":`None of the above`,
        "answer":`choice1`
    },
    {
        "question":`______ tag is an extension to HTML that can enclose any number of JavaScript statements.`,
        "choice1":`<SCRIPT>`,
        "choice2":`<BODY>`,
        "choice3":`<HEAD>`,
        "choice4":`<TITLE>`,
        "answer":`choice1`
    },
    {
        "question":`How does JavaScript store dates in a date object?`,
        "choice1":`The number of milliseconds since January 1st, 1970`,
        "choice2":`The number of days since January 1st, 1900`,
        "choice3":`The number of seconds since Netscape's public stock offering.`,
        "choice4":`None of the above`,
        "answer":`choice1`
    },
    {
        "question":`Which of the following attribute can hold the JavaScript version?`,
        "choice1":`LANGUAGE`,
        "choice2":`SCRIPT`,
        "choice3":`VERSION`,
        "choice4":`None of the above`,
        "answer":`choice1`
    },
    {
        "question":`What is the correct JavaScript syntax to write "Hello World"?`,
        "choice1":`System.out.println("Hello World")`,
        "choice2":`println ("Hello World")`,
        "choice3":`document.write("Hello World")`,
        "choice4":`response.write("Hello World")`,
        "answer":`choice3`
    },
    {
        "question":`Which of the following way can be used to indicate the LANGUAGE attribute?`,
        "choice1":`<LANGUAGE="JavaScriptVersion">`,
        "choice2":`<SCRIPT LANGUAGE="JavaScriptVersion">`,
        "choice3":`<SCRIPT LANGUAGE="JavaScriptVersion">    JavaScript statements…</SCRIPT>`,
        "choice4":`<SCRIPT LANGUAGE="JavaScriptVersion"!>    JavaScript statements…</SCRIPT>`,
        "answer":`choice3`
    },
    {
        "question":`Inside which HTML element do we put the JavaScript?`,
        "choice1":`<js>`,
        "choice2":`<scripting>`,
        "choice3":`<script>`,
        "choice4":`<javascript>`,
        "answer":`choice3`
    },
    {
        "question":`What is the correct syntax for referring to an external script called " abc.js"?`,
        "choice1":`<script href=" abc.js">`,
        "choice2":`<script name=" abc.js">`,
        "choice3":`<script src=" abc.js">`,
        "choice4":`None of the above`,
        "answer":`choice3`
    },
    {
        "question":`Which types of image maps can be used with JavaScript?`,
        "choice1":`Server-side image maps`,
        "choice2":`Client-side image maps`,
        "choice3":`Server-side image maps and Client-side image maps`,
        "choice4":`None of the above`,
        "answer":`choice2`
    },
    {
        "question":`Which of the following navigator object properties is the same in both   Netscape and IE?`,
        "choice1":`navigator.appCodeName`,
        "choice2":`navigator.appName`,
        "choice3":`navigator.appVersion`,
        "choice4":`None of the above`,
        "answer":`choice1`
    },
    {
        "question":`Which is the correct way to write a JavaScript array?`,
        "choice1":`var txt = new Array(1:"tim",2:"kim",3:"jim")`,
        "choice2":`var txt = new Array:1=("tim")2=("kim")3=("jim")`,
        "choice3":`var txt = new Array("tim","kim","jim")`,
        "choice4":`var txt = new Array="tim","kim","jim"`,
        "answer":`choice3`
    },
    {
        "question":`What does the <noscript> tag do?`,
        "choice1":`Enclose text to be displayed by non-JavaScript browsers.`,
        "choice2":`Prevents scripts on the page from executing.`,
        "choice3":`Describes certain low-budget movies.`,
        "choice4":`None of the above`,
        "answer":`choice1`
    },
    {
        "question":`If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?`,
        "choice1":`"New Text"?`,
        "choice2":`para1.value="New Text";`,
        "choice3":`para1.firstChild.nodeValue= "New Text";`,
        "choice4":`para1.nodeValue="New Text";`,
        "answer":`choice2`
    },
    {
        "question":`JavaScript entities start with _______ and end with _________.`,
        "choice1":`Semicolon, colon`,
        "choice2":`Semicolon, Ampersand`,
        "choice3":`Ampersand, colon`,
        "choice4":`Ampersand, semicolon`,
        "answer":`choice4`
    },
    {
        "question":`Which of the following best describes JavaScript?`,
        "choice1":`a low-level programming language.`,
        "choice2":`a scripting language precompiled in the browser.`,
        "choice3":`a compiled scripting language.`,
        "choice4":`an object-oriented scripting language.`,
        "answer":`choice4`
    },
    {
        "question":`Choose the server-side JavaScript object?`,
        "choice1":`FileUpLoad`,
        "choice2":`Function`,
        "choice3":`File`,
        "choice4":`Date`,
        "answer":`choice3`
    },
    {
        "question":`Choose the client-side JavaScript object?`,
        "choice1":`Database`,
        "choice2":`Cursor`,
        "choice3":`Client`,
        "choice4":`FileUpLoad`,
        "answer":`choice4`
    },
    {
        "question":`Which of the following is not considered a JavaScript operator?`,
        "choice1":`new`,
        "choice2":`this`,
        "choice3":`delete`,
        "choice4":`typeof`,
        "answer":`choice2`
    },
    {
        "question":`______method evaluates a string of JavaScript code in the context of the specified object.`,
        "choice1":`Eval`,
        "choice2":`ParseInt`,
        "choice3":`ParseFloat`,
        "choice4":`Efloat`,
        "answer":`choice1`
    },
    {
        "question":`Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?`,
        "choice1":`onfocus`,
        "choice2":`onblur`,
        "choice3":`onclick`,
        "choice4":`ondblclick`,
        "answer":`choice2`
    },
    {
        "question":`The syntax of Eval is ________________`,
        "choice1":`[objectName.]eval(numeriC.`,
        "choice2":`[objectName.]eval(string)`,
        "choice3":`[EvalName.]eval(string)`,
        "choice4":`[EvalName.]eval(numeriC.`,
        "answer":`choice2`
    },
    {
        "question":`JavaScript is interpreted by _________`,
        "choice1":`Client`,
        "choice2":`Server`,
        "choice3":`Object`,
        "choice4":`None of the above`,
        "answer":`choice1`
    },
    {
        "question":`Using _______ statement is how you test for a specific condition.`,
        "choice1":`Select`,
        "choice2":`If`,
        "choice3":`Switch`,
        "choice4":`For`,
        "answer":`choice2`
    },
    {
        "question":`Which of the following is the structure of an if statement?`,
        "choice1":`if (conditional expression is true) thenexecute this codeend if`,
        "choice2":`if (conditional expression is true)execute this codeend if`,
        "choice3":`if (conditional expression is true)   {then execute this code>->}`,
        "choice4":`if (conditional expression is true) then {execute this code}`,
        "answer":`choice3`
    },
    {
        "question":`How to create a Date object in JavaScript?`,
        "choice1":`dateObjectName = new Date([parameters])`,
        "choice2":`dateObjectName.new Date([parameters])`,
        "choice3":`dateObjectName := new Date([parameters])`,
        "choice4":`dateObjectName Date([parameters])`,
        "answer":`choice1`
    },
    {
        "question":`The _______ method of an Array object adds and/or removes elements from an array.`,
        "choice1":`Reverse`,
        "choice2":`Shift`,
        "choice3":`Slice`,
        "choice4":`Splice`,
        "answer":`choice4`
    },
    {
        "question":`To set up the window to capture all Click events, we use which of the following statement?`,
        "choice1":`window.captureEvents(Event.CLICK);`,
        "choice2":`window.handleEvents (Event.CLICK);`,
        "choice3":`window.routeEvents(Event.CLICK );`,
        "choice4":`window.raiseEvents(Event.CLICK );`,
        "answer":`choice1`
    },
    {
        "question":`Which tag(s) can handle mouse events in Netscape?`,
        "choice1":`<IMG>`,
        "choice2":`<A>`,
        "choice3":`<BR>`,
        "choice4":`None of the above`,
        "answer":`choice2`
    },
    {
        "question":`____________ is the tainted property of a window object.`,
        "choice1":`Pathname`,
        "choice2":`Protocol`,
        "choice3":`Defaultstatus`,
        "choice4":`Host`,
        "answer":`choice3`
    },
    {
        "question":`To enable data tainting, the end user sets the _________ environment variable.`,
        "choice1":`ENABLE_TAINT`,
        "choice2":`MS_ENABLE_TAINT`,
        "choice3":`NS_ENABLE_TAINT`,
        "choice4":`ENABLE_TAINT_NS`,
        "answer":`choice3`
    },
    {
        "question":`In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.`,
        "choice1":`a wrapper`,
        "choice2":`a link`,
        "choice3":`a cursor`,
        "choice4":`a form`,
        "answer":`choice1`
    },
    {
        "question":`When a JavaScript object is sent to Java, the runtime engine creates a Java wrapper of type ___________`,
        "choice1":`ScriptObject`,
        "choice2":`JSObject`,
        "choice3":`JavaObject`,
        "choice4":`Jobject`,
        "answer":`choice2`
    },
    {
        "question":`_______ class provides an interface for invoking JavaScript methods and examining JavaScript properties.`,
        "choice1":`ScriptObject`,
        "choice2":`JSObject`,
        "choice3":`JavaObject`,
        "choice4":`Jobject`,
        "answer":`choice2`
    },
    {
        "question":`_________ is a wrapped Java array, accessed from within JavaScript code.`,
        "choice1":`JavaArray`,
        "choice2":`JavaClass`,
        "choice3":`JavaObject`,
        "choice4":`JavaPackage`,
        "answer":`choice1`
    },
    {
        "question":`A ________ object is a reference to one of the classes in a Java package, such as netscape.javascript .`,
        "choice1":`JavaArray`,
        "choice2":`JavaClass`,
        "choice3":`JavaObject`,
        "choice4":`JavaPackage`,
        "answer":`choice2`
    },
    {
        "question":`The JavaScript exception is available to the Java code as an instance of __________`,
        "choice1":`netscape.javascript.JSObject`,
        "choice2":`netscape.javascript.JSException`,
        "choice3":`netscape.plugin.JSException`,
        "choice4":`None of the above`,
        "answer":`choice2`
    },
    {
        "question":`To automatically open the console when a JavaScript error occurs which of the following is added to prefs.js?`,
        "choice1":`user_pref(" javascript.console.open_on_error", false);`,
        "choice2":`user_pref("javascript.console.open_error ", true);`,
        "choice3":`user_pref("javascript.console.open_error ", false);`,
        "choice4":`user_pref("javascript.console.open_on_error", true);`,
        "answer":`choice4`
    },
    {
        "question":`To open a dialog box each time an error occurs, which of the following is added to prefs.js?`,
        "choice1":`user_pref("javascript.classic.error_alerts", true);`,
        "choice2":`user_pref("javascript.classic.error_alerts ", false);`,
        "choice3":`user_pref("javascript.console.open_on_error ", true);`,
        "choice4":`user_pref("javascript.console.open_on_error ", false);`,
        "answer":`choice1`
    },
    {
        "question":`The syntax of a blur method in a button object is ______________`,
        "choice1":`Blur()`,
        "choice2":`Blur(contrast)`,
        "choice3":`Blur(value)`,
        "choice4":`Blur(depth)`,
        "answer":`choice1`
    },
    {
        "question":`The syntax of capture events method for document object is ______________`,
        "choice1":`captureEvents()`,
        "choice2":`captureEvents(args eventType)`,
        "choice3":`captureEvents(eventType)`,
        "choice4":`captureEvents(eventVal)`,
        "answer":`choice3`
    },
    {
        "question":`The syntax of close method for document object is ______________`,
        "choice1":`Close(doC.`,
        "choice2":`Close(object)`,
        "choice3":`Close(val)`,
        "choice4":`Close()`,
        "answer":`choice4`
    },
    {
        "question":`What is mean by "this" keyword in javascript?`,
        "choice1":`It refers current object`,
        "choice2":`It referes previous object`,
        "choice3":`It is variable which contains value`,
        "choice4":`None of the above`,
        "answer":`choice1`
    }
];