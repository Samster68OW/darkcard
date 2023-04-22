// Player Data



// User Data
let farthestLevel = [];
let cardsPlayed = 0;



// Load Data
function loadData() {
    if (localStorage.getItem('farthestLevel') !== null) {
        farthestLevel = JSON.parse(localStorage.getItem('farthestLevel'));
    }
    if (localStorage.getItem('cardsPlayed') !== null) {
        cardsPlayed = Number(localStorage.getItem('cardsPlayed'));
    }
};



// Save Data
function saveData() {
    localStorage.setItem('farthestLevel', JSON.stringify(farthestLevel));
    localStorage.setItem('cardsPlayed', cardsPlayed);
};



// Reset Data
function resetData() {
    if (confirm("Are you sure you want to reset all of your save data?") === true) {
        farthestLevel = [];
        for (var i=0; i<playlist.length; i++) {
            farthestLevel.push(1);
        }
        cardsPlayed = 0;
        saveData();
        location.reload();
    }
};