var quotes = [
    'Let go of the hurt. Let go of the anger. Also, let go of the people who habitually bring them into your life. You are your own peacekeeper.',
    'Lay Low & Boss Up',
    'If your not obsessed with your life change it',
    'The more you like yourself, the less you are like anyone else, which makes you unique',
    'Power is not given to you. You have to take it.',
    'Your self-worth is not determined by you. You don\'t have to depend on someone telling you who you are',
    'I don\'t like to gamble, but if theres one thing i\'m willing to bet onabort, it\'s myself.',
    'Giving a fuck doesn\'t really go with my outfit.',
    'When you can\'t control what\'s happening, challenge yourself to control the way you respond to what\'s happening. Thats where your power is.',
    'Dreams Demand Hustle',
    'Darling Just Fucking Own It',
    'I pray you quit overthinking, eplaying failed scenarios, feeding self doubt & seeing the good in everyone but yourself. You deserve more.'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}