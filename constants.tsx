
import { Subject, Language, ResourceLink } from './types';

export const CLASSES = ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'];

export const SUBJECTS = [Subject.MATHEMATICS, Subject.SCIENCE, Subject.ENGLISH, Subject.KANNADA, Subject.SOCIAL_SCIENCE];

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  [Language.ENGLISH]: {
    'nav.dashboard': 'Dashboard',
    'nav.virtual_lab': 'Virtual Lab',
    'nav.chemistry_lab': 'Chemistry Lab',
    'nav.language_lab': 'Language Lab',
    'nav.lesson_planner': 'Lesson Planner',
    'nav.resources': 'Resources',
    'landing.title': 'E-Teaching Karnataka',
    'landing.subtitle': 'Empowering Government Schools with AI & Interactive Labs',
    'landing.get_started': 'Get Started',
    'dashboard.welcome': 'Welcome, Teacher',
    'dashboard.stats': 'Your Classroom Stats',
    'planner.title': 'AI Lesson Planner',
    'planner.generate': 'Generate Plan',
    'lab.title': 'Virtual Science & Math Lab',
    'lang.title': 'Language Lab',
    'resources.title': 'KSEAB Resource Hub',
    'assistant.title': 'AI Classroom Assistant',
    'assistant.placeholder': 'Ask a pedagogical question...',
    'offline.saved': 'Saved for Offline',
    'offline.save': 'Save for Offline'
  },
  [Language.KANNADA]: {
    'nav.dashboard': 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    'nav.virtual_lab': 'ವರ್ಚುವಲ್ ಲ್ಯಾಬ್',
    'nav.chemistry_lab': 'ರಸಾಯನಶಾಸ್ತ್ರ ಲ್ಯಾಬ್',
    'nav.language_lab': 'ಭಾಷಾ ಪ್ರಯೋಗಾಲಯ',
    'nav.lesson_planner': 'ಪಾಠ ಯೋಜಕ',
    'nav.resources': 'ಸಂಪನ್ಮೂಲಗಳು',
    'landing.title': 'ಇ-ಬೋಧನೆ ಕರ್ನಾಟಕ',
    'landing.subtitle': 'AI ಮತ್ತು ಸಂವಾದಾತ್ಮಕ ಲ್ಯಾಬ್‌ಗಳೊಂದಿಗೆ ಸರ್ಕಾರಿ ಶಾಲೆಗಳ ಸಬಲೀಕರಣ',
    'landing.get_started': 'ಪ್ರಾರಂಭಿಸಿ',
    'dashboard.welcome': 'ಸ್ವಾಗತ, ಶಿಕ್ಷಕರೇ',
    'dashboard.stats': 'ನಿಮ್ಮ ತರಗತಿಯ ಅಂಕಿಅಂಶಗಳು',
    'planner.title': 'AI ಪಾಠ ಯೋಜಕ',
    'planner.generate': 'ಯೋಜನೆ ರೂಪಿಸಿ',
    'lab.title': 'ವರ್ಚುವಲ್ ವಿಜ್ಞಾನ ಮತ್ತು ಗಣಿತ ಲ್ಯಾಬ್',
    'lang.title': 'ಭಾಷಾ ಪ್ರಯೋಗಾಲಯ',
    'resources.title': 'KSEAB ಸಂಪನ್ಮೂಲ ಕೇಂದ್ರ',
    'assistant.title': 'AI ತರಗತಿ ಸಹಾಯಕ',
    'assistant.placeholder': 'ಬೋಧನಾ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ...',
    'offline.saved': 'ಆಫ್‌ಲೈನ್‌ಗಾಗಿ ಉಳಿಸಲಾಗಿದೆ',
    'offline.save': 'ಆಫ್‌ಲೈನ್‌ಗಾಗಿ ಉಳಿಸಿ'
  }
};

export const RESOURCE_LINKS: ResourceLink[] = [
  { title: 'Class 10 Mathematics Textbook', url: 'https://ktbs.kar.nic.in/New/textbook/Class-10/Mathematics-10-EM.pdf', grade: 'Class 10', subject: Subject.MATHEMATICS },
  { title: 'Class 10 Science Textbook', url: 'https://ktbs.kar.nic.in/New/textbook/Class-10/Science-10-EM.pdf', grade: 'Class 10', subject: Subject.SCIENCE },
  { title: 'Class 9 Mathematics Textbook', url: 'https://ktbs.kar.nic.in/New/textbook/Class-9/Mathematics-9-EM.pdf', grade: 'Class 9', subject: Subject.MATHEMATICS },
  { title: 'SSLC Question Papers', url: 'https://kseab.karnataka.gov.in/new-page/SSLC%20QUESTION%20PAPERS/en', grade: 'Class 10', subject: Subject.SCIENCE },
  { title: 'KSEAB Official Portal', url: 'https://kseab.karnataka.gov.in/', grade: 'All', subject: Subject.SCIENCE }
];

export const CHAPTER_DATA: Record<string, Record<string, string[]>> = {
  // ... (rest of CHAPTER_DATA remains the same)
  'Class 6': {
    [Subject.MATHEMATICS]: ['Patterns in Mathematics', 'Lines and Angles', 'Number Play', 'Data Handling and Presentation', 'Prime Time', 'Perimeter and Area', 'Fractions', 'Playing with Constructions', 'Symmetry', 'The Other Side of Zero'],
    [Subject.SCIENCE]: [
      'Chapter 1: The Wonderful World of Science',
      'Chapter 2: Diversity in the Living World',
      'Chapter 3: Mindful Eating – A Path to a Healthy Body',
      'Chapter 4: Exploring Magnets',
      'Unit 5: Measurement of Length and Motion',
      'Unit 6: Light, Shadows and Reflections',
      'Chapter 7: Temperature and Its Measurement',
      'Chapter 8: A Journey through States of Water',
      'Chapter 9: Methods of Separation in Everyday Life',
      'Chapter 10: Living Creatures – Exploring Their Characteristics',
      'Chapter 11: Nature’s Treasures',
      'Chapter 12: Beyond Earth'
    ],
    [Subject.ENGLISH]: ['Who Did Patrick’s Homework?', 'A House, A Home', 'How the Dog Found Himself a New Master!', 'The Kite', 'Taro’s Reward', 'The Quarrel', 'An Indian-American Woman in Space', 'Beauty'],
    [Subject.KANNADA]: ['ಕನ್ನಡ ಬಾವುಟ', 'ಗುರಿ', 'ಪರಿಸರ', 'ಮಳೆ', 'ಹಬ್ಬಗಳು', 'ಪ್ರಾಣಿ ಪ್ರೇಮ', 'ಶಿಕ್ಷಣ', 'ನಾಡ ಹಬ್ಬ'],
    [Subject.SOCIAL_SCIENCE]: [
      'Chapter 1: Introduction to History and Early Society',
      'Chapter 2: India – Our Pride',
      'Chapter 3: Our Pride – Our State Karnataka',
      'Chapter 4: The Culture of the Vedic Period',
      'Chapter 5: Rise of New Religions',
      'Chapter 6: Ancient Dynasties of South India',
      'Chapter 7: Citizen and Citizenship',
      'Chapter 8: Our Constitution',
      'Chapter 9: Types of Government',
      'Chapter 10: Globe and Maps',
      'Chapter 11: Major Landforms'
    ]
  },
  'Class 7': {
    [Subject.MATHEMATICS]: ['Integers', 'Fractions and Decimals', 'Data Handling', 'Simple Equations', 'Lines and Angles', 'The Triangle and its Properties', 'Congruence of Triangles', 'Comparing Quantities', 'Rational Numbers', 'Practical Geometry', 'Perimeter and Area', 'Algebraic Expressions', 'Exponents and Powers', 'Symmetry', 'Visualising Solid Shapes'],
    [Subject.SCIENCE]: ['Nutrition in Plants', 'Nutrition in Animals', 'Fibre to Fabric', 'Heat', 'Acids, Bases and Salts', 'Physical and Chemical Changes', 'Weather, Climate and Adaptations', 'Winds, Storms and Cyclones', 'Soil', 'Respiration in Organisms', 'Transportation in Animals and Plants', 'Reproduction in Plants', 'Motion and Time', 'Electric Current and its Effects', 'Light', 'Water: A Precious Resource', 'Forests: Our Lifeline', 'Wastewater Story'],
    [Subject.ENGLISH]: ['Three Questions', 'The Squirrel', 'A Gift of Chappals', 'The Rebel', 'The Shed', 'Gopal and the Hilsa Fish', 'The Ashes that Made Trees Bloom', 'Chivvy'],
    [Subject.KANNADA]: ['ಪುಟ್ಟಜ್ಜಿ ಪುಟ್ಟಜ್ಜಿ ಕಥೆ ಹೇಳು', 'ಸ್ವಾತಂತ್ರ್ಯ ಸ್ವರ್ಗ', 'ಪರಸ್ಪರ ಸಹಾಯ', 'ಕೆಚ್ಚೆದೆಯ ಹುಡುಗಿ', 'ಬಣ್ಣದ ಹಕ್ಕಿ', 'ನಮ್ಮ ಸೈನಿಕರು', 'ಭಾಗ್ಯದ ಬಳೆಗಾರ']
  },
  'Class 8': {
    [Subject.MATHEMATICS]: ['Rational Numbers', 'Linear Equations in One Variable', 'Understanding Quadrilaterals', 'Practical Geometry', 'Data Handling', 'Squares and Square Roots', 'Cubes and Cube Roots', 'Comparing Quantities', 'Algebraic Expressions and Identities', 'Visualising Solid Shapes', 'Mensuration', 'Exponents and Powers', 'Direct and Inverse Proportions', 'Factorisation', 'Introduction to Graphs', 'Playing with Numbers'],
    [Subject.SCIENCE]: ['Crop Production and Management', 'Microorganisms: Friend and Foe', 'Synthetic Fibres and Plastics', 'Materials: Metals and Non-Metals', 'Coal and Petroleum', 'Combustion and Flame', 'Conservation of Plans and Animals', 'Cell - Structure and Functions', 'Reproduction in Animals', 'Reaching the Age of Adolescence', 'Force and Pressure', 'Friction', 'Sound', 'Chemical Effects of Electric Current', 'Some Natural Phenomena', 'Light', 'Stars and The Solar System', 'Pollution of Air and Water'],
    [Subject.ENGLISH]: ['The Best Christmas Present in the World', 'The Ant and the Cricket', 'The Tsunami', 'Geography Lesson', 'Glimpses of the Past', 'Macavity: The Mystery Cat'],
    [Subject.KANNADA]: ['ಕನ್ನಡ ನಾಡು ನುಡಿ', 'ನೀರು ಕೊಡದ ನಾಡಿನಲ್ಲಿ', 'ಮಹಾತ್ಮ ಗಾಂಧಿ', 'ನೆಲದ ಸೊಬಗು', 'ಸಿದ್ದಾರ್ಥನ ಕಾರುಣ್ಯ', 'ಬೆಳೆಯುವ ಸಿರಿ ಮೊಳಕೆಯಲ್ಲಿ']
  },
  'Class 9': {
    [Subject.MATHEMATICS]: ['Number Systems', 'Polynomials', 'Coordinate Geometry', 'Linear Equations in Two Variables', 'Introduction to Euclid’s Geometry', 'Lines and Angles', 'Triangles', 'Quadrilaterals', 'Areas of Parallelograms and Triangles', 'Circles', 'Constructions', 'Heron’s Formula', 'Surface Areas and Volumes', 'Statistics', 'Probability'],
    [Subject.SCIENCE]: ['Matter in Our Surroundings', 'Is Matter Around Us Pure', 'Atoms and Molecules', 'Structure of the Atom', 'The Fundamental Unit of Life', 'Tissues', 'Diversity in Living Organisms', 'Motion', 'Force and Laws of Motion', 'Gravitation', 'Work and Energy', 'Sound', 'Why do we fall ill', 'Natural Resources', 'Improvement in Food Resources'],
    [Subject.ENGLISH]: ['The Fun They Had', 'The Road Not Taken', 'The Sound of Music', 'Wind', 'The Little Girl', 'Rain on the Roof', 'A Truly Beautiful Mind', 'The Lake Isle of Innisfree'],
    [Subject.KANNADA]: ['ಹೊಸ ಹಾಡು', 'ಧರ್ಮಬುದ್ಧಿ', 'ಆದರ್ಶ ಶಿಕ್ಷಕ ಸರ್ವೆಪಲ್ಲಿ ರಾಧಾಕೃಷ್ಣನ್', 'ಬೆಳಗೆ', 'ಮರಳಿ ಮನೆಗೆ', 'ಹರಲೀಲೆ', 'ಸೋಮೇಶ್ವರ ಶತಕ']
  },
  'Class 10': {
    [Subject.MATHEMATICS]: ['Real Numbers', 'Polynomials', 'Pair of Linear Equations in Two Variables', 'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Coordinate Geometry', 'Introduction to Trigonometry', 'Some Applications of Trigonometry', 'Circles', 'Constructions', 'Areas Related to Circles', 'Surface Areas and Volumes', 'Statistics', 'Probability'],
    [Subject.SCIENCE]: ['Chemical Reactions and Equations', 'Acids, Bases and Salts', 'Metals and Non-metals', 'Carbon and its Compounds', 'Periodic Classification of Elements', 'Life Processes', 'Control and Coordination', 'How do Organisms Reproduce?', 'Heredity and Evolution', 'Light – Reflection and Refraction', 'The Human Eye and the Colourful World', 'Electricity', 'Magnetic Effects of Electric Current', 'Sources of Energy', 'Our Environment', 'Sustainable Management of Natural Resources'],
    [Subject.ENGLISH]: ['A Letter to God', 'Dust of Snow', 'Fire and Ice', 'Nelson Mandela: Long Walk to Freedom', 'A Tiger in the Zoo', 'Two Stories about Flying', 'How to Tell Wild Animals', 'The Ball Poem', 'From the Diary of Anne Frank', 'Amanda!'],
    [Subject.KANNADA]: ['ಹಲಗಲಿ ಬೇಡರು', 'ಕೌರವೇಂದ್ರನ ಕೊಂದೆ ನೀನು', 'ಶಬರಿ', 'ಲಂಡನ್ ನಗರ', 'ಎದೆಗೆ ಬಿದ್ದ ಅಕ್ಷರ', 'ವ್ಯಾಘ್ರಗೀತೆ', 'ಛಲಮನೆ ಮೆರೆವೆಂ']
  }
};

export const LAB_ACTIVITIES = [
  { id: 'sci-ac-gen', title: 'AC Generator Lab', subject: Subject.SCIENCE, description: 'Simulate electromagnetic induction with a rotating coil.', icon: '🚡' },
  { id: 'sci-interference', title: 'Wave Interference', subject: Subject.SCIENCE, description: 'Explore Young’s double slit experiment and fringe patterns.', icon: '🌈' },
  { id: 'sci-photoelectric', title: 'Photoelectric Effect', subject: Subject.SCIENCE, description: 'Discover the quantum nature of light and electron emission.', icon: '💡' },
  { id: 'sci-decay', title: 'Radioactive Decay', subject: Subject.SCIENCE, description: 'Study half-life and random decay processes.', icon: '☢️' },
  { id: 'sci-reaction', title: 'Chemical Reaction Mixer', subject: Subject.SCIENCE, description: 'Mix various acids and bases to see colors, bubbles, and heat.', icon: '⚗️' },
  { id: 'sci-induction', title: 'Faraday\'s Induction Lab', subject: Subject.SCIENCE, description: 'Move a magnet through a coil to generate electricity.', icon: '🧲' },
  { id: 'sci-titration', title: 'Chemical Titration', subject: Subject.SCIENCE, description: 'Determine the concentration of an unknown acid solution.', icon: '🧪' },
  { id: 'sci-thermal', title: 'Heat Conductivity Lab', subject: Subject.SCIENCE, description: 'Compare how different solids transfer thermal energy.', icon: '🔥' },
  { id: 'sci-optics', title: 'Ray Optics Lab', subject: Subject.SCIENCE, description: 'Simulate light refraction through different mediums.', icon: '🔭' },
  { id: 'sci-projectile', title: 'Projectile Launcher', subject: Subject.SCIENCE, description: 'Calculate and visualize parabolic paths of launched objects.', icon: '🏹' },
  { id: 'math-fractions', title: 'Fraction Explorer', subject: Subject.MATHEMATICS, description: 'Visualize parts of a whole with interactive circles.', icon: '🍰' },
  { id: 'sci-ph', title: 'pH Scale Simulator', subject: Subject.SCIENCE, description: 'Test acidity and alkalinity of common substances.', icon: '🧪' },
  { id: 'sci-pendulum', title: 'Pendulum Motion', subject: Subject.SCIENCE, description: 'Study the laws of periodic motion with a swinging pendulum.', icon: '⏳' },
  { id: 'sci-circuit', title: 'Electric Circuit Lab', subject: Subject.SCIENCE, description: 'Connect batteries and bulbs to see how electricity flows.', icon: '🔋' },
  { id: 'sci-matter', title: 'States of Matter', subject: Subject.SCIENCE, description: 'Observe how atoms behave in solids, liquids, and gases.', icon: '☁️' },
  { id: 'math-pythagoras', title: 'Pythagoras Lab', subject: Subject.MATHEMATICS, description: 'Visualize a² + b² = c² with interactive squares.', icon: '📐' },
  { id: 'math-algebra', title: 'Algebra Visualizer', subject: Subject.MATHEMATICS, description: 'See how slope and intercept change linear graphs.', icon: '📈' },
  { id: 'hist-karnataka', title: 'History of Karnataka', subject: Subject.SOCIAL_SCIENCE, description: 'Interactive map of Kadambas, Hoysalas, and Vijayanagara.', icon: '🗺️' },
  { id: 'math-solver', title: 'Math Step-Solver', subject: Subject.MATHEMATICS, description: 'AI-powered step-by-step breakdown of math problems.', icon: '🧮' }
];
