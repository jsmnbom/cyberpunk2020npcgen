"use strict";
$('.textarea').click(function () {
    $(this).find('span').next().focus()
});

let firstNames = ["Acid", "Aero", "Agile", "Alco", "Alter", "Answer", "Ant", "Arch", "Art", "Aspect", "Audience", "Aura", "Aurora", "Awe", "Badge", "Bait", "Bandage", "Bank", "Banks", "Bargain", "Barrage", "Basis", "Bat", "Beam", "Beast", "Beauty", "Bee", "Beetle", "Bell", "Bells", "Bird", "Blade", "Blank", "Block", "Blunder", "Bold", "Bolt", "Bomb", "Bone", "Bones", "Bonus", "Books", "Boost", "Boot", "Boots", "Brash", "Brass", "Brave", "Bribe", "Brick", "Bright", "Brush", "Cable", "Canine", "Canvas", "Cash", "Catch", "Cause", "Cell", "Cent", "Chain", "Chalk", "Chance", "Change", "Chaos", "Charge", "Chart", "Cheat", "Checkmate", "Click", "Clock", "Clocks", "Cloud", "Coarse", "Coil", "Collar", "Complex", "Console", "Crash", "Craven", "Cross", "Crumbs", "Cycle", "Dapper", "Dare", "Data", "Deal", "Design", "Detail", "Dish", "Disk", "Double", "Dynamic", "Dynamo", "Edge", "Ego", "Elite", "Eternity", "Fearless", "Feature", "Feedback", "Fickle", "Fix", "Flaky", "Fluke", "Friction", "Frost", "Gain", "Game", "Gear", "Gene", "Ghost", "Gift", "Glove", "Grave", "Grim", "Habit", "Hack", "Hacks", "Heat", "Hide", "Hollow", "Hook", "Ice", "Impulse", "Ink", "Iron", "Jumbo", "Junior", "Law", "Light", "Link", "Lock", "Luck", "Mammoth", "Math", "Maths", "Mellow", "Memory", "Mirror", "Mouse", "Nemo", "Night", "Nightowl", "Nimble", "Noise", "Note", "Nova", "Number", "Omen", "Owl", "Panther", "Parcel", "Path", "Pathfinder", "Patriot", "Phase", "Piece", "Pitch", "Poison", "Prime", "Print", "Prompt", "Push", "Quote", "Range", "Rebel", "Requiem", "Riddle", "Risk", "Route", "Sable", "Scene", "Score", "Session", "Shade", "Shallow", "Shift", "Shiny", "Signal", "Silver", "Slice", "Slide", "Spark", "Spring", "Status", "Stitch", "Stranger", "Stretch", "Survey", "Switch", "Thrill", "Trick", "Tune", "Unit", "Venom", "Virus", "Ward", "Wicked", "Wish", "Zen", "Zero", "Zigzag", "Zone"];
let surNames = ["Abend", "Adleman", "Amdahl", "Angstrom", "Babbage", "Bacon", "Band", "Bayes", "Baxter", "Berkeley", "Bezier", "Black", "Block", "Blue", "Bochs", "Bogey", "Bogie", "Bohr", "Bolt", "Bolten", "Booth", "Borg", "Bounce", "Bourne", "Bracket", "Buffer", "Buffers", "Cable", "Cabler", "Cambridge", "Carbon", "Carrier", "Chiller", "Choke", "Circuit", "Click", "Clicker", "Clickoff", "Cluster", "Cobalt", "Codd", "Coil", "Coleman", "Copper", "Core", "Curie", "Current", "Disk", "Dolby", "Dongle", "Drive", "Driver", "Dvorak", "Ellsworth", "Edison", "Eight", "Eleven", "Erlang", "Farad", "Faraday", "Fiber", "Fiberman", "Five", "Four", "Frequenza", "Futzing", "Gate", "Gates", "Gold", "Goldsmith", "Granville", "Gray", "Green", "Hertz", "Hopper", "Iron", "Irons", "Jennings", "Joule", "Kelvin", "Kernel", "Key", "Kilby", "Lamarr", "Laser", "Legacy", "Lichtermann", "Loader", "Loadbolt", "Logic", "Login", "Loop", "Lovelace", "Master", "McNulty", "Mech", "Mechanick", "Metal", "Metall", "Metalic", "Metalik", "Metalmann", "Metalski", "Mezzanine", "Minimak", "Monad", "Monadi", "Mosfet", "Munge", "Munger", "Mux", "Nagle", "Nett", "Netwall", "Netzen", "Newton", "Nine", "Niven", "Northbridge", "Null", "One", "Optekar", "Optic", "Parse", "Parser", "Perlman", "Phillips", "Phiser", "Pim", "Pin", "Pisano", "Plug", "Pocket", "Port", "Portal", "Portalla", "Portlet", "Power", "Prime", "Process", "Proto", "Proxy", "Pulse", "Quadrano", "Quadro", "Quartz", "Quanta", "Quantic", "Rambus", "Rand", "Render", "Resistor", "Rivest", "Rhodes", "Robertson", "Robot", "Robotis", "Robotka", "Root", "Router", "Rowe", "Sammet", "Schema", "Schottky", "Screw", "Screws", "Scrum", "Serial", "Server", "Seven", "Shamir", "Shannon", "Shell", "Signal", "Silver", "Silverlock", "Silverman", "Silvers", "Sim", "Sine", "Sink", "Six", "Slag", "Smart", "Socket", "Southbridge", "Sparks", "Standard", "Stanford", "Statohm", "Statvolt", "Statwatt", "Steel", "Steele", "Steelman", "Steely", "Stoll", "Swan", "Swift", "Switch", "Ten", "Tesla", "Three", "Torrent", "Transistor", "Trimpot", "Tron", "Tronek", "Turing", "Turner", "Twelve", "Two", "Units", "Volt", "Watt", "Wave", "Wescoff", "Williams", "Wilson", "Wire", "Wireback", "Wireman", "Wires", "Zener", "Zero", "Zip", "Zipper"];
function genNames(i) {
    return _.range(i).map(() => {
        return _.sample(firstNames) + ' ' + _.sample(surNames);
    })
}

let nameElm = document.getElementById('name');
let nameAwesomplete = new Awesomplete(nameElm, {
    list: genNames(10),
    minChars: 0,
    filter: function () {
        return true;
    },
    maxItems: 10,
    sort: false
});

function openName() {
    console.log(nameAwesomplete.ul.hasAttribute('hidden'));
    if (nameAwesomplete.ul.hasAttribute('hidden')) {
        nameAwesomplete.list = genNames(10);
        console.log(_.shuffle(names));
        nameAwesomplete.minChars = 0;
        nameAwesomplete.evaluate();
        nameAwesomplete.open();
    }
}

$(nameElm).on('focus', openName);
$(nameElm).on('click', openName);
$(nameElm).on('keypress', function (e) {
    if (e.which === 13) {
        nameElm.value = '';
        openName();
        if (!nameAwesomplete.ul.hasAttribute('hidden')) {
            nameAwesomplete.goto(_.random(9));
        }
    }
});
nameElm.addEventListener('awesomplete-open', function (e) {
    if (!e.target.nextElementSibling.hidden && e.target.value === "") {
        nameAwesomplete.goto(_.random(9));
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
    ['Heavy Leather', 'Knife', [0, 0, 0, 0], 0],
    ['Armour Vest', 'Light Pistol', [0, 4, 4, 2], 0],
    ['Light Armour Jacket', 'Medium Pistol', [0, 14, 14, 0], 0],
    ['Light Armour Jacket', 'Heavy Pistol', [0, 14, 14, 0], 0],
    ['Med. Armour Jacket', 'Heavy Pistol', [0, 18, 18, 0], 1],
    ['Med. Armour Jacket', 'Light SMG', [0, 18, 18, 0], 1],
    ['Med. Armour Jacket', 'Light Assault Rifle', [0, 18, 18, 0], 1],
    ['Heavy Armour Jacket', 'Med. Assault Rifle', [0, 20, 20, 0], 2],
    ['Heavy Armour Jacket', 'Heavy Assault Rifle', [0, 20, 20, 0], 2],
    ['MetalGear', 'Heavy Assault Rifle', [25, 25, 25, 25], 2],
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
    filter: function () {
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
    skillsElm.textContent = Object.entries(skills).map(function (o) {
        return [o[0], o[1]];
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
    $('tbody td', armorElm).slice(1).each((i, elm) => elm.textContent = gear[2][i]);

    setStat('REF', 1, -gear[3]);
});
roleElm.addEventListener('awesomplete-open', function (e) {
    if (!e.target.nextElementSibling.hidden && e.target.value === "") {
        roleAwesomplete.goto(_.random(Object.keys(classes).length - 1));
    }
});

function openRole() {
    if (roleAwesomplete.ul.hasAttribute('hidden')) {
        roleAwesomplete.list = _.shuffle(Object.keys(classes));
        roleAwesomplete.minChars = 0;
        roleAwesomplete.evaluate();
        roleAwesomplete.open();
    }
}

$(roleElm).on('focus', openRole);
$(roleElm).on('click', openRole);
$(roleElm).on('keypress', function (e) {
    if (e.which === 13) {
        roleElm.value = '';
        openRole();
    }
});

function setStat(stat, i, val) {
    let elms = $('#stats').find('label:contains("' + stat + '")').next().children();
    elms[i].dataset.value = val;
    if (i === 0) {
        elms[0].textContent = val;
    }
    if (elms.length > 1) {
        let base = parseInt(elms[0].dataset.value) || 0;
        let mod = parseInt(elms[1].dataset.value) || 0;
        elms[1].textContent = base + mod;
    }
}

let statsHeader = document.getElementById('stats-header');
$(statsHeader).click(function () {
    let stats = ['INT', 'REF', 'TECH', 'COOL', 'ATTR', 'LUCK', 'MA', 'BODY', 'EMP'];
    stats.forEach(function (x) {
        let val = _.random(2, 10);
        setStat(x, 0, val);
        switch (x) {
            case 'MA':
                setStat('Run', 0, val * 4);
                setStat('Leap', 0, Math.round((val * 3) / 4));
                break;
            case 'BODY':
                setStat('Lift', 0, val * 10);
                document.getElementById('save').textContent = String(val);
                document.getElementById('btm').textContent = String(parseInt(-(val - 1) / 2));
        }
    });
    return false;
});
