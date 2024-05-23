//good if we want something customizable
const localQuotes = [
  {
    text: "Frankly, my dear, I don't give a damn.",
    author: "Gone with the Wind",
  },
  {
    text: "I'm going to make him an offer he can't refuse.",
    author: "The Godfather",
  },
  {
    text: "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
    author: "On the Waterfront",
  },
  {
    text: "Toto, I've a feeling we're not in Kansas anymore.",
    author: "The Wizard of Oz",
  },
  {
    text: "Here's looking at you, kid.",
    author: "Casablanca",
  },
  {
    text: "Go ahead, make my day.",
    author: "Sudden Impact",
  },
  {
    text: "All right, Mr. DeMille, I'm ready for my close-up.",
    author: "Sunset Boulevard",
  },
  {
    text: "May the Force be with you.",
    author: "Star Wars",
  },
  {
    text: "Fasten your seatbelts. It's going to be a bumpy night.",
    author: "All About Eve",
  },
  {
    text: "You talking to me?",
    author: "Taxi Driver",
  },
  {
    text: "What we've got here is failure to communicate.",
    author: "Cool Hand Luke",
  },
  {
    text: "I love the smell of napalm in the morning.",
    author: "Apocalypse Now",
  },
  {
    text: "Love means never having to say you're sorry.",
    author: "Love Story",
  },
  {
    text: "The stuff that dreams are made of.",
    author: "The Maltese Falcon",
  },
  {
    text: "E.T. phone home.",
    author: "E.T. the Extra-Terrestrial",
  },
  {
    text: "They call me Mister Tibbs!",
    author: "In the Heat of the Night",
  },
  {
    text: "Rosebud.",
    author: "Citizen Kane",
  },
  {
    text: "Made it, Ma! Top of the world!",
    author: "White Heat",
  },
  {
    text: "I'm as mad as hell, and I'm not going to take this anymore!",
    author: "Network",
  },
  {
    text: "Louis, I think this is the beginning of a beautiful friendship.",
    author: "Casablanca",
  },
  {
    text: "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",
    author: "The Silence of the Lambs",
  },
  {
    text: "Bond. James Bond.",
    author: "Dr. No",
  },
  {
    text: "There's no place like home.",
    author: "The Wizard of Oz",
  },
  {
    text: "I am big! It's the pictures that got small.",
    author: "Sunset Boulevard",
  },
  {
    text: "Show me the money!",
    author: "Jerry Maguire",
  },
  {
    text: "Why don't you come up sometime and see me?",
    author: "She Done Him Wrong",
  },
  {
    text: "I'm walking here! I'm walking here!",
    author: "Midnight Cowboy",
  },
  {
    text: "Play it, Sam. Play 'As Time Goes By.'",
    author: "Casablanca",
  },
  {
    text: "You can't handle the truth!",
    author: "A Few Good Men",
  },
  {
    text: "I want to be alone.",
    author: "Grand Hotel",
  },
  {
    text: "After all, tomorrow is another day!",
    author: "Gone with the Wind",
  },
  {
    text: "Round up the usual suspects.",
    author: "Casablanca",
  },
  {
    text: "I'll have what she's having.",
    author: "When Harry Met Sally...",
  },
  {
    text: "You know how to whistle, don't you, Steve? You just put your lips together and blow.",
    author: "To Have and Have Not",
  },
  {
    text: "You're gonna need a bigger boat.",
    author: "Jaws",
  },
  {
    text: "Badges? We don't need no stinkin' badges!",
    author: "The Treasure of the Sierra Madre",
  },
  {
    text: "I'll be back.",
    author: "The Terminator",
  },
  {
    text: "Today, I consider myself the luckiest man on the face of the earth.",
    author: "The Pride of the Yankees",
  },
  {
    text: "If you build it, he will come.",
    author: "Field of Dreams",
  },
  {
    text: "Mama always said life was like a box of chocolates. You never know what you're gonna get.",
    author: "Forrest Gump",
  },
  {
    text: "We rob banks.",
    author: "Bonnie and Clyde",
  },
  {
    text: "Plastics.",
    author: "The Graduate",
  },
  {
    text: "We'll always have Paris.",
    author: "Casablanca",
  },
  {
    text: "I see dead people.",
    author: "The Sixth Sense",
  },
  {
    text: "Stella! Hey, Stella!",
    author: "A Streetcar Named Desire",
  },
  {
    text: "Oh, Jerry, don't let's ask for the moon. We have the stars.",
    author: "Now, Voyager",
  },
  {
    text: "Shane. Shane. Come back!",
    author: "Shane",
  },
  {
    text: "Well, nobody's perfect.",
    author: "Some Like It Hot",
  },
  {
    text: "It's alive! It's alive!",
    author: "Frankenstein",
  },
  {
    text: "Houston, we have a problem.",
    author: "Apollo 13",
  },
  {
    text: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    author: "Dirty Harry",
  },
  {
    text: "You had me at ‘hello.’",
    author: "Jerry Maguire",
  },
  {
    text: "One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know.",
    author: "Animal Crackers",
  },
  {
    text: "There's no crying in baseball!",
    author: "A League of Their Own",
  },
  {
    text: "La-dee-da, la-dee-da.",
    author: "Annie Hall",
  },
  {
    text: "A boy's best friend is his mother.",
    author: "Psycho",
  },
  {
    text: "Greed, for lack of a better word, is good.",
    author: "Wall Street",
  },
  {
    text: "Keep your friends close, but your enemies closer.",
    author: "The Godfather Part II",
  },
  {
    text: "As God is my witness, I'll never be hungry again.",
    author: "Gone with the Wind",
  },
  {
    text: "Well, here's another nice mess you've gotten me into!",
    author: "Sons of the Desert",
  },
  {
    text: "Say 'hello' to my little friend!",
    author: "Scarface",
  },
  {
    text: "What a dump.",
    author: "Beyond the Forest",
  },
  {
    text: "Mrs. Robinson, you're trying to seduce me. Aren't you?",
    author: "The Graduate",
  },
  {
    text: "Gentlemen, you can't fight in here! This is the War Room!",
    author:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
  },
  {
    text: "Elementary, my dear Watson.",
    author: "The Adventures of Sherlock Holmes",
  },
  {
    text: "Get your stinking paws off me, you damned dirty ape.",
    author: "Planet of the Apes",
  },
  {
    text: "Of all the gin joints in all the towns in all the world, she walks into mine.",
    author: "Casablanca",
  },
  {
    text: "Here's Johnny!",
    author: "The Shining",
  },
  {
    text: "They're here!",
    author: "Poltergeist",
  },
  {
    text: "Is it safe?",
    author: "Marathon Man",
  },
  {
    text: "Wait a minute, wait a minute. You ain't heard nothin' yet!",
    author: "The Jazz Singer",
  },
  {
    text: "No wire hangers, ever!",
    author: "Mommie Dearest",
  },
  {
    text: "Mother of mercy, is this the end of Rico?",
    author: "Little Caesar",
  },
  {
    text: "Forget it, Jake, it's Chinatown.",
    author: "Chinatown",
  },
  {
    text: "I have always depended on the kindness of strangers.",
    author: "A Streetcar Named Desire",
  },
  {
    text: "Hasta la vista, baby.",
    author: "Terminator 2: Judgment Day",
  },
  {
    text: "Soylent Green is people!",
    author: "Soylent Green",
  },
  {
    text: "Open the pod bay doors, HAL.",
    author: "2001: A Space Odyssey",
  },
  {
    text: "Striker: Surely you can't be serious. Rumack: I am serious…and don't call me Shirley.",
    author: "Airplane!",
  },
  {
    text: "Yo, Adrian!",
    author: "Rocky",
  },
  {
    text: "Hello, gorgeous.",
    author: "Funny Girl",
  },
  {
    text: "Toga! Toga!",
    author: "Animal House",
  },
  {
    text: "Listen to them. Children of the night. What music they make.",
    author: "Dracula",
  },
  {
    text: "Oh, no, it wasn't the airplanes. It was Beauty killed the Beast.",
    author: "King Kong",
  },
  {
    text: "My precious.",
    author: "The Lord of the Rings: The Two Towers",
  },
  {
    text: "Attica! Attica!",
    author: "Dog Day Afternoon",
  },
  {
    text: "Sawyer, you're going out a youngster, but you've got to come back a star!",
    author: "42nd Street",
  },
  {
    text: "Listen to me, mister. You're my knight in shining armor. Don't you forget it. You're going to get back on that horse, and I'm going to be right behind you, holding on tight, and away we're gonna go, go, go!",
    author: "On Golden Pond",
  },
  {
    text: "Tell 'em to go out there with all they got and win just one for the Gipper.",
    author: "Knute Rockne, All American",
  },
  {
    text: "A martini. Shaken, not stirred.",
    author: "Goldfinger",
  },
  {
    text: "Who's on first?",
    author: "The Naughty Nineties",
  },
  {
    text: "Cinderella story. Outta nowhere. A former greenskeeper, now, about to become the Masters champion. It looks like a miracle… It's in the hole! It's in the hole! It's in the hole!",
    author: "Caddyshack",
  },
  {
    text: "Life is a banquet, and most poor suckers are starving to death!",
    author: "Auntie Mame",
  },
  {
    text: "If you are a minority of one, the truth is the truth.",
    author: "Gandhi",
  },
  {
    text: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    author: "Dirty Harry",
  },
  {
    text: "I'm king of the world!",
    author: "Titanic",
  },
  {
    text: "I know what you're thinking: 'Did he fire six shots or only five?' Well, to tell you the truth, in all this excitement I kind of lost track myself. But being this is a .44 Magnum, the most powerful handgun in the world, and would blow your head clean off, you've got to ask yourself one question: 'Do I feel lucky?' Well, do you, punk?",
    author: "Dirty Harry",
  },
  {
    text: "Well, nobody's perfect.",
    author: "Some Like It Hot",
  },
  {
    text: "It's alive! It's alive!",
    author: "Frankenstein",
  },
  {
    text: "I'm the king of the world!",
    author: "Titanic",
  },
];
