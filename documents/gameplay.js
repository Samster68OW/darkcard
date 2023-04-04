// Gameplay Functions



// Big Variables
var currentPlaylist;
var currentLevel;
var level;

// Round Variables
var currentDeck;
var playerHand;
var playerstat;
var dialogueArea = false;
var currentMode;



function playGame(selectedLevel) {
    // Setup
        currentLevel = selectedLevel;
        level = playlist[currentPlaylist][currentLevel];
        currentMode = playlist[currentPlaylist].gameMode;
        playerStat = {
            bleeding:0,
            feature:level.feature,
            hearts:3,
            lock
        }
        for (var b=0; b<handSize; b++) {playerStat.lock.push(0);}
        setupFeatures();
    // Build Card Deck
        currentDeck = [];
        for (var a=0; a<level.deck.length; a++) {
            for (var b=0; b<level.deck[a][1]; b++) {
                currentDeck.push(level.deck[a][0]);
            }
        }
        currentDeck = shuffle(currentDeck);
        playerHand = [];
        for (var b=0; b<handSize; b++) {playerHand.push(false);}
        updateCardsLeft();
    // Display
        loadSpace(2);
        updateFeatures();
        $('#area2').fadeOut(0);
        setTimeout(function(){
            $('#area2').fadeIn(2000);
        },2000);
        setTimeout(function(){
            playDialogue('start');
        },4000);
};
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
};
function setupFeatures() {
    // Health
        $('#heartTable').fadeOut(0);
        if (playerStat.feature.health === true) {$('#heartTable').fadeIn(0);}
};



function dealCards() {
    // Lower locks
        for (var d=0; d<playerHand.length; d++) {
            if (playerStat.lock[d] > 0) {
                playerStat.lock[d]--;
            }
        }
        if (currentDeck.length === 0) {
            playerStat.lock = [0, 0, 0];
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
        setTimeout(function(){updateCardsLeft();},100)
        setTimeout(function(){
            for (var c=0; c<slideIn.length; c++) {
                $(`#card${c}`).removeClass('slideCardDownClass');
            }
        },300);
};
function updateCardsLeft() {
    $('#cardsLeftSpot').html(`<span>${currentDeck.length}</span>`);
};
function findCard(cardName) {
    for (var a=0; a<card.length; a++) {
        if (card[a].name === cardName) {return a;}
    }
};



function playCard(slot) {
    // Check lock
        if (playerStat.lock[slot] > 0) {
            $(`#card${slot}`).addClass('unavailableClass');
            setTimeout(function(){
                $(`#card${slot}`).removeClass('unavailableClass');
            },200);
            return;
        }
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
                $(`#heart${a}`).css('background-image','url(images/heart_empty.png');
                var check = -1 * (a - 4);
                if (playerStat.hearts >= check) {
                    $(`#heart${a}`).css('background-image','url(images/heart_full.png');
                    if (playerStat.bleeding > 1) {$(`#heart${a}`).css('background-image','url(images/heart_bleed.png');}
                }
            }
        }
};
function checkEndConditions() {
    var gameOver = false;
    // Lower bleeding
        playerStat.bleeding--;
        if (playerStat.bleeding < 0) {playerStat.bleeding = -1;}
        else if (playerStat.bleeding === 1) {playerStat.hearts--;}
    // Loss conditions
        if (playerStat.hearts <= 0) {gameOver = true;}
        if (gameOver === true) {
            $('#cardTableSpot').html('');
            setTimeout(function(){
                backToMenu('lose');
            },2000);
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
            setTimeout(function(){
                playDialogue('end');
            },500);
        }
        dealCards();
};



function doneWithDialogue() {
    dialogueArea = false;
    if (dialogueType === 'start') {dealCards();}
    else if (dialogueType === 'end') {
        if (farthestLevel[currentPlaylist] === currentLevel) {
            farthestLevel[currentPlaylist]++;
            if (farthestLevel[currentPlaylist] >= playlist[currentPlaylist].length) {
                farthestLevel[currentPlaylist] = playlist[currentPlaylist].length - 1;
            }
        }
        backToMenu('win');
    }
};
function backToMenu(state) {
    if (state === 'win') {
        $('#area2').fadeOut(2000);
        setTimeout(function(){
            loadSpace(4);
        },3000);
    }
    else if (state === 'lose') {
        setTimeout(function(){
            $('#area2').fadeOut(0);
            $('#area3').fadeIn(0);
            setTimeout(function(){
                $('#area3').fadeOut(2000);
                setTimeout(function() {
                    loadSpace(1);
                },3000);
            },2000);
        },1000);
    }
};