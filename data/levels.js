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
        feature:{health:false, sanity:false}
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
        feature:{health:true, sanity:false}
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
        feature:{health:true, sanity:false}
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
        feature:{health:true, sanity:false}
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
        feature:{health:true, sanity:false}
    },
    {
        name:"Bleed",
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
        feature:{health:true, sanity:false}
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
        feature:{health:true, sanity:false}
    },
    {
        name:"Art",
        dialogue:{
            start:[],
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
        feature:{health:true, sanity:true}
    },
    {
        name:"Thumbs Up",
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
        feature:{health:true, sanity:true}
    },
    {
        name:"Stress",
        dialogue:{
            start:[],
            end:[]
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
        feature:{health:true, sanity:true}
    }
];



const basePuzzles = [
    {
        name:"Puzzles",
        author:"Half a Man Games"
    },
    {
        name:"Bleed Chaining", // TODO
        dialogue:{
            start:[],
            end:[]
        },
        deck:[
            ["Bleed", 3],
            ["Bandage", 1],
            ["Bleed", 2],
            ["Bandage", 1],
            ["Flower", 3]
        ],
        shuffle:false,
        feature:{health:true, sanity:false}
    }
];