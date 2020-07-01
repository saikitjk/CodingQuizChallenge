//function syntaxQuestionBank(){
    var syntaxQuestions = [
        {
            title:'What is the correct syntax for referring to an external script called "xxx.js"?',
            choices:['<script src="xxx.js">','<script href"xxx.js">','<script name="xxx.js">','<script execute="xxx.js">'],
            answer: '<script src="xxx.js">'       
        },
        {
            title: 'The condition in an if / else statement is enclosed within ____.',
            choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
            answer: 'parentheses'
        },
        {
            title:'Inside which HTML element do we put the JavaScript?',
            choices:['<js>','<javascript>','<scripting>','<script>'],
            answer:  '<script>'
        },

        {
            title:'What is the correct JavaScript syntax to change the content of the following HTML element? <p id="demo">This is a demonstration.</p>',
            choices:['document.getElement("p").innerHTML="Hello Word!";','#demo.innerHTML = "Hello Word!";','document.getElmentById("demo").innerHTML="Hello World!";','document.getElmentByName("p").innerHTML="Hello World!";'],
            answer: 'document.getElmentById("demo").innerHTML="Hello World!";'
        }
      ];
//}

//function commonQuestionBank(commonQuestions){
    var commonQuestions = [
        {
            title: 'Commonly used data types DO NOT include:',
            choices: ['strings', 'booleans', 'alerts', 'numbers'],
            answer: 'alerts'
        },
        {
            title: 'How do you write "Hello World" in an alert box?',
            choices: ['msgBox("Hello World");', 'alertBox(Hello World);', 'alert("Hello World");', 'msg("Hello World");'],
            answer: 'alert("Hello World");'
        },
        {
            title: 'How do you call a function named "myFunction"?',
            choices: ['myFunction()', 'call myFunction()', 'call function myFunction()', 'hey myFunction()'],
            answer: 'myFunction()'
        },
        {
            title: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
            choices: ['if i =! 5 then', 'if i <> 5', 'if (i != 5)', 'if (i<>5)'],
            answer: 'if (i != 5)'
        },
        {
            title: 'Which of the following is not a valid JavaScript variable name?',
            choices: ['2names', 'b_first_and_last_names', 'FirstAndLast', 'None of the above'],
            answer: '2names'
        }

    ];

//}

//function longQuestionBank(){
    var longQuestions = [
        {
            title: 'Which types of image maps can be used with JavaScript?',
            choices: ['Server-side image maps', 'Client-side image maps', 'Server-side image maps and Client-side image maps', 'None of the above'],
            answer: 'Client-side image maps'
        },
        {
            title: 'What is the data type of the Go variable if user entered 15 to the following prompt? Go = prompt("How many characters you want to include?")',
            choices: ['string', 'integer', 'boolean;', 'object'],
            answer: 'string'
        },
        {
            title: 'Which event occurs when the user clicks on an HTML element?',
            choices: ['onmouseclick', 'onchange', 'onclick  ', 'onmouseover'],
            answer: 'onclick  '
        },
        {
            title: 'Which best explains getSelection()?',
            choices: ['Returns the VALUE of a selected OPTION.', 'Returns document.URL of the window in focus.', 'Returns the value of cursor-selected text', 'Returns the VALUE of a checked radio input.'],
            answer: 'Returns the value of cursor-selected text'
        },
        {
            title: 'Choose the client-side JavaScript object:',
            choices: ['Database', ' Cursor', 'Client', 'FileUpLoad'],
            answer: 'FileUpLoad'
        }

    ];
//}

function main(){
    var score = 0;
    var instruction = document.getElementById("instruction");
    var quizOption = document.getElementById("quizOption");

    instruction.style.display = "block";
    quizOption.style.display = "none";
    if (instruction.style.display === "block"){
        instruction.style.display = "none";
        quizOption.style.display = "block";
    }
    else{
        instruction.style.display = "block";
        quizOption.style.display = "none";
    }

    

        
    


    /*
    for(var i=0; i < commonQuestions.length; i++){
        var response = window.prompt(commonQuestions[i].title, commonQuestions[i].choices);
        if (response == commonQuestions[i].answer){
            score++;
            console.log("right");
        }
        else{
            score--;
            console.log("wrong");
        }
    }
    console.log('got' + score + '/' + commonQuestions.length)*/
}

