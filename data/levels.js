// Levels



var playlist = [];
function buildPlaylists() {
    playlist = [

        baseCampaign,
        basePuzzles
        
    ];
}



const baseCampaign = [
    {
        name:"Campaign",
        author:"Half a Man Games",
        gameMode:"campaign"
    },
    {
        name:"Cards",
        dialogue:{
            start:[
                "Welcome.",
                "The rules of the game are simple...",
                "Survive the cards.",
                "I will deal you three cards at a time.",
                "Click on a card to play it.",
                "Once you have successfully cleared all of the cards, you win.",
                "Good luck."
            ],
            end:[
                "Well done.",
                "However, this is only the beginning."
            ]
        },
        deck:[
            ["Art", 2],
            ["Flower", 3],
            ["Heal", 3],
            ["ThumbsUp", 2]
        ],
        shuffle:true,
        feature:{health:false}
    },
    {
        name:"Knife",
        dialogue:{
            start:[
                "This time, the cards are a bit more dangerous.",
                "I'd be careful."
            ],
            end:[
                "Well done.",
                "Don't worry, I'll restore your health between rounds."
            ]
        },
        deck:[
            ["Art", 3],
            ["Flower", 3],
            ["Heal", 6],
            ["Knife", 5],
            ["ThumbsUp", 3]
        ],
        shuffle:true,
        feature:{health:true}
    },
    {
        name:"Burn",
        dialogue:{
            start:[
                "Now I'm giving you a little more firepower.",
                "But the cards will be much more dangerous.",
                "I'm sure you'll figure it out."
            ],
            end:[
                "Wow, it's getting hot in here!"
            ]
        },
        deck:[
            ["Art", 4],
            ["Burn", 4],
            ["Flower", 3],
            ["Heal", 3],
            ["Knife", 8],
            ["ThumbsUp", 3]
        ],
        shuffle:true,
        feature:{health:true}
    },
    {
        name:"Lock",
        dialogue:{
            start:[
                "I was reading an interesting story the other day.",
                "It was a story about two people.",
                "One man left home and fed pigs...",
                "And the other complained that people were happy.",
                "Which character do you relate to?"
            ],
            end:[
                "Personally, I relate more to the father in the story.",
                "Except I'm not so welcoming to those that have wronged me."
            ]
        },
        deck:[
            ["Art", 5],
            ["Burn", 5],
            ["Flower", 5],
            ["Heal", 3],
            ["Knife", 6],
            ["Lock",2],
            ["ThumbsUp", 4]
        ],
        shuffle:true,
        feature:{health:true}
    },
    {
        name:"Key",
        dialogue:{
            start:[
                "Beans"
            ],
            end:[
                "Beans"
            ]
        },
        deck:[
            ["Art", 4],
            ["Burn", 5],
            ["Flower", 4],
            ["Heal", 3],
            ["Key", 5],
            ["Knife", 6],
            ["Lock",5],
            ["ThumbsUp", 3]
        ],
        shuffle:true,
        feature:{health:true}
    },
    {
        name:"Bleed",
        dialogue:{
            start:[
                "Beans"
            ],
            end:[
                "Beans"
            ]
        },
        deck:[
            ["Art", 4],
            ["Burn", 5],
            ["Flower", 4],
            ["Heal", 5],
            ["Key", 3],
            ["Knife", 3],
            ["Lock",3],
            ["ThumbsUp", 3],
            ["Bleed", 5]
        ],
        shuffle:true,
        feature:{health:true}
    },
    {
        name:"Bandage",
        dialogue:{
            start:[
                "Beans"
            ],
            end:[
                "Beans"
            ]
        },
        deck:[
            ["Art", 4],
            ["Burn", 5],
            ["Flower", 4],
            ["Heal", 5],
            ["Key", 3],
            ["Knife", 3],
            ["Lock",3],
            ["ThumbsUp", 3],
            ["Bleed", 5]
        ],
        shuffle:true,
        feature:{health:true}
    }
];



const basePuzzles = [
    {
        name:"Puzzles",
        author:"Half a Man Games",
        gameMode:"puzzle"
    },
    {
        name:"Puzzle 1",
        dialogue:{
            start:[
                "Welcome.",
                "The rules of the game are simple...",
                "Survive the cards.",
                "I will deal you three cards at a time.",
                "Click on a card to play it.",
                "Once you have successfully cleared all of the cards, you win.",
                "Good luck."
            ],
            end:[
                "Well done.",
                "However, this is only the beginning."
            ]
        },
        deck:[
            ["Art", 2],
            ["Flower", 3],
            ["Heal", 3],
            ["ThumbsUp", 2]
        ],
        shuffle:true,
        feature:{health:false}
    }
];