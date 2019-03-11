$( document ).ready(function() {
    console.log("ready");
    $(".questionContainer").hide();
    $(".incorrectScreen").hide();
    $(".correctScreen").hide();
    $(".timesupScreen").hide();
    $(".scoreScreen").hide();

//Game object
var correctCount = 0;
var incorrectCount = 0;
var questionIndex = 0;
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

] 
//Press enter to play function
$(document).keypress(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        console.log('You pressed enter! - keypress');
        $(".startDiv").hide();
        gameStart();
    }
});

//function to randomize ansers array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
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

        if (questionIndex == game.length){
            $(".correct").html(`Correct: ${correctCount}`)
            $(".incorrect").html(`Incorrect: ${incorrectCount}`)
            $(".scoreScreen").show();
            
            $(document).keypress(function(e) {
                var keycode = (e.keyCode ? e.keyCode : e.which);
                if (keycode == '13') {
                    console.log('You pressed enter! - keypress');
                    correctCount = 0;
                    incorrectCount = 0;
                    questionIndex = 0;
                    $(".scoreScreen").hide();
                    gameStart();
                }
            });
            return;
        }



        count = 10;
        $(".questionContainer").show();
        $(".answers").empty();
    
//pick a  question from the object array
        var currentQuestion = game[questionIndex].question;
        console.log(currentQuestion);
        $(".question").html(currentQuestion);
 //make temp array for answers       
    var answersArray = [game[questionIndex].correct, game[questionIndex].falseAnswer1,game[questionIndex].falseAnswer2];

 //function to shuffle   
        var shuffledAnswered = shuffle(answersArray);
 //answers into html
        for (i=0; i<answersArray.length; i++){
            var answerDiv = $(`<div class = "choices">${answersArray[i]}</div>`);
            $(answerDiv).appendTo(".answers");      
        }

//start timer
//function for timer


var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count--
  if (count <= 0)
  {
     clearInterval(counter);
     $(".timesupScreen").show();
     questionIndex++
     incorrectCount++
     setTimeout(function(){
         gameStart();
         $(".timesupScreen").hide();
     },1000);
  }

  $(".timer").html(count);
  
}


//onkeyup event to all answers
$(".choices").click(function() {
    var getInner = $(this).html()
    console.log(getInner);
    clearInterval(counter);
    if (getInner == game[questionIndex].correct){
        $(".correctScreen").show();
        correctCount++
        questionIndex++

        setTimeout(function(){
            gameStart();
            $(".correctScreen").hide();
        },1000);
    }
    else {
        clearInterval(counter);
        $(".incorrectScreen").show();
        incorrectCount++
        questionIndex++
        setTimeout(function(){
            gameStart();
            $(".incorrectScreen").hide();
        },1000);
     
    }
  });

//


    };


 



//end docu.ready    
});
