// Cards



const card = [
    { // TODO
        name:"Art",
        color:"Blue",
        desc:"Restores two sanity points.",
        unlock:20
    },
    {
        name:"Bandage",
        color:"Green",
        desc:"Prevents bleeding.",
        unlock:6
    },
    {
        name:"Bleed",
        color:"Red",
        desc:"Deals one heart of damage after three turns.",
        unlock:5
    },
    {
        name:"Burn",
        color:"Orange",
        desc:"Burns your entire hand of cards.",
        unlock:2
    },
    {
        name:"Flower",
        color:"Yellow",
        desc:"Does nothing.",
        unlock:0
    },
    {
        name:"Heal",
        color:"Green",
        desc:"Restores one heart.",
        unlock:1
    },
    {
        name:"Key",
        color:"Green",
        desc:"Unlocks all locked card slots.",
        unlock:4
    },
    {
        name:"Knife",
        color:"Red",
        desc:"Deals one heart of damage.",
        unlock:1
    },
    {
        name:"Lock",
        color:"Red",
        desc:"Locks the current card slot for three turns.",
        unlock:3
    },
    { // TODO
        name:"ThumbsUp",
        color:"Blue",
        desc:"Maintains sanity.",
        unlock:20
    }
];
// The 'unlock' attribute shows at what level the card is unlocked in the gallery.
// When this number is surpassed, the card is unlocked.
// Set to '-1' if you want it to be unlocked by default.



function cardAction(slot, cardName) {
    switch (cardName) {
        case "Bandage":
            if (playerStat.feature.health === false) {return;}
            playerStat.bleeding = 0;
            break;
        case "Bleed":
            if (playerStat.feature.health === false) {return;}
            playerStat.bleeding = 3;
            break;
        case "Burn":
            for (var a=0; a<playerHand.length; a++) {
                playerHand[a] = false;
                $(`#card${a}`).html(`<img src='images/card/burn.png' alt='Burned!'></img>`);
            }
            break;
        case "Heal":
            if (playerStat.feature.health === false) {return;}
            playerStat.hearts++;
            if (playerStat.hearts > 3) {playerStat.hearts = 3;}
            //playerStat.bleeding = 0;
            break;
        case "Key":
            for (var a=0; a<playerHand.length; a++) {
                playerStat.lock[a] = 0;
            }
            break;
        case "Knife":
            if (playerStat.feature.health === false) {return;}
            playerStat.hearts--;
            if (playerStat.hearts < 0) {playerStat.hearts = 0;}
            break;
        case "Lock":
            playerStat.lock[slot] = 4;
            break;
    };
};



function setCardColor(colorID) {
    switch (colorID) {
        case "Blue": return "rgba(59,97,191,0.5)"; break;
        case "Green": return "rgba(45,181,45,0.5)"; break;
        case "Orange": return "rgba(143,73,3,0.9)"; break;
        case "Red": return "rgba(224,38,38,0.8)"; break;
        case "Yellow": return "rgba(227,201,57,0.8)"; break;
        default: return "white"; break;
    }
};