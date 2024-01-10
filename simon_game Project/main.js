var sequence = [];
var playerSequence = [];
var level = 1;
var gameStarted = false;
var strictMode = false;
var sounds = {
    red: new Audio('red_sound.mp3'),
    green: new Audio('green_sound.mp3'),
    blue: new Audio('blue_sound.mp3'),
    yellow: new Audio('yellow_sound.mp3')
};

function playSound(color) {
    sounds[color].currentTime = 0;
    sounds[color].play();
}

function animateButtonPress(color) {
    $('#' + color).addClass('pressed');
    setTimeout(function () {
        $('#' + color).removeClass('pressed');
    }, 200);
}

function playSequence() {
    var i = 0;
    var interval = setInterval(function () {
        var color = sequence[i];
        playSound(color);
        animateButtonPress('btn-' + color);
        i++;
        if (i >= sequence.length) {
            clearInterval(interval);
        }
    }, 1000);
}

function addToSequence() {
    var nextColor = Math.floor(Math.random() * 4) + 1;
    sequence.push(nextColor);
}

function startGame() {
    if (!gameStarted) {
        addToSequence();
        playSequence();
        gameStarted = true;
    }
}

function checkSequence() {
    for (var i = 0; i < playerSequence.length; i++) {
        if (playerSequence[i] !== sequence[i]) {
            return false;
        }
    }
    return true;
}

function handleButtonPress(color) {
    if (gameStarted) {
        playSound(color);
        animateButtonPress('btn-' + color);
        playerSequence.push(color);
        if (!checkSequence()) {
            gameOver();
        } else if (playerSequence.length === sequence.length) {
            playerSequence = [];
            level++;
            addToSequence();
            playSequence();
        }
    }
}

function gameOver() {
    if (strictMode) {
        alert('Game Over! You reached level ' + level + ' in strict mode.');
    } else {
        alert('Game Over! You reached level ' + level + '.');
    }
    sequence = [];
    playerSequence = [];
    level = 1;
    gameStarted = false;
}

function restartGame() {
    sequence = [];
    playerSequence = [];
    level = 1;
    gameStarted = false;
    startGame();
}

$(document).ready(function () {
    $('.game-button').click(function () {
        handleButtonPress(parseInt(this.id.split('-')[1]));
    });

    $('#start-btn').click(startGame);

    $('#restart-btn').click(restartGame);
});
