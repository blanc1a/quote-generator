//good if we want something customizable
const localQuotes = [
  {
    text: "It does not do to dwell on dreams and forget to live.",
    author: "Albus Dumbledore, Harry Potter and the Philosopher's Stone",
  },
  {
    text: "I solemnly swear that I am up to no good.",
    author: "Harry Potter, Harry Potter and the Prisoner of Azkaban",
  },
  {
    text: "Yer a wizard, Harry.",
    author: "Rubeus Hagrid, Harry Potter and the Philosopher's Stone",
  },
  {
    text: "It's not our abilities that show what we truly are… it is our choices.",
    author: "Albus Dumbledore, Harry Potter and the Chamber of Secrets",
  },
  {
    text: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
    author: "Albus Dumbledore, Harry Potter and the Prisoner of Azkaban",
  },
  {
    text: "I am not worried, Harry. I am with you.",
    author: "Albus Dumbledore, Harry Potter and the Half-Blood Prince",
  },
  {
    text: "We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.",
    author: "Sirius Black, Harry Potter and the Order of the Phoenix",
  },
  {
    text: "After all this time? Always.",
    author: "Severus Snape, Harry Potter and the Deathly Hallows",
  },
  {
    text: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    author: "Albus Dumbledore, Harry Potter and the Chamber of Secrets",
  },
  {
    text: "I am not afraid to keep on living, I am not afraid to walk this world alone.",
    author: "Unknown, Harry Potter and the Goblet of Fire",
  },
  {
    text: "Even the smallest person can change the course of the future.",
    author: "Galadriel, The Lord of the Rings: The Fellowship of the Ring",
  },
  {
    text: "There’s some good in this world, Mr. Frodo, and it’s worth fighting for.",
    author: "Samwise Gamgee, The Lord of the Rings: The Two Towers",
  },
  {
    text: "My precious.",
    author: "Gollum, The Lord of the Rings: The Two Towers",
  },
  {
    text: "You shall not pass!",
    author: "Gandalf, The Lord of the Rings: The Fellowship of the Ring",
  },
  {
    text: "I wish the Ring had never come to me. I wish none of this had happened.",
    author: "Frodo Baggins, The Lord of the Rings: The Fellowship of the Ring",
  },
  {
    text: "All we have to decide is what to do with the time that is given us.",
    author: "Gandalf, The Lord of the Rings: The Fellowship of the Ring",
  },
  {
    text: "The world is not in your books and maps. It’s out there.",
    author: "Gandalf, The Hobbit: An Unexpected Journey",
  },
  {
    text: "Home is now behind you, the world is ahead!",
    author: "Gandalf, The Hobbit: An Unexpected Journey",
  },
  {
    text: "I’m going on an adventure!",
    author: "Bilbo Baggins, The Hobbit: An Unexpected Journey",
  },
  {
    text: "True courage is about knowing not when to take a life, but when to spare one.",
    author: "Gandalf, The Hobbit: An Unexpected Journey",
  },
  {
    text: "May the odds be ever in your favor.",
    author: "Effie Trinket, The Hunger Games",
  },
  {
    text: "I volunteer as tribute!",
    author: "Katniss Everdeen, The Hunger Games",
  },
  {
    text: "Hope. It is the only thing stronger than fear.",
    author: "President Snow, The Hunger Games",
  },
  {
    text: "Remember who the real enemy is.",
    author: "Haymitch Abernathy, The Hunger Games: Catching Fire",
  },
  {
    text: "Fire is catching! And if we burn, you burn with us!",
    author: "Katniss Everdeen, The Hunger Games: Mockingjay - Part 1",
  },
  {
    text: "It takes ten times as long to put yourself back together as it does to fall apart.",
    author: "Finnick Odair, The Hunger Games: Mockingjay - Part 1",
  },
  {
    text: "You love me. Real or not real?",
    author: "Peeta Mellark, The Hunger Games: Mockingjay - Part 2",
  },
  {
    text: "We’re fickle, stupid beings with poor memories and a great gift for self-destruction.",
    author: "Plutarch Heavensbee, The Hunger Games: Mockingjay - Part 2",
  },
  { text: "I see you.", author: "Jake Sully, Avatar" },
  { text: "I’m the king of the world!", author: "Jack Dawson, Titanic" },
  {
    text: "I’ll never let go, Jack. I’ll never let go.",
    author: "Rose DeWitt Bukater, Titanic",
  },
  {
    text: "Nobody puts Baby in a corner.",
    author: "Johnny Castle, Dirty Dancing",
  },
  {
    text: "Me? I'm scared of everything. I'm scared of what I saw, I'm scared of what I did, of who I am, and most of all I'm scared of walking out of this room and never feeling the rest of my whole life the way I feel when I'm with you.",
    author: "Baby, Dirty Dancing",
  },
  {
    text: "It’s not about the money. It’s about sending a message.",
    author: "Unknown, The Dark Knight",
  },
  {
    text: "With great power comes great responsibility.",
    author: "Unknown, Spider-Man",
  },
  { text: "Why so serious?", author: "Unknown, The Dark Knight" },
  {
    text: "I’m not a hero. I’m a high-functioning sociopath. Merry Christmas!",
    author: "Sherlock Holmes, Sherlock",
  },
  { text: "It's a trap!", author: "Unknown, Star Wars: Return of the Jedi" },
  { text: "Inconceivable!", author: "Unknown, The Princess Bride" },
  { text: "You’re gonna need a bigger boat.", author: "Unknown, Jaws" },
  { text: "I am Groot.", author: "Groot, Guardians of the Galaxy" },
  { text: "Just keep swimming.", author: "Dory, Finding Nemo" },
  { text: "To infinity and beyond!", author: "Buzz Lightyear, Toy Story" },
  { text: "I’ll be back.", author: "Unknown, The Terminator" },
  { text: "Houston, we have a problem.", author: "Unknown, Apollo 13" },
  { text: "I am Iron Man.", author: "Tony Stark, Iron Man" },
  { text: "I'm Batman.", author: "Unknown, Batman" },
  { text: "Here's Johnny!", author: "Unknown, The Shining" },
  { text: "I drink your milkshake!", author: "Unknown, There Will Be Blood" },
  { text: "I see dead people.", author: "Unknown, The Sixth Sense" },
  { text: "You can't handle the truth!", author: "Unknown, A Few Good Men" },
  { text: "E.T. phone home.", author: "E.T., E.T. the Extra-Terrestrial" },
  { text: "Yippee-ki-yay, motherfucker!", author: "Unknown, Die Hard" },
  { text: "Here's looking at you, kid.", author: "Unknown, Casablanca" },
  {
    text: "Frankly, my dear, I don't give a damn.",
    author: "Unknown, Gone with the Wind",
  },
  { text: "May the Force be with you.", author: "Unknown, Star Wars" },
  { text: "I'm the king of the world!", author: "Jack Dawson, Titanic" },
  { text: "Elementary, my dear Watson.", author: "Unknown, Sherlock Holmes" },
  {
    text: "Hasta la vista, baby.",
    author: "Unknown, Terminator 2: Judgment Day",
  },
  { text: "Bond. James Bond.", author: "Unknown, Dr. No" },
  {
    text: "Keep your friends close, but your enemies closer.",
    author: "Unknown, The Godfather Part II",
  },
  { text: "Show me the money!", author: "Unknown, Jerry Maguire" },
  { text: "You had me at 'hello.'", author: "Unknown, Jerry Maguire" },
  { text: "I see you.", author: "Jake Sully, Avatar" },
  { text: "I’m flying, Jack!", author: "Rose DeWitt Bukater, Titanic" },
  {
    text: "I volunteer as tribute!",
    author: "Katniss Everdeen, The Hunger Games",
  },
  {
    text: "My precious.",
    author: "Gollum, The Lord of the Rings: The Two Towers",
  },
  {
    text: "You shall not pass!",
    author: "Gandalf, The Lord of the Rings: The Fellowship of the Ring",
  },
  {
    text: "Even the smallest person can change the course of the future.",
    author: "Galadriel, The Lord of the Rings: The Fellowship of the Ring",
  },
  {
    text: "May the odds be ever in your favor.",
    author: "Effie Trinket, The Hunger Games",
  },
  {
    text: "I wish the Ring had never come to me. I wish none of this had happened.",
    author: "Frodo Baggins, The Lord of the Rings: The Fellowship of the Ring",
  },
  {
    text: "There’s some good in this world, Mr. Frodo, and it’s worth fighting for.",
    author: "Samwise Gamgee, The Lord of the Rings: The Two Towers",
  },
  {
    text: "I’m going on an adventure!",
    author: "Bilbo Baggins, The Hobbit: An Unexpected Journey",
  },
  {
    text: "Home is now behind you, the world is ahead!",
    author: "Gandalf, The Hobbit: An Unexpected Journey",
  },
  {
    text: "True courage is about knowing not when to take a life, but when to spare one.",
    author: "Gandalf, The Hobbit: An Unexpected Journey",
  },
  {
    text: "Hope. It is the only thing stronger than fear.",
    author: "President Snow, The Hunger Games",
  },
  {
    text: "Remember who the real enemy is.",
    author: "Haymitch Abernathy, The Hunger Games: Catching Fire",
  },
  {
    text: "Fire is catching! And if we burn, you burn with us!",
    author: "Katniss Everdeen, The Hunger Games: Mockingjay - Part 1",
  },
  {
    text: "It takes ten times as long to put yourself back together as it does to fall apart.",
    author: "Finnick Odair, The Hunger Games: Mockingjay - Part 1",
  },
  {
    text: "You love me. Real or not real?",
    author: "Peeta Mellark, The Hunger Games: Mockingjay - Part 2",
  },
  {
    text: "We’re fickle, stupid beings with poor memories and a great gift for self-destruction.",
    author: "Plutarch Heavensbee, The Hunger Games: Mockingjay - Part 2",
  },
  {
    text: "I am not afraid to keep on living, I am not afraid to walk this world alone.",
    author: "Unknown, Harry Potter and the Goblet of Fire",
  },
  {
    text: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    author: "Albus Dumbledore, Harry Potter and the Chamber of Secrets",
  },
  {
    text: "After all this time? Always.",
    author: "Severus Snape, Harry Potter and the Deathly Hallows",
  },
  {
    text: "We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.",
    author: "Sirius Black, Harry Potter and the Order of the Phoenix",
  },
];
