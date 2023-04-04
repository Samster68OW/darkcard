// Cards



const card = [
    { // TODO
        name:"Art", color:"Blue", desc:"Restores two sanity points.",
        curse:"Flower" // TODO
    },
    {
        name:"Bandage", color:"Green", desc:"Prevents bleeding.",
        curse:"Bleed"
    },
    {
        name:"Bleed", color:"Red", desc:"Deals one heart of damage after three turns.",
        curse:"Bandage"
    },
    {
        name:"Burn", color:"Orange", desc:"Burns your entire hand of cards.",
        curse:"Flower" // TODO
    },
    {
        name:"Flower", color:"Yellow", desc:"Does nothing.",
        curse:"Flower" // TODO
    },
    {
        name:"Heal", color:"Green", desc:"Restores one heart.",
        curse:"Knife"
    },
    {
        name:"Key", color:"Green", desc:"Unlocks all locked card slots.",
        curse:"Lock"
    },
    {
        name:"Knife", color:"Red", desc:"Deals one heart of damage.",
        curse:"Heal"
    },
    {
        name:"Lock", color:"Red", desc:"Locks the current card slot for three turns.",
        curse:"Key"
    },
    { // TODO
        name:"ThumbsUp", color:"Blue", desc:"Maintains sanity.",
        curse:"Flower" // TODO
    }
];



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