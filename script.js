
      ///question bank 1
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
    
    //question bank 2
    var synQuestions = [
        {
            title2:'Inside which HTML element do we put the JavaScript?',
            choices2:['js','javascript','scripting','script'],
            answer2:  'script'
        },
        {
            title2: 'The condition in an if / else statement is enclosed within ____.',
            choices2: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
            answer2: 'parentheses'
        },
        {
            title2:'What is the correct syntax for referring to an external script called "xxx.js"?',
            choices2:['script src="xxx.js','script href"xxx.js','script name="xxx.js','script execute="xxx.js'],
            answer2: 'script src="xxx.js'       
        },

        {
            title2:'What is the correct JavaScript syntax to change the content of the following HTML element? &ltp&gt id="demo">This is a demonstration.&lt;/p&gt',
            choices2:['document.getElement("p").innerHTML="Hello Word!";','#demo.innerHTML = "Hello Word!";','document.getElmentById("demo").innerHTML="Hello World!";','document.getElmentByName("p").innerHTML="Hello World!";'],
            answer2: 'document.getElmentById("demo").innerHTML="Hello World!";'
        }
      ];


    ///question bank 3
    var longQuestions = [
        {
            title3: 'Which types of image maps can be used with JavaScript?',
            choices3: ['Server-side image maps', 'Client-side image maps', 'Server-side image maps and Client-side image maps', 'None of the above'],
            answer3: 'Client-side image maps'
        },
        {
            title3: 'What is the data type of the Go variable if user entered 15 to the following prompt? Go = prompt("How many characters you want to include?")',
            choices3: ['string', 'integer', 'boolean;', 'object'],
            answer3: 'string'
        },
        {
            title3: 'Which event occurs when the user clicks on an HTML element?',
            choices3: ['onmouseclick', 'onchange', 'onclick', 'onmouseover'],
            answer3: 'onclick'
        },
        {
            title3: 'Which best explains getSelection()?',
            choices3: ['Returns the VALUE of a selected OPTION.', 'Returns document.URL of the window in focus.', 'Returns the value of cursor-selected text', 'Returns the VALUE of a checked radio input.'],
            answer3: 'Returns the value of cursor-selected text'
        },
        {
            title3: 'Choose the client-side JavaScript object:',
            choices3: ['Database', ' Cursor', 'Client', 'FileUpLoad'],
            answer3: 'FileUpLoad'
        }

    ];

/////////////////////////////QuestionBank//////////////////////////////



var userList = [];

////////////////////////Clear scoreboard data///////////////////////////
function clearData(){
    userList.splice(0, userList.length);
    //console.log('diu');
    
    storeUser();
    //console.log('dllm');
    //location.reload();
    $('.modal-body').find('div').empty();
}

////////////////////////Clear scoreboard data///////////////////////////


////////////////////////renPreviousUser///////////////////
$(document).ready(function () {  
    
    getUser(); 
    renPreviousUser();

    function renPreviousUser(){
        for (var i = 0; i < userList.length; i+=2){
            var oldUser = userList[i];
            var oldScore = userList[i+1]
            var previousUser = $("<li>");
            previousUser.attr("data-index", i);

            previousUser.append(oldUser + " score is " + oldScore);
            
            $("#previousUser").append(previousUser);
        }
    }
    function getUser(){
        //console.log(userName);
        //console.log(userScore);
        
        var storedUser = JSON.parse(localStorage.getItem("userList"));

        if (storedUser !== null){
            userList = storedUser;
        }
        //renPreviousUser();
    }
   });
////////////////////////renPreviousUser and get data from local storage///////////////////


var questionNum = 0;
var userGuess;
var timer;
var score = 0;

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
    $("#synQuest").on("click", function(){
        countDown();
    });
    $("#longQuest").on("click", function(){
        countDown();
    });
///end tag
    
}//start() close tag

//sound effect///


/////////////////////////////CommonQuestion///////////////////////////////
function displayCommonQuestions(){
    var questionRow = document.getElementById("commonQuestions");
    var quizOption = document.getElementById("quizOption");
    var wrongSound = document.getElementById("wrongSound");
    var rightSound = document.getElementById("rightSound");

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
    $("#synTitle").children().hide();
    $("#synChoices").children().hide();
    $("#synAnswer").children().hide();
    $("#synSign").children().hide();
    
    
    //$("#completeMsg").children().hide();
    //$("#finalScore").children().hide();
    //$("#initials").children().hide();
    

    var displayQuest = $("<h2>");
    displayQuest.attr("id", commonQuestions[questionNum].choices);
    displayQuest.append(commonQuestions[questionNum].title);
    $("#title").append(displayQuest);
    console.log(displayQuest);

    for (i = 0; i < 4; i++) {
        console.log(commonQuestions.length);
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

        score+=10;
        console.log(score)
        questionNum++;
        rightSound.play();
        setTimeout(displayCommonQuestions, 1100);


        //console.log(questionNum, commonQuestions.length);
        
        if(questionNum === commonQuestions.length){
            if(timer >50){
                score += 10;
            }
            else if (timer > 40 && time <49){
                score += 5;
            }
            rightSound.play();
            setTimeout(finalPage, 1100);
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

        timer -= 10;
        score -= 5;
        questionNum++;
        wrongSound.play();
        setTimeout(displayCommonQuestions, 1500);

        //console.log(questionNum, commonQuestions.length);


        if(questionNum === commonQuestions.length){
            if(timer >50){
                score += 10;
            }
            else if (timer > 40 && time <49){
                score += 5;
            }
            wrongSound.play();
            setTimeout(finalPage, 1500);
            clearInterval(time);
        }
    }
})//main close tag
/////////////////////////////CommonQuestion///////////////////////////////

/////////////////////////////synQuestion///////////////////////////////
function displaySyntaxQuestions(){
    var questionRow = document.getElementById("synQuestions");
    var quizOption = document.getElementById("quizOption");
    var wrongSound = document.getElementById("wrongSound");
    var rightSound = document.getElementById("rightSound");

    quizOption.style.display = "block";
    if (quizOption.style.display  === "block"){
        quizOption.style.display = "none";
        questionRow.style.display = "block";
    }
    else{
        quizOption.style.display= "block";
        questionRow.style.display = "none";
    }

    $("#commonQuestions").hide();
    
    $("#synTitle").children().hide();
    $("#synChoices").children().hide();
    $("#synAnswer").children().hide();
    $("#synSign").children().hide();
    $("#timer").children().hide();
    
    
    

    var displayQuest = $("<h2>");
    displayQuest.attr("id", synQuestions[questionNum].choices2);
    displayQuest.append(synQuestions[questionNum].title2);
    $("#synTitle").append(displayQuest);
    //console.log("0",synQuestions.length);
    //console.log("1",questionNum);
    //console.log("2",synQuestions[questionNum].choices2);
    //console.log("3",synQuestions[questionNum].title2);
    //console.log("4",displayQuest);

    for (i = 0; i < 4; i++) {

        var choiceList = $("<button>");
        choiceList.attr("type", "button");
        choiceList.attr("value", synQuestions[questionNum].choices2[i]);
        choiceList.css("margin-top", "50px");
        choiceList.addClass("btn btn-secondary btn-lg btn-block synChoices");
        choiceList.append(synQuestions[questionNum].choices2[i]);
        $("#synChoices").append(choiceList);
    }

}//displayCommonQuestions() close tag

$(document).on("click",".synChoices", function(){
    userGuess = $(this).attr("value");
    $("synAnswer").empty
    

    if(userGuess === synQuestions[questionNum].answer2 && timer > 0){
        
        var result = $("<p>");
        result.append(signs.correct);//append the correct
        $("#synAnswer").append(result)//link it back to html

        score+=10;
        console.log(score)
        questionNum++;
        rightSound.play();
        setTimeout(displaySyntaxQuestions, 1100);


        //console.log(questionNum, commonQuestions.length);
        
        if(questionNum === synQuestions.length){
            if(timer >50){
                score += 10;
            }
            else if (timer > 40 && time <49){
                score += 5;
            }
            rightSound.play();
            setTimeout(finalPage, 1100);
            clearInterval(time);
        }
    }
    else if (userGuess != synQuestions[questionNum].answer2 && timer > 0){
        
        var result = $("<h5>");
        result.append(signs.incorrect);//append the correct
        $("#synSign").append(result);//link it back to html

        var answer = $("<p>");
        answer.append(signs.line,synQuestions[questionNum].answer2);
        $("#synAnswer").append(answer);

        timer -= 10;
        score -= 5;
        questionNum++;
        wrongSound.play();
        setTimeout(displaySyntaxQuestions, 1500);

        //console.log(questionNum, commonQuestions.length);


        if(questionNum === synQuestions.length){
            if(timer >50){
                score += 10;
            }
            else if (timer > 40 && time <49){
                score += 5;
            }
            wrongSound.play();
            setTimeout(finalPage, 1500);
            clearInterval(time);
        }
    }
})//main close tag
/////////////////////////////synQuestion///////////////////////////////

/////////////////////////////longQuestion///////////////////////////////
function displayLongQuestions(){
    var questionRow = document.getElementById("longQuestions");
    var quizOption = document.getElementById("quizOption");
    var wrongSound = document.getElementById("wrongSound");
    var rightSound = document.getElementById("rightSound");

    quizOption.style.display = "block";
    if (quizOption.style.display  === "block"){
        quizOption.style.display = "none";
        questionRow.style.display = "block";
    }
    else{
        quizOption.style.display= "block";
        questionRow.style.display = "none";
    }

    $("#commonQuestions").hide();
    $("#synQuestions").hide();
    $("#longTitle").children().hide();
    $("#longChoices").children().hide();
    $("#longAnswer").children().hide();
    $("#longSign").children().hide();
    $("#timer").children().hide();
    
    

    var displayQuest = $("<h2>");
    displayQuest.attr("id", longQuestions[questionNum].choices3);
    displayQuest.append(longQuestions[questionNum].title3);
    $("#longTitle").append(displayQuest);
    //console.log("0",longQuestions.length);
    //console.log("1",questionNum);
    //console.log("2",longQuestions[questionNum].choices3);
    //console.log("3",longQuestions[questionNum].title3);
    //console.log("4",displayQuest);
 
    for (i = 0; i < 4; i++) {

        var choiceList = $("<button>");
        choiceList.attr("type", "button");
        choiceList.attr("value", longQuestions[questionNum].choices3[i]);
        choiceList.css("margin-top", "50px");
        choiceList.addClass("btn btn-secondary btn-lg btn-block longChoices");
        choiceList.append(longQuestions[questionNum].choices3[i]);
        $("#longChoices").append(choiceList);
    }

}//displayCommonQuestions() close tag

$(document).on("click",".longChoices", function(){
    userGuess = $(this).attr("value");
    $("longAnswer").empty
    

    if(userGuess === longQuestions[questionNum].answer3 && timer > 0){
        
        var result = $("<p>");
        result.append(signs.correct);//append the correct
        $("#longAnswer").append(result)//link it back to html

        score+=10;
        console.log(score)
        questionNum++;
        rightSound.play();
        setTimeout(displayLongQuestions, 1100);


  
        
        if(questionNum === longQuestions.length){
            if(timer >50){
                score += 10;
            }
            else if (timer > 40 && time <49){
                score += 5;
            }
            rightSound.play();
            setTimeout(finalPage, 1100);
            clearInterval(time);
        }
    }
    else if (userGuess != longQuestions[questionNum].answer3 && timer > 0){
        
        var result = $("<h5>");
        result.append(signs.incorrect);//append the correct
        $("#longSign").append(result);//link it back to html

        var answer = $("<p>");
        answer.append(signs.line,longQuestions[questionNum].answer3);
        $("#longAnswer").append(answer);

        timer -= 10;
        score -= 5;
        questionNum++;
        wrongSound.play();
        setTimeout(displayLongQuestions, 1500);


        if(questionNum === longQuestions.length){
            if(timer >50){
                score += 10;
            }
            else if (timer > 40 && time <49){
                score += 5;
            }
            wrongSound.play();
            setTimeout(finalPage, 1500);
            clearInterval(time);
        }
    }
})//main close tag
/////////////////////////////longQuestion///////////////////////////////

function storeUser(){
    localStorage.setItem("userList", JSON.stringify(userList));//store the array
    }

function finalPage(){
            $("#commonQuestions").hide();
            $("#synQuestions").hide();
            $("#longQuestions").hide();
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
                //console.log(nameList);
                if(initialInput === ""){
                    return;
                }

                userList.push(initialInput, score);//push to userList Array
                console.log(userList);
                
                

                storeUser();
                renPreviousUser();
                
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
