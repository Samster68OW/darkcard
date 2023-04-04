// Dialogue Functions



// Variables
var transcript;
const wordSpeed = 30;
var currentID;
var currentPhrase;
var dialoguePlaying = false;
var dialogueType;



function playDialogue(type) {
    dialogueArea = true;
    if (type === 'start') {transcript = level.dialogue.start;}
    else if (type === 'end') {transcript = level.dialogue.end;}
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
                doneWithDialogue();
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