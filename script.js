
    //question bank 1
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
      ]
    ///question bank 2
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

    ]

    ///question bank 3
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

    ]

/////////////////////////////QuestionBank//////////////////////////////


var questionNum = 0;
var userGuess;
var timer;
var score = 0;

////////////////////////renPreviousUser///////////////////
$(document).ready(function () {
    function renPreviousUser(){
        var userName = localStorage.getItem("userName") ;
        var userScore = localStorage.getItem("userScore");
        console.log(userName);
        console.log(userScore);
        var previousUser = $("<li>");
        previousUser.append(userName + " score is " + userScore);
        $("#previousUser").append(previousUser);
        console.log(previousUser);

        //$("#previousUser").append(previousUser);

    }


renPreviousUser();
});


function start(){
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
    //function for triggering the timer
    $("#comQuest").on("click", function(){
    countDown();
    });
///end tag
    
}//start() close tag

/////////////////////////////CommonQuestion///////////////////////////////
function displayCommonQuestions(){
    var questionRow = document.getElementById("commonQuestions");
    var quizOption = document.getElementById("quizOption");

    quizOption.style.display = "block";
    if (quizOption.style.display  === "block"){
        quizOption.style.display = "none";
        questionRow.style.display = "block";
    }
    else{
        quizOption.style.display= "block";
        questionRow.style.display = "none";
    }

    $("#title").children().hide();
    $("#choices").children().hide();
    $("#answer").children().hide();
    $("#sign").children().hide();
    $("#timer").children().hide();
    
    
    //$("#completeMsg").children().hide();
    //$("#finalScore").children().hide();
    //$("#initials").children().hide();
    

    var displayQuest = $("<h2>");
    displayQuest.attr("id", commonQuestions[questionNum].choices);
    displayQuest.append(commonQuestions[questionNum].title);
    $("#title").append(displayQuest);

    for (i = 0; i < 4; i++) {

        var choiceList = $("<button>");
        choiceList.attr("type", "button");
        choiceList.attr("value", commonQuestions[questionNum].choices[i]);
        choiceList.css("margin-top", "50px");
        choiceList.addClass("btn btn-secondary btn-lg btn-block choices");
        choiceList.append(commonQuestions[questionNum].choices[i]);
        $("#choices").append(choiceList);
    }

}//displayCommonQuestions() close tag

var signs ={
    correct: "Correct!",
    incorrect: "Incorrect! 15 seconds taken lol",
    line: "The correct answer is: ",
    done: "All done!",
    finalScore: "Your final score is: ",
    initials: "Enter initials: "
}
//main
$(document).on("click",".choices", function(){
    userGuess = $(this).attr("value");
    $("answer").empty
    

    if(userGuess === commonQuestions[questionNum].answer && timer > 0){
        var result = $("<p>");
        result.append(signs.correct);//append the correct
        $("#answer").append(result)//link it back to html

        score+=5;
        console.log(score)
        questionNum++;
        setTimeout(displayCommonQuestions, 1500);


        //console.log(questionNum, commonQuestions.length);
        
        if(questionNum === commonQuestions.length){
            setTimeout(finalPage, 2500);
            clearInterval(time);
        }
    }
    else if (userGuess != commonQuestions[questionNum].answer && timer > 0){
        
        var result = $("<h5>");
        result.append(signs.incorrect);//append the correct
        $("#sign").append(result);//link it back to html

        var answer = $("<p>");
        answer.append(signs.line,commonQuestions[questionNum].answer);
        $("#answer").append(answer);

        timer -= 15;
        score -= 2;
        questionNum++;
        setTimeout(displayCommonQuestions, 2000);

        //console.log(questionNum, commonQuestions.length);


        if(questionNum === commonQuestions.length){
            setTimeout(finalPage, 2500);
            clearInterval(time);
        }
    }
})//main close tag
/////////////////////////////CommonQuestion///////////////////////////////


function finalPage(){
            $("#completeMsg").children().show();
            $("#finalScore").children().show();
            $("#initials").children().show();
            $("#resetButton").children().hide();
            //trigger the complete msg
            var comepleteMsg = $("<h5>");
            comepleteMsg.append(signs.done);
            $("#completeMsg").append(comepleteMsg);

            //final score
            var finalScoreMsg = $("<p>");
            //finalScoreMsg.append(signs.finalScore);
            finalScoreMsg = signs.finalScore + score;
            $("#finalScore").append(finalScoreMsg);

            //initials
            var initialMsg = $("<p>");
            initialMsg.append(signs.initials);
            var initialBox = $("<input>");
            initialBox.attr("type", "text");
            initialBox.attr("id", "initialBox");
            $("#initials").append(initialMsg,initialBox);

            //submit button
            var initialSubmit = $("<button>");
            initialSubmit.attr("type", "button");
            initialSubmit.attr("id", "submitButton");
            initialSubmit.css("margin-top", "50px");
            initialSubmit.addClass("btn btn-info btn-lg btn-block");
            initialSubmit.html("Submit");
            $("#submitButton").append(initialSubmit);

            //reset button
            var resetButton = $("<button>");
            resetButton.attr("type","button");
            resetButton.attr("id","resetButton");
            resetButton.css("margin-top", "50px");
            resetButton.addClass("btn btn-warning btn-lg btn-block");
            resetButton.html("Reset");
            $("#resetButton").append(resetButton);




            //submit action
            $("#submitButton").on("click", function(){
                var initialInput = document.getElementById("initialBox").value;
                var nameList = $("<p>");
                nameList.append(initialInput + " score is " + score);
                $("#nameList").append(nameList);

                $("#submitButton").children().hide();
                $("#resetButton").children().show();
                //console.log(initialInput);

                localStorage.setItem("userName", JSON.stringify(initialInput));
                localStorage.setItem("userScore", JSON.stringify(score));

        
                
            });
            //reset action
            $("#resetButton").on("click", function(){
                location.reload();
            })
}


////////////////////////////////////Timer///////////////////////////////
function countDown(){
    $("#timer").empty();
    timer = 75;
    var timeDiv = $("<h6>");
    timeDiv.append("Time remaining: " + timer + "seconds");
    $("#timer").append(timeDiv);
    time = setInterval(clock, 1000);

    }

function clock(){
    $("#timer").empty();
    timer--;
    var timeDiv = $("<h6>");
    timeDiv.append("Time remaining: " + timer + "seconds");
    $("#timer").append(timeDiv);
    
    if(timer < 1){
        $("#title").children().hide();
        $("#choices").children().hide();
        $("#answer").children().hide();
        $("#sign").children().hide();
        $("#timer").children().hide();

        setTimeout(finalPage, 1000);
        clearInterval(time);
        
    }
}
////////////////////////////////////Timer///////////////////////////////

////////////////////////////////////Scoreboard popup///////////////////////////////

    
/*
    $("#scoreBoard").on("click", function(){
        //var scoreContent = document.getElementById("modalBody");
        
        renPreviousUser();
        
        });


////////////////////////////////////ScoreBoard///////////////////////////////

////////////////////////////////////addPerson///////////////////////////////
/*
function addPersonToList(event) {
    event.preventDefault();
    var scoreContent = document.getElementById("initialBox");
    var nameList = $("<li>");
    nameList.append(scoreContent);
    $("#nameList").append(nameList);
    console.log(nameList);
    console.log(scoreContent);
  
  }*/
////////////////////////////////////addPerson///////////////////////////////