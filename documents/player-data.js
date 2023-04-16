// Player Data



// User Data
var username = 'Player';
var farthestLevel = [];



var loggedIn = false;
function loadData() {
    GJAPI.UserFetchCurrent(function(pResponse) {
        if (!pResponse.users) {return;}
        username = pResponse.users[0].username;
        loggedIn = true;
        // TODO: CHANGE FARTHEST LEVEL TO STRING?
    });
};



// Save Data
function saveData() {
    if (loggedIn === false) {return;}
    // Save farthestLevel
        // TODO STRINGIFY FARTHEST LEVEL
        //GJAPI.DataStoreSet(GJAPI.DATA_STORE_USER, `farthestLevel`, username);
};