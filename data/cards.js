// Cards



const card = [
    {
        name:"Art", color:"Blue", desc:"Restores five sanity points.",
        curse:"Stress"
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
        curse:"Lock"
    },
    {
        name:"Flower", color:"Yellow", desc:"Does nothing.",
        curse:"Flower"
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
    {
        name:"Stress", color:"Red", desc:"Decreases sanity by two points.",
        curse:"Art"
    },
    {
        name:"ThumbsUp", color:"Blue", desc:"Restores two sanity points.",
        curse:"Stress"
    }
];



function cardAction(slot, cardName) {
    switch (cardName) {
        case "Art":
            if (playerStat.feature.sanity === false) {return;}
            playerStat.sanity += 6;
            if (playerStat.sanity > maxSanity) {playerStat.sanity = maxSanity;}
            break;
        case "Bandage":
            if (playerStat.feature.health === false) {return;}
            playerStat.bleeding = -1;
            break;
        case "Bleed":
            if (playerStat.feature.health === false) {return;}
            playerStat.bleeding = 2; // Turns
            playerStat.bleeding++; // Counteract subtraction
            break;
        case "Burn":
            for (var a=0; a<playerHand.length; a++) {
                playerHand[a] = false;
                $(`#card${a}`).css('background-image', `url(images/carddetails/cardburn.png)`);
                $(`#card${a}`).css('background-color', `transparent`);
                $(`#card${a}`).html(``);
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
            // Animation
                $('#enemyKnife').removeClass('knifeHoverClass');
                $(`#enemyKnife`).addClass('knifeAttackClass');
                setTimeout(function(){
                   $(`#enemyKnife`).removeClass('knifeAttackClass');
                   $(`#enemyKnife`).addClass('knifeHoverClass');
                },300);
            break;
        case "Lock":
            playerStat.lock[slot] = 4;
            break;
        case "Stress":
            if (playerStat.feature.sanity === false) {return;}
            playerStat.sanity -= 1;
            if (playerStat.sanity < 0) {playerStat.sanity = 0;}
            // Animation
                $('#leftEye').removeClass('leftEyeShakeClass');
                $(`#leftEye`).addClass('eyeBulgeClass');
                $('#rightEye').removeClass('rightEyeShakeClass');
                $(`#rightEye`).addClass('eyeBulgeClass');
                setTimeout(function(){
                   $(`#leftEye`).removeClass('eyeBulgeClass');
                   $('#leftEye').addClass('leftEyeShakeClass');
                   $(`#rightEye`).removeClass('eyeBulgeClass');
                   $('#rightEye').addClass('rightEyeShakeClass');
                },1000);
            break;
        case "ThumbsUp":
            if (playerStat.feature.sanity === false) {return;}
            playerStat.sanity += 3;
            if (playerStat.sanity > maxSanity) {playerStat.sanity = maxSanity;}
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