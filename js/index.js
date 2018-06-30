"use strict";
$('.textarea').click(function () {
    $(this).find('span').next().focus()
});

let names = ["Acid", "Aero", "Agile", "Alco", "Alter", "Answer", "Ant", "Arch", "Art", "Aspect", "Audience", "Aura", "Aurora", "Awe", "Badge", "Bait", "Bandage", "Bank", "Banks", "Bargain", "Barrage", "Basis", "Bat", "Beam", "Beast", "Beauty", "Bee", "Beetle", "Bell", "Bells", "Bird", "Blade", "Blank", "Block", "Blunder", "Bold", "Bolt", "Bomb", "Bone", "Bones", "Bonus", "Books", "Boost", "Boot", "Boots", "Brash", "Brass", "Brave", "Bribe", "Brick", "Bright", "Brush", "Cable", "Canine", "Canvas", "Cash", "Catch", "Cause", "Cell", "Cent", "Chain", "Chalk", "Chance", "Change", "Chaos", "Charge", "Chart", "Cheat", "Checkmate", "Click", "Clock", "Clocks", "Cloud", "Coarse", "Coil", "Collar", "Complex", "Console", "Crash", "Craven", "Cross", "Crumbs", "Cycle", "Dapper", "Dare", "Data", "Deal", "Design", "Detail", "Dish", "Disk", "Double", "Dynamic", "Dynamo", "Edge", "Ego", "Elite", "Eternity", "Fearless", "Feature", "Feedback", "Fickle", "Fix", "Flaky", "Fluke", "Friction", "Frost", "Gain", "Game", "Gear", "Gene", "Ghost", "Gift", "Glove", "Grave", "Grim", "Habit", "Hack", "Hacks", "Heat", "Hide", "Hollow", "Hook", "Ice", "Impulse", "Ink", "Iron", "Jumbo", "Junior", "Law", "Light", "Link", "Lock", "Luck", "Mammoth", "Math", "Maths", "Mellow", "Memory", "Mirror", "Mouse", "Nemo", "Night", "Nightowl", "Nimble", "Noise", "Note", "Nova", "Number", "Omen", "Owl", "Panther", "Parcel", "Path", "Pathfinder", "Patriot", "Phase", "Piece", "Pitch", "Poison", "Prime", "Print", "Prompt", "Push", "Quote", "Range", "Rebel", "Requiem", "Riddle", "Risk", "Route", "Sable", "Scene", "Score", "Session", "Shade", "Shallow", "Shift", "Shiny", "Signal", "Silver", "Slice", "Slide", "Spark", "Spring", "Status", "Stitch", "Stranger", "Stretch", "Survey", "Switch", "Thrill", "Trick", "Tune", "Unit", "Venom", "Virus", "Ward", "Wicked", "Wish", "Zen", "Zero", "Zigzag", "Zone"];
let nameElm = document.getElementById('name');
let nameAwesomplete = new Awesomplete(nameElm, {
    list: _.shuffle(names).slice(0, 10),
    minChars: 0,
    filter: function (text, input) {
        return true;
    }
});
$(nameElm).on('click', function () {
    if (nameAwesomplete.ul.hasAttribute('hidden')) {
        nameAwesomplete.list = _.shuffle(names).slice(0, 10);
        nameAwesomplete.minChars = 0;
        nameAwesomplete.evaluate();
        nameAwesomplete.open();
    }
});

let classes = {
    'Solo': [
        'Combat Sense',
        'Awareness/Notice',
        'Handgun',
        ['Brawling', 'Martial Art'],
        'Melee',
        'Weapons Tech',
        'Rifle',
        'Athletics',
        'Submachinegun',
        'Stealth'
    ],
    'Nomad': [
        'Family',
        'Awareness/Notice',
        'Endurance',
        'Melee',
        'Rifle',
        'Drive',
        'Basic Tech',
        'Wilderness Survival',
        'Brawling',
        'Athletics'
    ],
    'Corporate': [
        'Resources',
        'Awareness/Notice',
        'Human Perception',
        'Education (Business)',
        'Library Search',
        'Social',
        'Persuasion',
        'Stock Market',
        'Wardrobe & Style',
        'Personal Grooming'
    ],
    'Rockerboy/girl': [
        'Charismatic Leadership',
        'Awareness/Notice',
        'Perform',
        'Wardrobe & Style',
        'Composition',
        'Brawling',
        'Play Instrument',
        'Streetwise',
        'Persuasion',
        'Seduction'
    ],
    'Netrunner': [
        'Interface',
        'Awareness/Notice',
        'Basic Tech',
        'Education (Comp. Sci.)',
        'System Knowledge',
        'CyberTech',
        'CyberDeck Design',
        'Composition',
        'Electronics',
        'Programming'
    ],
    'Med Tech': [
        'Medical Tech',
        'Awareness/Notice',
        'Basic Tech',
        'Diagnose',
        'Education (Medical Sci)',
        'Cryotank Operation',
        'Library Search',
        'Pharmaceuticals',
        'Zoology',
        'Human Perception',
    ],
    'Techie': [
        'Jury Rig',
        'Awareness/Notice',
        'Basic Tech',
        'CyberTech',
        'Teaching',
        'Education',
        'Electronics',
        'Optional Tech skill1',
        'Optional Tech skill2',
        'Optional Tech skill3',
    ],
    'Media': [
        'Credibility',
        'Awareness/Notice',
        'Composition',
        'Education (Journalism)',
        'Persuasion',
        'Human Perception',
        'Social',
        'Streetwise',
        'Photo & Film',
        'Interview',
    ],
    'Cop': [
        'Authority',
        'Awareness/Notice',
        'Handgun',
        'Human Perception',
        'Athletics',
        'Education (Military)',
        'Brawling',
        'Melee',
        'Interrogation',
        'Streetwise'
    ],
    'Fixer': [
        'Streetdeal',
        'Awareness/Notice',
        'Forgery',
        'Handgun',
        'Brawling',
        'Melee',
        'Pick Lock',
        'Pick Pocket',
        'Intimidate',
        'Persuasion'
    ]
};

let cyberRolls = [
    [
        'Infrared cyberoptics',
        'Lowlight cyberoptics',
        'Camera cyberoptics',
        'Dartgun cyberoptics',
        'Antidazzle cyberoptics',
        'Targesting scope cyberoptics'
    ], [
        'Cyberarm w/ Med. Pistol',
        'Cyberarm w/ Light Pistol',
        'Cyberarm w/ Med. Pistol',
        'Cyberarm w/ Light SMG',
        'Cyberarm w/ Very Heavy Pistol',
        'Cyberarm w/ Heavy Pistol'
    ], [
        'Wearman',
        'Radio Splice',
        'Phone link',
        'Amplified Hearing',
        'Sound Editing',
        'Digital Recording Link'
    ],
    'Big Knucks',
    'Rippers',
    'Vampires',
    'Slice n\'dice',
    'Reflex Boost (Kerenzikov)',
    'Reflex Boost (Sandevistan)',
    ''
];

let gearRolls = [
    ['Heavy Leather', 'Knife', [0, 0, 0, 0]],
    ['Armour Vest', 'Light Pistol', [0, 4, 4, 2]],
    ['Light Armour Jacket', 'Medium Pistol', [0, 14, 14, 0]],
    ['Light Armour Jacket', 'Heavy Pistol', [0, 14, 14, 0]],
    ['Med. Armour Jacket', 'Heavy Pistol', [0, 18, 18, 0]],
    ['Med. Armour Jacket', 'Light SMG', [0, 18, 18, 0]],
    ['Med. Armour Jacket', 'Light Assault Rifle', [0, 18, 18, 0]],
    ['Heavy Armour Jacket', 'Med. Assault Rifle', [0, 20, 20, 0]],
    ['Heavy Armour Jacket', 'Heavy Assault Rifle', [0, 20, 20, 0]],
    ['MetalGear', 'Heavy Assault Rifle', [25, 25, 25, 25]],
];


let skillsElm = document.getElementById('skills');
let specialElm = document.getElementById('special');
let roleElm = document.getElementById('role');
let cyberElm = document.getElementById('cyber');
let possssionsElm = document.getElementById('possssions');
let armorElm = document.getElementById('armor');
let roleAwesomplete = new Awesomplete(roleElm, {
    list: _.shuffle(Object.keys(classes)),
    minChars: 0,
    filter: function (text, input) {
        return true;
    }
});
roleElm.addEventListener('awesomplete-select', function (e) {
    let role = e.text.value;
    let skillNames = classes[role].map(x => Array.isArray(x) ? _.sample(x) : x);
    let skillValues = new Array(skillNames.length).fill(0);
    let i = 0;
    while (i < 40) {
        let j = _.random(skillValues.length - 1);
        if (skillValues[j] < 10) {
            skillValues[j]++;
            i++;
        }
    }
    let skills = _.object(skillNames, skillValues);
    specialElm.textContent = skillNames[0] + '[' + skills[skillNames[0]] + ']';
    delete skills[skillNames[0]];
    skillsElm.textContent = Object.entries(skills).map(function (name, value) {
        return [name[0], value];
    }).sort(function (a, b) {
        return b[1] - a[1];
    }).map(x => x[0] + '[' + x[1] + ']').join(', ');

    let cyber = _.without(_.shuffle(cyberRolls).slice(0, role === 'Solo' ? 6 : 3).map(x => Array.isArray(x) ? _.sample(x) : x), "");
    cyberElm.textContent = cyber.join(', ');

    let gearRoll = _.random(1, 10);
    switch (role) {
        case 'Nomad':
        case 'Cop':
            gearRoll += 2;
            break;
        case 'Solo':
            gearRoll += 3;
            break;
    }
    if (gearRoll > 10) gearRoll = 10;
    let gear = gearRolls[gearRoll - 1];
    possssionsElm.textContent = gear.slice(0, 2).join(', ');
    gear[2].splice(2, 0, gear[2][2]);
    gear[2].splice(4, 0, gear[2][4]);

    console.log(gear[2]);
    $('tbody td', armorElm).slice(1).each((i, elm) => elm.textContent = gear[2][i]);
});
$(roleElm).on('click', function () {
    if (roleAwesomplete.ul.hasAttribute('hidden')) {
        roleAwesomplete.list = _.shuffle(Object.keys(classes));
        roleAwesomplete.minChars = 0;
        roleAwesomplete.evaluate();
        roleAwesomplete.open();
    }
});

function getStat(x, i) {
    return $('#stats').find('label:contains("' + x + '")').next().find(':nth-child(' + i + ')');
}

let statsHeader = document.getElementById('stats-header');
$(statsHeader).click(function () {
    let stats = ['INT', 'REF', 'TECH', 'COOL', 'ATTR', 'LUCK', 'MA', 'BODY', 'EMP']
    stats.forEach(function (x) {
        let val = _.random(1, 10);
        getStat(x, 1).text(val);
        switch (x) {
            case 'MA':
                getStat('Run', 1).text(val * 3);
                getStat('Leap', 1).text(Math.round((val * 3) / 4));
                break;
        }
    });
});
