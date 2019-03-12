$( document ).ready(function() {
    //hide element to be shown later
    $(".questionContainer").hide();
    $(".incorrectScreen").hide();
    $(".correctScreen").hide();
    $(".timesupScreen").hide();
    $(".scoreScreen").hide();

//Game object and variables
var correctCount = 0;
var incorrectCount = 0;
//holds the index of which object in the array is being shown
var questionIndex = 0;
//questions and answers
var game = [
    {
        question: "The rebels (such as Zoe and Mal) are known as",
        correct: "Browncoats",
        falseAnswer1: "Redcoats",
        falseAnswer2: "Greencoats"

    },
    {
        question: "Captain Mal's ship is named after the gruesome Battle of",
        correct: "Serenity Valley",
        falseAnswer1: "Serenity Cove",
        falseAnswer2: "Serenity Plains"

    },
    {
        question: "The governing body of the core planets is known as the",
        correct: "Alliance",
        falseAnswer1: "Legion",
        falseAnswer2: "Union"

    },
    {
        question: "River has telepathic abilities and is known as a",
        correct: "Reader",
        falseAnswer1: "Empath",
        falseAnswer2: "Telepath"

    },
    {
        question: "On what planet did Simon study medicine",
        correct: "Osiris",
        falseAnswer1: "Ariel",
        falseAnswer2: "Beaumonde"

    },
    {
        question: "What did Book use to buy passage on the Serenity?",
        correct: "Fruits and Vegetables",
        falseAnswer1: "A Rare Coin",
        falseAnswer2: "A Goat"

    },
    {
        question: "Who is Mal's second in the duel on Persephone?",
        correct: "Sir Warwick",
        falseAnswer1: "Jayne Cobb",
        falseAnswer2: "Atherton Wing"

    },
    {
        question: "Who is referred to as 'The Ambassador'?",
        correct: "Inara",
        falseAnswer1: "Book",
        falseAnswer2: "Simon"

    },
    {
        question: "Who was Serenity's first mechanic?",
        correct: "Bester",
        falseAnswer1: "Lando",
        falseAnswer2: "Sadot"

    },
    {
        question: "What is missing from River's brain?",
        correct: "Amygdala ",
        falseAnswer1: "Cerebellum",
        falseAnswer2: "Cisterna Magna"

    },
];

//Press enter to play function
$(document).keypress(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        $(".startDiv").hide();
        gameStart();
    }
});

//function to randomize ansers array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle
    while (0 !== currentIndex) {
  
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

 

//function to start the game
    function gameStart(){
        //if all questions have been asked show score screen and give option to play again
        if (questionIndex == game.length){
            $(".questionContainer").hide();
            $(".correct").html(`Correct: ${correctCount}`)
            $(".incorrect").html(`Incorrect: ${incorrectCount}`)
            if (correctCount < incorrectCount){
                $(".inOrOut").html("I'm thinkin' you weren't burdened" + "<br>" + "with an overabundance of schooling")
            }
            else{
                $(".inOrOut").html("You're welcome on my boat.")
            }
            $(".scoreScreen").show();
            
            $(document).keypress(function(e) {
                var keycode = (e.keyCode ? e.keyCode : e.which);
                if (keycode == '13') {
                    correctCount = 0;
                    incorrectCount = 0;
                    questionIndex = 0;
                    $(".scoreScreen").hide();
                    gameStart();
                }
            });
            return;
        }

        //show the questions container and clear any current answers
        $(".questionContainer").show();
        $(".answers").empty();
    
//pick a  question from the object array
        var currentQuestion = game[questionIndex].question;
        $(".question").html(currentQuestion);
 //make temp array for answers       
    var answersArray = [game[questionIndex].correct, game[questionIndex].falseAnswer1,game[questionIndex].falseAnswer2];

 //function to shuffle   
        shuffle(answersArray);
 //answers into html
        for (i=0; i<answersArray.length; i++){
            var answerDiv = $(`<button class = "choices">${answersArray[i]}</button>`);
            $(answerDiv).appendTo(".answers");      
        }

//start timer
//function for timer

count = 11;
timer();
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count--
  if (count <= 0)
  {
    $(".questionContainer").hide();
     clearInterval(counter);
     $(".timesupScreen").show();
     questionIndex++
     incorrectCount++
     setTimeout(function(){
         gameStart();
         $(".timesupScreen").hide();
     },2000);
  }

  $(".timer").html(count);
  
}


//onkeyup event to all answers
$(".choices").click(function() {
    var getInner = $(this).html()
    clearInterval(counter);
    if (getInner == game[questionIndex].correct){
        $(".questionContainer").hide();
        $(".correctScreen").show();
        correctCount++
        questionIndex++

        setTimeout(function(){
            $(".correctScreen").hide();
            gameStart();
        },2000);
    }
    else {
        $(".questionContainer").hide();
        $(".incorrectScreen").show();
        incorrectCount++
        questionIndex++
        setTimeout(function(){
            $(".incorrectScreen").hide();
            gameStart();
        },2000);
     
    }
  });

//


    };


 



//end docu.ready    
});
