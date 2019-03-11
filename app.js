$( document ).ready(function() {
    console.log("ready");

//Game object
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

//function to start the game
    function gameStart(){

//pick a random question from the object array
    //add used questions to used array
    //if all questions have been used display final screen

//pick the corresponding correct answer

//pick two false answers

//start timer

//onkeyup event to all answers

//if statement 
    //timer runs out

    //if answer is correct add to correct and show correct slide with timer interval and get new question

    //else add to incorrect slide with timer interval and generate new question

//

    };





//end docu.ready    
});
