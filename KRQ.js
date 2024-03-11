var orders = [
  "Windrunner",
  "Skybreaker",
  "Dustbringer",
  "Edgedancer",
  "Truthwatcher",
  "Lightweaver",
  "Elsecaller",
  "Willshaper",
  "Stoneward",
  "Bondsmith"
];

var Windrunner = 0;
var Skybreaker = 1;
var Dustbringer = 2;
var Edgedancer = 3;
var Truthwatcher = 4;
var Lightweaver = 5;
var Elsecaller = 6;
var Willshaper = 7;
var Stoneward = 8;
var Bondsmith = 9;

var orderData = [
  {
    name: "a Windrunner",
    color: "#0f3562",
    textColor: "#FFFFFF",
    imageUrl: "https://www.brandonsanderson.com/wp-content/uploads/2020/06/01_windrunner_placard.jpg",
    catchphrase: "I will protect.",
    herald: "Jezerezeh",
    archetype: "King",
    gemstone: "sapphire",
    oathTheme:
      "Windrunner Oaths are themed toward protection, particularly defending innocents or those who are unable to protect themselves.",
    role:
      "The Windrunners are primarily scouts, though they often also work as special forces groups--able to deliver teams of Radiants behind enemy lines for secret missions. The order tends to attract 'big sibling' types, who want to look out for the defenseless--but also those who enjoy action and want to fight for what they believe in. Windrunners tend to be the most like conventional soldiers, believing in structures of command, team dynamics, and the importance of a squad of brothers and sisters. They tend to have larger numbers of squires than other orders and focus more than any other order on mastering their weapons.",
    power1: "Adhesion",
    power1Desc: "bind things together",
    power2: "Gravitation",
    power2Desc:
      "change the direction and strength of an object’s gravitational attraction, including that of yourself, which essentially gives you the power of flight",
    blogName: "Windrunners",
    blogLink: "https://www.brandonsanderson.com/the-ten-orders-of-knights-radiant/#windrunner"
  },
  {
    name: "a Skybreaker",
    color: "#5f5d68",
    textColor: "#FFFFFF",
    imageUrl: "https://www.brandonsanderson.com/wp-content/uploads/2020/06/02_skybreaker_placard.jpg",
    catchphrase: "I will seek justice.",
    herald: "Nalan",
    archetype: "Judge",
    gemstone: "smokestone",
    oathTheme:
      "Skybreaker Oaths are themed toward justice, fighting for causes, and enforcing social rules. They generally reinforce the importance of moral codes, legal structures, and similar boundaries that protect civilization.",
    role:
      "Skybreakers were the enforcers of the Knights Radiant, often tasked with keeping the peace, policing the other orders, and making certain that dangerous or dark forces in the world were contained. This sometimes gave them a bad reputation among the more free-thinking orders of Knights, but the Skybreakers (at their best) were never merciless. They were the ones who believed that nobody, not even a Radiant, should be above being questioned. They were the ones that did the sometimes-tough job of making certain that the orders didn't abuse their power to become tyrants, as the Skybreakers saw that those with powers could easily oppress those who did not.<br>They tend to attract those who believe in the importance of legal code, those who have strong moral codes of their own, and those who think the best defense against anarchy are things like patriotism, moral fiber, and rules to govern behavior. Note that the current incarnation, led by Nale the Herald in his madness, is more rigid than the ancient order--who understood that the law was not perfect, but instead represented an ideal to try to reach over time. Anyone believing in finding true justice, in defending the innocent, and in punishing the guilty would be welcome in the order.",
    power1: "Gravitation",
    power1Desc: "change the direction and strength of an object’s gravitational attraction, including that of yourself, which essentially gives you the power of flight",
    power2: "Division",
    power2Desc: "manipulate the rate an object decays",
    blogName: "Skybreakers",
    blogLink: "https://www.brandonsanderson.com/the-ten-orders-of-knights-radiant/#skybreaker"
  },
  {
    name: "a Dustbringer",
    color: "#b02d2c",
    textColor: "#FFFFFF",
    imageUrl: "https://www.brandonsanderson.com/wp-content/uploads/2020/06/03_dustbringer_placard.jpg",
    catchphrase: "I will seek self-mastery.",
    herald: "Chanaranach",
    archetype: "The Guard",
    gemstone: "ruby",
    oathTheme:
      "Dustbringer oaths were themed toward responsibility. They were led to understand that the powers they used needed to be properly channeled, much as their own desires and wills needed proper form and shape. As a Dustbringer moved through the oaths, they were taught greater powers of destruction--and are one of the only orders where their abilities weren't all available at the beginning, but instead were delivered slowly, as they made the proper oaths. Each oath led to a greater understanding of power, the nature of holding it, and the associated responsibility.",
    role:
      "Dustbringers--though they sometimes objected to the common name for their order, preferring instead to be called Releasers--are living contradictions among the Knights Radiant. They believe great power requires strong wills to control it. They often attract tinkerers who like to dig down into the shape and soul of a thing, break it, and see what makes it work. However, their oaths are themed toward control--that they need to be able to control, contain, and channel the terrible power inside of them. They tend to object to those who focus only on their destructive sides, as they argue that in order to create, one must understand the pieces of the thing they are trying to make. They don’t see themselves as being about destruction--though their powers are the most destructive of any order of Knights Radiant. They instead see their nature as being about control, precision, and understanding. In the Knights Radiant, they tend to act as the equivalent of artillery in a modern army. If you want a large swath of land destroyed or burned, you call in the Dustbringers. However, they were also often used as sappers, engineers, and strategists.<br>They attract anyone who likes to take things apart, who likes to know how things work. They also attract those who are a little foolhardy at times--brave soldiers who see themselves as containing and controlling terrible destruction so it won't get out of hand and hurt innocents.",
    power1: "Division",
    power1Desc: "manipulate the rate an object decays",
    power2: "Abrasion",
    power2Desc: "make objects, including yourself, frictionless",
    blogName: "Dustbringers",
    blogLink: "https://www.brandonsanderson.com/the-ten-orders-of-knights-radiant/#dustbringer"
  },
  {
    name: "an Edgedancer",
    color: "#fcf3ee",
    textColor: "#444444",
    imageUrl: "https://www.brandonsanderson.com/wp-content/uploads/2020/06/04_edgedancer_placard.jpg",
    catchphrase: "I will remember.",
    herald: "Vedeledev",
    archetype: "Healer",
    gemstone: "diamond",
    oathTheme:
      "Edgedancer oaths are themed around remembering the ordinary people of the world--those who aren't powerful generals or Radiants. Too often, the actions of the powerful have terrible effects on the people with no voice, and the Edgedancers consider it their solemn duty to remember that the common people are the ones they truly serve.",
    role:
      "Edgedancers are known as being caring and graceful. Among the Knights Radiant, they see it as their duty to care for the common people, and are often less interested in war than they are about trying to improve the daily lives of the common folk. Often, a mid-sized town would have an Edgedancer or two on permanent assignment, where they'd use Regrowth to provide healing and would work for the common good of the town.<br>Edgedancers tend to be among the more religious of Radiants and is the order where you're most likely to find former religious leaders who end up bonding a spren. During war times, they often act as the mobile medics, eschewing actual combat to heal or pull out the wounded or those trapped in terrible situations. However, there are some renowned for their graceful and skilled prowess in combat, occasionally used as scouts or special forces troops in conjunction with a team of Windrunners or Skybreakers. One should never assume the Edgedancers are in any way base just because they often ignore high society; they are renowned as some of the most refined and graceful Radiants.",
    power1: "Abrasion",
    power1Desc: "make objects, including yourself, frictionless",
    power2: "Progression and Regrowth",
    power2Desc: "heal organisms and alter their growth",
    blogName: "Edgedancers",
    blogLink: "https://www.brandonsanderson.com/the-ten-orders-of-knights-radiant/#edgedancer"
  },
  {
    name: "a Truthwatcher",
    color: "#1e4d39",
    textColor: "#FFFFFF",
    imageUrl: "https://www.brandonsanderson.com/wp-content/uploads/2020/06/05_truthwatcher_placard.jpg",
    catchphrase: "I will seek truth.",
    herald: "Pailiah",
    archetype: "Scholar",
    gemstone: "emerald",
    oathTheme:
      "Truthwatcher oaths are themed around seeking to find ultimate truth and sharing it. They are very concerned with knowledge and the proper exploitation of it. Note that this should not be confused with the Lightweavers, whose oaths are themed toward personal truths about themselves, said for reasons of self-actualization. Truthwatchers are more concerned with the fundamental truths of the universe, and whether or not those in power are being truthful with the people they lead.",
    role:
      "The Truthwatchers are seen as reserved and quiet, mostly known as the most scholarly order of Knights Radiant. They tend to attract scientists primarily, but also scholars or thinkers of all types. This extends to some who might not normally be known as scholarly but instead as someone reserved, often consumed by their own thoughts. In general, they tend to be reserved, particularly in person, though a small minority of Truthwatchers are greatly concerned with the actions of the powerful and might be likened to investigative reporters. These make their opinions known loudly and forcefully, particularly if they think someone in power is abusing that power or lying about fundamental truths. Note that, like all Knights Radiant, there is great disagreement within the order about what is the truth. However, Truthwatchers tend to approach these discussions with enthusiasm, even if they generally prefer to write their opinions rather than speak them. Among the Knights Radiant, the Truthwatchers tend to be those who hold the knowledge and secrets of Surgebinding, and are the ones to discover many of the newer advances in things like fabrial technology.",
    power1: "Progression and Regrowth",
    power1Desc: "heal organisms and alter their growth",
    power2: "Illumination",
    power2Desc: "create illusions",
    blogName: "Truthwatchers",
    blogLink: "https://www.brandonsanderson.com/the-ten-orders-of-knights-radiant/#truthwatcher"
  },
  {
    name: "a Lightweaver",
    color: "#6c011d",
    textColor: "#FFFFFF",
    imageUrl: "https://www.brandonsanderson.com/wp-content/uploads/2020/06/06_lightweaver_placard.jpg",
    catchphrase: "I will speak my truth.",
    herald: "Shalash",
    archetype: "Artist",
    gemstone: "garnet",
    oathTheme:
      "Lightweaver oaths are an oddity, perhaps because their spren themselves tend to be the oddest among all Radiant spren. Instead of speaking specific words, or even words along a certain theme, Lightweavers speak truths about themselves--things they must admit to themselves in order to progress as people. It is theorized that because Lightweavers live on the line between reality and fiction, it is important for them to be able to separate the real from the lie, and only with the proper ability to do so can they move forward.",
    role:
      "Lightweavers are the Radiants most interested in the arts, including all kinds of visual arts and theater. They range widely in personality from the quiet and introspective painter to the outgoing and gregarious stage performer, with everything in between. What unites them tends to be a love of art, though there are even some few who are more interested in intrigue, secrets, and espionage. They are the spies of the Knights Radiant and are often untrusted by others (such as the stoic Skybreakers) for their love of subterfuge. They have a reputation for having looser morals than other orders, but the Lightweavers are quick to point out that their personal values are strong. They just don’t feel they need to match what other, more hardline orders tend to require. They can be vague with oaths, and many say there is far more Cultivation in them than Honor. (Others dispute this, saying that all orders have an equal mix, despite some spren naming themselves 'honorspren.') Lightweavers tend to be free spirits, and many among their order see the importance of entertainment, beauty, and art in a person's life, and strive to make sure that the world doesn't just live through the desolations--because mere survival isn't enough unless there is something to live for.",
    power1: "Illumination",
    power1Desc: "create illusions",
    power2: "Transformation",
    power2Desc: "soulcast objects from one material into another",
    blogName: "Lightweavers",
    blogLink: "https://www.brandonsanderson.com/the-ten-orders-of-knights-radiant/#lightweaver"
  },
  {
    name: "an Elsecaller",
    color: "#125064",
    textColor: "#FFFFFF",
    imageUrl: "https://www.brandonsanderson.com/wp-content/uploads/2020/06/07_elsecaller_placard.jpg",
    catchphrase: "I will reach my potential.",
    herald: "Battah",
    archetype: "Counsellor",
    gemstone: "zircon",
    oathTheme:
      "Elsecaller oaths are, like Lightweavers or Skybreakers, themed toward the individual. In this case, the theme is progress--becoming better with each oath, seeking to explore their true potential and reach it. Because of this, the order is open to many different types, so long as they want to improve themselves.",
    role:
      "Thoughtful, careful, and cautious, the Elsecallers are generally regarded as the wisest of the Radiants. They seek self-improvement and personal betterment in their lives but aren't limited to one specific theme or set of ideals. This makes them one of the most open and welcoming of orders, though they do tend to attract those who are less flamboyant. They have their share of scholars, and often a large number of theologians, but also attract those who are interested in leadership. They are good at encouraging others, but some are known to put their sights upon the things they want and then seize them. In the Knights Radiant, they tend to be among the best tacticians, and are logistical geniuses, aided in part by their abilities to create food and water for armies, but also their ability to move in and out of Shadesmar.",
    power1: "Transformation",
    power1Desc: "soulcast objects from one material into another",
    power2: "Transportation",
    power2Desc: "travel between the Cognitive and Physical realms",
    blogName: "Elsecallers",
    blogLink: "https://www.brandonsanderson.com/the-ten-orders-of-knights-radiant/#elsecaller"
  },
  {
    name: "a Willshaper",
    color: "#672861",
    textColor: "#FFFFFF",
    imageUrl: "https://www.brandonsanderson.com/wp-content/uploads/2020/06/08_willshaper_placard.jpg",
    catchphrase: "I will seek freedom.",
    herald: "Kalak",
    archetype: "Maker",
    gemstone: "amethyst",
    oathTheme:
      "The Willshapers believe strongly that all people should be free to make their own choices. Their oaths are themed toward freedom and letting people be free to express themselves and make their own way in life, how they see it.",
    role:
      "The Willshapers have a reputation for attracting builders, craftspeople, and creators to the Radiants. However, while this aspect of them is accurate, the actual membership of the order is far more varied. Their powers lend themselves to creation, true, but their oaths are focused on freedom and personal fulfillment. Many among the Willshapers are warriors focused on freeing those who are captive, and others are focused on radical self-expression. The Willshapers contain many gregarious and even flamboyant characters who make their own way, taking the path they chose. They are united through a love of building, but some consider building of society to be more important than the building of structures. Among the Willshapers, you'll find both those who dress in very conservative styles and those who wear very daring and original styles. The common ground is that both agree that freedom to express who you are is the important part. Among the Radiants, they are generally focused on building, training, and making infrastructure. In war, they might be sent to a town to fortify it against an oncoming invasion, and before or in the wake of Desolations, they would teach the people things like sanitation, bronzeworking, or other essentials. Anywhere you find someone resisting tyranny or oppression, you'll often find a Willshaper cheering them on.",
    power1: "Transportation",
    power1Desc: "travel between the Cognitive and Physical realms",
    power2: "Cohesion",
    power2Desc: "alter the shape of solid objects",
    blogName: "Willshapers",
    blogLink: "https://www.brandonsanderson.com/the-ten-orders-of-knights-radiant/#willshaper"
  },
  {
    name: "a Stoneward",
    color: "#d26840",
    textColor: "#FFFFFF",
    imageUrl: "https://www.brandonsanderson.com/wp-content/uploads/2020/06/09_stoneward_placard.jpg",
    catchphrase: "I will be there when I’m needed.",
    herald: "Talenelat",
    archetype: "Soldier",
    gemstone: "topaz",
    oathTheme:
      "Stoneward oaths focus on team dynamics, on learning to work with others, and upon being there for those who need them. They put the interests of others before their own interests and will not bend their ideals for the sake of convenience.",
    role:
      "Stonewards are the infantry and ground troops of the Radiants and are renowned as their finest soldiers. (A title that, on occasion, the Windrunners dispute.) They tend to attract those who are most interested in warfare, prowess with weapons, or athletics of any sort. They like a challenge, and in times of peace are seen engaging in (and running) various sporting events of both a military and a non-military nature. Many like the outdoors, and you'll find exploration enthusiasts among them, as well as those who just like the fresh air. They tend to be known for their can-do attitudes and for taking on enormous projects (sometimes more than they can handle). However, most agree that the primary attribute of the Stonewards is their dependability. Though sometimes gregarious, they are never flighty. If a Stoneward is your friend, they will be there for you, and it is a core tenant of their order--to be there when they are needed. Another key attribute is their ability to take a difficult situation with few resources and make something better of it. Though not known as inventors or creators, they are good at improvising solutions to problems in the moment.",
    power1: "Cohesion",
    power1Desc: "alter the shape of solid objects",
    power2: "Tension",
    power2Desc: "alter the stiffness of objects",
    blogName: "Stonewards",
    blogLink: "https://www.brandonsanderson.com/the-ten-orders-of-knights-radiant/#stoneward"
  },
  {
    name: "a Bondsmith",
    color: "#ebc965",
    textColor: "#444444",
    imageUrl: "https://www.brandonsanderson.com/wp-content/uploads/2020/06/10_bondsmith_placard.jpg",
    catchphrase: "I will unite.",
    herald: "Ishi",
    archetype: "Priest",
    gemstone: "heliodor",
    oathTheme:
      "Bondsmith oaths are focused on unity, unification, and bringing together others. However, this is a loose theme, as there are so few Bondsmiths--and the three origins of their powers were so different in personality--that the oaths could end up taking a variety of different shapes, depending on the situation.",
    role:
      "Anyone can become a Bondsmith, subject to persuading one of the three spren who granted Bondsmith powers. Those powers tend to work differently for one Bondsmith than another, and even those powers shared with other orders tend to work differently for Bondsmiths.<br>The Bondsmiths are an unusual in that there are never more than three full members. Historically, they worked to resolve disputes and help set up functioning governments. Even though there can only be three full members, there were times that some Bondsmiths did take squires. Beyond that, many of the retinues that protected the Bondsmiths were considered members of the order--going so far as to swear oaths, even though they didn't have a spren and would never have one. Some even called this the most-pure form of being a Radiant, because these were oaths sworn not in the name of gaining powers, but simply for the good of those oaths themselves.<br>Bondsmiths are generally the heart and soul of the Radiants, the most protected and highly-regarded of the orders, capable of doing incredible things with the nature of oaths, bonds, and power. The order, including the aforementioned squires and attendants, tend to attract the peacemakers of the world, those who want to bring people together rather than divide them.",
    power1: "Tension",
    power1Desc: "alter the stiffness of objects",
    power2: "Adhesion",
    power2Desc: "bind things together",
    blogName: "Bondsmiths",
    blogLink: "https://www.brandonsanderson.com/the-ten-orders-of-knights-radiant/#bondsmith"
  }
];

var traitData = {
  "1b": [35,	75,	20,	15,	80,	0,	100,	35,	50,	70],
  "2b": [25,	0,	10,	60,	100,	30,	20,	25,	15,	30],
  "3b": [60,	40,	100,	20,	15,	85,	0,	65,	75,	80],
  "4b": [24,	45,	42,	83,	88,	45,	10,	10,	35,	49],
  "5b": [90,	55,	95,	47,	10,	50,	13,	57,	93,	30],
  "6b": [10,	0,	61,	25,	89,	55,	100,	45,	23,	20],
  "7b": [9,	52,	100,	7,	47,	53,	41,	59,	65,	0],
  "8b": [45,	79,	52,	10,	85,	41,	80,	53,	37,	0],
  "9b": [15,	25,	70,	35,	100,	43,	20,	11,	42,	0],
  "10b": [0,	15,	80,	10,	50,	90,	30,	70,	15,	20],
  "11b": [10,	100,	55,	0,	20,	25,	79,	42,	50,	25],
  "12b": [35,	90,	15,	0,	100,	10,	85,	20,	40,	15],
  "13b": [48,	60,	12,	61,	100,	39,	85,	0,	50,	75],
  "14b": [60,	0,	23,	85,	45,	81,	75,	100,	30,	70],
  "15b": [45,	75,	87,	50,	50,	13,	79,	15,	85,	70],
  "16b": [25,	15,	0,	8,	45,	85,	57,	100,	15,	11],
  "17b": [69,	88,	45,	20,	53,	0,	25,	30,	100,	20],
  "18b": [12,	15,	100,	15,	50,	78,	13,	60,	0,	10],
  "19b": [70,	75,	45,	0,	100,	85,	10,	90,	10,	30],
  "20b": [35,	100,	65,	50,	60,	20,	15,	25,	0,	20],
  "21b": [25,	11,	55,	69,	22,	31,	44,	75,	30,	70],
  "23b": [0,	25,	22,	55,	85,	100,	15,	75,	15,	15],
  "24b": [75,	85,	23,	59,	85,	25,	22,	15,	30,	90],
  "25b": [25,	15,	85,	20,	20,	75,	0,	70,	20,	20],
  "26b": [85,	85,	47,	90,	49,	35,	0,	30,	70,	100],
  "27b": [55,	81,	45,	60,	89,	31,	85,	30,	47,	80],
  "28b": [15,	55,	55,	0,	15,	100,	76,	53,	45,	10],
  "29b": [75,	90,	0,	40,	85,	25,	88,	100,	70,	25],
  "30b": [65,	31,	40,	0,	40,	45,	15,	85,	100,	20],
  "31b": [25,	45,	100,	0,	41,	35,	10, 75,	76,	25],
  "32b": [42,	75,	40,	22,	80,	0,	100,	64,	80,	15],
  "33b": [78,	70,	80,	50,	0,	60,	50,	50,	100,	75],
  "34b": [0,	10,	100,	10,	41,	69,	79,	85,	50,	20],
  "35b": [58,	20,	20,	100,	84,	59,	16,	25,	0,	70],
  "36b": [25,	40,	20,	10,	0,	70,	30,	20,	70,	0],
  "37b": [40,	38,	60,	20,	20,	35,	0,	100,	40,	10]
};

var quizPrompts = [
  {
    promptLeftText: "Heart on Sleeve",
    promptRightText: "Poker Face",
    traitLeft: "1a",
    traitRight: "1b"
  },
  {
    promptLeftText: "Confident",
    promptRightText: "Needs Reassurance",
    traitLeft: "2a",
    traitRight: "2b"
  },
  {
    promptLeftText: "Cautious",
    promptRightText: "Daring",
    traitLeft: "3a",
    traitRight: "3b"
  },
  {
    promptLeftText: "Library",
    promptRightText: "Dojo",
    traitLeft: "5a",
    traitRight: "5b"
  },
  {
    promptLeftText: "Wolf Pack",
    promptRightText: "Lone Wolf",
    traitLeft: "6a",
    traitRight: "6b"
  },
  {
    promptLeftText: "Peacemaker",
    promptRightText: "Firebrand",
    traitLeft: "7a",
    traitRight: "7b"
  },
  {
    promptLeftText: "Spiritual",
    promptRightText: "Skeptical",
    traitLeft: "8a",
    traitRight: "8b"
  },
  {
    promptLeftText: "Leader",
    promptRightText: "Facilitator",
    traitLeft: "9a",
    traitRight: "9b"
  },
  {
    promptLeftText: "Guard dog",
    promptRightText: "Alley cat",
    traitLeft: "10a",
    traitRight: "10b"
  },
  {
    promptLeftText: "Compassionate",
    promptRightText: "Dispassionate",
    traitLeft: "11a",
    traitRight: "11b"
  },
  {
    promptLeftText: "Heart",
    promptRightText: "Head",
    traitLeft: "12a",
    traitRight: "12b"
  },
  {
    promptLeftText: "Flamboyant",
    promptRightText: "Reserved",
    traitLeft: "13a",
    traitRight: "13b"
  },
  {
    promptLeftText: "Letter of the Law",
    promptRightText: "Spirit of the Law",
    traitLeft: "14a",
    traitRight: "14b"
  },
  {
    promptLeftText: "Free-spirited",
    promptRightText: "Disciplined",
    traitLeft: "15a",
    traitRight: "15b"
  },
  {
    promptLeftText: "Obedient",
    promptRightText: "Rebellious",
    traitLeft: "16a",
    traitRight: "16b"
  },
  {
    promptLeftText: "Creative",
    promptRightText: "Conventional",
    traitLeft: "17a",
    traitRight: "17b"
  },
  {
    promptLeftText: "Dependable",
    promptRightText: "Flexible",
    traitLeft: "18a",
    traitRight: "18b"
  },
  {
    promptLeftText: "Down to Earth",
    promptRightText: "Head in the Clouds",
    traitLeft: "19a",
    traitRight: "19b"
  },
  {
    promptLeftText: "Thinks Outside the Box",
    promptRightText: "Colors Inside the Lines",
    traitLeft: "20a",
    traitRight: "20b"
  },
  {
    promptLeftText: "Tense",
    promptRightText: "Relaxed",
    traitLeft: "21a",
    traitRight: "21b"
  },
  {
    promptLeftText: "Decisive",
    promptRightText: "Indecisive",
    traitLeft: "23a",
    traitRight: "23b"
  },
  {
    promptLeftText: "Likes Change",
    promptRightText: "Likes Stability",
    traitLeft: "24a",
    traitRight: "24b"
  },
  {
    promptLeftText: "Planner",
    promptRightText: "Spontaneous",
    traitLeft: "25a",
    traitRight: "25b"
  },
  {
    promptLeftText: "End Justifies the Means",
    promptRightText: "Honorable Actions",
    traitLeft: "26a",
    traitRight: "26b"
  },
  {
    promptLeftText: "Playful",
    promptRightText: "Serious",
    traitLeft: "27a",
    traitRight: "27b"
  },
  {
    promptLeftText: "Tells the Truth",
    promptRightText: "Bends the Truth",
    traitLeft: "28a",
    traitRight: "28b"
  },
  {
    promptLeftText: "Likes to take things apart",
    promptRightText: "If it ain't broke, don't fix it",
    traitLeft: "29a",
    traitRight: "29b"
  },
  {
    promptLeftText: "Hotel",
    promptRightText: "Camping",
    traitLeft: "30a",
    traitRight: "30b"
  },
  {
    promptLeftText: "Fencing",
    promptRightText: "Boxing",
    traitLeft: "31a",
    traitRight: "31b"
  },
  {
    promptLeftText: "Artistic",
    promptRightText: "Scientific",
    traitLeft: "32a",
    traitRight: "32b"
  },
  {
    promptLeftText: "Book Smart",
    promptRightText: "Street Smart",
    traitLeft: "33a",
    traitRight: "33b"
  },
  {
    promptLeftText: "Paladin",
    promptRightText: "Rogue",
    traitLeft: "34a",
    traitRight: "34b"
  },
  {
    promptLeftText: "Competitive",
    promptRightText: "Casual",
    traitLeft: "35a",
    traitRight: "35b"
  },
  {
    promptLeftText: "Transparency",
    promptRightText: "Need-to-Know",
    traitLeft: "36a",
    traitRight: "36b"
  }
];

// For each prompt, create a list item to be inserted in the list group
function createPromptItems() {
  for (var i = 0; i < quizPrompts.length; i++) {
    var prompt_li = document.createElement("li");

    prompt_li.setAttribute("class", "list-group-item rounded-lg prompt");
    var leftTextSpan = document.createElement("span");
    leftTextSpan.className = "left";
    var leftText = document.createTextNode(quizPrompts[i].promptLeftText + "\u00A0\u00A0");
    leftTextSpan.appendChild(leftText);
    prompt_li.appendChild(leftTextSpan);
    var leftPctSpan = document.createElement("span");
    leftPctSpan.className = "left pct font-weight-bold";
    leftPctSpan.innerHTML = "50%";
    prompt_li.appendChild(leftPctSpan);
    
    var rightTextSpan = document.createElement("span");
    rightTextSpan.className = "right";
    var rightText = document.createTextNode("\u00A0\u00A0" + quizPrompts[i].promptRightText);
    rightTextSpan.appendChild(rightText);
    prompt_li.appendChild(rightTextSpan);
    var rightPctSpan = document.createElement("span");
    rightPctSpan.className = "right pct font-weight-bold";
    rightPctSpan.innerHTML = "50%";
    prompt_li.appendChild(rightPctSpan);

    var clearDiv = document.createElement("div");
    clearDiv.className = "floatClear";
    prompt_li.appendChild(clearDiv);

    var group = document.createElement("div");
    group.className = "column slider-group slider-group-justified";

    var slider = document.createElement("input");
    slider.setAttribute("type", "range");
    slider.setAttribute("min", 0);
    slider.setAttribute("max", 100);
    slider.setAttribute("value", 50);
    slider.className = "slider custom-range";
    var inputHandler = updateSliderValue.bind(prompt_li);
    slider.oninput = inputHandler;
    group.appendChild(slider);

    prompt_li.appendChild(group);

    document.getElementById("quiz").appendChild(prompt_li);
  }
}

function updateSliderValue() {
  var newValue = this.getElementsByClassName("slider")[0].value
  var color = Math.floor(Math.abs(50-newValue) * 5).toString(16);
  var leftPctSpan = this.getElementsByClassName("left pct")[0];
  leftPctSpan.innerHTML = (100 - newValue) + "%";
  var rightPctSpan = this.getElementsByClassName("right pct")[0];
  rightPctSpan.innerHTML = newValue + "%";
  if (newValue > 50) {
    leftPctSpan.setAttribute("style", "color:#" + color + "0000");
    rightPctSpan.setAttribute("style", "color:#00" + color + "00");
  } else if (newValue < 50) {
    leftPctSpan.setAttribute("style", "color:#00" + color + "00");
    rightPctSpan.setAttribute("style", "color:#" + color + "0000");
  }
  jQuery(function ($) {
  $("#submit-btn").prop('disabled', false);
  });
}

createPromptItems();

function sortWithIndices(toSort) {
  for (var i = 0; i < toSort.length; i++) {
    toSort[i] = [toSort[i], i];
  }
  toSort.sort(function(left, right) {
    return left[0] < right[0] ? -1 : 1;
  });
  toSort.sortIndices = [];
  for (var j = 0; j < toSort.length; j++) {
    toSort.sortIndices.push(toSort[j][1]);
    toSort[j] = toSort[j][0];
  }
  return toSort;
}

function normalizeResults(results) {
  var normalizedResults = [];
  for (var i = 0; i < results.length; i++) {
    normalizedResults[i] = Math.floor((120000 - results[i]) / 1200);
  }
  return normalizedResults;
}

function calculateResults() {
  var results = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var sliders = document.getElementsByClassName("slider");
  var promptTrait;
  for (var i = 0; i < quizPrompts.length; i++) {
    var promptSliderValue = sliders[i].value;
    promptTrait = quizPrompts[i].traitRight;
    var tempResults = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var j = 0; j < orders.length; j++) {
      tempResults[j] = Math.abs(traitData[promptTrait][j] - promptSliderValue) ** 2;
      results[j] += tempResults[j];
    }
    console.log("Trait " + promptTrait + " resulted in " + tempResults);
  }
  results[9] *= 1.3;
  console.log("Order totals: " + results);
  return results;
}

jQuery(function ($) {
  $("#submit-btn").click(function () {
  var results = calculateResults();
  var chosenOrder = 0;
  var lowScore = 999999;
  for (var k = 0; k < results.length; k++) {
    if (results[k] < lowScore) {
      chosenOrder = k;
      lowScore = results[k];
    }
  }
  var results = sortWithIndices(results);
  var normalizedResults = normalizeResults(results);
  
  // After clicking submit, add up the totals from answers
  // For each group, find the value that is active
  $(".results").removeClass("d-none");
  $(".results").addClass("d-block");

  
    var progressBars = document.createElement("div");
  progressBars.id = "progressBars";
  progressBars.className = "container";
  for (var i = 0; i < results.length; i++) {
    progressBars.innerHTML += `
<div class="row align-items-center pg-row">
  <div class="order-titles">
	<div class="p-1 col-12 text-center pg-text">${orders[results.sortIndices[i]]}</div>
  </div>
</div>
<div class="row align-items-center pg-row">
  <div class="progress col-11 pg-back" style="height: 30px">
    <div class="progress-bar pg-front" style="height: 30px; width:${normalizedResults[i]}%; background-color:${orderData[results.sortIndices[i]].color} !important; color:${orderData[results.sortIndices[i]].textColor} !important"></div>
  </div>
  <div class="col-1 pg-percent" style="height: 30px; color:black !important">
	<div class="text-center">
		${normalizedResults[i]}%
	</div>
  </div>
</div>`;
  }

/*  var progressBars = document.createElement("div");
  progressBars.id = "progressBars";
  progressBars.className = "container d-flex";
  for (var i = 0; i < results.length; i++) {
    progressBars.innerHTML += `
<div class="d-flex flex-column align-items-right">
  <div class="d-flex flex-row text-right">${orders[results.sortIndices[i]]}</div>`;
  }
  for (i = 0; i< results.length; i++) {
    progressBars.innerHTML += `
    <div class="d-flex flex-row">
<div class="progress col-8" style="height: 25px">
    <div class="progress-bar" style="height: 25px; width:${normalizedResults[i]}%; background-color:${orderData[results.sortIndices[i]].color} !important; color:${orderData[results.sortIndices[i]].textColor} !important">${normalizedResults[i]}%</div>
  </div>
</div>
    </div>`;
  }
  progressBars.innerHTML += `</div>`;*/
  
  document.getElementById("results").innerHTML = `
<div class='text-left'>
Speak again the ancient oaths: Life before death. Strength before weakness. Journey before destination.<p>
<img src="${orderData[chosenOrder].imageUrl}" class="img-fluid"><p>
You are ${orderData[chosenOrder].name} which gives you access to the Surges of ${orderData[chosenOrder].power1} and ${orderData[chosenOrder].power2}. ${orderData[chosenOrder].power1} allows you to ${orderData[chosenOrder].power1Desc}. ${orderData[chosenOrder].power2} allows you to ${orderData[chosenOrder].power2Desc}.<p>
${orderData[chosenOrder].role}<p>
Read more about the ${orderData[chosenOrder].blogName} <a href="${orderData[chosenOrder].blogLink}">here</a>.<p>
If that Order doesn’t fit you or isn’t quite what you expected, read more about each Order <a href="https://www.brandonsanderson.com/the-ten-orders-of-knights-radiant">at this link</a> and pick your favorite.<p>Here's how closely you align with each Order:
` + progressBars.outerHTML + `
<P> <P>
  Please consider <a href="#signupform">signing up for our newsletter</a>. We’ll update you a few times a year with Brandon Sanderson news, including when the Kickstarter for <u>The Way of Kings</u> 10th Anniversary Dragonsteel Edition goes live.
</div>
  `;

  // Hide the quiz after they submit their results
  $("#quiz-container").addClass("d-none");
  $("#submit-btn").addClass("d-none");
  $("#retake-btn").removeClass("d-none");
  $("#edit-btn").removeClass("d-none");
  window.scrollTo(0, 0);
});

  });

function resetSliderValues() {
  var sliders = document.getElementsByClassName("slider");
  for (var i = 0; i < sliders.length; i++) {
    sliders[i].value = 50;
  }
  var pcts = document.getElementsByClassName("pct");
  for (var j = 0; j < pcts.length; j++) {
    pcts[j].innerHTML = "50%";
    pcts[j].setAttribute("style", "color:black");
  }
}

function setUIToQuiz() {
	jQuery(function ($) {
	$('#quiz-container').removeClass('d-none');
	});
	jQuery(function ($) {
	$('#submit-btn').removeClass('d-none');
	});
	jQuery(function ($) {
	$('#retake-btn').addClass('d-none');
	});
	jQuery(function ($) {
	$('#edit-btn').addClass('d-none');
	});
	jQuery(function ($) {
	$('.results').addClass('d-none');
	});
	jQuery(function ($) {
	$('.results').removeClass('d-block');
	});
  window.scrollTo(0, 0);
}


// Refresh the screen to show a new quiz if they click the retake quiz button
jQuery(function ($) {
	$("#retake-btn").click(function () {
  resetSliderValues();
	setUIToQuiz();
});
});

jQuery(function ($) {
$("#edit-btn").click(function () {
  setUIToQuiz();
});
});