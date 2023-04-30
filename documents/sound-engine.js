// Sound Engine by Half a Man Games
// Created: August 4, 2022
// Updated: APril 29, 2023
// Version: 0.1.0



const sourceFolder = 'sounds/';
const masterVolume = 1.0;



const soundData = [
    {name:'Burn', src:'burn.wav', vol:0.2},
    {name:'Game Over', src:'game_over.wav', vol:0.4},
    {name:'Locked Card', src:'locked_card.wav', vol:0.4},
    {name:'Play Card', src:'play_card.wav', vol:0.4},
    {name:'Select', src:'select.wav', vol:0.6},
];



// Loading the sounds
var soundsLoaded = false;
var soundChannel = [];
function loadSounds() {
    if  (soundsLoaded === true) {return;}
    for (var ch=0; ch<soundData.length; ch++) {
        loadSound(ch);
    }
    soundsLoaded = true;
};
function loadSound(ch) {
    soundChannel[ch] = new Audio(sourceFolder + soundData[ch].src);
    if (soundData[ch].vol === undefined) {soundData[ch].vol = 1.0;}
    if (soundData[ch].loop === undefined) {soundData[ch].loop = false;}
    soundChannel[ch].volume = soundData[ch].vol * masterVolume;
}



// Playing the sounds
var soundList = [];
function playSound(soundFile) {
    if (soundsLoaded === false) {loadSounds();}
    if (soundEffects === 'Off') {return;}
    var n = soundList.length;
    var ch = findSound(soundFile);
    soundList[n] = soundChannel[ch];
    soundList[n].play();
    soundList[n].volume = soundData[ch].vol * masterVolume;
    soundList[n].onended = function() {
        soundList[ch].currentTime = 0;
        if (soundList[ch].loop === true) {playSound(soundFile);}
    };
}
function stopSound() {
    if (soundsLoaded === false) {return;}
    var ch = findSound(soundFile);
    for (var a=0; a<soundList.length; a++) {
        if (soundList[a].name === soundData[ch].name) {
            soundList[a].pause();
            soundChannel[findSound(soundFile)].currentTime = 0;
        }
    }
};
function findSound(soundFile) {
    for (var a=0; a<soundData.length; a++) {
        if (soundFile === soundData[a].name) {return a; break;}
    }
}