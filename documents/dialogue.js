// Dialogue Functions



// Variables
var transcript;
var wordSpeed = 30;
var currentID;
var currentPhrase;
var dialoguePlaying = false;
var dialogueType;



function playDialogue(type) {
    dialogueArea = true;
    if (type === 'start') {transcript = level[currentLevel].dialogue.start;}
    else if (type === 'end') {transcript = level[currentLevel].dialogue.end;}
    dialogueType = type;
    currentID = 0;
    currentPhrase = "";
    dialoguePlaying = true;
    placeLetter();
};
function placeLetter() {
    if (currentPhrase.length !== transcript[currentID].length) {
        currentPhrase += transcript[currentID][currentPhrase.length];
    }
    $('#dialogueLocation').html(currentPhrase);
    if (currentPhrase.length < transcript[currentID].length) {
        setTimeout(function(){
            if (dialoguePlaying === true) {placeLetter();}
        },wordSpeed);
    }
    else {
        $('#dialogueLocation').html(currentPhrase + " >");
        dialoguePlaying = false;
    }
};
function skipDialogue() {
    if (dialogueArea === false) {return;}
    if (dialoguePlaying === false) {
        if (currentID === transcript.length-1) {
            $('#dialogueLocation').html('');
            setTimeout(function(){
                done();
            },1000);
        }
        else {
            currentID++;
            currentPhrase = "";
            dialoguePlaying = true;
            placeLetter();
        }
    }
    else {
        dialoguePlaying = false;
        currentPhrase = transcript[currentID];
        placeLetter();
    }
};



function done() {
    dialogueArea = false;
    if (dialogueType === 'start') {dealCards();}
    else if (dialogueType === 'end') {
        if (currentLevel !== level.length-1) {
            currentLevel++;
            if (currentMode === 'campaign') {playGame(currentLevel, 'campaign');}
            else if (currentMode === 'levelselect') {backToMenu('win');}
        }
        else {
            if (currentLevel === level.length-1) {
                currentLevel++;
            }
            backToMenu('win');
        }
    }
};