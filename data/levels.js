// Levels



const baseCampaign = [
    {
        name:"Campaign",
        author:"Half a Man Games"
    },
    {
        name:"Cards",
        dialogue:{
            start:[
                "Welcome. (Click to advance.)",
                "The rules of the game are simple.",
                "Survive the cards.",
                "I will deal you three cards at a time.",
                "Click on a card to play it.",
                "Once you have successfully cleared all of the cards, you win.",
                "Good luck."
            ],
            end:[
                "Well done.",
                "See you next time."
            ]
        },
        deck:[
            ["Art", 2],
            ["Flower", 3],
            ["Heal", 3],
            ["ThumbsUp", 2]
        ],
        shuffle:true,
        feature:{health:false, sanity:false, timer:-1}
    },
    {
        name:"Dangerous",
        dialogue:{
            start:[
                "This time, the cards are a bit more dangerous.",
                "I'd be careful."
            ],
            end:[
                "That wasn't too bad, was it?"
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
        feature:{health:true, sanity:false, timer:-1}
    },
    {
        name:"Burn",
        dialogue:{
            start:[],
            end:[]
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
        feature:{health:true, sanity:false, timer:-1}
    },
    {
        name:"Lock",
        dialogue:{
            start:[],
            end:[]
        },
        deck:[
            ["Art", 5],
            ["Burn", 5],
            ["Flower", 5],
            ["Heal", 3],
            ["Knife", 6],
            ["Lock", 2],
            ["ThumbsUp", 4]
        ],
        shuffle:true,
        feature:{health:true, sanity:false, timer:-1}
    },
    {
        name:"Key",
        dialogue:{
            start:[],
            end:[]
        },
        deck:[
            ["Art", 4],
            ["Burn", 5],
            ["Flower", 4],
            ["Heal", 3],
            ["Key", 5],
            ["Knife", 6],
            ["Lock", 5],
            ["ThumbsUp", 3]
        ],
        shuffle:true,
        feature:{health:true, sanity:false, timer:-1}
    },
    {
        name:"Bleeding",
        dialogue:{
            start:[],
            end:[]
        },
        deck:[
            ["Art", 4],
            ["Bleed", 5],
            ["Burn", 5],
            ["Flower", 4],
            ["Heal", 5],
            ["Key", 3],
            ["Knife", 3],
            ["Lock", 3],
            ["ThumbsUp", 3]
        ],
        shuffle:true,
        feature:{health:true, sanity:false, timer:-1}
    },
    {
        name:"Bandage",
        dialogue:{
            start:[],
            end:[]
        },
        deck:[
            ["Art", 4],
            ["Bandage", 5],
            ["Bleed", 6],
            ["Burn", 5],
            ["Flower", 4],
            ["Heal", 5],
            ["Key", 5],
            ["Knife", 3],
            ["Lock", 3]
        ],
        shuffle:true,
        feature:{health:true, sanity:false, timer:-1}
    },
    {
        name:"Art",
        dialogue:{
            start:[
                "You've been doing pretty well.",
                "But how long can you keep your wits about you?"
            ],
            end:[]
        },
        deck:[
            ["Art", 5],
            ["Bandage", 6],
            ["Bleed", 6],
            ["Burn", 5],
            ["Flower", 4],
            ["Heal", 5],
            ["Key", 3],
            ["Knife", 3],
            ["Lock", 3]
        ],
        shuffle:true,
        feature:{health:true, sanity:true, timer:-1}
    },
    {
        name:"Appreciation",
        dialogue:{
            start:[],
            end:[]
        },
        deck:[
            ["Bandage", 6],
            ["Bleed", 6],
            ["Burn", 5],
            ["Flower", 4],
            ["Heal", 5],
            ["Key", 5],
            ["Knife", 3],
            ["Lock", 3],
            ["ThumbsUp", 8]
        ],
        shuffle:true,
        feature:{health:true, sanity:true, timer:-1}
    },
    {
        name:"Countdown",
        dialogue:{
            start:[
                "You know, I really have enjoyed our time together.",
                "But unfortunately, your time is up.",
                "I'm not letting you get any farther.",
                "I've got a promise to keep."
            ],
            end:[
                "Incredible.",
                "Simply incredible."
            ]
        },
        deck:[
            ["Bandage", 7],
            ["Bleed", 8],
            ["Burn", 6],
            ["Flower", 2],
            ["Heal", 5],
            ["Key", 4],
            ["Knife", 3],
            ["Lock", 4],
            ["Stress", 3],
            ["ThumbsUp", 8]
        ],
        shuffle:true,
        feature:{health:true, sanity:true, timer:90}
    }
];



const basePuzzles = [
    {
        name:"Puzzles",
        author:"Half a Man Games"
    },
    {
        name:"Bleed Chaining",
        dialogue:{
            start:[
                "The Bleed card takes a few turns to fully activate.",
                "Playing another Bleed resets the counter.",
                "Use this trick to complete the puzzle."
            ],
            end:[]
        },
        deck:[
            ["Knife", 3],
            ["Bleed", 3],
            ["Knife", 1],
            ["Flower", 1],
            ["Bleed", 3],
            ["Bandage", 1],
            ["Heal", 2]
        ],
        shuffle:false,
        feature:{health:true, sanity:false, timer:-1}
    },
];



const commPuzzles = [
    {
        name:"Community Puzzles",
        author:"Various Authors"
    },
    {
        name:"Darksight by Texture_Turtle",
        dialogue:{
            start:[
                "The Omen Card turns into a knife after a round.",
                "Use this to your advantage.",
                "Good luck.",
            ],
            end:[]
        },
        deck:[
            ["Omen", 4],
            ["Burn", 1],
            ["Knife", 1],
            ["Stress", 2],
            ["Omen", 3],
            ["Stress", 2],
            ["Knife", 1],
            ["Omen", 3],
            ["Lock", 1],
            ["ThumbsUp", 1],
        ],
        shuffle:false,
        feature:{health:true, sanity:true, timer:-1}
    }
];