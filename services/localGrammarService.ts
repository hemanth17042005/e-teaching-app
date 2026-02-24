
import { GrammarGame, ActivityType, GrammarQuestion, FillInBlanksTask, WordBuildingTask, SpellingTask, ReadingComprehensionTask } from "../types";

interface TopicData {
  quiz?: GrammarQuestion[];
  sorting?: {
    categories: string[];
    items: { text: string; category: string }[];
  };
  unscramble?: string[];
  fillInBlanks?: FillInBlanksTask[];
  wordBuilding?: WordBuildingTask[];
  spelling?: SpellingTask[];
  readingComprehension?: ReadingComprehensionTask;
}

interface GrammarDataPool {
  English: Record<string, TopicData>;
  Kannada: Record<string, TopicData>;
}

const GRAMMAR_DATA: GrammarDataPool = {
  English: {
    'Parts of Speech': {
      quiz: [
        { question: "Identify the verb: 'The cat sleeps on the sofa.'", options: ['cat', 'sleeps', 'sofa', 'on'], correctAnswer: 'sleeps', explanation: "'Sleeps' is the action word (verb) in this sentence." },
        { question: "Which word is an adjective? 'He bought an expensive car.'", options: ['He', 'bought', 'expensive', 'car'], correctAnswer: 'expensive', explanation: "'Expensive' describes the noun 'car', so it is an adjective." },
        { question: "Identify the noun: 'The teacher is very kind.'", options: ['teacher', 'very', 'kind', 'is'], correctAnswer: 'teacher', explanation: "'Teacher' is a person, which makes it a noun." },
        { question: "Which word is an adverb? 'She ran quickly to the bus.'", options: ['She', 'ran', 'quickly', 'bus'], correctAnswer: 'quickly', explanation: "'Quickly' describes how she ran, so it is an adverb." },
        { question: "Identify the pronoun: 'They are playing in the garden.'", options: ['They', 'playing', 'garden', 'are'], correctAnswer: 'They', explanation: "'They' is used in place of a noun to refer to people, making it a pronoun." },
        { question: "Identify the preposition: 'The keys are under the mat.'", options: ['keys', 'under', 'mat', 'are'], correctAnswer: 'under', explanation: "'Under' shows the relationship/position of the keys relative to the mat." },
        { question: "Which word is a conjunction? 'I wanted to go, but it was raining.'", options: ['wanted', 'but', 'raining', 'was'], correctAnswer: 'but', explanation: "'But' connects two independent clauses, making it a conjunction." },
        { question: "Identify the interjection: 'Wow! That is a beautiful sunset.'", options: ['Wow', 'sunset', 'beautiful', 'sunset'], correctAnswer: 'Wow' },
        { question: "Which word is a proper noun? 'We visited Paris last summer.'", options: ['visited', 'Paris', 'summer', 'last'], correctAnswer: 'Paris' },
        { question: "Identify the abstract noun: 'Honesty is the best policy.'", options: ['Honesty', 'best', 'policy', 'is'], correctAnswer: 'Honesty' },
        { question: "Which word is a collective noun? 'A flock of birds flew by.'", options: ['birds', 'flock', 'flew', 'by'], correctAnswer: 'flock' },
        { question: "Identify the helping verb: 'She is writing a letter.'", options: ['writing', 'is', 'letter', 'She'], correctAnswer: 'is' },
        { question: "Which word is a possessive pronoun? 'That book is mine.'", options: ['That', 'book', 'is', 'mine'], correctAnswer: 'mine' },
        { question: "Identify the article: 'An apple a day keeps the doctor away.'", options: ['apple', 'An', 'day', 'keeps'], correctAnswer: 'An' },
        { question: "Which word is a demonstrative pronoun? 'These are my favorite shoes.'", options: ['These', 'favorite', 'shoes', 'are'], correctAnswer: 'These' },
        { question: "Identify the adjective: 'The big blue ocean is calm.'", options: ['big', 'ocean', 'is', 'calm'], correctAnswer: 'big' },
        { question: "Which word is a verb? 'The flowers bloom in spring.'", options: ['flowers', 'bloom', 'spring', 'in'], correctAnswer: 'bloom' },
        { question: "Identify the adverb: 'He spoke softly to the baby.'", options: ['softly', 'spoke', 'baby', 'to'], correctAnswer: 'softly' },
        { question: "Which word is a pronoun? 'Give it to me.'", options: ['it', 'Give', 'to', 'me'], correctAnswer: 'me' },
        { question: "Identify the preposition: 'The bird flew over the house.'", options: ['over', 'flew', 'bird', 'house'], correctAnswer: 'over' }
      ],
      sorting: {
        categories: ['Noun', 'Verb', 'Adjective', 'Adverb'],
        items: [
          { text: 'Apple', category: 'Noun' }, { text: 'Run', category: 'Verb' }, { text: 'Beautiful', category: 'Adjective' },
          { text: 'Teacher', category: 'Noun' }, { text: 'Eat', category: 'Verb' }, { text: 'Smart', category: 'Adjective' },
          { text: 'Happiness', category: 'Noun' }, { text: 'Dance', category: 'Verb' }, { text: 'Tall', category: 'Adjective' },
          { text: 'Quickly', category: 'Adverb' }, { text: 'Slowly', category: 'Adverb' }, { text: 'Happily', category: 'Adverb' },
          { text: 'London', category: 'Noun' }, { text: 'Write', category: 'Verb' }, { text: 'Blue', category: 'Adjective' },
          { text: 'Carefully', category: 'Adverb' }, { text: 'Jump', category: 'Verb' }, { text: 'Elephant', category: 'Noun' },
          { text: 'Green', category: 'Adjective' }, { text: 'Sing', category: 'Verb' }, { text: 'Quietly', category: 'Adverb' }
        ]
      },
      unscramble: [
        'The quick brown fox jumps.',
        'She sings a beautiful song.',
        'They are playing in the garden.',
        'The teacher is very kind.',
        'He ran quickly to the bus.',
        'Birds fly high in the sky.',
        'I love eating fresh fruits.',
        'The sun shines brightly today.',
        'We should help the poor.',
        'Reading books is a good habit.'
      ],
      spelling: [
        { word: 'Noun', definition: 'A word that represents a person, place, or thing.', scrambledLetters: 'noun'.split('') },
        { word: 'Verb', definition: 'A word used to describe an action, state, or occurrence.', scrambledLetters: 'verb'.split('') },
        { word: 'Adjective', definition: 'A word that describes or modifies a noun.', scrambledLetters: 'adjective'.split('') },
        { word: 'Adverb', definition: 'A word that modifies a verb, adjective, or another adverb.', scrambledLetters: 'adverb'.split('') },
        { word: 'Pronoun', definition: 'A word that can function by itself as a noun phrase.', scrambledLetters: 'pronoun'.split('') }
      ],
      readingComprehension: {
        passage: "The English language has eight main parts of speech: nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, and interjections. The part of speech indicates how the word functions in meaning as well as grammatically within the sentence. An individual word can function as more than one part of speech when used in different circumstances. Understanding parts of speech is essential for determining the correct definition of a word when using the dictionary.",
        questions: [
          { question: "How many main parts of speech are there in English?", options: ["Six", "Seven", "Eight", "Nine"], correctAnswer: "Eight", explanation: "The passage explicitly states there are eight main parts of speech." },
          { question: "What does the part of speech indicate?", options: ["The length of the word", "The origin of the word", "How the word functions in meaning and grammar", "The difficulty of the word"], correctAnswer: "How the word functions in meaning and grammar", explanation: "The passage says it indicates how the word functions in meaning as well as grammatically." },
          { question: "Can a word function as more than one part of speech?", options: ["Yes", "No", "Only in poetry", "Only in long sentences"], correctAnswer: "Yes", explanation: "The passage states that an individual word can function as more than one part of speech in different circumstances." }
        ]
      }
    },
    'Tenses': {
      quiz: [
        { question: "Choose the correct past tense: 'He ___ to the market yesterday.'", options: ['go', 'goes', 'went', 'gone'], correctAnswer: 'went', explanation: "'Yesterday' indicates a past action, so we use the past tense 'went'." },
        { question: "Identify the tense: 'I am reading a book.'", options: ['Simple Present', 'Present Continuous', 'Past Continuous', 'Future'], correctAnswer: 'Present Continuous', explanation: "'Am reading' indicates an action currently in progress." },
        { question: "Choose the future tense: 'We ___ to the zoo tomorrow.'", options: ['go', 'went', 'will go', 'going'], correctAnswer: 'will go', explanation: "'Tomorrow' indicates a future action, so we use 'will go'." },
        { question: "Identify the past tense: 'She ___ a beautiful song.'", options: ['sings', 'sang', 'will sing', 'singing'], correctAnswer: 'sang', explanation: "'Sang' is the past tense of 'sing'." },
        { question: "Choose the correct present tense: 'They ___ football every Sunday.'", options: ['play', 'plays', 'played', 'playing'], correctAnswer: 'play', explanation: "'They' is plural, so we use 'play' for a habitual present action." },
        { question: "Identify the future tense: 'It ___ rain tonight.'", options: ['rains', 'rained', 'will rain', 'raining'], correctAnswer: 'will rain', explanation: "'Will rain' indicates a future prediction." },
        { question: "Identify the tense: 'He has finished his work.'", options: ['Simple Past', 'Present Perfect', 'Past Perfect', 'Present Continuous'], correctAnswer: 'Present Perfect' },
        { question: "Choose the correct past continuous: 'I ___ when the phone rang.'", options: ['sleep', 'slept', 'was sleeping', 'am sleeping'], correctAnswer: 'was sleeping' },
        { question: "Identify the tense: 'They will be playing tomorrow.'", options: ['Future Continuous', 'Future Simple', 'Present Continuous', 'Past Continuous'], correctAnswer: 'Future Continuous' },
        { question: "Choose the correct present perfect: 'She ___ her keys.'", options: ['lose', 'lost', 'has lost', 'is losing'], correctAnswer: 'has lost' },
        { question: "Identify the tense: 'We had already left.'", options: ['Simple Past', 'Past Perfect', 'Present Perfect', 'Past Continuous'], correctAnswer: 'Past Perfect' },
        { question: "Choose the correct future perfect: 'By next year, I ___ my degree.'", options: ['get', 'will get', 'will have gotten', 'am getting'], correctAnswer: 'will have gotten' },
        { question: "Identify the tense: 'I will have finished by then.'", options: ['Future Perfect', 'Future Simple', 'Present Perfect', 'Past Perfect'], correctAnswer: 'Future Perfect' },
        { question: "Choose the correct past perfect: 'They ___ before I arrived.'", options: ['left', 'had left', 'have left', 'were leaving'], correctAnswer: 'had left' },
        { question: "Identify the tense: 'She was singing a song.'", options: ['Past Continuous', 'Simple Past', 'Present Continuous', 'Future Continuous'], correctAnswer: 'Past Continuous' },
        { question: "Choose the correct present continuous: 'Look! It ___.'", options: ['rains', 'is raining', 'rained', 'will rain'], correctAnswer: 'is raining' }
      ],
      unscramble: [
        'I am eating an apple.', 
        'She will go to school.', 
        'They played in the park.',
        'The sun rises in the east.',
        'We are learning English grammar.',
        'He has finished his homework.',
        'They were watching a movie.',
        'I will call you later.',
        'She had already eaten dinner.',
        'We have been waiting for hours.'
      ],
      fillInBlanks: [
        { sentence: "I [BLANK] my breakfast an hour ago.", options: ['eat', 'ate', 'eaten'], correctAnswers: ['ate'] },
        { sentence: "She [BLANK] to the gym every morning.", options: ['go', 'goes', 'going'], correctAnswers: ['goes'] },
        { sentence: "We [BLANK] a party next Saturday.", options: ['have', 'had', 'will have'], correctAnswers: ['will have'] },
        { sentence: "They [BLANK] TV when I arrived.", options: ['watch', 'watched', 'were watching'], correctAnswers: ['were watching'] },
        { sentence: "He [BLANK] his homework already.", options: ['do', 'did', 'has done'], correctAnswers: ['has done'] },
        { sentence: "I [BLANK] you as soon as I can.", options: ['call', 'called', 'will call'], correctAnswers: ['will call'] }
      ],
      spelling: [
        { word: 'Present', definition: 'The period of time now occurring.', scrambledLetters: 'present'.split('') },
        { word: 'Future', definition: 'The time or a period of time following the moment of speaking or writing.', scrambledLetters: 'future'.split('') },
        { word: 'Continuous', definition: 'Forming an unbroken whole; without interruption.', scrambledLetters: 'continuous'.split('') },
        { word: 'Perfect', definition: 'Having all the required or desirable elements, qualities, or characteristics.', scrambledLetters: 'perfect'.split('') },
        { word: 'Yesterday', definition: 'On the day before today.', scrambledLetters: 'yesterday'.split('') }
      ],
      readingComprehension: {
        passage: "Tense is a category that expresses time reference. Tenses are usually manifested by the use of specific forms of verbs, particularly in their conjugation patterns. The main tenses found in many languages include the past, present, and future. In English, each of these three tenses has four aspects: simple, continuous, perfect, and perfect continuous. This creates a total of twelve basic tenses that allow speakers to express precise timing and relationships between events.",
        questions: [
          { question: "What does the category of 'tense' express?", options: ["Location", "Time reference", "Quantity", "Quality"], correctAnswer: "Time reference", explanation: "The passage starts by saying tense is a category that expresses time reference." },
          { question: "How many aspects does each main tense have in English?", options: ["Two", "Three", "Four", "Five"], correctAnswer: "Four", explanation: "The passage mentions four aspects: simple, continuous, perfect, and perfect continuous." },
          { question: "How many basic tenses are there in English in total?", options: ["Three", "Eight", "Twelve", "Sixteen"], correctAnswer: "Twelve", explanation: "Three main tenses multiplied by four aspects equals twelve." }
        ]
      }
    },
    'Articles (A, An, The)': {
      quiz: [
        { question: "I saw ___ elephant at the zoo.", options: ['a', 'an', 'the', 'no article'], correctAnswer: 'an' },
        { question: "___ sun rises in the east.", options: ['A', 'An', 'The', 'no article'], correctAnswer: 'The' },
        { question: "He is ___ honest man.", options: ['a', 'an', 'the', 'no article'], correctAnswer: 'an' },
        { question: "She wants to be ___ engineer.", options: ['a', 'an', 'the', 'no article'], correctAnswer: 'an' },
        { question: "I have ___ unique idea.", options: ['a', 'an', 'the', 'no article'], correctAnswer: 'a' },
        { question: "___ moon looks beautiful tonight.", options: ['A', 'An', 'The', 'no article'], correctAnswer: 'The' },
        { question: "He is ___ tallest boy in class.", options: ['a', 'an', 'the', 'no article'], correctAnswer: 'the' },
        { question: "I need ___ umbrella because it's raining.", options: ['a', 'an', 'the', 'no article'], correctAnswer: 'an' },
        { question: "They live in ___ small house.", options: ['a', 'an', 'the', 'no article'], correctAnswer: 'a' },
        { question: "___ Himalayas are the highest mountains.", options: ['A', 'An', 'The', 'no article'], correctAnswer: 'The' }
      ],
      fillInBlanks: [
        { sentence: "She wants to buy [BLANK] umbrella.", options: ['a', 'an', 'the'], correctAnswers: ['an'] },
        { sentence: "Can you pass me [BLANK] salt?", options: ['a', 'an', 'the'], correctAnswers: ['the'] },
        { sentence: "He is [BLANK] European citizen.", options: ['a', 'an', 'the'], correctAnswers: ['a'] },
        { sentence: "I saw [BLANK] movie yesterday.", options: ['a', 'an', 'the'], correctAnswers: ['a'] },
        { sentence: "[BLANK] earth revolves around the sun.", options: ['A', 'An', 'The'], correctAnswers: ['The'] },
        { sentence: "She is [BLANK] university student.", options: ['a', 'an', 'the'], correctAnswers: ['a'] }
      ]
    },
    'Prepositions': {
      quiz: [
        { question: "The book is ___ the table.", options: ['in', 'on', 'at', 'by'], correctAnswer: 'on' },
        { question: "He is sitting ___ his two friends.", options: ['among', 'between', 'with', 'beside'], correctAnswer: 'between' },
        { question: "She is waiting ___ the bus stop.", options: ['at', 'on', 'in', 'to'], correctAnswer: 'at' },
        { question: "The cat is hiding ___ the bed.", options: ['under', 'over', 'between', 'among'], correctAnswer: 'under' },
        { question: "I will meet you ___ 5 PM.", options: ['at', 'on', 'in', 'by'], correctAnswer: 'at' },
        { question: "They are traveling ___ train.", options: ['by', 'on', 'in', 'with'], correctAnswer: 'by' },
        { question: "The picture is ___ the wall.", options: ['on', 'at', 'in', 'above'], correctAnswer: 'on' },
        { question: "She walked ___ the room.", options: ['into', 'in', 'on', 'at'], correctAnswer: 'into' },
        { question: "He jumped ___ the fence.", options: ['over', 'under', 'between', 'through'], correctAnswer: 'over' },
        { question: "The keys are ___ my pocket.", options: ['in', 'on', 'at', 'by'], correctAnswer: 'in' },
        { question: "We live ___ London.", options: ['in', 'at', 'on', 'to'], correctAnswer: 'in' },
        { question: "The bridge goes ___ the river.", options: ['across', 'through', 'between', 'among'], correctAnswer: 'across' },
        { question: "I am fond ___ music.", options: ['of', 'off', 'for', 'with'], correctAnswer: 'of' },
        { question: "He is good ___ English.", options: ['at', 'in', 'on', 'with'], correctAnswer: 'at' },
        { question: "She is afraid ___ spiders.", options: ['of', 'off', 'for', 'from'], correctAnswer: 'of' },
        { question: "The plane flew ___ the clouds.", options: ['above', 'below', 'through', 'across'], correctAnswer: 'above' },
        { question: "He is standing ___ front of the house.", options: ['in', 'at', 'on', 'by'], correctAnswer: 'in' },
        { question: "She is interested ___ art.", options: ['in', 'at', 'on', 'with'], correctAnswer: 'in' },
        { question: "We went ___ the cinema.", options: ['to', 'at', 'in', 'on'], correctAnswer: 'to' },
        { question: "The ball is ___ the box.", options: ['inside', 'outside', 'between', 'among'], correctAnswer: 'inside' }
      ],
      fillInBlanks: [
        { sentence: "The cat jumped [BLANK] the fence.", options: ['over', 'under', 'through'], correctAnswers: ['over'] },
        { sentence: "I'll see you [BLANK] Monday.", options: ['on', 'at', 'in'], correctAnswers: ['on'] },
        { sentence: "He was born [BLANK] 1995.", options: ['in', 'at', 'on'], correctAnswers: ['in'] },
        { sentence: "The ball rolled [BLANK] the hill.", options: ['down', 'up', 'over'], correctAnswers: ['down'] },
        { sentence: "She is standing [BLANK] the door.", options: ['by', 'on', 'in'], correctAnswers: ['by'] },
        { sentence: "Divide the sweets [BLANK] the two children.", options: ['between', 'among', 'with'], correctAnswers: ['between'] },
        { sentence: "He is leaning [BLANK] the wall.", options: ['against', 'on', 'at'], correctAnswers: ['against'] },
        { sentence: "The plane is flying [BLANK] the city.", options: ['over', 'under', 'through'], correctAnswers: ['over'] },
        { sentence: "We walked [BLANK] the forest.", options: ['through', 'across', 'along'], correctAnswers: ['through'] },
        { sentence: "She sat [BLANK] her mother.", options: ['beside', 'besides', 'between'], correctAnswers: ['beside'] }
      ]
    },
    'Conjunctions': {
      quiz: [
        { question: "I like tea ___ I don't like coffee.", options: ['and', 'but', 'or', 'so'], correctAnswer: 'but' },
        { question: "You can have tea ___ coffee.", options: ['and', 'but', 'or', 'so'], correctAnswer: 'or' },
        { question: "He was late ___ it was raining.", options: ['because', 'so', 'but', 'and'], correctAnswer: 'because' },
        { question: "I am tired ___ I will go to bed.", options: ['so', 'but', 'because', 'or'], correctAnswer: 'so' },
        { question: "She is smart ___ hardworking.", options: ['and', 'but', 'or', 'so'], correctAnswer: 'and' },
        { question: "Wait here ___ I come back.", options: ['until', 'unless', 'while', 'since'], correctAnswer: 'until' },
        { question: "He ran fast ___ he missed the bus.", options: ['yet', 'so', 'and', 'because'], correctAnswer: 'yet' },
        { question: "___ it was cold, he didn't wear a coat.", options: ['Although', 'Because', 'So', 'But'], correctAnswer: 'Although' },
        { question: "I'll go ___ you go with me.", options: ['if', 'unless', 'until', 'since'], correctAnswer: 'if' },
        { question: "She neither eats meat ___ fish.", options: ['nor', 'or', 'but', 'and'], correctAnswer: 'nor' },
        { question: "He is not only talented ___ also humble.", options: ['but', 'and', 'so', 'yet'], correctAnswer: 'but' },
        { question: "You must study ___ you will fail.", options: ['or', 'and', 'but', 'so'], correctAnswer: 'or' },
        { question: "I haven't seen him ___ he left.", options: ['since', 'for', 'because', 'until'], correctAnswer: 'since' },
        { question: "She was happy ___ she won the prize.", options: ['because', 'so', 'but', 'and'], correctAnswer: 'because' },
        { question: "I will call you ___ I arrive.", options: ['when', 'while', 'since', 'until'], correctAnswer: 'when' }
      ],
      fillInBlanks: [
        { sentence: "I wanted to buy it, [BLANK] I didn't have enough money.", options: ['but', 'and', 'so'], correctAnswers: ['but'] },
        { sentence: "Do you want tea [BLANK] coffee?", options: ['or', 'and', 'but'], correctAnswers: ['or'] },
        { sentence: "He studied hard [BLANK] he passed the exam.", options: ['and', 'but', 'so'], correctAnswers: ['and'] },
        { sentence: "I stayed home [BLANK] it was raining.", options: ['because', 'so', 'but'], correctAnswers: ['because'] },
        { sentence: "She is both talented [BLANK] humble.", options: ['and', 'but', 'or'], correctAnswers: ['and'] },
        { sentence: "Neither John [BLANK] Mary was there.", options: ['nor', 'or', 'and'], correctAnswers: ['nor'] },
        { sentence: "Either you [BLANK] I must go.", options: ['or', 'nor', 'and'], correctAnswers: ['or'] },
        { sentence: "He is poor [BLANK] honest.", options: ['but', 'and', 'so'], correctAnswers: ['but'] },
        { sentence: "Wait [BLANK] the rain stops.", options: ['until', 'unless', 'since'], correctAnswers: ['until'] },
        { sentence: "I'll help you [BLANK] you ask.", options: ['if', 'unless', 'since'], correctAnswers: ['if'] }
      ]
    },
    'Prefixes & Suffixes': {
      wordBuilding: [
        {
          rootWord: 'Happy',
          parts: [
            { text: 'un', type: 'prefix', isCorrect: true },
            { text: 'ness', type: 'suffix', isCorrect: true },
            { text: 'ly', type: 'suffix', isCorrect: true },
            { text: 'pre', type: 'prefix', isCorrect: false }
          ],
          correctResult: 'Unhappiness',
          definition: 'The state of being not happy.'
        }
      ]
    },
    'Active & Passive Voice': {
      quiz: [
        { question: "Change to passive: 'She writes a letter.'", options: ['A letter is written by her.', 'A letter was written by her.', 'A letter is being written by her.', 'A letter has been written by her.'], correctAnswer: 'A letter is written by her.' },
        { question: "Change to active: 'The cake was eaten by him.'", options: ['He ate the cake.', 'He eats the cake.', 'He is eating the cake.', 'He has eaten the cake.'], correctAnswer: 'He ate the cake.' },
        { question: "Change to passive: 'They are playing football.'", options: ['Football is being played by them.', 'Football is played by them.', 'Football was played by them.', 'Football has been played by them.'], correctAnswer: 'Football is being played by them.' },
        { question: "Change to active: 'The house is being cleaned by her.'", options: ['She is cleaning the house.', 'She cleans the house.', 'She cleaned the house.', 'She has cleaned the house.'], correctAnswer: 'She is cleaning the house.' },
        { question: "Change to passive: 'He will finish the work.'", options: ['The work will be finished by him.', 'The work is finished by him.', 'The work was finished by him.', 'The work has been finished by him.'], correctAnswer: 'The work will be finished by him.' },
        { question: "Change to active: 'A song was sung by them.'", options: ['They sang a song.', 'They sing a song.', 'They are singing a song.', 'They have sung a song.'], correctAnswer: 'They sang a song.' },
        { question: "Change to passive: 'I have done my homework.'", options: ['My homework has been done by me.', 'My homework is done by me.', 'My homework was done by me.', 'My homework is being done by me.'], correctAnswer: 'My homework has been done by me.' },
        { question: "Change to active: 'The window was broken by the boy.'", options: ['The boy broke the window.', 'The boy breaks the window.', 'The boy is breaking the window.', 'The boy has broken the window.'], correctAnswer: 'The boy broke the window.' },
        { question: "Change to passive: 'She can speak English.'", options: ['English can be spoken by her.', 'English is spoken by her.', 'English was spoken by her.', 'English can speak by her.'], correctAnswer: 'English can be spoken by her.' },
        { question: "Change to active: 'The match will be won by us.'", options: ['We will win the match.', 'We win the match.', 'We won the match.', 'We are winning the match.'], correctAnswer: 'We will win the match.' }
      ]
    },
    'Subject-Verb Agreement': {
      quiz: [
        { question: "The dog ___ barking.", options: ['is', 'are', 'am', 'be'], correctAnswer: 'is' },
        { question: "The dogs ___ barking.", options: ['are', 'is', 'am', 'be'], correctAnswer: 'are' },
        { question: "Neither the teacher nor the students ___ here.", options: ['are', 'is', 'am', 'be'], correctAnswer: 'are' },
        { question: "Either John or his brothers ___ going.", options: ['are', 'is', 'am', 'be'], correctAnswer: 'are' },
        { question: "The team ___ practicing hard.", options: ['is', 'are', 'am', 'be'], correctAnswer: 'is' },
        { question: "Ten dollars ___ too much for this.", options: ['is', 'are', 'am', 'be'], correctAnswer: 'is' },
        { question: "The news ___ shocking.", options: ['is', 'are', 'am', 'be'], correctAnswer: 'is' },
        { question: "Mathematics ___ my favorite subject.", options: ['is', 'are', 'am', 'be'], correctAnswer: 'is' },
        { question: "Everyone ___ finished their work.", options: ['has', 'have', 'is', 'are'], correctAnswer: 'has' },
        { question: "Many a student ___ failed.", options: ['has', 'have', 'is', 'are'], correctAnswer: 'has' }
      ]
    },
    'Modals (Can, Should)': {
      quiz: [
        { question: "I ___ swim when I was five.", options: ['could', 'can', 'should', 'must'], correctAnswer: 'could' },
        { question: "You ___ brush your teeth twice a day.", options: ['should', 'can', 'could', 'might'], correctAnswer: 'should' },
        { question: "___ I come in, sir?", options: ['May', 'Can', 'Should', 'Must'], correctAnswer: 'May' },
        { question: "It ___ rain today.", options: ['might', 'should', 'must', 'can'], correctAnswer: 'might' },
        { question: "We ___ obey our parents.", options: ['must', 'can', 'could', 'might'], correctAnswer: 'must' },
        { question: "She ___ speak three languages.", options: ['can', 'could', 'should', 'must'], correctAnswer: 'can' },
        { question: "You ___ not smoke here.", options: ['must', 'should', 'can', 'could'], correctAnswer: 'must' },
        { question: "___ you lend me some money?", options: ['Could', 'Should', 'Must', 'Might'], correctAnswer: 'Could' },
        { question: "I ___ go now, I'm late.", options: ['must', 'can', 'could', 'should'], correctAnswer: 'must' },
        { question: "He ___ be at home now.", options: ['might', 'can', 'should', 'must'], correctAnswer: 'might' }
      ]
    },
    'Degrees of Comparison': {
      quiz: [
        { question: "Mount Everest is the ___ peak in the world.", options: ['highest', 'higher', 'high', 'most high'], correctAnswer: 'highest' },
        { question: "This book is ___ than that one.", options: ['better', 'good', 'best', 'more good'], correctAnswer: 'better' },
        { question: "She is the ___ girl in the class.", options: ['smartest', 'smarter', 'smart', 'most smart'], correctAnswer: 'smartest' },
        { question: "Iron is ___ than gold.", options: ['more useful', 'useful', 'most useful', 'usefuller'], correctAnswer: 'more useful' },
        { question: "He is as ___ as his brother.", options: ['tall', 'taller', 'tallest', 'more tall'], correctAnswer: 'tall' }
      ],
      sorting: {
        categories: ['Positive', 'Comparative', 'Superlative'],
        items: [
          { text: 'Good', category: 'Positive' }, { text: 'Better', category: 'Comparative' }, { text: 'Best', category: 'Superlative' },
          { text: 'Tall', category: 'Positive' }, { text: 'Taller', category: 'Comparative' }, { text: 'Tallest', category: 'Superlative' },
          { text: 'Fast', category: 'Positive' }, { text: 'Faster', category: 'Comparative' }, { text: 'Fastest', category: 'Superlative' }
        ]
      }
    },
    'Reading Comprehension': {
      readingComprehension: {
        passage: "The Great Barrier Reef is the world's largest coral reef system. It is located in the Coral Sea, off the coast of Queensland, Australia. The reef is so large that it can be seen from outer space. It is home to thousands of species of marine life, including colorful fish, sea turtles, and sharks. However, the reef is facing threats from climate change and pollution.",
        questions: [
          { question: "Where is the Great Barrier Reef located?", options: ["Off the coast of Australia", "In the Atlantic Ocean", "Near Africa", "In the Mediterranean Sea"], correctAnswer: "Off the coast of Australia" },
          { question: "Can the reef be seen from outer space?", options: ["Yes", "No", "Only with a telescope", "Only at night"], correctAnswer: "Yes" },
          { question: "What is one threat facing the reef?", options: ["Climate change", "Too many fish", "Lack of sunlight", "Volcanoes"], correctAnswer: "Climate change" },
          { question: "What kind of system is the Great Barrier Reef?", options: ["Coral reef system", "Mountain system", "River system", "Desert system"], correctAnswer: "Coral reef system" }
        ]
      }
    },
    'Spelling Bee': {
      spelling: [
        { word: 'Environment', definition: 'The surroundings or conditions in which a person, animal, or plant lives.', scrambledLetters: 'environment'.split('') },
        { word: 'Knowledge', definition: 'Facts, information, and skills acquired through experience or education.', scrambledLetters: 'knowledge'.split('') },
        { word: 'Beautiful', definition: 'Pleasing the senses or mind aesthetically.', scrambledLetters: 'beautiful'.split('') },
        { word: 'Success', definition: 'The accomplishment of an aim or purpose.', scrambledLetters: 'success'.split('') },
        { word: 'Library', definition: 'A building or room containing collections of books.', scrambledLetters: 'library'.split('') }
      ]
    }
  },
  Kannada: {
    'ಸಂಧಿಗಳು (Sandhi)': {
      quiz: [
        { question: " 'ದೇವ+ಇಂದ್ರ = ದೇವೇಂದ್ರ' ಇದು ಯಾವ ಸಂಧಿ?", options: ['ಸವರ್ಣದೀರ್ಘ ಸಂಧಿ', 'ಗುಣ ಸಂಧಿ', 'ವೃದ್ಧಿ ಸಂಧಿ', 'ಯಣ್ ಸಂಧಿ'], correctAnswer: 'ಗುಣ ಸಂಧಿ' },
        { question: " 'ಗಿಡ+ಮರ = ಗಿಡಮರಗಳು' ಇದು ಯಾವ ಸಂಧಿ?", options: ['ಲೋಪ ಸಂಧಿ', 'ಆಗಮ ಸಂಧಿ', 'ಆದೇಶ ಸಂಧಿ', 'ಸಮಾಸ'], correctAnswer: 'ಲೋಪ ಸಂಧಿ' },
        { question: " 'ವಿದ್ಯಾ+ಅಭ್ಯಾಸ = ವಿದ್ಯಾಭ್ಯಾಸ' ಇದು ಯಾವ ಸಂಧಿ?", options: ['ಸವರ್ಣದೀರ್ಘ ಸಂಧಿ', 'ಗುಣ ಸಂಧಿ', 'ವೃದ್ಧಿ ಸಂಧಿ', 'ಯಣ್ ಸಂಧಿ'], correctAnswer: 'ಸವರ್ಣದೀರ್ಘ ಸಂಧಿ' },
        { question: " 'ಮಳೆ+ಗಾಲ = ಮಳೆಗಾಲ' ಇದು ಯಾವ ಸಂಧಿ?", options: ['ಲೋಪ ಸಂಧಿ', 'ಆಗಮ ಸಂಧಿ', 'ಆದೇಶ ಸಂಧಿ', 'ಸಮಾಸ'], correctAnswer: 'ಆದೇಶ ಸಂಧಿ' },
        { question: " 'ಗುರು+ಉಪದೇಶ = ಗುರೂಪದೇಶ' ಇದು ಯಾವ ಸಂಧಿ?", options: ['ಸವರ್ಣದೀರ್ಘ ಸಂಧಿ', 'ಗುಣ ಸಂಧಿ', 'ವೃದ್ಧಿ ಸಂಧಿ', 'ಯಣ್ ಸಂಧಿ'], correctAnswer: 'ಸವರ್ಣದೀರ್ಘ ಸಂಧಿ' },
        { question: " 'ಕೈ+ಅನ್ನು = ಕೈಯನ್ನು' ಇಲ್ಲಿ ಯಾವ ಆಗಮ ಬಂದಿದೆ?", options: ['ಯಕಾರಾಗಮ', 'ವಕಾರಾಗಮ', 'ಲೋಪ', 'ಆದೇಶ'], correctAnswer: 'ಯಕಾರಾಗಮ' },
        { question: " 'ಹೂ+ಅನ್ನು = ಹೂವನ್ನು' ಇಲ್ಲಿ ಯಾವ ಆಗಮ ಬಂದಿದೆ?", options: ['ಯಕಾರಾಗಮ', 'ವಕಾರಾಗಮ', 'ಲೋಪ', 'ಆದೇಶ'], correctAnswer: 'ವಕಾರಾಗಮ' },
        { question: " 'ಒಂದು+ಒಂದು = ಒಂದೊಂದು' ಇದು ಯಾವ ಸಂಧಿ?", options: ['ಲೋಪ ಸಂಧಿ', 'ಆಗಮ ಸಂಧಿ', 'ಆದೇಶ ಸಂಧಿ', 'ವೃದ್ಧಿ ಸಂಧಿ'], correctAnswer: 'ಲೋಪ ಸಂಧಿ' },
        { question: " 'ಗಿರಿ+ಈಶ = ಗಿರೀಶ' ಇದು ಯಾವ ಸಂಧಿ?", options: ['ಸವರ್ಣದೀರ್ಘ ಸಂಧಿ', 'ಗುಣ ಸಂಧಿ', 'ವೃದ್ಧಿ ಸಂಧಿ', 'ಯಣ್ ಸಂಧಿ'], correctAnswer: 'ಸವರ್ಣದೀರ್ಘ ಸಂಧಿ' },
        { question: " 'ವನ+ಓಷಧಿ = ವನೌಷಧಿ' ಇದು ಯಾವ ಸಂಧಿ?", options: ['ಸವರ್ಣದೀರ್ಘ ಸಂಧಿ', 'ಗುಣ ಸಂಧಿ', 'ವೃದ್ಧಿ ಸಂಧಿ', 'ಯಣ್ ಸಂಧಿ'], correctAnswer: 'ವೃದ್ಧಿ ಸಂಧಿ' }
      ],
      unscramble: [
        'ಕನ್ನಡ ನಮ್ಮ ಮಾತೃಭಾಷೆ.',
        'ಶಾಲೆಗೆ ಹೋಗುವುದು ಒಳ್ಳೆಯ ಹವ್ಯಾಸ.',
        'ನಮ್ಮ ದೇಶ ಭಾರತ.',
        'ವಿದ್ಯೆಯೇ ಮಹಾ ಧನ.',
        'ಕಾಯಕವೇ ಕೈಲಾಸ.',
        'ಸತ್ಯಮೇವ ಜಯತೇ.',
        'ನಾನು ಪ್ರತಿದಿನ ಪಾಠ ಓದುತ್ತೇನೆ.',
        'ಗುರುಗಳಿಗೆ ಗೌರವ ನೀಡಬೇಕು.',
        'ಪರಿಸರವನ್ನು ಕಾಪಾಡೋಣ.',
        'ಕರ್ನಾಟಕವು ಸುಂದರ ರಾಜ್ಯ.'
      ]
    },
    'ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯಗಳು (Vibhakti)': {
      quiz: [
        { question: " 'ರಾಮನನ್ನು' ಪದದಲ್ಲಿರುವ ವಿಭಕ್ತಿ ಯಾವುದು?", options: ['ಪ್ರಥಮಾ', 'ದ್ವಿತೀಯಾ', 'ತೃತೀಯಾ', 'ಚತುರ್ಥೀ'], correctAnswer: 'ದ್ವಿತೀಯಾ' },
        { question: " 'ಮರದಿಂದ' ಪದದಲ್ಲಿರುವ ವಿಭಕ್ತಿ ಯಾವುದು?", options: ['ತೃತೀಯಾ', 'ಪಂಚಮೀ', 'ಷಷ್ಠೀ', 'ಸಪ್ತಮೀ'], correctAnswer: 'ಪಂಚಮೀ' },
        { question: " 'ಮನೆಯಲ್ಲಿ' ಪದದಲ್ಲಿರುವ ವಿಭಕ್ತಿ ಯಾವುದು?", options: ['ಷಷ್ಠೀ', 'ಸಪ್ತಮೀ', 'ಸಂಬೋಧನಾ', 'ಚತುರ್ಥೀ'], correctAnswer: 'ಸಪ್ತಮೀ' },
        { question: " 'ಗುರುವಿಗೆ' ಪದದಲ್ಲಿರುವ ವಿಭಕ್ತಿ ಯಾವುದು?", options: ['ಪ್ರಥಮಾ', 'ದ್ವಿತೀಯಾ', 'ತೃತೀಯಾ', 'ಚತುರ್ಥೀ'], correctAnswer: 'ಚತುರ್ಥೀ' },
        { question: " 'ಹೂವು' ಪದದ ಪ್ರಥಮಾ ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯ ಯಾವುದು?", options: ['ಉ', 'ಅನ್ನು', 'ಇಂದ', 'ಗೆ'], correctAnswer: 'ಉ' },
        { question: " 'ಕಾಡಿನ' ಪದದಲ್ಲಿರುವ ವಿಭಕ್ತಿ ಯಾವುದು?", options: ['ಷಷ್ಠೀ', 'ಸಪ್ತಮೀ', 'ಪಂಚಮೀ', 'ತೃತೀಯಾ'], correctAnswer: 'ಷಷ್ಠೀ' },
        { question: " 'ಕೈಯಿಂದ' ಪದದಲ್ಲಿರುವ ವಿಭಕ್ತಿ ಯಾವುದು?", options: ['ತೃತೀಯಾ', 'ಚತುರ್ಥೀ', 'ಪಂಚಮೀ', 'ಷಷ್ಠೀ'], correctAnswer: 'ತೃತೀಯಾ' },
        { question: " 'ಬಾಲಕನೇ' ಇದು ಯಾವ ವಿಭಕ್ತಿ?", options: ['ಪ್ರಥಮಾ', 'ಷಷ್ಠೀ', 'ಸಪ್ತಮೀ', 'ಸಂಬೋಧನಾ'], correctAnswer: 'ಸಂಬೋಧನಾ' },
        { question: " 'ಊರಿಗೆ' ಪದದಲ್ಲಿರುವ ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯ ಯಾವುದು?", options: ['ಉ', 'ಅನ್ನು', 'ಇಂದ', 'ಗೆ'], correctAnswer: 'ಗೆ' },
        { question: " 'ಬೆಟ್ಟದ' ಪದದಲ್ಲಿರುವ ವಿಭಕ್ತಿ ಯಾವುದು?", options: ['ಷಷ್ಠೀ', 'ಸಪ್ತಮೀ', 'ಪಂಚಮೀ', 'ತೃತೀಯಾ'], correctAnswer: 'ಷಷ್ಠೀ' }
      ]
    },
    'ಸಮಾನಾರ್ಥಕ ಪದಗಳು (Synonyms)': {
      quiz: [
        { question: " 'ಆಕಾಶ' ಪದದ ಸಮಾನಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಭೂಮಿ', 'ಗಗನ', 'ನದಿ', 'ಪರ್ವತ'], correctAnswer: 'ಗಗನ' },
        { question: " 'ಕಣ್ಣು' ಪದದ ಸಮಾನಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ನಯನ', 'ಕರ್ಣ', 'ಹಸ್ತ', 'ಪಾದ'], correctAnswer: 'ನಯನ' },
        { question: " 'ಭೂಮಿ' ಪದದ ಸಮಾನಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಅವನಿ', 'ಅಂಬರ', 'ಜಲ', 'ಅಗ್ನಿ'], correctAnswer: 'ಅವನಿ' },
        { question: " 'ನೀರು' ಪದದ ಸಮಾನಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಜಲ', 'ಅನಿಲ', 'ಘನ', 'ಬೆಳಕು'], correctAnswer: 'ಜಲ' },
        { question: " 'ಸೂರ್ಯ' ಪದದ ಸಮಾನಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಚಂದ್ರ', 'ಭಾಸ್ಕರ', 'ತಾರೆ', 'ಗ್ರಹ'], correctAnswer: 'ಭಾಸ್ಕರ' },
        { question: " 'ಪಕ್ಷಿ' ಪದದ ಸಮಾನಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಮೃಗ', 'ಖಗ', 'ಸರ್ಪ', 'ಮೀನು'], correctAnswer: 'ಖಗ' },
        { question: " 'ಕಾಡು' ಪದದ ಸಮಾನಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಅರಣ್ಯ', 'ನಗರ', 'ಗ್ರಾಮ', 'ಬೆಟ್ಟ'], correctAnswer: 'ಅರಣ್ಯ' },
        { question: " 'ತಾಯಿ' ಪದದ ಸಮಾನಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಪಿತ', 'ಜನನಿ', 'ಸೋದರಿ', 'ಮಗಳು'], correctAnswer: 'ಜನನಿ' },
        { question: " 'ಗಾಳಿ' ಪದದ ಸಮಾನಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಪವನ', 'ಅಗ್ನಿ', 'ನೀರ', 'ಮಣ್ಣು'], correctAnswer: 'ಪವನ' },
        { question: " 'ಬೆಳಕು' ಪದದ ಸಮಾನಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಕತ್ತಲೆ', 'ಪ್ರಕಾಶ', 'ನೆರಳು', 'ಮಂಕು'], correctAnswer: 'ಪ್ರಕಾಶ' }
      ],
      sorting: {
        categories: ['ಆಕಾಶ', 'ಭೂಮಿ', 'ನೀರು'],
        items: [
          { text: 'ಗಗನ', category: 'ಆಕಾಶ' }, { text: 'ಅಂಬರ', category: 'ಆಕಾಶ' }, { text: 'ನಭ', category: 'ಆಕಾಶ' },
          { text: 'ಧರೆ', category: 'ಭೂಮಿ' }, { text: 'ಅವನಿ', category: 'ಭೂಮಿ' }, { text: 'ವಸುಧೆ', category: 'ಭೂಮಿ' },
          { text: 'ಜಲ', category: 'ನೀರು' }, { text: 'ಉದಕ', category: 'ನೀರು' }, { text: 'ವಾರಿ', category: 'ನೀರು' },
          { text: 'ಬಾನು', category: 'ಆಕಾಶ' }, { text: 'ಪೃಥ್ವಿ', category: 'ಭೂಮಿ' }, { text: 'ತೋಯ', category: 'ನೀರು' }
        ]
      }
    },
    'ವಿರುದ್ಧಾರ್ಥಕ ಪದಗಳು (Antonyms)': {
      quiz: [
        { question: " 'ಹಗಲು' ಪದದ ವಿರುದ್ಧಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಸಂಜೆ', 'ಬೆಳಿಗ್ಗೆ', 'ರಾತ್ರಿ', 'ಮಧ್ಯಾಹ್ನ'], correctAnswer: 'ರಾತ್ರಿ' },
        { question: " 'ದೊಡ್ಡದು' ಪದದ ವಿರುದ್ಧಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಸಣ್ಣದು', 'ಉದ್ದದು', 'ಅಗಲದು', 'ದಪ್ಪದು'], correctAnswer: 'ಸಣ್ಣದು' },
        { question: " 'ಉತ್ತರ' ಪದದ ವಿರುದ್ಧಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಪ್ರಶ್ನೆ', 'ಪರಿಹಾರ', 'ಮಾತು', 'ಬರಹ'], correctAnswer: 'ಪ್ರಶ್ನೆ' },
        { question: " 'ಜಯ' ಪದದ ವಿರುದ್ಧಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಅಪಜಯ', 'ವಿಜಯ', 'ಗೆಲುವು', 'ಸೋಲು'], correctAnswer: 'ಅಪಜಯ' },
        { question: " 'ಹೊಸದು' ಪದದ ವಿರುದ್ಧಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಹಳೆಯದು', 'ತಾಜಾ', 'ನವೀನ', 'ಸುಂದರ'], correctAnswer: 'ಹಳೆಯದು' },
        { question: " 'ಕಪ್ಪು' ಪದದ ವಿರುದ್ಧಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಬಿಳಿ', 'ಕೆಂಪು', 'ಹಸಿರು', 'ಹಳದಿ'], correctAnswer: 'ಬಿಳಿ' },
        { question: " 'ಒಳ್ಳೆಯದು' ಪದದ ವಿರುದ್ಧಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಕೆಟ್ಟದ್ದು', 'ಸುಂದರ', 'ದೊಡ್ಡದು', 'ಸಣ್ಣದು'], correctAnswer: 'ಕೆಟ್ಟದ್ದು' },
        { question: " 'ಬೆಳಕು' ಪದದ ವಿರುದ್ಧಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಕತ್ತಲೆ', 'ನೆರಳು', 'ಬಿಸಿಲು', 'ಮಳೆ'], correctAnswer: 'ಕತ್ತಲೆ' },
        { question: " 'ಮೇಲೆ' ಪದದ ವಿರುದ್ಧಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಕೆಳಗೆ', 'ಪಕ್ಕದಲ್ಲಿ', 'ಹಿಂದೆ', 'ಮುಂದೆ'], correctAnswer: 'ಕೆಳಗೆ' },
        { question: " 'ಮುಂದೆ' ಪದದ ವಿರುದ್ಧಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಹಿಂದೆ', 'ಪಕ್ಕದಲ್ಲಿ', 'ಮೇಲೆ', 'ಕೆಳಗೆ'], correctAnswer: 'ಹಿಂದೆ' },
        { question: " 'ಸುಖ' ಪದದ ವಿರುದ್ಧಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ದುಃಖ', 'ಸಂತೋಷ', 'ನಗು', 'ಆಟ'], correctAnswer: 'ದುಃಖ' },
        { question: " 'ಬಡವ' ಪದದ ವಿರುದ್ಧಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಶ್ರೀಮಂತ', 'ಕೂಲಿಕಾರ', 'ರೈತ', 'ವ್ಯಾಪಾರಿ'], correctAnswer: 'ಶ್ರೀಮಂತ' },
        { question: " 'ಸತ್ಯ' ಪದದ ವಿರುದ್ಧಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಅಸತ್ಯ', 'ಸುಳ್ಳು', 'ಮಾತು', 'ಕಥೆ'], correctAnswer: 'ಅಸತ್ಯ' },
        { question: " 'ಧರ್ಮ' ಪದದ ವಿರುದ್ಧಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ಅಧರ್ಮ', 'ನ್ಯಾಯ', 'ನೀತಿ', 'ಪದ್ಧತಿ'], correctAnswer: 'ಅಧರ್ಮ' },
        { question: " 'ಲಾಭ' ಪದದ ವಿರುದ್ಧಾರ್ಥಕ ಪದ ಯಾವುದು?", options: ['ನಷ್ಟ', 'ಗೆಲುವು', 'ಸೋಲು', 'ಆದಾಯ'], correctAnswer: 'ನಷ್ಟ' }
      ],
      sorting: {
        categories: ['ಹಗಲು', 'ದೊಡ್ಡದು', 'ಜಯ'],
        items: [
          { text: 'ರಾತ್ರಿ', category: 'ಹಗಲು' }, { text: 'ಸಣ್ಣದು', category: 'ದೊಡ್ಡದು' }, { text: 'ಅಪಜಯ', category: 'ಜಯ' },
          { text: 'ಸಂಜೆ', category: 'ಹಗಲು' }, { text: 'ಚಿಕ್ಕದು', category: 'ದೊಡ್ಡದು' }, { text: 'ಸೋಲು', category: 'ಜಯ' }
        ]
      }
    },
    'ಕಾಲಗಳು (Tenses)': {
      quiz: [
        { question: " 'ನಾನು ಶಾಲೆಗೆ ಹೋಗುತ್ತೇನೆ' ಇದು ಯಾವ ಕಾಲ?", options: ['ವರ್ತಮಾನ ಕಾಲ', 'ಭೂತ ಕಾಲ', 'ಭವಿಷ್ಯತ್ ಕಾಲ', 'ಯಾವುದೂ ಅಲ್ಲ'], correctAnswer: 'ವರ್ತಮಾನ ಕಾಲ' },
        { question: " 'ಅವನು ಪಾಠ ಓದಿದನು' ಇದು ಯಾವ ಕಾಲ?", options: ['ವರ್ತಮಾನ ಕಾಲ', 'ಭೂತ ಕಾಲ', 'ಭವಿಷ್ಯತ್ ಕಾಲ', 'ಯಾವುದೂ ಅಲ್ಲ'], correctAnswer: 'ಭೂತ ಕಾಲ' },
        { question: " 'ನಾಳೆ ಮಳೆ ಬರುವುದು' ಇದು ಯಾವ ಕಾಲ?", options: ['ವರ್ತಮಾನ ಕಾಲ', 'ಭೂತ ಕಾಲ', 'ಭವಿಷ್ಯತ್ ಕಾಲ', 'ಯಾವುದೂ ಅಲ್ಲ'], correctAnswer: 'ಭವಿಷ್ಯತ್ ಕಾಲ' },
        { question: " 'ಅವರು ಆಟವಾಡುತ್ತಿದ್ದಾರೆ' ಇದು ಯಾವ ಕಾಲ?", options: ['ವರ್ತಮಾನ ಕಾಲ', 'ಭೂತ ಕಾಲ', 'ಭವಿಷ್ಯತ್ ಕಾಲ', 'ಯಾವುದೂ ಅಲ್ಲ'], correctAnswer: 'ವರ್ತಮಾನ ಕಾಲ' }
      ]
    },
    'ಸರ್ವನಾಮಗಳು (Pronouns)': {
      quiz: [
        { question: " 'ನಾನು' ಇದು ಯಾವ ಪುರುಷ ಸರ್ವನಾಮ?", options: ['ಉತ್ತಮ ಪುರುಷ', 'ಮಧ್ಯಮ ಪುರುಷ', 'ಪ್ರಥಮ ಪುರುಷ', 'ಯಾವುದೂ ಅಲ್ಲ'], correctAnswer: 'ಉತ್ತಮ ಪುರುಷ' },
        { question: " 'ನೀನು' ಇದು ಯಾವ ಪುರುಷ ಸರ್ವನಾಮ?", options: ['ಉತ್ತಮ ಪುರುಷ', 'ಮಧ್ಯಮ ಪುರುಷ', 'ಪ್ರಥಮ ಪುರುಷ', 'ಯಾವುದೂ ಅಲ್ಲ'], correctAnswer: 'ಮಧ್ಯಮ ಪುರುಷ' },
        { question: " 'ಅವನು' ಇದು ಯಾವ ಪುರುಷ ಸರ್ವನಾಮ?", options: ['ಉತ್ತಮ ಪುರುಷ', 'ಮಧ್ಯಮ ಪುರುಷ', 'ಪ್ರಥಮ ಪುರುಷ', 'ಯಾವುದೂ ಅಲ್ಲ'], correctAnswer: 'ಪ್ರಥಮ ಪುರುಷ' },
        { question: " 'ನಾವು' ಇದು ಯಾವ ವಚನದ ಸರ್ವನಾಮ?", options: ['ಏಕವಚನ', 'ಬಹುವಚನ', 'ದ್ವಿವಚನ', 'ಯಾವುದೂ ಅಲ್ಲ'], correctAnswer: 'ಬಹುವಚನ' }
      ]
    },
    'ತತ್ಸಮ-ತದ್ಭವ (Tatsama-Tadbhava)': {
      quiz: [
        { question: " 'ರಾಯ' ಪದದ ತತ್ಸಮ ರೂಪ ಯಾವುದು?", options: ['ರಾಜ', 'ರಾಯನು', 'ರಾಯರು', 'ರಾಯ'], correctAnswer: 'ರಾಜ' },
        { question: " 'ಕಾವ್ಯ' ಪದದ ತದ್ಭವ ರೂಪ ಯಾವುದು?", options: ['ಕಬ್ಬ', 'ಕವಿತೆ', 'ಕಾವ್ಯವು', 'ಕಾವ್ಯ'], correctAnswer: 'ಕಬ್ಬ' },
        { question: " 'ವರ್ಷ' ಪದದ ತದ್ಭವ ರೂಪ ಯಾವುದು?", options: ['ವರುಷ', 'ವರ್ಷವು', 'ವರ್ಷಗಳು', 'ವರ್ಷ'], correctAnswer: 'ವರುಷ' },
        { question: " 'ಪಕ್ಷಿ' ಪದದ ತದ್ಭವ ರೂಪ ಯಾವುದು?", options: ['ಹಕ್ಕಿ', 'ಪಕ್ಷಿಯು', 'ಪಕ್ಷಿಗಳು', 'ಪಕ್ಷಿ'], correctAnswer: 'ಹಕ್ಕಿ' }
      ],
      sorting: {
        categories: ['ತತ್ಸಮ', 'ತದ್ಭವ'],
        items: [
          { text: 'ರಾಜ', category: 'ತತ್ಸಮ' }, { text: 'ರಾಯ', category: 'ತದ್ಭವ' },
          { text: 'ಕಾವ್ಯ', category: 'ತತ್ಸಮ' }, { text: 'ಕಬ್ಬ', category: 'ತದ್ಭವ' },
          { text: 'ವರ್ಷ', category: 'ತತ್ಸಮ' }, { text: 'ವರುಷ', category: 'ತದ್ಭವ' }
        ]
      }
    },
    'ನುಡಿಗಟ್ಟುಗಳು (Idioms)': {
      quiz: [
        { question: " 'ಕೈಕೊಡು' ಈ ನುಡಿಗಟ್ಟಿನ ಅರ್ಥವೇನು?", options: ['ಸಹಾಯ ಮಾಡು', 'ವಂಚಿಸು', 'ಕೈ ಕುಲುಕು', 'ಕೆಲಸ ಮಾಡು'], correctAnswer: 'ವಂಚಿಸು' },
        { question: " 'ಹೊಟ್ಟೆ ಕಿಚ್ಚು' ಈ ನುಡಿಗಟ್ಟಿನ ಅರ್ಥವೇನು?", options: ['ಹಸಿವು', 'ಅಸೂಯೆ', 'ಕೋಪ', 'ಸಂತೋಷ'], correctAnswer: 'ಅಸೂಯೆ' },
        { question: " 'ಬಾಯಿ ಬಾಯಿ ಬಿಡು' ಈ ನುಡಿಗಟ್ಟಿನ ಅರ್ಥವೇನು?", options: ['ಮಾತನಾಡು', 'ಹಪಹಪಿಸು', 'ನಗು', 'ಹಾಡು'], correctAnswer: 'ಹಪಹಪಿಸು' }
      ]
    }
  }
};

const shuffle = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const generateLocalGrammarActivity = (subject: 'English' | 'Kannada', topic: string, level: string): GrammarGame => {
  const subjectData = GRAMMAR_DATA[subject];
  const topicData = subjectData[topic] || subjectData[Object.keys(subjectData)[0]]; 

  // Determine available types for this topic
  const availableTypes: ActivityType[] = [];
  if (topicData.quiz) availableTypes.push(ActivityType.QUIZ);
  if (topicData.unscramble) availableTypes.push(ActivityType.UNSCRAMBLE);
  if (topicData.sorting) availableTypes.push(ActivityType.SORTING);
  if (topicData.fillInBlanks) availableTypes.push(ActivityType.FILL_IN_THE_BLANKS);
  if (topicData.wordBuilding) availableTypes.push(ActivityType.WORD_BUILDING);

  if (availableTypes.length === 0) availableTypes.push(ActivityType.QUIZ);

  const selectedType = availableTypes[Math.floor(Math.random() * availableTypes.length)];

  const game: GrammarGame = {
    type: selectedType,
    title: `${topic} - ${selectedType.replace('_', ' ').toUpperCase()}`,
    instructions: `Complete the ${selectedType.replace('_', ' ')} activity for ${topic}.`
  };

  // Subset size - pick 5 items for most activities to ensure variety
  const SUBSET_SIZE = 5;

  switch (selectedType) {
    case ActivityType.QUIZ:
      const quizPool = topicData.quiz || [
        { question: `Sample question for ${topic}`, options: ['A', 'B', 'C', 'D'], correctAnswer: 'A', explanation: 'Default explanation' }
      ];
      // Shuffle and pick a subset
      game.questions = shuffle(quizPool).slice(0, SUBSET_SIZE).map(q => ({
        ...q,
        options: shuffle(q.options)
      }));
      break;
    case ActivityType.UNSCRAMBLE:
      const sentences = topicData.unscramble || ['The quick brown fox jumps.'];
      // Pick one random sentence for unscramble
      const sentence = sentences[Math.floor(Math.random() * sentences.length)];
      game.unscrambleTask = {
        scrambledWords: shuffle(sentence.split(' ')),
        correctSentence: sentence,
        clue: `Unscramble the sentence related to ${topic}`
      };
      break;
    case ActivityType.SORTING:
      const sortingData = topicData.sorting || {
        categories: ['Category A', 'Category B'],
        items: [{ text: 'Item 1', category: 'Category A' }, { text: 'Item 2', category: 'Category B' }]
      };
      // Pick a subset of items to sort
      game.sortingTask = {
        ...sortingData,
        items: shuffle(sortingData.items).slice(0, 6) // Pick 6 items to sort
      };
      break;
    case ActivityType.FILL_IN_THE_BLANKS:
      const fibPool = topicData.fillInBlanks || [
        { sentence: `This is a [BLANK] sentence for ${topic}.`, options: ['test', 'sample', 'demo'], correctAnswers: ['test'], explanation: 'Fill in the correct word.' }
      ];
      game.fillInBlanksTask = shuffle(fibPool).slice(0, SUBSET_SIZE).map(f => ({
        ...f,
        options: shuffle(f.options)
      }));
      break;
    case ActivityType.WORD_BUILDING:
      game.wordBuildingTask = shuffle(topicData.wordBuilding || []).slice(0, 2).map(wb => ({
        ...wb,
        parts: shuffle(wb.parts)
      }));
      break;
    case ActivityType.SPELLING:
      const spellingPool = topicData.spelling || [
        { word: 'Grammar', definition: 'The whole system and structure of a language.', scrambledLetters: 'grammar'.split('') }
      ];
      game.spellingTask = shuffle(spellingPool).slice(0, SUBSET_SIZE).map(s => ({
        ...s,
        scrambledLetters: shuffle(s.word.split(''))
      }));
      break;
    case ActivityType.READING_COMPREHENSION:
      const rcTask = topicData.readingComprehension || {
        passage: "Reading is a great way to learn. It helps you understand the world better.",
        questions: [{ question: "What is a great way to learn?", options: ["Reading", "Sleeping", "Eating", "Running"], correctAnswer: "Reading" }]
      };
      game.readingComprehensionTask = {
        ...rcTask,
        questions: shuffle(rcTask.questions).slice(0, 3)
      };
      break;
  }

  return game;
};
