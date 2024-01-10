// $("button").add(click, function(){
//     $("#").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// })

// At the top of the game.js file, create a new empty array with the name userClickedPattern.
let userClickedPattern = [userChosenColour];

// Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$("handler").add(click, function(){

    //  create a new variable called userChosenColour to store the id of the button that got clicked.
    let userChosenColour = $("#").this();
})
// create a new array 
let buttonColours = ["red", "blue", "green", "yellow"];

// create a new blank array 
let gamePattern = [];

// create a new function 
function nextSequence() {

    // generate a new random number between 0 and 3, and store it in a variable called randomNumber 
    let randomNumber = Math.floor(Math.random()*(max - min + 1))+ min;
    // Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    // to test minimun and max numbr-Math.floor(.99*(100 - 1 + 1))+ 1;
    
    // Create a new variable
    // use the randomNumber from step 2 to select a random colour from the buttonColours array.
    let randomChosenColour = buttonColours[randomNumber];
   
    // Add the new randomChosenColour generated ,to the end of the gamePattern.
    gamePattern.push(randomChosenColour);
   
    // Use jQuery to select the button with the same id as the randomChosenColour
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   
    // Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

}
nextSequence();