// Dialogue Functions



// Variables
let transcript;
const wordSpeed = 30;
let currentID;
let currentPhrase;
let dialoguePlaying = false;
let dialogueType;



function playDialogue(type) {
    dialogueArea = true;
    if (type === 'start') {transcript = level.dialogue.start;}
    else if (type === 'end') {transcript = level.dialogue.end;}
    dialogueType = type;
    currentID = 0;
    currentPhrase = "";
    if (transcript.length === 0) {
        dialoguePlaying = false;
        currentID = -1;
        skipDialogue();
    }
    else {
        dialoguePlaying = true;
        placeLetter();
    }
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
            dialogueArea = false;
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