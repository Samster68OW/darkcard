// Player Data



// User Data
let farthestLevel = [];
let cardsPlayed = 0;

// Technique Stats
let perfectBurns = 0;
let bleedChains = 0;

// Options
let soundEffects = 'On';


// Load Data
function loadData() {
    // User Data
    if (localStorage.getItem('farthestLevel') !== null) {
        farthestLevel = JSON.parse(localStorage.getItem('farthestLevel'));
    }
    if (localStorage.getItem('cardsPlayed') !== null) {
        cardsPlayed = Number(localStorage.getItem('cardsPlayed'));
    }
    // Technique Stats
    if (localStorage.getItem('perfectBurns') !== null) {
        perfectBurns = Number(localStorage.getItem('perfectBurns'));
    }
    if (localStorage.getItem('bleedChains') !== null) {
        bleedChains = Number(localStorage.getItem('bleedChains'));
    }
    // Options
    if (localStorage.getItem('soundEffects') !== null) {
        soundEffects = localStorage.getItem('soundEffects');
    }
};



// Save Data
function saveData() {
    // User Data
    localStorage.setItem('farthestLevel', JSON.stringify(farthestLevel));
    localStorage.setItem('cardsPlayed', cardsPlayed);
    // Technique Stats
    localStorage.setItem('perfectBurns', perfectBurns);
    localStorage.setItem('bleedChains', bleedChains);
    // Options
    localStorage.setItem('soundEffects', soundEffects);
};



// Reset Data
function resetData() {
    if (confirm("Are you sure you want to reset all of your save data?") === true) {
        localStorage.clear();
        location.reload();
    }
};