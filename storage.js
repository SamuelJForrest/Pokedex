const pokedex = [
    {
        name: 'Bulbasaur',
        number: '001',
        type: 'Grass - Poison',
        weaknesses: 'Fire - Psychic - Flying - Ice',
        info: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.'
    },
    {
        name: 'Ivysaur',
        number: '002',
        type: 'Grass - Poison',
        weaknesses: 'Fire - Psychic - Flying - Ice',
        info: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.'
    },
    {
        name: 'Venasaur',
        number: '003',
        type: 'Grass - Poison',
        weaknesses: 'Fire - Psychic - Flying - Ice',
        info: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.'
    },
    {
        name: 'Charmander',
        number: '004',
        type: 'Fire',
        weaknesses: 'Water - Ground - Rock',
        info: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.'
    },
    {
        name: 'Charmeleon',
        number: '005',
        type: 'Fire',
        weaknesses: 'Water - Ground - Rock',
        info: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.'
    },
    {
        name: 'Charizard',
        number: '006',
        type: 'Fire - Flying',
        weaknesses: 'Water - Ground - Rock',
        info: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.'
    },
    {
        name: 'Squirtle',
        number: '007',
        type: 'Water',
        weaknesses: 'Grass - Electric',
        info: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.'
    },
    {
        name: 'Wartortle',
        number: '008',
        type: 'Water',
        weaknesses: 'Grass - Electric',
        info: 'It is recognised as a symbol of longevity. If its shell has algae on it, that Wortortle is very old.'
    },
    {
        name: 'Blastoise',
        number: '009',
        type: 'Water',
        weaknesses: 'Grass - Electric',
        info: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.'
    },
    {
        name: 'Caterpie',
        number: '010',
        type: 'Bug',
        weaknesses: 'Fire - Flying - Rock',
        info: 'For protection, it releases a horrible stench from the antenna on its head to drive away enemies.'
    },
    {
        name: 'Metapod',
        number: '011',
        type: 'Bug',
        weaknesses: 'Fire - Flying - Rock',
        info: 'It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.'
    },
    {
        name: 'Butterfree',
        number: '012',
        type: 'Bug - Flying',
        weaknesses: 'Fire - Flying - Electric - Ice - Rock',
        info: 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.'
    },
    {
        name: 'Weedle',
        number: '013',
        type: 'Bug - Poison',
        weaknesses: 'Fire - Psychic - Flying - Rock',
        info: 'Beware of the sharp stinger on its head. It hides in grass and bushes where it eat leaves.'
    },
    {
        name: 'Kakuna',
        number: '014',
        type: 'Bug - Poison',
        weaknesses: 'Fire - Psychic - Flying - Rock',
        info: 'Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.'
    },
    {
        name: 'Beedrill',
        number: '015',
        type: 'Bug - Poison',
        weaknesses: 'Fire - Psychic - Flying - Rock',
        info: 'It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.'
    },
    {
        name: 'Pidgey',
        number: '016',
        type: 'Normal - Flying',
        weaknesses: 'Electric - Ice - Rock',
        info: 'Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.'
    },
    {
        name: 'Pidgeotto',
        number: '017',
        type: 'Normal - Flying',
        weaknesses: 'Electric - Ice - Rock',
        info: 'This Pokemon is full of vitality. It constantly flies around its large territory in search of prey.'
    },
    {
        name: 'Pidgeot',
        number: '018',
        type: 'Normal - Flying',
        weaknesses: 'Electric - Ice - Rock',
        info: 'This pokemon flies at mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.'
    },
    {
        name: 'Rattata',
        number: '019',
        type: 'Normal',
        weaknesses: 'Fighting',
        info: 'Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.'
    },
    {
        name: 'Raticate',
        number: '020',
        type: 'Normal',
        weaknesses: 'Fighting',
        info: 'Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.'
    },
    {
        name: 'Spearow',
        number: '021',
        type: 'Normal - Flying',
        weaknesses: 'Electric - Ice - Rock',
        info: 'Inept at flying high. However, it can fly around very fast to protect its territory.'
    },
    {
        name: 'Fearow',
        number: '022',
        type: 'Normal - Flying',
        weaknesses: 'Electric - Ice - Rock',
        info: 'A Pokemon that dates back many years. If it senses danger, it flies high and away, instantly.'
    },
    {
        name: 'Ekans',
        number: '023',
        type: 'Poison',
        weaknesses: 'Psychic - Ground',
        info: 'The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.'
    },
    {
        name: 'Arbok',
        number: '024',
        type: 'Poison',
        weaknesses: 'Psychic - Ground',
        info: 'The frighteneing patterns on its belly have been studied. Six variations have been confirmed.'
    },
    {
        name: 'Pikachu',
        number: '025',
        type: 'Electric',
        weaknesses: 'Ground',
        info: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and stretchy.'
    },
    {
        name: 'Raichu',
        number: '026',
        type: 'Electric',
        weaknesses: 'Ground',
        info: 'Its long tail serves as a ground to protect itself from its own high-voltage power.'
    },
    {
        name: 'Sandshrew',
        number: '027',
        type: 'Ground',
        weaknesses: 'Water - Grass - Ice',
        info: 'It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokemon rids itself of dirt and moisture clinging to its body.'
    },
    {
        name: 'Sandslash',
        number: '028',
        type: 'Ground',
        weaknesses: 'Water - Grass - Ice',
        info: 'The drier the area Sandslash lives in, the harder and smoother the Pokemon spikes will feel when touched.'
    },
    {
        name: 'Nidoran (Female)',
        number: '029',
        type: 'Poison',
        weaknesses: 'Psychic - Ground',
        info: 'Females are more sensitive to smells than males. While foraging, they’ll use their whiskers to check wind direction and stay downwind of predators.'
    },
    {
        name: 'Nidorina',
        number: '030',
        type: 'Poison',
        weaknesses: 'Psychic - Ground',
        info: 'The horn on its head has atrophied. It’s thought that this happens so Nidorina’s children won’t get poked while their mother is feeding them.'
    },
    {
        name: 'Nidoqueen',
        number: '031',
        type: 'Poison - Ground',
        weaknesses: 'Water - Psychic - Ice - Ground',
        info: 'Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.'
    },
    {
        name: 'Nidoran (Male)',
        number: '032',
        type: 'Poison',
        weaknesses: 'Psychic - Ground',
        info: 'The horn on a male Nidoran’s forehead contains a powerful poison. This is a very cautious Pokémon, always straining its large ears.'
    },
    {
        name: 'Nidorino',
        number: '033',
        type: 'Poison',
        weaknesses: 'Psychic - Ground',
        info: 'With a horn that’s harder than diamond, this Pokémon goes around shattering boulders as it searches for a moon stone.'
    },
    {
        name: 'Nidoking',
        number: '034',
        type: 'Poison - Ground',
        weaknesses: 'Water - Psychic - Ice - Ground',
        info: 'When it goes on a rampage, it’s impossible to control. But in the presence of a Nidoqueen it’s lived with for a long time, Nidoking calms down.'
    },
    {
        name: 'Clefairy',
        number: '035',
        type: 'Fairy',
        weaknesses: 'Stell - Poison',
        info: 'It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.'
    },
    {
        name: 'Clefable',
        number: '036',
        type: 'Fairy',
        weaknesses: 'Steel - Poison',
        info: 'A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people.'
    },
    {
        name: 'Vulpix',
        number: '037',
        type: 'Fire',
        weaknesses: 'Water - Ground - Rock',
        info: 'While young, it has six gorgeous tails. When it grows, several new tails are sprouted.'
    },
    {
        name: 'Ninetales',
        number: '038',
        type: 'Fire',
        weaknesses: 'Water - Ground - Rock',
        info: 'It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.'
    },
    {
        name: 'Jigglypuff',
        number: '039',
        type: 'Normal - Fairy',
        weaknesses: 'Steel - Poison',
        info: 'Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep.'
    },
    {
        name: 'Wigglytuff',
        number: '040',
        type: 'Normal - Fairy',
        weaknesses: 'Steel - Poison',
        info: 'The more air it takes in, the more it inflates. If opponents catch it in a bad mood, it will inflate itself to an enormous size to intimidate them.'
    },
    {
        name: 'Zubat',
        number: '041',
        type: 'Poison - Flying',
        weaknesses: 'Psychic - Electric - Ice - Rock',
        info: 'It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill.'
    },
    {
        name: 'Golbat',
        number: '042',
        type: 'Poison - Flying',
        weaknesses: 'Psychic - Electric - Ice - Rock',
        info: 'It loves to drink other creatures’ blood. It’s said that if it finds others of its kind going hungry, it sometimes shares the blood it’s gathered.'
    },
    {
        name: 'Oddish',
        number: '043',
        type: 'Grass - Poison',
        weaknesses: 'Fire - Psychic - Flying - Ice',
        info: 'If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.'
    },
    {
        name: 'Gloom',
        number: '044',
        type: 'Grass - Poison',
        weaknesses: 'Fire - Psychic - Flying - Ice',
        info: 'Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.'
    },
    {
        name: 'Vileplume',
        number: '045',
        type: 'Grass - Poison',
        weaknesses: 'Fire - Psychic - Flying - Ice',
        info: 'It has the world’s largest petals. With every step, the petals shake out heavy clouds of toxic pollen.'
    },
    {
        name: 'Paras',
        number: '046',
        type: 'Bug - Grass',
        weaknesses: 'Fire - Flying - Ice - Poison - Rock - Bug',
        info: 'Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition.'
    },
    {
        name: 'Parasect',
        number: '047',
        type: 'Bug - Grass',
        weaknesses: 'Fire - Flying - Ice - Poison - Rock - Bug',
        info: 'The bug host is drained of energy by the mushroom on its back. The mushroom appears to do all the thinking.'
    },
    {
        name: 'Venonat',
        number: '048',
        type: 'Bug - Poison',
        weaknesses: 'Fire - Psychic - Flying - Rock',
        info: 'Its large eyes act as radar. In a bright place, you can see that they are clusters of many tiny eyes.'
    },
    {
        name: 'Venomoth',
        number: '049',
        type: 'Bug - Poison',
        weaknesses: 'Fire - Psychic - Flying - Rock',
        info: 'The powdery scales on its wings are hard to remove from skin. They also contain poison that leaks out on contact.'
    },
    {
        name: 'Diglett',
        number: '050',
        type: 'Ground',
        weaknesses: 'Water - Grass - Ice',
        info: 'If a Diglett digs through a field, it leaves the soil perfectly tilled and ideal for planting crops.'
    },
    {
        name: 'Dugtrio',
        number: '051',
        type: 'Ground',
        weaknesses: 'Water - Grass - Ice',
        info: 'A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground.'
    },
    {
        name: 'Meowth',
        number: '052',
        type: 'Normal',
        weaknesses: 'Fighting',
        info: 'It loves to collect shiny things. If it’s in a good mood, it might even let its Trainer have a look at its hoard of treasures.'
    },
    {
        name: 'Persian',
        number: '053',
        type: 'Normal',
        weaknesses: 'Fighting',
        info: 'Getting this prideful Pokémon to warm up to you takes a lot of effort, and it will claw at you the moment it gets annoyed.'
    },
    {
        name: 'Psyduck',
        number: '054',
        type: 'Water',
        weaknesses: 'Grass - Electric',
        info: 'Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt, apparently the pain subsides for a while.'
    },
    {
        name: 'Golduck',
        number: '055',
        type: 'Water',
        weaknesses: 'Grass - Electric',
        info: 'This Pokémon lives in gently flowing rivers. It paddles through the water with its long limbs, putting its graceful swimming skills on display.'
    },
    {
        name: 'Mankey',
        number: '056',
        type: 'Fighting',
        weaknesses: 'Psychic - Flying - Fairy',
        info: 'An agile Pokémon that lives in trees. It angers easily and will not hesitate to attack anything.'
    },
    {
        name: 'Primeape',
        number: '057',
        type: 'Fighting',
        weaknesses: 'Psychic - Flying - Fairy',
        info: 'It stops being angry only when nobody else is around. To view this moment is very difficult.'
    },
    {
        name: 'Growlithe',
        number: '058',
        type: 'Fire',
        weaknesses: 'Water - Ground - Rock',
        info: 'It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.'
    },
    {
        name: 'Arcanine',
        number: '059',
        type: 'Fire',
        weaknesses: 'Water - Ground - Rock',
        info: 'The sight of it running over 6,200 miles in a single day and night has captivated many people.'
    },
    {
        name: 'Poliwag',
        number: '060',
        type: 'Water',
        weaknesses: 'Grass - Electric',
        info: 'For Poliwag, swimming is easier than walking. The swirl pattern on its belly is actually part of the Pokémon’s innards showing through the skin.'
    },
    {
        name: 'Poliwhirl',
        number: '061',
        type: 'Water',
        weaknesses: 'Grass - Electric',
        info: 'Staring at the swirl on its belly causes drowsiness. This trait of Poliwhirl’s has been used in place of lullabies to get children to go to sleep.'
    },
    {
        name: 'Poliwrath',
        number: '062',
        type: 'Water - Fighting',
        weaknesses: 'Fairy - Grass - Flying - Psychic - Electric',
        info: 'Its body is solid muscle. When swimming through cold seas, Poliwrath uses its impressive arms to smash through drift ice and plow forward.'
    },
    {
        name: 'Abra',
        number: '063',
        type: 'Psychic',
        weaknesses: 'Ghost - Dark - Bug',
        info: 'This Pokémon uses its psychic powers while it sleeps. The contents of Abra’s dreams affect the powers that the Pokémon wields.'
    },
    {
        name: 'Kadabra',
        number: '064',
        type: 'Psychic',
        weaknesses: 'Ghost - Dark - Bug',
        info: 'Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow.'
    },
    {
        name: 'Alakazam',
        number: '065',
        type: 'Psychic',
        weaknesses: 'Ghost - Dark - Bug',
        info: 'It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.'
    },
    {
        name: 'Machop',
        number: '066',
        type: 'Fighting',
        weaknesses: 'Psychic - Flying - Fairy',
        info: 'Its whole body is composed of muscles. Even though it’s the size of a human child, it can hurl 100 grown-ups.'
    },
    {
        name: 'Machoke',
        number: '067',
        type: 'Fighting',
        weaknesses: 'Psychic - Flying - Fairy',
        info: 'Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.'
    },
    {
        name: 'Machamp',
        number: '068',
        type: 'Fighting',
        weaknesses: 'Psychic - Flying - Fairy',
        info: 'It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.'
    },
    {
        name: 'Bellsprout',
        number: '069',
        type: 'Grass - Poison',
        weaknesses: 'Fire - Psychic - Flying - Ice',
        info: 'Prefers hot and humid places. It ensnares tiny bugs with its vines and devours them.'
    },
    {
        name: 'Weepinbell',
        number: '070',
        type: 'Grass - Poison',
        weaknesses: 'Fire - Psychic - Flying - Ice',
        info: 'When hungry, it swallows anything that moves. Its hapless prey is dissolved by strong acids.'
    },
    {
        name: 'Victreebel',
        number: '071',
        type: 'Grass - Poison',
        weaknesses: 'Fire - Psychic - Flying - Ice',
        info: 'Lures prey with the sweet aroma of honey. Swallowed whole, the prey is dissolved in a day, bones and all.'
    },
    {
        name: 'Tentacool',
        number: '072',
        type: 'Water - Poison',
        weaknesses: 'Psychic - Electric - Ground',
        info: 'Tentacool is not a particularly strong swimmer. It drifts across the surface of shallow seas as it searches for prey.'
    },
    {
        name: 'Tentacruel',
        number: '073',
        type: 'Water - Poison',
        weaknesses: 'Psychic - Electric - Ground',
        info: 'When the red orbs on Tentacruel’s head glow brightly, watch out. The Pokémon is about to fire off a burst of ultrasonic waves.'
    },
    {
        name: 'Geodude',
        number: '074',
        type: 'Rock - Ground',
        weaknesses: 'Steel - Fighting - Water - Ice - Grass - Ground',
        info: 'Commonly found near mountain trails and the like. If you step on one by accident, it gets angry.'
    },
    {
        name: 'Graveler',
        number: '075',
        type: 'Rock - Ground',
        weaknesses: 'Steel - Fighting - Water - Ice - Grass - Ground',
        info: 'Often seen rolling down mountain trails. Obstacles are just things to roll straight over, not avoid.'
    },
    {
        name: 'Golem',
        number: '076',
        type: 'Rock - Ground',
        weaknesses: 'Steel - Fighting - Water - Ice - Grass - Ground',
        info: 'Once it sheds its skin, its body turns tender and whitish. Its hide hardens when it’s exposed to air.'
    },
    {
        name: 'Ponyta',
        number: '077',
        type: 'Fire',
        weaknesses: 'Water - Ground - Rock',
        info: 'It can’t run properly when it’s newly born. As it races around with others of its kind, its legs grow stronger.'
    },
    {
        name: 'Rapidash',
        number: '078',
        type: 'Fire',
        weaknesses: 'Water - Ground - Rock',
        info: 'This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.'
    },
    {
        name: 'Slowpoke',
        number: '079',
        type: 'Water - Psychic',
        weaknesses: 'Ghost - Dark - Grass - Electric - Bug',
        info: 'Slow-witted and oblivious, this Pokémon won’t feel any pain if its tail gets eaten. It won’t notice when its tail grows back, either.'
    },
    {
        name: 'Slowbro',
        number: '080',
        type: 'Water - Psychic',
        weaknesses: 'Ghost - Dark - Grass - Electric - Bug',
        info: 'Slowpoke became Slowbro when a Shellder bit on to its tail. Sweet flavors seeping from the tail make the Shellder feel as if its life is a dream.'
    },
    {
        name: 'Magnemite',
        number: '081',
        type: 'Electric - Steel',
        weaknesses: 'Fire - Fighting - Ground',
        info: 'At times, Magnemite runs out of electricity and ends up on the ground. If you give batteries to a grounded Magnemite, it’ll start moving again.'
    },
    {
        name: 'Magneton',
        number: '082',
        type: 'Electric - Steel',
        weaknesses: 'Fire - Fighting - Ground',
        info: 'This Pokémon is three Magnemite that have linked together. Magneton sends out powerful radio waves to study its surroundings.'
    },
    {
        name: "Farfetch'd",
        number: '083',
        type: 'Normal - Flying',
        weaknesses: 'Electric - Ice - Rock',
        info: 'The stalk this Pokémon carries in its wings serves as a sword to cut down opponents. In a dire situation, the stalk can also serve as food.'
    },
    {
        name: 'Doduo',
        number: '084',
        type: 'Normal - Flying',
        weaknesses: 'Electric - Ice - Rock',
        info: 'Its short wings make flying difficult. Instead, this Pokémon runs at high speed on developed legs.'
    },
    {
        name: 'Dodrio',
        number: '085',
        type: 'Normal - Flying',
        weaknesses: 'Electric - Ice - Rock',
        info: 'One of Doduo’s two heads splits to form a unique species. It runs close to 40 mph in prairies.'
    },
    {
        name: 'Seel',
        number: '086',
        type: 'Water',
        weaknesses: 'Grass - Electric',
        info: 'Loves freezing-cold conditions. Relishes swimming in a frigid climate of around 14 degrees Fahrenheit.'
    },
    {
        name: 'Dewgong',
        number: '087',
        type: 'Water - Ice',
        weaknesses: 'Grass - Electric - Fighting - Rock',
        info: 'Its entire body is a snowy white. Unharmed by even intense cold, it swims powerfully in icy waters.'
    },
    {
        name: 'Grimer',
        number: '088',
        type: 'Poison',
        weaknesses: 'Psychic',
        info: 'Made of congealed sludge. It smells too putrid to touch. Even weeds won’t grow in its path.'   
    },
    {
        name: 'Muk',
        number: '089',
        type: 'Poison',
        weaknesses: 'Psychic',
        info: 'Smells so awful, it can cause fainting. Through degeneration of its nose, it lost its sense of smell.'   
    },
    {
        name: 'Shellder',
        number: '090',
        type: 'Water',
        weaknesses: 'Grass - Electric',
        info: 'It swims facing backward by opening and closing its two-piece shell. It is surprisingly fast.'
    },
    {
        name: 'Cloyster',
        number: '091',
        type: 'Water - Ice',
        weaknesses: 'Grass - Electric - Fighting - Rock',
        info: 'Its shell is extremely hard. It cannot be shattered, even with a bomb. The shell opens only when it is attacking.'
    },
    {
        name: 'Gastly',
        number: '092',
        type: 'Ghost - Poison',
        weaknesses: 'Ghost - Dark - Psychic - Ground',
        info: 'Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.'
    },
    {
        name: 'Haunter',
        number: '093',
        type: 'Ghost - Poison',
        weaknesses: 'Ghost - Dark - Psychic - Ground',
        info: 'Its tongue is made of gas. If licked, its victim starts shaking constantly until death eventually comes.'
    },
    {
        name: 'Gengar',
        number: '094',
        type: 'Ghost - Poison',
        weaknesses: 'Ghost - Dark - Psychic - Ground',
        info: 'On the night of a full moon, if shadows move on their own and laugh, it must be Gengar’s doing.'
    },
    {
        name: 'Onix',
        number: '095',
        type: 'Rock - Ground',
        weaknesses: 'Steel - Fighting - Water - Ice - Grass - Ground',
        info: 'As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.'
    },
    {
        name: 'Drowzee',
        number: '096',
        type: 'Psychic',
        weaknesses: 'Ghost - Dark - Bug',
        info: 'If you sleep by it all the time, it will sometimes show you dreams it had eaten in the past.'
    },
    {
        name: 'Hypno',
        number: '097',
        type: 'Psychic',
        weaknesses: 'Ghost - Dark - Bug',
        info: 'Avoid eye contact if you come across one. It will try to put you to sleep by using its pendulum.'
    },
    {
        name: 'Krabby',
        number: '098',
        type: 'Water',
        weaknesses: 'Grass - Electric',
        info: 'It can be found near the sea. The large pincers grow back if they are torn out of their sockets.'
    },
    {
        name: 'Kingler',
        number: '099',
        type: 'Water',
        weaknesses: 'Grass - Electric',
        info: 'Its large and hard pincer has 10,000-horsepower strength. However, being so big, it is unwieldy to move.'
    },
    {
        name: 'Voltorb',
        number: '100',
        type: 'Electric',
        weaknesses: 'Ground',
        info: 'It is said to camouflage itself as a Poké Ball. It will self-destruct with very little stimulus.'
    },
    {
        name: 'Electrode',
        number: '101',
        type: 'Electric',
        weaknesses: 'Ground',
        info: 'Stores electrical energy inside its body. Even the slightest shock could trigger a huge explosion.'
    },
    {
        name: 'Exeggcute',
        number: '102',
        type: 'Grass - Psychic',
        weaknesses: 'Ghost - Fire - Flying - Ice - Dark - Poison - Bug',
        info: 'Though it may look like it’s just a bunch of eggs, it’s a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.'
    },
    {
        name: 'Exeggutor',
        number: '103',
        type: 'Grass - Psychic',
        weaknesses: 'Water - Grass - Ice',
        info: 'This Pokémon overcame its sorrow to evolve a sturdy new body. Marowak faces its opponents bravely, using a bone as a weapon.'
    },
    {
        name: 'Cubone',
        number: '104',
        type: 'Ground',
        weaknesses: 'Water - Grass - Ice',
        info: 'When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.'
    },
    {
        name: 'Marowak',
        number: '105',
        type: 'Ground',
        weaknesses: 'Water - Grass - Ice',
        info: 'This Pokémon overcame its sorrow to evolve a sturdy new body. Marowak faces its opponents bravely, using a bone as a weapon.'
    },
    {
        name: 'Hitmonlee',
        number: '106',
        type: 'Fighting',
        weaknesses: 'Psychic - Flying - Fairy',
        info: 'This amazing Pokémon has an awesome sense of balance. It can kick in succession from any position.'
    },
    {
        name: 'Hitmonchan',
        number: '107',
        type: 'Fighting',
        weaknesses: 'Psychic - Flying - Fairy',
        info: 'Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.'
    },
    {
        name: 'Lickitung',
        number: '108',
        type: 'Normal',
        weaknesses: 'Fighting',
        info: 'If this Pokémon’s sticky saliva gets on you and you don’t clean it off, an intense itch will set in. The itch won’t go away, either.'
    },
    {
        name: 'Koffing',
        number: '109',
        type: 'Poison',
        weaknesses: 'Psychic - Ground',
        info: 'Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.'
    },
    {
        name: 'Weezing',
        number: '110',
        type: 'Poison',
        weaknesses: 'Psychic - Ground',
        info: 'It mixes gases between its two bodies. It’s said that these Pokémon were seen all over the Galar region back in the day.'
    },
    {
        name: 'Rhyhorn',
        number: '111',
        type: 'Ground - Rock',
        weaknesses: 'Steel - Ice - Water - Fighting - Grass - Ground',
        info: 'Strong, but not too bright, this Pokémon can shatter even a skyscraper with its charging tackles.'
    },
    {
        name: 'Rhydon',
        number: '112',
        type: 'Ground - Rock',
        weaknesses: 'Steel - Ice - Water - Fighting - Grass - Ground',
        info: 'It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.'
    },
    {
        name: 'Chansey',
        number: '113',
        type: 'Normal',
        weaknesses: 'Fighting',
        info: 'The egg Chansey carries is not only delicious but also packed with nutrition. It’s used as a high-class cooking ingredient.'
    },
    {
        name: 'Tangela',
        number: '114',
        type: 'Grass',
        weaknesses: 'Fire - Flying - Ice - Poison - Bug',
        info: 'Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon’s true appearance remains a mystery.'
    },
    {
        name: 'Kangaskhan',
        number: '115',
        type: 'Normal',
        weaknesses: 'Fighting',
        info: 'Although it’s carrying its baby in a pouch on its belly, Kangaskhan is swift on its feet. It intimidates its opponents with quick jabs.'
    },
    {
        name: 'Horsea',
        number: '116',
        type: 'Water',
        weaknesses: 'Grass - Electric',
        info: 'Horsea makes its home in oceans with gentle currents. If this Pokémon is under attack, it spits out pitch-black ink and escapes.'
    },
    {
        name: 'Seadra',
        number: '117',
        type: 'Water',
        weaknesses: 'Grass - Electric',
        info: 'It’s the males that raise the offspring. While Seadra are raising young, the spines on their backs secrete thicker and stronger poison.'
    },
    {
        name: 'Goldeen',
        number: '118',
        type: 'Water',
        weaknesses: 'Grass - Electric',
        info: 'Its dorsal, pectoral, and tail fins wave elegantly in water. That is why it is known as the Water Dancer.'
    },
    {
        name: 'Seaking',
        number: '119',
        type: 'Water',
        weaknesses: 'Grass - Electric',
        info: 'In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.'
    },
    {
        name: 'Staryu',
        number: '120',
        type: 'Water',
        weaknesses: 'Grass - Electric',
        info: 'If you visit a beach at the end of summer, you’ll be able to see groups of Staryu lighting up in a steady rhythm.'
    },
    {
        name: 'Starmie',
        number: '121',
        type: 'Water - Psychic',
        weaknesses: 'Ghost - Dark - Grass - Electric - Bug',
        info: 'This Pokémon has an organ known as its core. The organ glows in seven colors when Starmie is unleashing its potent psychic powers.'
    },
    {
        name: 'Mr. Mime',
        number: '122',
        type: 'Psychic - Fairy',
        weaknesses: 'Ghost - Steel - Poison',
        info: 'The broadness of its hands may be no coincidence—many scientists believe its palms became enlarged specifically for pantomiming.'
    },
    {
        name: 'Scyther',
        number: '123',
        type: 'Bug',
        weaknesses: 'Fire - Flying - Electric - Ice - Rock',
        info: 'As Scyther fights more and more battles, its scythes become sharper and sharper. With a single slice, Scyther can fell a massive tree.'
    },
    {
        name: 'Jynx',
        number: '124',
        type: 'Ice - Psychic',
        weaknesses: 'Steel - Ghost - Fire - Dark - Rock - Bug',
        info: 'In certain parts of Galar, Jynx was once feared and worshiped as the Queen of Ice.'
    },
    {
        name: 'Electabuzz',
        number: '125',
        type: 'Electric',
        weaknesses: 'Ground',
        info: 'Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.'
    },
    {
        name: 'Magmar',
        number: '126',
        type: 'Fire',
        weaknesses: 'Water - Ground - Rock',
        info: 'Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.'
    },
    {
        name: 'Pinsir',
        number: '127',
        type: 'Bug',
        weaknesses: 'Fire - Flying - Rock',
        info: 'These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.'
    },
    {
        name: 'Tauros',
        number: '128',
        type: 'Normal',
        weaknesses: 'Fighting',
        info: 'When Tauros begins whipping itself with its tails, it’s a warning that the Pokémon is about to charge with astounding speed.'
    },
    {
        name: 'Magikarp',
        number: '129',
        type: 'Water',
        weaknesses: 'Grass - Electric',
        info: 'It is virtually worthless in terms of both power and speed. It is the most weak and pathetic Pokémon in the world.'
    },
    {
        name: 'Gyarados',
        number: '130',
        type: 'Water - Flying',
        weaknesses: 'Electric - Rock',
        info: 'It has an extremely aggressive nature. The Hyper Beam it shoots from its mouth totally incinerates all targets.'
    },
    {
        name: 'Lapras',
        number: '131',
        type: 'Water - Ice',
        weaknesses: 'Grass - Electric - Fighting - Rock',
        info: 'A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.'
    },
    {
        name: 'Ditto',
        number: '132',
        type: 'Normal',
        weaknesses: 'Fighting',
        info: 'It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.'
    },
    {
        name: 'Eevee',
        number: '133',
        type: 'Normal',
        weaknesses: 'Fighting',
        info: 'It has the ability to alter the composition of its body to suit its surrounding environment.'
    },
    {
        name: 'Vaporeon',
        number: '134',
        type: 'Water',
        weaknesses: 'Grass - Electric',
        info: 'When Vaporeon’s fins begin to vibrate, it is a sign that rain will come within a few hours.'
    },
    {
        name: 'Jolteon',
        number: '135',
        type: 'Electric',
        weaknesses: 'Ground',
        info: 'If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes.'
    },
    {
        name: 'Flareon',
        number: '136',
        type: 'Fire',
        weaknesses: 'Water - Ground - Rock',
        info: 'Once it has stored up enough heat, this Pokémon’s body temperature can reach up to 1,700 degrees Fahrenheit.'
    },
    {
        name: 'Porygon',
        number: '137',
        type: 'Normal',
        weaknesses: 'Fighting',
        info: 'State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.'
    },
    {
        name: 'Omanyte',
        number: '138',
        type: 'Rock - Water',
        weaknesses: 'Grass - Electric - Fighting - Ground',
        info: 'Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem.'
    },
    {
        name: 'Omastar',
        number: '139',
        type: 'Rock - Water',
        weaknesses: 'Grass - Electric - Fighting - Ground',
        info: 'Weighed down by a large and heavy shell, Omastar couldn’t move very fast. Some say it went extinct because it was unable to catch food.'
    },
    {
        name: 'Kabuto',
        number: '140',
        type: 'Rock - Water',
        weaknesses: 'Grass - Electric - Fighting - Ground',
        info: 'This species is almost entirely extinct. Kabuto molt every three days, making their shells harder and harder.'
    },
    {
        name: 'Kabutops',
        number: '141',
        type: 'Rock - Water',
        weaknesses: 'Grass - Electric - Fighting - Ground',
        info: 'Kabutops slices its prey apart and sucks out the fluids. The discarded body parts become food for other Pokémon.'
    },
    {
        name: 'Aerodactyl',
        number: '142',
        type: 'Rock - Flying',
        weaknesses: 'Steel - Water - Electric - Ice - Rock',
        info: 'This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.'
    },
    {
        name: 'Snorlax',
        number: '143',
        type: 'Normal',
        weaknesses: 'Fighting',
        info: 'It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.'
    },
    {
        name: 'Articuno',
        number: '144',
        type: 'Ice - Flying',
        weaknesses: 'Steel - Fire - Electric - Rock',
        info: 'It’s said that this Pokémon’s beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.'
    },
    {
        name: 'Zapdos',
        number: '145',
        type: 'Electric - Flying',
        weaknesses: 'Ice - Ground',
        info: 'This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds.'
    },
    {
        name: 'Moltres',
        number: '146',
        type: 'Fire - Flying',
        weaknesses: 'Water - Electric - Rock',
        info: 'It’s one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.'
    },
    {
        name: 'Dratini',
        number: '147',
        type: 'Dragon',
        weaknesses: 'Fairy - Ice - Dragon',
        info: 'Dratini dwells near bodies of rapidly flowing water, such as the plunge pools of waterfalls. As it grows, Dratini will shed its skin many times.'
    },
    {
        name: 'Dragonair',
        number: '148',
        type: 'Dragon',
        weaknesses: 'Fairy - Ice - Dragon',
        info: 'This Pokémon lives in pristine oceans and lakes. It can control the weather, and it uses this power to fly into the sky, riding on the wind.'
    },
    {
        name: 'Dragonite',
        number: '149',
        type: 'Dragon - Flying',
        weaknesses: 'Fairy - Ice - Dragon - Rock',
        info: 'It’s a kindhearted Pokémon. If it spots a drowning person or Pokémon, Dragonite simply must help them.'
    },
    {
        name: 'Mewtwo',
        number: '150',
        type: 'Psychic',
        weaknesses: 'Ghost - Dark - Bug',
        info: 'Its DNA is almost the same as Mew’s. However, its size and disposition are vastly different.'
    },
    {
        name: 'Mew',
        number: '151',
        type: 'Psychic',
        weaknesses: 'Ghost - Dark - Bug',
        info: 'When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.'
    }
]
