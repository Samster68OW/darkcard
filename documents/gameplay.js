// Gameplay Functions



// Game Options
const handSize = 3;
const maxSanity = 20;

// Big Variables
let currentPlaylist;
let currentLevel;
let level;

// Round Variables
let currentDeck;
let playerHand;
let playerstat;
let dialogueArea = false;
let currentMode;
let canPlayCard;

// Timer
let timeInterval;



function dealCards() {
        canPlayCard = true;
    // Lower locks
        for (var d=0; d<playerHand.length; d++) {
            if (playerStat.lock[d] > 0) {
                playerStat.lock[d]--;
            }
        }
        if (currentDeck.length === 0) {
            playerStat.lock = [0, 0, 0];
        }
    // Alter omens
        for (var d=0; d<playerHand.length; d++) {
            if (playerHand[d] === 'Omen') {
                playerHand[d] = 'Knife';
            }
        }
    // Build
        var slideIn = [false, false, false];
        for (var a=0; a<playerHand.length; a++) {
            if (playerHand[a] === false) {
                slideIn[a] = true;
                if (currentDeck.length === 0) {
                    playerHand.splice(a, 1, false);
                }
                else {
                    playerHand.splice(a, 1, currentDeck[0]);
                    currentDeck.splice(0, 1);
                }
            }
        }
    // Display
        var display = '<table id="cardTable"><tr>';
        for (var b=0; b<playerHand.length; b++) {
            if (playerHand[b] === false) {
                display += `<td id='card${b}' style='cursor:default; opacity:0.0;'></td>`;
            }
            else {
                // Find color
                    var currentColor = setCardColor(card[findCard(playerHand[b])].color);
                    display += `<td id='card${b}' onclick='playCard(${b})' class='cardbgTint' style='background-color:${currentColor}'>`;
                // Card Icon
                    display += `<img src='images/card/${playerHand[b].toLowerCase()}.png' alt='${playerHand[b]}'>`;
                // Card Text
                    if (playerStat.lock[b] > 0) {display += `Locked! x${playerStat.lock[b]}`;}
                display += '</td>';
            }
        }
        display += '</tr></table>';
        $('#cardTableSpot').html(display);
    // Animation
        for (var c=0; c<slideIn.length; c++) {
            if (slideIn[c] === true && playerHand[c] !== false) {
                $(`#card${c}`).addClass('slideCardDownClass');
            }
        }
        setTimeout(function(){ updateCardsLeft();},100);
        setTimeout(function(){
            for (var c=0; c<slideIn.length; c++) {
                $(`#card${c}`).removeClass('slideCardDownClass');
            }
        },300);
};
function updateCardsLeft() {
    if (currentDeck.length <= 5) {
        $('#cardsLeftSpot').html(`<span style='color:yellow'>${currentDeck.length}</span>`);
    }
    else {
        $('#cardsLeftSpot').html(`<span>${currentDeck.length}</span>`);
    }
};
function findCard(cardName) {
    for (var a=0; a<card.length; a++) {
        if (card[a].name === cardName) {return a;}
    }
};



function playCard(slot) {
        if (canPlayCard === false) {return;}
    // Losing sanity
        if (playerStat.feature.sanity === true) {playerStat.sanity--;}
    // Check lock
        if (playerStat.lock[slot] > 0) {
            $(`#card${slot}`).addClass('unavailableClass');
            setTimeout(function(){
                $(`#card${slot}`).removeClass('unavailableClass');
            },200);
            return;
        }
    canPlayCard = false;
    cardsPlayed++;
    cardAction(slot, playerHand[slot]);
    playerHand[slot] = false;
    $(`#card${slot}`).addClass('slideCardUpClass');
    setTimeout(function(){
        updateFeatures();
    },100);
    setTimeout(function(){
        checkEndConditions();
    },280);
};
function updateFeatures() {
    // Health
        if (playerStat.feature.health === true) {
            for (var a=1; a<4; a++) {
                $(`#heart${a}`).css('background-image','url(images/health/heart_empty.png');
                var check = -1 * (a - 4);
                if (playerStat.hearts >= check) {
                    $(`#heart${a}`).css('background-image','url(images/health/heart_full.png');
                    if (playerStat.bleeding > 0) {$(`#heart${a}`).css('background-image','url(images/health/heart_bleed.png');}
                }
            }
        }
    // Sanity
        for (var a=maxSanity; a>0; a--) {
            if (a <= playerStat.sanity) {$(`#sanityCell${a}`).css('opacity','1.0');}
            else if (a > playerStat.sanity) {$(`#sanityCell${a}`).css('opacity','0.0');}
        }
};
function checkEndConditions() {
    var gameOver = false;
    // Lower bleeding
        playerStat.bleeding--;
        if (playerStat.bleeding < 0) {playerStat.bleeding = 0;}
        else if (playerStat.bleeding === 0) {playerStat.hearts--;}
        updateFeatures();
    // Check health
        if (playerStat.hearts <= 0) {
            gameOver = true;
            clearInterval(timeInterval);
            $('#cardTableSpot').html('');
            backToMenu('lose', "You ran out of hearts!");
            return;
        }
    // Check sanity
        if (playerStat.sanity <= 0) {
            gameOver = true;
            clearInterval(timeInterval);
            $('#cardTableSpot').html('');
            backToMenu('lose', "Your sanity meter ran out!");
            return;
        }
    // Neutral conditions
        var cardsCleared = true;
        for (var a=0; a<playerHand.length; a++) {
            if (playerHand[a] !== false) {cardsCleared = false;}
        }
    // Win conditions
        if (gameOver === false && currentDeck.length === 0 && cardsCleared === true) {
            gameOver = true;
            clearInterval(timeInterval);
            setTimeout(function(){
                playDialogue('end');
            },500);
        }
        dealCards();
};



// Timer Functions
function updateTimer() {
    var displayTime = playerStat.feature.timer.toString();
    if (playerStat.feature.timer > 60) {
        var minutes = Math.floor(playerStat.feature.timer / 60);
        var seconds = playerStat.feature.timer - (minutes * 60);
        if (seconds.toString().length === 1) {seconds = `0${seconds}`;}
        displayTime = `${minutes}:${seconds}`;
    }
    $('#timerSpot').html(displayTime);
    if (displayTime <= 30) {$('#timerSpot').css('color','yellow');}
    else {$('#timerSpot').css('color','white');}
};
function timerLoop() {
    timeInterval = setInterval(function(){
        playerStat.feature.timer--;
        if (playerStat.feature.timer <= -1) {
            clearInterval(timeInterval);
            $('#cardTableSpot').html('');
            backToMenu('lose', "You ran out of time!");
        }
        else {updateTimer();}
    },1000);
};