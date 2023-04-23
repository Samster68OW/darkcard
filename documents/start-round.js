// Start and End the Round



// Start the Round
function playGame(selectedLevel) {
    // Setup
        canPlayCard = false;
        currentLevel = selectedLevel;
        level = playlist[currentPlaylist][currentLevel];
        playerStat = {
            bleeding:0,
            feature:JSON.parse(JSON.stringify(level.feature)),
            hearts:3,
            lock:[],
            sanity:maxSanity,
            curse:5
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
        if (level.shuffle === true) {currentDeck = shuffle(currentDeck)};
        playerHand = [];
        for (var b=0; b<handSize; b++) {playerHand.push(false);}
        updateCardsLeft();
    // Display
        // Animations
            $('#enemyKnife').fadeOut(0);
            if (playerStat.feature.health === true) {
                $('#enemyKnife').fadeIn(0);
                $('#enemyKnife').addClass('knifeHoverClass');
            }
            $('#leftEye').fadeOut(0);
            $('#rightEye').fadeOut(0);
            if (playerStat.feature.sanity === true) {
                $('#leftEye').fadeIn(0);
                $('#rightEye').fadeIn(0);
                $('#leftEye').addClass('leftEyeShakeClass');
                $('#rightEye').addClass('rightEyeShakeClass');
            }
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
    // Sanity
        $('#sanityTable').fadeOut(0);
        $('#sanityWord').fadeOut(0);
        if (playerStat.feature.sanity === true) {
            $('#sanityTable').fadeIn(0);
            $('#sanityWord').fadeIn(0);
        }
        var display = ``;
        for (var a=maxSanity; a>0; a--) {
            display += `<tr><td id='sanityCell${a}'></td></tr>`;
        }
        $('#sanityTable').html(display);
    // Timer
        $('#timerSpot').fadeOut(0);
        if (playerStat.feature.timer > 0) {
            $('#timerSpot').fadeIn(0);
            updateTimer();
        }
};



// End the Round
function doneWithDialogue() {
    if (dialogueType === 'start') {
        dealCards();
        if (playerStat.feature.timer > 0) {
            playerStat.feature.timer--;
            updateTimer();
            setTimeout(function(){
                timerLoop();
            },300);
        }
    }
    else if (dialogueType === 'end') {
        if (farthestLevel[currentPlaylist] === currentLevel) {
            farthestLevel[currentPlaylist]++;
            if (farthestLevel[currentPlaylist] > playlist[currentPlaylist].length) {
                farthestLevel[currentPlaylist] = playlist[currentPlaylist].length;
            }
        }
        backToMenu('win');
    }
};
function backToMenu(state, reason) {
    saveData();
    if (state === 'win') {
        $('#area2').fadeOut(2000);
        setTimeout(function(){
            loadSpace(4);
        },3000);
    }
    else if (state === 'lose') {
        // Lose reason
            $('#deathReason').html('');
            if (reason !== undefined) {
                $('#deathReason').html(reason);
            }
        $('#area2').fadeOut(0);
        $('#area3').fadeIn(0);
        setTimeout(function(){
            $('#area3').fadeOut(2000);
            setTimeout(function() {
                loadSpace(4);
            },3000);
        },2000);
    }
};