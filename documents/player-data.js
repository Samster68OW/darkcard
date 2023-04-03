// Player Data



// Profile String
var username = 'GUEST';
var playerStat = {
    wordsSolved:0,
    gamesPlayed:0,
    guessesUsed:0,
    friends:[]
};



function loadProfile() {
    GJAPI.UserFetchCurrent(function(pResponse) {
        if (!pResponse.users) return;
        loggedIn = true;
        // Username
            GJAPI.DataStoreFetch(GJAPI.DATA_STORE_USER, "playerUsernameV2", function(pResponse) {
                if (pResponse.success) {username = pResponse.data.toUpperCase();}
                else {username = 'GUEST';}
                if (username !== 'GUEST') {
                    $('#openProfileButt').html(username.toUpperCase() + "'S PROFILE");
                }
            });
    });
};
function loadProfileStats() {
    // Get profile stats
        GJAPI.DataStoreFetch(GJAPI.DATA_STORE_GLOBAL, `profile${username}`, function(pResponse) {
            if (!pResponse.success) {}
            else {
                var stringDownload = pResponse.data;
                var currentVariable = '';
                var currentItem = 0;
                for (var a=0; a<stringDownload.length; a++) {
                    if (stringDownload[a] === '.') {
                        if (currentItem === 0) {}
                        else if (currentItem === 1) {playerStat.wordsSolved = Number(currentVariable);}
                        else if (currentItem === 2) {playerStat.gamesPlayed = Number(currentVariable);}
                        else if (currentItem === 3) {playerStat.guessesUsed = Number(currentVariable);}
                        currentVariable = '';
                        currentItem++;
                    }
                    else {
                        currentVariable += stringDownload[a];
                    }
                }
            }
        });
    // Get profile friends
        GJAPI.DataStoreFetch(GJAPI.DATA_STORE_GLOBAL, `friends${username}`, function(pResponse) {
            if (!pResponse.success) {}
            else {
                var stringDownload = pResponse.data;
                var currentVariable = '';
                for (var a=0; a<stringDownload.length; a++) {
                    if (stringDownload[a] === '.') {
                        playerStat.friends.push(currentVariable);
                        currentVariable = '';
                    }
                    else {currentVariable += stringDownload[a];}
                }
            }
        });
};



// Save Data
function saveData() {
        if (username === 'GUEST') {return;}
    // Save username to grab stats later
        GJAPI.DataStoreSet(GJAPI.DATA_STORE_USER, `playerUsernameV2`, username);
    // Save user data in a long string
        var output = `${username}.${playerStat.wordsSolved}.${playerStat.gamesPlayed}.${playerStat.guessesUsed}.`;
        GJAPI.DataStoreSet(GJAPI.DATA_STORE_GLOBAL, `profile${username}`, output);
    // Save user friends list
        playerStat.friends.sort();
        var output2 = ``;
        for (var a=0; a<playerStat.friends.length; a++) {
            output2 += playerStat.friends[a] + '.';
        }
        GJAPI.DataStoreSet(GJAPI.DATA_STORE_GLOBAL, `friends${username}`, output2);
};



// Build Profile Screen
function buildProfileScreen(currentUsername) {
    loadSpace(2);
    if (currentUsername !== username) {return;}
    // Build Profile
        $('#profUsername').html(username);
        $('#profWordsSolved').html(`<span style="font-size:10vw;">${playerStat.wordsSolved}</span><br>Words Solved`);
        // Average Guesses
            var avgGuesses = playerStat.guessesUsed / playerStat.gamesPlayed;
            if (isNaN(avgGuesses)) {avgGuesses = 'N/A';}
            else {avgGuesses = Math.round(avgGuesses * 1000) / 1000;}
            $('#profAvgGuesses').html(`<span style="font-size:10vw;">${avgGuesses}</span><br>Average Score`);
        // Friends List
            var display = '<span style="font-size:5vw;">Friends List</span><br><br><div id="friendListSpot"><table id="friendListTable">';
            for (var b=0; b<playerStat.friends.length; b++) {
                display += `<tr><td onclick='removeFriend(${b});'>${playerStat.friends[b]}</td></tr>`;
            }
            display += `<tr><td onclick='addFriendScreen();'>Click here to add a new friend!</td></tr>`;
            display += '</table></div><br>Click on a friend to remove them.';
            $('#profFriendsListSpot').html(display);
};
function removeFriend(id) {
    playerStat.friends.splice(id, 1);
    buildProfileScreen(username);
    saveData();
};



// Inbox and Messages
function sendMessage(recipient, message) {
    if (recipient === 'GUEST') {return;}
    GJAPI.DataStoreFetch(GJAPI.DATA_STORE_GLOBAL, `mailbox${recipient}`, function(pResponse) {
        if (!pResponse.success) {var stringDownload = '';}
        else {var stringDownload = pResponse.data;}
        // Get date
            var today = new Date();
            var date = months[today.getMonth()] + ' ' + today.getDate();
        stringDownload += `(${date}) ${message};`;
        GJAPI.DataStoreSet(GJAPI.DATA_STORE_GLOBAL, `mailbox${recipient}`, stringDownload);
    });
};
function buildUserInbox() {
    if (username === 'GUEST') {return;}
    $('#inboxSpot').html('Loading...');
    loadSpace(5);
    var messagesArray = [];
    // Get user mailbox
        GJAPI.DataStoreFetch(GJAPI.DATA_STORE_GLOBAL, `mailbox${username}`, function(pResponse) {
            if (!pResponse.success) {var stringDownload = '';}
            else {var stringDownload = pResponse.data;}
            var currentVariable = '';
            for (var a=0; a<stringDownload.length; a++) {
                if (stringDownload[a] === ';') {
                    messagesArray.push(currentVariable);
                    currentVariable = '';
                }
                else {currentVariable += stringDownload[a];}
            }
            // Reorder to put newest at the top.
                messagesArray = messagesArray.reverse();
            // Build display
                var display = '<div id="inboxListSpot"><table id="inboxListTable">';
                for (var b=0; b<messagesArray.length; b++) {
                    display += `<tr><td>${messagesArray[b]}</td></tr>`;
                }
                display += '</table></div><br><br><div id="clearInboxButt" onclick="clearMessages();">Clear Messages</div>';
                if (stringDownload === '') {display = 'No new notifications.';}
                $('#inboxSpot').html(display);
        });
};
function clearMessages() {
    GJAPI.DataStoreSet(GJAPI.DATA_STORE_GLOBAL, `mailbox${username}`, "");
    $('#area5').fadeOut(0);
    setTimeout(function(){
        buildUserInbox();
    },250);
};