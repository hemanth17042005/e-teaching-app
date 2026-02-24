
import { LessonPlan, Subject } from './types';

export const STATIC_LESSON_PLANS: Record<string, Record<string, Record<string, LessonPlan>>> = {
  'Class 10': {
    [Subject.MATHEMATICS]: {
      'Real Numbers': {
        className: 'Class 10',
        chapterName: 'Real Numbers',
        summary: 'Fundamental properties of real numbers, Euclid\'s division lemma, and the fundamental theorem of arithmetic.',
        topics: [
          {
            title: 'Euclid’s Division Lemma',
            points: [
              'a = bq + r, 0 ≤ r < b.',
              'Used to find HCF of two numbers.',
              'Formalization of long division.',
              'Application in solving word problems.'
            ],
            priority: 'High',
            explanationDepth: 'Deep Conceptual',
            problems: ['Easy: Find HCF of 135 and 225.', 'Medium: Show odd integers are 6q+1, 6q+3, or 6q+5.']
          }
        ]
      }
    }
  },
  'Class 6': {
    [Subject.SCIENCE]: {
      'Chapter 1: The Wonderful World of Science': {
        className: 'Class 6',
        chapterName: 'Chapter 1: The Wonderful World of Science',
        summary: 'An introduction to the meaning of science, the scientific method, and its importance in daily life.',
        topics: [
          {
            title: 'Meaning of Science',
            points: [
              'Science is the systematic study of the natural world around us, including plants, animals, air, water, and the universe.',
              'It helps us understand how things work and why certain events happen in nature.',
              'Science begins with curiosity and the desire to ask questions about our surroundings.',
              'It involves careful observation using our senses such as seeing, hearing, touching, smelling, and tasting.',
              'Science is based on facts and evidence, not on guesses or superstitions.',
              'It helps humans solve problems by finding logical and practical solutions.',
              'Scientific knowledge keeps improving as new discoveries are made.',
              'Science connects theory with real-life applications such as electricity, transport, and medicine.',
              'It encourages critical thinking and rational decision-making.',
              'Science helps in improving the quality of life through inventions and technology.'
            ],
            priority: 'High',
            explanationDepth: 'Introductory Overview',
            model5E: {
              engage: 'Ask students why the sky changes colour during sunset.',
              explore: 'Allow students to observe natural phenomena around school.',
              explain: 'Discuss how science studies natural events using evidence.',
              elaborate: 'Connect science concepts with daily examples like cooking or using a mobile phone.',
              evaluate: 'Ask students to give examples of science used in their daily life.'
            }
          },
          {
            title: 'Scientific Method',
            points: [
              'The scientific method is a step-by-step process used to investigate questions and solve problems.',
              'It begins with careful observation of a situation or problem.',
              'After observation, a clear and specific question is formed.',
              'A hypothesis is then made, which is a possible explanation or prediction.',
              'An experiment is conducted to test whether the hypothesis is correct.',
              'Data is collected during the experiment in the form of measurements or observations.',
              'The collected data is analysed carefully to look for patterns or results.',
              'A conclusion is drawn based on whether the hypothesis was supported or not.',
              'If needed, the experiment can be repeated to verify the results.',
              'The scientific method ensures accuracy, reliability, and logical thinking.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Show a plant growing towards sunlight and ask why it bends.',
              explore: 'Students observe plant direction over a few days.',
              explain: 'Introduce steps of scientific method.',
              elaborate: 'Apply steps to a simple classroom experiment.',
              evaluate: 'Students write steps used in their experiment.'
            }
          },
          {
            title: 'Science in Daily Life',
            points: [
              'Science plays an important role in our daily routine from morning to night.',
              'The alarm clock, electricity, and mobile phones work because of scientific inventions.',
              'Cooking food involves scientific processes such as heating and chemical changes.',
              'Medicines and vaccines are developed using scientific research to cure diseases.',
              'Vehicles such as cars, buses, and trains operate based on scientific principles.',
              'Communication systems like television and the internet are results of science.',
              'Clean drinking water is made safe through scientific purification methods.',
              'Agricultural improvements help farmers grow more food using scientific techniques.',
              'Science helps predict weather and natural disasters to ensure safety.',
              'Without science, modern life would not be comfortable or advanced.'
            ],
            priority: 'High',
            explanationDepth: 'General Application',
            model5E: {
              engage: 'Ask students to list 5 scientific items they used today.',
              explore: 'Observe classroom objects and discuss how they work.',
              explain: 'Connect daily objects with scientific principles.',
              elaborate: 'Discuss how life would be without electricity.',
              evaluate: 'Students write a short paragraph on science in their life.'
            }
          }
        ]
      },
      'Chapter 2: Diversity in the Living World': {
        className: 'Class 6',
        chapterName: 'Chapter 2: Diversity in the Living World',
        summary: 'Explores the classification of plants and animals, and the importance of biodiversity.',
        topics: [
          {
            title: 'Types of Plants',
            points: [
              'Plants are living organisms that prepare their own food through photosynthesis.',
              'Plants vary in size from tiny herbs to large trees.',
              'Herbs are small plants with soft green stems, such as coriander and spinach.',
              'Shrubs are medium-sized plants with woody stems, like rose and hibiscus.',
              'Trees are tall plants with strong trunks and many branches, such as mango and neem.',
              'Climbers are plants that need support to grow upward, like pea plants.',
              'Creepers grow along the ground because their stems are weak, like pumpkin.',
              'Plants also differ in leaf structure and root systems.',
              'Some plants grow in water, while others grow on land.',
              'Plants are important because they provide oxygen, food, shelter, and medicines.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Show different plant samples or pictures.',
              explore: 'Take students for a small garden walk.',
              explain: 'Classify plants into herbs, shrubs, trees, climbers, and creepers.',
              elaborate: 'Students prepare a plant classification chart.',
              evaluate: 'Ask students to identify plant types in their home surroundings.'
            }
          },
          {
            title: 'Types of Animals',
            points: [
              'Animals are living organisms that depend on plants or other animals for food.',
              'Animals live in different habitats such as forests, deserts, water bodies, and polar regions.',
              'Some animals live only on land, such as lions and elephants.',
              'Some animals live only in water, such as fish and whales.',
              'Amphibians like frogs can live both on land and in water.',
              'Birds have wings and can fly, while reptiles crawl on the ground.',
              'Animals move in different ways such as walking, flying, swimming, or slithering.',
              'Animals can be classified into vertebrates and invertebrates.',
              'Vertebrates have a backbone, while invertebrates do not have one.',
              'Animals play an important role in maintaining ecological balance.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Show videos of animals from different habitats.',
              explore: 'Students identify animals around their locality.',
              explain: 'Discuss classification and habitats.',
              elaborate: 'Create a habitat chart.',
              evaluate: 'Students compare two animals based on habitat.'
            }
          },
          {
            title: 'Classification of Living Organisms',
            points: [
              'Classification means grouping living organisms based on similarities.',
              'It helps in studying and understanding the large variety of life forms.',
              'Plants and animals are first divided into major groups.',
              'Animals are classified into vertebrates and invertebrates.',
              'Vertebrates include fish, amphibians, reptiles, birds, and mammals.',
              'Invertebrates include insects, worms, and molluscs.',
              'Plants are classified based on stem type, leaf type, and root system.',
              'Classification makes identification easier.',
              'It helps scientists study relationships among organisms.',
              'Proper classification avoids confusion in naming species.'
            ],
            priority: 'Medium',
            explanationDepth: 'Deep Conceptual',
            model5E: {
              engage: 'Show different organism pictures.',
              explore: 'Group them based on similarities.',
              explain: 'Discuss classification criteria.',
              elaborate: 'Create a simple classification chart.',
              evaluate: 'Identify correct group for given organisms.'
            }
          },
          {
            title: 'Biodiversity',
            points: [
              'Biodiversity refers to the variety of plants, animals, and microorganisms.',
              'It includes diversity within species, between species, and ecosystems.',
              'Forests, oceans, and deserts all have unique biodiversity.',
              'Biodiversity maintains ecological balance.',
              'Every organism plays an important role in the ecosystem.',
              'Loss of biodiversity can disturb food chains.',
              'Human activities like deforestation reduce biodiversity.',
              'Conservation is important to protect endangered species.',
              'Protected areas like national parks help preserve biodiversity.',
              'Biodiversity ensures sustainability of life on Earth.'
            ],
            priority: 'Medium',
            explanationDepth: 'Deep Conceptual',
            model5E: {
              engage: 'Ask why forests are important.',
              explore: 'Identify different organisms in one area.',
              explain: 'Define biodiversity and its importance.',
              elaborate: 'Discuss conservation methods.',
              evaluate: 'Students suggest ways to protect biodiversity.'
            }
          }
        ]
      },
      'Chapter 3: Mindful Eating – A Path to a Healthy Body': {
        className: 'Class 6',
        chapterName: 'Chapter 3: Mindful Eating – A Path to a Healthy Body',
        summary: 'Understanding nutrients, their functions, deficiency diseases, and balanced diet.',
        topics: [
          {
            title: 'Nutrients and Their Functions',
            points: [
              'Carbohydrates are the main source of energy required for daily activities.',
              'Proteins are body-building nutrients that help in growth and repair of tissues.',
              'Fats provide stored energy and help keep the body warm.',
              'Vitamins protect the body from diseases and improve immunity.',
              'Minerals like calcium and iron are essential for bones and blood formation.',
              'Roughage helps in proper digestion and prevents constipation.',
              'Water is essential for transporting nutrients and removing waste.',
              'Each nutrient has a specific role in maintaining body health.',
              'Lack of nutrients can lead to deficiency diseases like scurvy or rickets.',
              'A balanced diet contains all nutrients in the right proportion.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Ask students what they ate for breakfast.',
              explore: 'Identify nutrients in different foods.',
              explain: 'Discuss functions of each nutrient.',
              elaborate: 'Prepare a balanced diet chart.',
              evaluate: 'Students design a healthy meal plan.'
            }
          },
          {
            title: 'Components of Food',
            points: [
              'Food contains different components that are necessary for body growth.',
              'The main components are carbohydrates, proteins, fats, vitamins, and minerals.',
              'Roughage and water are also important components.',
              'Different foods contain different combinations of nutrients.',
              'Rice and wheat are rich in carbohydrates.',
              'Pulses and milk are rich in proteins.',
              'Fruits and vegetables provide vitamins and minerals.',
              'Fats are found in butter, oil, and nuts.',
              'A single type of food cannot provide all nutrients.',
              'Therefore, a variety of food must be consumed daily.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Show different food items.',
              explore: 'Identify components in each food.',
              explain: 'Discuss importance of each component.',
              elaborate: 'Prepare food grouping activity.',
              evaluate: 'Students classify food items.'
            }
          },
          {
            title: 'Deficiency Diseases',
            points: [
              'Deficiency diseases occur due to lack of specific nutrients.',
              'Lack of vitamin C causes scurvy.',
              'Lack of vitamin D causes rickets.',
              'Lack of iron leads to anaemia.',
              'Lack of iodine causes goitre.',
              'Protein deficiency causes kwashiorkor.',
              'These diseases can be prevented by balanced diet.',
              'Regular health check-ups help detect deficiencies.',
              'Awareness about nutrition reduces malnutrition.',
              'Government nutrition programs help prevent deficiency diseases.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Show pictures of deficiency symptoms.',
              explore: 'Identify nutrient lacking.',
              explain: 'Discuss causes and prevention.',
              elaborate: 'Balanced diet planning.',
              evaluate: 'Short quiz on deficiencies.'
            }
          },
          {
            title: 'Balanced Diet',
            points: [
              'A balanced diet contains all nutrients in correct proportions.',
              'It includes carbohydrates, proteins, fats, vitamins, and minerals.',
              'It also contains adequate water and roughage.',
              'Balanced diet varies according to age and activity level.',
              'Children need more protein for growth.',
              'Athletes require more energy-giving foods.',
              'Elderly people need easily digestible food.',
              'Eating too much junk food leads to obesity.',
              'Regular meal timing supports good digestion.',
              'A balanced diet ensures healthy growth and strong immunity.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Ask students to analyse their lunch box.',
              explore: 'Identify missing nutrients.',
              explain: 'Concept of balanced diet.',
              elaborate: 'Create weekly meal chart.',
              evaluate: 'Students prepare their own diet plan.'
            }
          }
        ]
      },
      'Chapter 4: Exploring Magnets': {
        className: 'Class 6',
        chapterName: 'Chapter 4: Exploring Magnets',
        summary: 'Properties of magnets, types, and finding directions.',
        topics: [
          {
            title: 'What is a Magnet?',
            points: [
              'A magnet is a special material that attracts certain metals such as iron, nickel, and cobalt.',
              'Magnets have the ability to pull small iron objects like pins, nails, and paper clips.',
              'The property of attracting magnetic materials is called magnetism.',
              'Magnets were first discovered naturally in a mineral called lodestone.',
              'Not all metals are attracted by magnets; for example, gold and aluminium are not magnetic.',
              'A magnet has two ends called poles where its magnetic force is strongest.',
              'Magnets can exert force without touching the object.',
              'Magnetic force can pass through some materials like paper and plastic.',
              'Magnets are used in many everyday devices.',
              'The study of magnets helps us understand many scientific applications.'
            ],
            priority: 'High',
            explanationDepth: 'Introductory Overview',
            model5E: {
              engage: 'Show a magnet picking up iron pins.',
              explore: 'Let students test different objects.',
              explain: 'Define magnet and magnetism.',
              elaborate: 'Discuss real-life uses.',
              evaluate: 'Ask students to list magnetic objects at home.'
            }
          },
          {
            title: 'Types of Magnets',
            points: [
              'Magnets are classified into natural and artificial magnets.',
              'Natural magnets occur in nature, such as lodestone.',
              'Artificial magnets are made by humans for specific purposes.',
              'Artificial magnets come in different shapes like bar magnets and horseshoe magnets.',
              'A bar magnet is rectangular in shape.',
              'A horseshoe magnet is curved and stronger at its ends.',
              'Ring magnets and disc magnets are also commonly used.',
              'Electromagnets are temporary magnets made using electricity.',
              'Permanent magnets retain magnetism for a long time.',
              'Different shapes are used depending on the purpose.'
            ],
            priority: 'Medium',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Show different magnet shapes.',
              explore: 'Compare strength.',
              explain: 'Natural vs artificial magnets.',
              elaborate: 'Discuss electromagnets.',
              evaluate: 'Identify type of magnet shown.'
            }
          },
          {
            title: 'Magnetic and Non-Magnetic Materials',
            points: [
              'Magnetic materials are substances that are attracted by a magnet.',
              'Iron is the most common magnetic material.',
              'Nickel and cobalt are also magnetic materials.',
              'Steel is magnetic because it contains iron.',
              'Non-magnetic materials are not attracted by magnets.',
              'Examples include wood, plastic, rubber, and glass.',
              'Gold and silver are metals but are not magnetic.',
              'Testing materials helps in sorting objects.',
              'Magnetic materials are used in making tools and machines.',
              'Identifying magnetic materials is useful in industries.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Mix magnetic and non-magnetic objects.',
              explore: 'Use magnet to separate them.',
              explain: 'Define magnetic materials.',
              elaborate: 'Discuss industrial use.',
              evaluate: 'Students classify objects.'
            }
          },
          {
            title: 'Poles of a Magnet',
            points: [
              'Every magnet has two poles called North pole and South pole.',
              'The poles are located at the two ends of a magnet.',
              'Magnetic strength is maximum at the poles.',
              'If a magnet is broken, each piece will still have two poles.',
              'Poles always exist in pairs.',
              'North pole is usually marked as ‘N’.',
              'South pole is marked as ‘S’.',
              'Poles determine direction of magnetic force.',
              'Compass needles are small magnets.',
              'The study of poles helps in understanding attraction and repulsion.'
            ],
            priority: 'High',
            explanationDepth: 'Deep Conceptual',
            model5E: {
              engage: 'Dip magnet in iron filings.',
              explore: 'Observe filings gathering at ends.',
              explain: 'Discuss poles.',
              elaborate: 'Show breaking magnet example.',
              evaluate: 'Label poles in diagram.'
            }
          },
          {
            title: 'Attraction and Repulsion',
            points: [
              'Magnets can either attract or repel each other.',
              'Unlike poles attract each other.',
              'Like poles repel each other.',
              'Attraction pulls magnets together.',
              'Repulsion pushes magnets apart.',
              'This rule is universal for all magnets.',
              'Attraction and repulsion demonstrate magnetic force.',
              'This principle is used in electric motors.',
              'It is also used in magnetic levitation trains.',
              'Understanding this helps in scientific experiments.'
            ],
            priority: 'High',
            explanationDepth: 'Deep Conceptual',
            model5E: {
              engage: 'Bring two magnets close.',
              explore: 'Observe push and pull.',
              explain: 'Like poles repel, unlike attract.',
              elaborate: 'Discuss applications.',
              evaluate: 'Predict outcome when poles meet.'
            }
          },
          {
            title: 'Finding Directions Using a Magnet',
            points: [
              'A freely suspended magnet always points in the North-South direction.',
              'This property is used to make a compass.',
              'The end pointing north is called the North-seeking pole.',
              'The Earth behaves like a giant magnet.',
              'Magnetic field of Earth guides compass needles.',
              'Ancient sailors used magnets for navigation.',
              'Compass is important for travellers and explorers.',
              'It helps determine cardinal directions.',
              'Magnetic direction may slightly differ from true direction.',
              'Direction finding is one of the most important uses of magnets.'
            ],
            priority: 'Medium',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Suspend magnet with thread.',
              explore: 'Observe direction.',
              explain: 'Earth as magnet.',
              elaborate: 'Use of compass.',
              evaluate: 'Identify directions in classroom.'
            }
          },
          {
            title: 'Care and Uses of Magnets',
            points: [
              'Magnets should be stored properly to maintain strength.',
              'Bar magnets should be stored in pairs with keepers.',
              'Magnets should not be dropped frequently.',
              'Heating magnets can reduce their strength.',
              'Magnets are used in refrigerator doors.',
              'They are used in speakers and headphones.',
              'Magnetic cranes lift heavy iron objects.',
              'ATM and credit cards use magnetic strips.',
              'Electric motors work using magnetic principles.',
              'Magnets play an important role in modern technology.'
            ],
            priority: 'Medium',
            explanationDepth: 'General Application',
            model5E: {
              engage: 'Show magnetic door strip.',
              explore: 'Identify magnet uses.',
              explain: 'Care methods.',
              elaborate: 'Discuss modern applications.',
              evaluate: 'Students write 5 uses of magnets.'
            }
          }
        ]
      },
      'Unit 5: Measurement of Length and Motion': {
        className: 'Class 6',
        chapterName: 'Unit 5: Measurement of Length and Motion',
        summary: 'Standard units of measurement and types of motion.',
        topics: [
          {
            title: 'Need for Measurement',
            points: [
              'Measurement is the process of finding the size, length, or quantity of something accurately.',
              'In ancient times, people used body parts like hand span, cubit, and footstep to measure length.',
              'These non-standard units were different from person to person and caused confusion.',
              'Accurate measurement is important in construction, tailoring, and trade.',
              'Without proper measurement, buildings, roads, and bridges cannot be constructed correctly.',
              'Measurement ensures fairness in buying and selling goods.',
              'Scientific experiments require precise measurement for correct results.',
              'Standard measurement avoids errors and misunderstandings.',
              'It helps compare quantities easily across different regions.',
              'Measurement plays a vital role in daily life and technological development.'
            ],
            priority: 'High',
            explanationDepth: 'Introductory Overview',
            model5E: {
              engage: 'Ask students to measure their desk using hand span.',
              explore: 'Compare measurements of different students.',
              explain: 'Discuss problems of non-standard units.',
              elaborate: 'Introduce standard measurement tools.',
              evaluate: 'Students measure classroom objects correctly.'
            }
          },
          {
            title: 'Standard Units of Measurement',
            points: [
              'Standard units are fixed and accepted units used worldwide.',
              'The International System of Units (SI system) provides standard units.',
              'The metre (m) is the standard unit of length.',
              'Smaller units include centimetre (cm) and millimetre (mm).',
              'Larger units include kilometre (km).',
              'One metre equals 100 centimetres.',
              'One kilometre equals 1000 metres.',
              'Standard units ensure uniformity and accuracy.',
              'Scientists and engineers use SI units in experiments and designs.',
              'Standard measurement helps in international communication and trade.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Show ruler and measuring tape.',
              explore: 'Measure book length in cm.',
              explain: 'Introduce SI units.',
              elaborate: 'Convert metres to centimetres.',
              evaluate: 'Solve simple conversion problems.'
            }
          },
          {
            title: 'Measuring Length',
            points: [
              'Length is the distance between two points.',
              'Small lengths are measured using a ruler or scale.',
              'Larger distances are measured using measuring tape.',
              'Long distances like roads are measured in kilometres.',
              'Measurement should begin from zero mark of the scale.',
              'The eye should be placed directly above the scale to avoid parallax error.',
              'Broken scales should not be used for accurate measurement.',
              'Measuring accurately ensures precision in work.',
              'Engineers and architects depend on accurate measurements.',
              'Practicing proper measurement improves mathematical skills.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Show incorrect measurement example.',
              explore: 'Measure notebook length.',
              explain: 'Correct way to use ruler.',
              elaborate: 'Measure classroom door.',
              evaluate: 'Students measure different objects.'
            }
          },
          {
            title: 'Types of Motion',
            points: [
              'Motion is the change in position of an object with respect to time.',
              'When a car moves on a straight road, it shows linear motion.',
              'When a stone tied to a string moves in a circle, it shows circular motion.',
              'The movement of a pendulum is called periodic motion because it repeats regularly.',
              'The spinning of a fan shows rotational motion.',
              'Oscillatory motion is the back-and-forth movement of an object.',
              'Motion can be slow or fast depending on speed.',
              'Some objects move uniformly while others move irregularly.',
              'Motion occurs due to application of force.',
              'Motion is observed everywhere in daily life.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Roll a toy car.',
              explore: 'Observe different moving objects.',
              explain: 'Classify types of motion.',
              elaborate: 'Identify motion types around school.',
              evaluate: 'Students classify given examples.'
            }
          },
          {
            title: 'Speed and Uniform Motion',
            points: [
              'Speed is the distance travelled by an object in a unit of time.',
              'It tells us how fast or slow something moves.',
              'Speed is calculated by dividing distance by time.',
              'If an object covers equal distances in equal intervals of time, it has uniform motion.',
              'If the speed changes during motion, it is non-uniform motion.',
              'Vehicles on highways often move with nearly uniform speed.',
              'A bus moving in traffic usually shows non-uniform motion.',
              'Speed is measured in metres per second or kilometres per hour.',
              'Understanding speed helps in planning travel time.',
              'Speed plays an important role in transportation and sports.'
            ],
            priority: 'Medium',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Ask which vehicle moves faster — bicycle or car?',
              explore: 'Measure time taken to walk a fixed distance.',
              explain: 'Introduce formula of speed.',
              elaborate: 'Compare uniform and non-uniform motion.',
              evaluate: 'Solve simple speed problems.'
            }
          }
        ]
      },
      'Unit 6: Light, Shadows and Reflections': {
        className: 'Class 6',
        chapterName: 'Unit 6: Light, Shadows and Reflections',
        summary: 'Nature of light, object types, and shadow formation.',
        topics: [
          {
            title: 'What is Light?',
            points: [
              'Light is a form of energy that enables us to see objects around us clearly.',
              'Without light, everything would appear dark and invisible to our eyes.',
              'Light travels very fast and moves in a straight line.',
              'It is essential for life because plants need sunlight to prepare food.',
              'The Sun is the main natural source of light for Earth.',
              'Light allows us to see colours and shapes of objects.',
              'When light falls on an object, it either gets reflected, absorbed, or transmitted.',
              'Light energy can be natural or artificial.',
              'Different sources produce light with different brightness levels.',
              'The study of light helps us understand vision and many modern technologies.'
            ],
            priority: 'High',
            explanationDepth: 'Introductory Overview',
            model5E: {
              engage: 'Switch off classroom lights and ask students what they observe.',
              explore: 'Use a torch to show how light spreads.',
              explain: 'Introduce the concept of light as energy.',
              elaborate: 'Discuss importance of sunlight for plants.',
              evaluate: 'Ask students why light is necessary for vision.'
            }
          },
          {
            title: 'Sources of Light',
            points: [
              'A source of light is anything that produces its own light.',
              'The Sun is the most important natural source of light.',
              'Stars also emit their own light.',
              'Artificial sources include electric bulbs, candles, and tube lights.',
              'Luminous objects produce their own light.',
              'Non-luminous objects do not produce light but reflect it.',
              'The Moon appears bright because it reflects sunlight.',
              'Fireflies are examples of living luminous organisms.',
              'Artificial sources are man-made for convenience.',
              'Sources of light vary in intensity and usage.'
            ],
            priority: 'Medium',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Show pictures of Sun, bulb, and Moon.',
              explore: 'Identify which produce light.',
              explain: 'Define luminous and non-luminous objects.',
              elaborate: 'Discuss uses of artificial lighting.',
              evaluate: 'Classify given examples.'
            }
          },
          {
            title: 'Transparent, Translucent and Opaque Objects',
            points: [
              'Objects are classified based on how much light they allow to pass through them.',
              'Transparent objects allow light to pass completely through them.',
              'Glass and clean water are examples of transparent materials.',
              'Translucent objects allow only some light to pass through.',
              'Frosted glass and butter paper are translucent materials.',
              'Opaque objects do not allow light to pass through them.',
              'Wood and metal are examples of opaque materials.',
              'We can see clearly through transparent materials.',
              'Objects appear blurry through translucent materials.',
              'Opaque objects form dark shadows because they block light.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Show glass, paper, and cardboard.',
              explore: 'Shine torch through them.',
              explain: 'Define the three categories.',
              elaborate: 'Identify objects in classroom.',
              evaluate: 'Students classify given materials.'
            }
          },
          {
            title: 'Formation of Shadows',
            points: [
              'A shadow is formed when an opaque object blocks light.',
              'Light travels in straight lines and cannot bend around opaque objects.',
              'A source of light, an object, and a screen are required to form a shadow.',
              'The size of a shadow depends on the distance between object and light source.',
              'Shadows change length during the day due to the Sun’s position.',
              'Shadows are longer in the morning and evening.',
              'Shadows are shortest at noon.',
              'Transparent objects do not form clear shadows.',
              'Translucent objects form faint shadows.',
              'Shadows do not show colour details of objects.'
            ],
            priority: 'High',
            explanationDepth: 'Deep Conceptual',
            model5E: {
              engage: 'Show hand shadow using torch.',
              explore: 'Change distance and observe shadow size.',
              explain: 'Conditions for shadow formation.',
              elaborate: 'Discuss daily shadow changes.',
              evaluate: 'Draw shadow formation diagram.'
            }
          },
          {
            title: 'Reflection of Light',
            points: [
              'Reflection occurs when light bounces back from a surface.',
              'Mirrors reflect light clearly and form images.',
              'A smooth surface reflects light regularly.',
              'Rough surfaces reflect light irregularly.',
              'Regular reflection forms clear images.',
              'Irregular reflection does not form clear images.',
              'The image in a plane mirror is upright and same size.',
              'Mirror image is laterally inverted.',
              'Reflection helps us see objects around us.',
              'Reflection is used in periscopes and other instruments.'
            ],
            priority: 'High',
            explanationDepth: 'Deep Conceptual',
            model5E: {
              engage: 'Show image in mirror.',
              explore: 'Observe image properties.',
              explain: 'Concept of reflection.',
              elaborate: 'Discuss real-life uses.',
              evaluate: 'Students describe mirror image features.'
            }
          }
        ]
      },
      'Chapter 7: Temperature and Its Measurement': {
        className: 'Class 6',
        chapterName: 'Chapter 7: Temperature and Its Measurement',
        summary: 'Measuring heat and temperature using thermometers.',
        topics: [
          {
            title: 'What is Temperature?',
            points: [
              'Temperature is a measure of how hot or cold an object is compared to other objects.',
              'It tells us the degree of heat present in a body but is different from heat itself.',
              'Heat is a form of energy, while temperature measures the intensity of that heat energy.',
              'When temperature increases, particles in a substance move faster.',
              'When temperature decreases, particles move slower.',
              'Our sense of touch cannot accurately measure temperature.',
              'We need instruments like thermometers to measure temperature correctly.',
              'Temperature affects weather and climate conditions.',
              'It influences changes in the state of matter such as melting and boiling.',
              'Understanding temperature helps in daily life, medical care, and scientific experiments.'
            ],
            priority: 'High',
            explanationDepth: 'Introductory Overview',
            model5E: {
              engage: 'Ask students to touch cold water and warm water and compare sensations.',
              explore: 'Let them observe how temperature feels different in various objects.',
              explain: 'Clarify difference between heat and temperature.',
              elaborate: 'Discuss examples like fever and weather reports.',
              evaluate: 'Ask students to define temperature in their own words.'
            }
          },
          {
            title: 'Measurement of Temperature',
            points: [
              'Temperature is measured using an instrument called a thermometer.',
              'The unit of temperature in most countries is degree Celsius (°C).',
              'Some countries use degree Fahrenheit (°F).',
              'Scientists also use Kelvin (K) scale.',
              'Temperature measurement is important in medicine and laboratories.',
              'Accurate measurement helps diagnose fever and illnesses.',
              'It is also important in cooking and industrial processes.',
              'Weather forecasts depend on temperature readings.',
              'Temperature readings must be taken carefully to avoid errors.',
              'Proper handling of thermometers ensures safety and accuracy.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Show a thermometer and ask students what it is used for.',
              explore: 'Observe temperature reading from classroom thermometer.',
              explain: 'Discuss units and measurement methods.',
              elaborate: 'Compare temperature scales.',
              evaluate: 'Students read and record sample temperatures.'
            }
          },
          {
            title: 'Thermometers and Their Types',
            points: [
              'A thermometer is a device used to measure temperature.',
              'It works on the principle of expansion of liquids on heating.',
              'Mercury expands when heated and rises in the tube.',
              'Alcohol thermometers are safer alternatives to mercury.',
              'Clinical thermometers measure human body temperature.',
              'Laboratory thermometers measure temperature in experiments.',
              'Digital thermometers show readings on a digital display.',
              'Maximum–minimum thermometers record weather temperatures.',
              'Each thermometer has a specific purpose.',
              'Proper usage ensures accurate temperature measurement.'
            ],
            priority: 'Medium',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Show different thermometers.',
              explore: 'Compare their structure and markings.',
              explain: 'Discuss working principle.',
              elaborate: 'Identify uses in daily life.',
              evaluate: 'Students differentiate types of thermometers.'
            }
          },
          {
            title: 'Clinical Thermometer',
            points: [
              'A clinical thermometer measures human body temperature.',
              'The normal body temperature is approximately 37°C or 98.6°F.',
              'It has a narrow constriction near the bulb.',
              'The constriction prevents mercury from falling back quickly.',
              'It usually has a range from 35°C to 42°C.',
              'It should be cleaned before and after use.',
              'It is placed under the tongue or in the armpit.',
              'The reading should be taken at eye level.',
              'It should be handled carefully to avoid breakage.',
              'It helps in detecting fever and illness.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Ask what happens when we have fever.',
              explore: 'Observe clinical thermometer markings.',
              explain: 'Discuss structure and working.',
              elaborate: 'Demonstrate correct usage steps.',
              evaluate: 'Students explain precautions.'
            }
          },
          {
            title: 'Laboratory Thermometer',
            points: [
              'A laboratory thermometer measures temperature in experiments.',
              'It does not have a constriction like a clinical thermometer.',
              'Its range is usually from -10°C to 110°C.',
              'It is used in chemistry and physics experiments.',
              'It measures temperature of liquids and substances.',
              'It should not touch the container walls while measuring.',
              'It must be held upright for accurate reading.',
              'It measures temperatures beyond human body range.',
              'It should be handled carefully to prevent damage.',
              'It is essential for scientific study.'
            ],
            priority: 'Medium',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Ask why we need different thermometers in labs.',
              explore: 'Compare clinical and laboratory thermometers.',
              explain: 'Discuss structural differences.',
              elaborate: 'Demonstrate safe usage.',
              evaluate: 'Students state differences clearly.'
            }
          },
          {
            title: 'Transfer of Heat',
            points: [
              'Heat flows from hotter object to colder object.',
              'Conduction occurs in solids.',
              'Convection occurs in liquids and gases.',
              'Radiation does not require a medium.',
              'The Sun’s heat reaches Earth by radiation.',
              'Metals are good conductors of heat.',
              'Wood and plastic are poor conductors.',
              'Convection currents cause sea breeze.',
              'Insulators reduce heat transfer.',
              'Understanding heat transfer helps in daily life applications.'
            ],
            priority: 'High',
            explanationDepth: 'Deep Conceptual',
            model5E: {
              engage: 'Touch metal and wood spoon.',
              explore: 'Observe heating process.',
              explain: 'Define three modes.',
              elaborate: 'Discuss real-life examples.',
              evaluate: 'Students classify examples.'
            }
          }
        ]
      },
      'Chapter 8: A Journey through States of Water': {
        className: 'Class 6',
        chapterName: 'Chapter 8: A Journey through States of Water',
        summary: 'The water cycle and physical states of water.',
        topics: [
          {
            title: 'Water and Its Importance',
            points: [
              'Water is one of the most essential natural resources for all living organisms on Earth.',
              'It is necessary for drinking, cooking, cleaning, and farming activities.',
              'About three-fourths of the Earth’s surface is covered with water.',
              'Our body contains a large percentage of water which helps in digestion and circulation.',
              'Plants need water for photosynthesis and growth.',
              'Animals depend on water for survival and temperature regulation.',
              'Water helps in transporting nutrients in plants and blood in humans.',
              'It is used in industries for cooling and manufacturing processes.',
              'Water maintains ecological balance in rivers, lakes, and oceans.',
              'Conservation of water is important for future generations.'
            ],
            priority: 'High',
            explanationDepth: 'Introductory Overview',
            model5E: {
              engage: 'Ask students how many times they use water daily.',
              explore: 'List different uses of water at home and school.',
              explain: 'Discuss why water is essential for life.',
              elaborate: 'Talk about water scarcity and conservation.',
              evaluate: 'Students write five important uses of water.'
            }
          },
          {
            title: 'Three States of Water',
            points: [
              'Water exists in three physical states: solid, liquid, and gas.',
              'Ice is the solid state of water.',
              'Water in rivers and oceans is the liquid state.',
              'Water vapour or steam is the gaseous state.',
              'The state of water depends on temperature conditions.',
              'When heated, water changes from solid to liquid to gas.',
              'When cooled, water changes from gas to liquid to solid.',
              'Ice has a fixed shape and volume.',
              'Liquid water has fixed volume but no fixed shape.',
              'Water vapour has neither fixed shape nor fixed volume.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Show ice, water, and steam images.',
              explore: 'Observe differences in shape and volume.',
              explain: 'Discuss particle arrangement in each state.',
              elaborate: 'Connect to daily examples like boiling water.',
              evaluate: 'Students classify states with examples.'
            }
          },
          {
            title: 'Change of State',
            points: [
              'Change of state occurs when water changes from one form to another.',
              'Melting is the process of solid ice turning into liquid water.',
              'Freezing is the process of liquid water turning into ice.',
              'Evaporation is the change from liquid water to water vapour.',
              'Condensation is the change from water vapour to liquid water.',
              'These changes occur due to heating or cooling.',
              'During melting, heat energy is absorbed.',
              'During freezing, heat energy is released.',
              'These processes are reversible changes.',
              'Change of state does not alter the chemical composition of water.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Ask what happens when ice is kept outside freezer.',
              explore: 'Observe melting ice.',
              explain: 'Define melting, freezing, evaporation, condensation.',
              elaborate: 'Discuss examples in daily life.',
              evaluate: 'Students draw change of state diagram.'
            }
          },
          {
            title: 'Water Cycle',
            points: [
              'The water cycle is the continuous movement of water in nature.',
              'It involves evaporation, condensation, and precipitation.',
              'Sun’s heat causes water to evaporate from water bodies.',
              'Water vapour rises and cools to form clouds.',
              'Condensed water droplets form clouds.',
              'When clouds become heavy, precipitation occurs.',
              'Precipitation includes rain, snow, and hail.',
              'Water returns to rivers, lakes, and oceans.',
              'The cycle repeats continuously.',
              'The water cycle maintains water balance on Earth.'
            ],
            priority: 'High',
            explanationDepth: 'Deep Conceptual',
            model5E: {
              engage: 'Ask where rainwater comes from.',
              explore: 'Show water cycle diagram.',
              explain: 'Describe each stage.',
              elaborate: 'Discuss importance for agriculture.',
              evaluate: 'Students label water cycle stages.'
            }
          }
        ]
      },
      'Chapter 9: Methods of Separation in Everyday Life': {
        className: 'Class 6',
        chapterName: 'Chapter 9: Methods of Separation in Everyday Life',
        summary: 'Techniques to separate mixtures.',
        topics: [
          {
            title: 'Need for Separation of Substances',
            points: [
              'In daily life, many materials we use are mixtures of different substances.',
              'Some mixtures contain useful and unwanted substances together.',
              'Separation helps remove impurities and obtain pure substances.',
              'Farmers separate stones and husk from grains before storage.',
              'Clean water is separated from mud and dirt before drinking.',
              'Separation ensures safety and hygiene in food preparation.',
              'Industries use separation methods to obtain useful materials.',
              'Different mixtures require different separation techniques.',
              'The method chosen depends on the nature of substances.',
              'Separation makes materials suitable for use and consumption.'
            ],
            priority: 'High',
            explanationDepth: 'Introductory Overview',
            model5E: {
              engage: 'Show a mixture of rice and small stones.',
              explore: 'Ask students how they would separate them.',
              explain: 'Discuss need for separation.',
              elaborate: 'Relate to daily household activities.',
              evaluate: 'Students list examples of mixtures at home.'
            }
          },
          {
            title: 'Physical Methods (Handpicking, Threshing, Winnowing)',
            points: [
              'Handpicking is used to separate large unwanted particles like stones from rice.',
              'Threshing is the process of separating grains from stalks after harvesting.',
              'Winnowing separates lighter husk from heavier grains using wind.',
              'These methods are commonly used in agriculture.',
              'Handpicking is suitable for small quantities.',
              'Threshing can be done manually or using machines.',
              'Winnowing works due to difference in weight.',
              'These methods help obtain clean food grains.',
              'They are traditional yet effective techniques.',
              'Understanding these helps in efficient food processing.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Show pictures of harvesting and winnowing.',
              explore: 'Discuss how grains are separated in villages.',
              explain: 'Describe threshing and winnowing processes.',
              elaborate: 'Compare traditional and modern methods.',
              evaluate: 'Students explain each method clearly.'
            }
          },
          {
            title: 'Sieving, Sedimentation and Decantation',
            points: [
              'Sieving separates particles of different sizes using a sieve.',
              'Sedimentation is the process of settling down of heavier insoluble particles.',
              'Decantation follows sedimentation by pouring off the clear liquid.',
              'Sieving is used in construction and flour preparation.',
              'Sedimentation helps clean muddy water.',
              'Decantation works due to density difference.',
              'These methods require time for settling.',
              'They are simple and effective for specific mixtures.',
              'Different sieves have different hole sizes.',
              'These are common household and industrial methods.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Mix soil and water in a glass.',
              explore: 'Observe settling process.',
              explain: 'Define sedimentation and decantation.',
              elaborate: 'Relate to water purification.',
              evaluate: 'Students describe steps for cleaning muddy water.'
            }
          },
          {
            title: 'Filtration and Evaporation',
            points: [
              'Filtration separates insoluble solids from liquids using filter paper.',
              'Evaporation is used to obtain dissolved solids from solutions by heating.',
              'Clear liquid obtained in filtration is called filtrate.',
              'Salt is obtained from seawater by evaporation.',
              'Filtration is faster than sedimentation.',
              'Evaporation requires heat energy.',
              'These methods are widely used in laboratories and industries.',
              'Filtration helps purify drinking water.',
              'Evaporation helps separate salt from water.',
              'Understanding these is vital for chemical studies.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Prepare tea and observe straining.',
              explore: 'Demonstrate filtration in class.',
              explain: 'Discuss filtrate, residue, and evaporation.',
              elaborate: 'Mention salt production in salt pans.',
              evaluate: 'Students identify mixtures suitable for filtration.'
            }
          }
        ]
      },
      'Chapter 10: Living Creatures – Exploring Their Characteristics': {
        className: 'Class 6',
        chapterName: 'Chapter 10: Living Creatures – Exploring Their Characteristics',
        summary: 'Life processes and characteristics of living things.',
        topics: [
          {
            title: 'What are Living Creatures?',
            points: [
              'Living creatures are organisms that show life processes such as growth, movement, and reproduction.',
              'They include humans, animals, plants, and microorganisms.',
              'Living things are made up of tiny units called cells.',
              'They require food, air, and water to survive.',
              'They grow and develop over time.',
              'Living organisms can reproduce to produce young ones.',
              'They respond to changes in their surroundings.',
              'They undergo various life processes to maintain life.',
              'They have a definite lifespan.',
              'All living beings depend on the environment for survival.'
            ],
            priority: 'High',
            explanationDepth: 'Introductory Overview',
            model5E: {
              engage: 'Show pictures of plants, animals, and stones.',
              explore: 'Ask students to identify which are living and non-living.',
              explain: 'Define living organisms.',
              elaborate: 'Discuss examples from surroundings.',
              evaluate: 'Students list characteristics of living things.'
            }
          },
          {
            title: 'Characteristics of Living Organisms',
            points: [
              'Living organisms show growth and development.',
              'They require food for energy.',
              'They respire to release energy.',
              'They respond to stimuli.',
              'They excrete waste materials.',
              'They reproduce to continue their species.',
              'They show movement.',
              'They are made of cells.',
              'They adapt to their environment.',
              'They have a life cycle from birth to death.'
            ],
            priority: 'High',
            explanationDepth: 'Deep Conceptual',
            model5E: {
              engage: 'Ask how plants respond to sunlight.',
              explore: 'Observe plant movement towards light.',
              explain: 'Discuss each life process.',
              elaborate: 'Give examples in animals and humans.',
              evaluate: 'Students explain any five characteristics.'
            }
          },
          {
            title: 'Nutrition and Respiration',
            points: [
              'Nutrition is the process of obtaining food for energy.',
              'Plants make their own food by photosynthesis.',
              'Animals depend on plants or other animals.',
              'Respiration is the process of releasing energy from food.',
              'Oxygen is required for respiration.',
              'Humans breathe through lungs; plants through stomata.',
              'Respiration occurs continuously in living organisms.',
              'It provides energy for all life activities.',
              'Aquatic animals use gills for respiration.',
              'Nutrition and respiration are essential for survival.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Ask why we breathe faster while running.',
              explore: 'Observe breathing rate.',
              explain: 'Discuss nutrition and respiration process.',
              elaborate: 'Compare plant and animal methods.',
              evaluate: 'Students explain importance of food and air.'
            }
          },
          {
            title: 'Reproduction and Adaptation',
            points: [
              'Reproduction is the process of producing young ones to ensure species continuation.',
              'Humans and some animals give birth; others lay eggs.',
              'Plants reproduce through seeds or vegetative parts.',
              'Adaptation helps organisms survive in their specific environment.',
              'Camels adapt to desert; fish adapt to water.',
              'Adaptation ensures survival against environmental challenges.',
              'Lifespan is the period from birth to death.',
              'Reproduction maintains the population of a species.',
              'Offspring usually resemble their parents.',
              'Adaptation is a result of long-term environmental interaction.'
            ],
            priority: 'High',
            explanationDepth: 'Deep Conceptual',
            model5E: {
              engage: 'Ask why polar bears have thick fur.',
              explore: 'Discuss desert plants like cactus.',
              explain: 'Define reproduction and adaptation.',
              elaborate: 'Connect to survival of species.',
              evaluate: 'Students explain examples of adaptation.'
            }
          }
        ]
      },
      'Chapter 11: Nature’s Treasures': {
        className: 'Class 6',
        chapterName: 'Chapter 11: Nature’s Treasures',
        summary: 'Natural resources and their conservation.',
        topics: [
          {
            title: 'Natural Resources and Types',
            points: [
              'Natural resources are materials obtained directly from nature.',
              'They include air, water, soil, sunlight, forests, and minerals.',
              'Renewable resources regenerate naturally (Sun, Wind, Water).',
              'Non-renewable resources are limited and exhaustible (Coal, Petrol).',
              'Biotic resources come from living things; Abiotic from non-living.',
              'Humans depend on them for survival and development.',
              'Resources support industries, agriculture, and transport.',
              'Overuse can disturb the ecological balance.',
              'Proper classification helps in conservation planning.',
              'Protecting resources ensures a safe future.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Ask students to list items they use daily from nature.',
              explore: 'Identify which are renewable and non-renewable.',
              explain: 'Define natural resources and their types.',
              elaborate: 'Discuss importance in human life.',
              evaluate: 'Students classify examples correctly.'
            }
          },
          {
            title: 'Forest and Water Resources',
            points: [
              'Forests provide timber, medicinal plants, and oxygen.',
              'They prevent soil erosion and regulate rainfall.',
              'Water is essential for drinking, agriculture, and industries.',
              'Rivers, lakes, and groundwater are major water sources.',
              'Deforestation causes environmental imbalance.',
              'Water is renewable through the water cycle.',
              'Pollution reduces the availability of usable water.',
              'Rainwater harvesting is a key conservation method.',
              'Forests provide habitat for diverse wildlife.',
              'Conservation of both is necessary for sustainability.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Ask importance of trees and clean water.',
              explore: 'List forest products and water uses.',
              explain: 'Discuss functions of forests and water cycle.',
              elaborate: 'Talk about deforestation and scarcity.',
              evaluate: 'Students suggest conservation measures.'
            }
          },
          {
            title: 'Conservation and Sustainable Use',
            points: [
              'Conservation means protecting resources from overuse.',
              'Reduce, Reuse, Recycle (3Rs) are core principles.',
              'Sustainable use meets present needs without harming future needs.',
              'Promoting renewable energy reduces pollution.',
              'Saving electricity reduces fossil fuel consumption.',
              'Sustainable practices protect biodiversity.',
              'Public awareness is essential for effective conservation.',
              'Government policies support environmental protection.',
              'Sustainability ensures long-term survival of life on Earth.',
              'Protecting nature maintains the ecological balance.'
            ],
            priority: 'High',
            explanationDepth: 'Deep Conceptual',
            model5E: {
              engage: 'Ask why we should save for the future.',
              explore: 'Identify local environmental problems.',
              explain: 'Define conservation and sustainability.',
              elaborate: 'Suggest practical daily actions.',
              evaluate: 'Students write a pledge to protect nature.'
            }
          }
        ]
      },
      'Chapter 12: Beyond Earth': {
        className: 'Class 6',
        chapterName: 'Chapter 12: Beyond Earth',
        summary: 'The universe, solar system, and space exploration.',
        topics: [
          {
            title: 'The Universe and Galaxies',
            points: [
              'The universe includes everything that exists — stars, planets, galaxies.',
              'It is extremely vast and continuously expanding.',
              'A galaxy is a huge system of stars, gas, and dust held by gravity.',
              'The Milky Way is our spiral galaxy containing the solar system.',
              'There are billions of galaxies in the universe.',
              'Galaxies differ in size and shape (spiral, elliptical, irregular).',
              'The study of the universe is called astronomy.',
              'Light from distant stars takes years to reach Earth.',
              'Our Sun is one of billions of stars in the Milky Way.',
              'Understanding the universe helps us know our place in space.'
            ],
            priority: 'Medium',
            explanationDepth: 'Introductory Overview',
            model5E: {
              engage: 'Show images of space and galaxies.',
              explore: 'Discuss what exists beyond our planet.',
              explain: 'Define universe and galaxy.',
              elaborate: 'Talk about the Milky Way.',
              evaluate: 'Students describe the universe in their own words.'
            }
          },
          {
            title: 'The Solar System and the Sun',
            points: [
              'The solar system consists of the Sun and objects orbiting it.',
              'The Sun is at the center; eight planets revolve around it.',
              'Gravity keeps planets in their fixed paths called orbits.',
              'The Sun is a massive ball of hot gases (Hydrogen and Helium).',
              'It provides heat and light essential for life on Earth.',
              'Inner planets are rocky; outer planets are gaseous giants.',
              'The solar system also includes asteroids and comets.',
              'Earth is the third planet and supports life.',
              'The Sun influences weather and climate on Earth.',
              'Planets rotate on their axis while revolving around the Sun.'
            ],
            priority: 'High',
            explanationDepth: 'Standard Procedural',
            model5E: {
              engage: 'Ask students to name planets in order.',
              explore: 'Compare planet sizes and features.',
              explain: 'Define solar system and Sun’s role.',
              elaborate: 'Discuss gravity and orbits.',
              evaluate: 'Students draw a solar system diagram.'
            }
          },
          {
            title: 'Earth, Moon and Stars',
            points: [
              'Earth is the "Blue Planet" with water and oxygen.',
              'The Moon is Earth’s natural satellite reflecting sunlight.',
              'Stars are massive balls of gas producing their own light.',
              'Constellations are patterns of stars used for navigation.',
              'The Moon shows phases and affects ocean tides.',
              'Stars appear small due to their extreme distance.',
              'Earth’s rotation causes day and night; revolution causes seasons.',
              'The Moon has no atmosphere and has craters on its surface.',
              'Constellations like Orion help identify sky patterns.',
              'Space exploration helps us study these celestial bodies.'
            ],
            priority: 'High',
            explanationDepth: 'Deep Conceptual',
            model5E: {
              engage: 'Observe moon phases in the sky.',
              explore: 'Identify patterns of stars (constellations).',
              explain: 'Describe Earth, Moon, and Stars.',
              elaborate: 'Discuss navigation and tides.',
              evaluate: 'Students name major constellations.'
            }
          }
        ]
      }
    },
    [Subject.SOCIAL_SCIENCE]: {
        'Chapter 1: Introduction to History and Early Society': {
          className: 'Class 6',
          chapterName: 'Chapter 1: Introduction to History and Early Society',
          summary: 'Introduction to the meaning, importance, and sources of history, along with early human life and the Stone Age.',
          topics: [
            {
              title: 'Meaning of History',
              points: [
                'History is the systematic study of past events, societies, and civilizations that helps us understand how human life has evolved over time.',
                'It records important political, social, cultural, and economic developments of different periods.',
                'History connects the past with the present and helps explain how present conditions were shaped.',
                'It provides knowledge about rulers, kingdoms, wars, reforms, and movements.',
                'History teaches us about ancient traditions, customs, and lifestyles of people.',
                'It helps us understand human achievements and mistakes.',
                'It promotes national identity and cultural awareness.',
                'History develops analytical and critical thinking skills.',
                'It helps preserve monuments, inscriptions, and heritage sites.',
                'Studying history prepares us to build a better future by learning from the past.'
              ],
              priority: 'High',
              explanationDepth: 'Introductory Overview',
              model5E: {
                engage: 'Ask students to share one important event from their family history.',
                explore: 'Discuss why remembering past events is important.',
                explain: 'Define history and its scope.',
                elaborate: 'Connect historical events with current society.',
                evaluate: 'Students explain in their own words why history is necessary.'
              }
            },
            {
              title: 'Importance of Studying History',
              points: [
                'History helps us understand the roots of our civilization.',
                'It teaches moral lessons through stories of leaders and reformers.',
                'It helps us understand cultural diversity and unity.',
                'History promotes respect for heritage and monuments.',
                'It explains the development of democratic systems.',
                'It teaches us how societies changed over time.',
                'It builds patriotism and national pride.',
                'It helps analyze causes and consequences of events.',
                'It develops decision-making skills.',
                'It helps students become responsible citizens.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students why we celebrate Independence Day.',
                explore: 'Discuss historical events behind national celebrations.',
                explain: 'Importance of studying history.',
                elaborate: 'Connect history with citizenship.',
                evaluate: 'Students list benefits of learning history.'
              }
            },
            {
              title: 'Sources of History',
              points: [
                'Sources of history are materials that provide information about the past.',
                'Historians depend on sources to write accurate history.',
                'Sources are classified into archaeological and literary sources.',
                'Archaeological sources include coins, tools, pottery, monuments.',
                'Literary sources include manuscripts, books, inscriptions.',
                'Sources help verify facts and avoid assumptions.',
                'Inscriptions give information about rulers and events.',
                'Coins reveal economic conditions of a period.',
                'Monuments show architectural development.',
                'Without sources, history cannot be written scientifically.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Show pictures of coins and monuments.',
                explore: 'Ask what information they give.',
                explain: 'Types of historical sources.',
                elaborate: 'Importance of sources in writing history.',
                evaluate: 'Students classify examples into types of sources.'
              }
            },
            {
              title: 'Archaeological Sources',
              points: [
                'Archaeological sources are physical remains of the past.',
                'They include tools, weapons, pottery, ornaments, and buildings.',
                'Excavations help discover buried historical objects.',
                'Inscriptions carved on stones give details about kings.',
                'Coins reveal trade and economic activities.',
                'Monuments show artistic skills and architecture.',
                'Fossils give information about early humans.',
                'Archaeologists study artifacts scientifically.',
                'Carbon dating helps determine age of objects.',
                'Archaeological evidence gives reliable proof of past life.'
              ],
              priority: 'High',
              explanationDepth: 'Deep Conceptual',
              model5E: {
                engage: 'Display image of an ancient monument.',
                explore: 'Ask what it tells about the past.',
                explain: 'Meaning and examples of archaeological sources.',
                elaborate: 'Discuss how excavations are conducted.',
                evaluate: 'Students explain importance of archaeological findings.'
              }
            },
            {
              title: 'Literary Sources',
              points: [
                'Literary sources are written records from the past.',
                'They include religious texts, biographies, travel accounts.',
                'Manuscripts were written on palm leaves and bark.',
                'Chronicles describe rulers and kingdoms.',
                'Foreign travelers recorded Indian history.',
                'Literary sources reveal cultural practices.',
                'They help understand language development.',
                'They provide information about social life.',
                'Some texts mix facts with myths.',
                'Historians carefully analyze literary sources for accuracy.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Show a picture of a manuscript.',
                explore: 'Discuss how books preserve knowledge.',
                explain: 'Define literary sources.',
                elaborate: 'Compare literary and archaeological sources.',
                evaluate: 'Students give examples of literary sources.'
              }
            },
            {
              title: 'Early Human Life',
              points: [
                'Early humans lived millions of years ago.',
                'They depended on hunting and gathering.',
                'They lived in caves and rock shelters.',
                'They used stone tools for survival.',
                'Fire discovery was a major achievement.',
                'They moved from place to place.',
                'They formed small groups for protection.',
                'They learned to make tools and weapons.',
                'Gradually they started farming.',
                'This marked the beginning of settled life.'
              ],
              priority: 'High',
              explanationDepth: 'Introductory Overview',
              model5E: {
                engage: 'Ask students how life would be without houses.',
                explore: 'Discuss early survival methods.',
                explain: 'Describe early human lifestyle.',
                elaborate: 'Compare early life with modern life.',
                evaluate: 'Students list differences between early and modern humans.'
              }
            },
            {
              title: 'Stone Age',
              points: [
                'The Stone Age is the earliest period of human history.',
                'People used stone tools for daily needs.',
                'It is divided into Paleolithic, Mesolithic, and Neolithic periods.',
                'Paleolithic people were hunters and gatherers.',
                'Mesolithic people began using small tools.',
                'Neolithic people started farming.',
                'They domesticated animals.',
                'They built simple houses.',
                'Pottery and weaving developed.',
                'It marked the beginning of civilization.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Show images of stone tools.',
                explore: 'Discuss their uses.',
                explain: 'Periods of Stone Age.',
                elaborate: 'Importance of farming development.',
                evaluate: 'Students differentiate the three stages.'
              }
            },
            {
              title: 'Beginning of Agriculture',
              points: [
                'Agriculture began during the Neolithic period.',
                'People started growing crops.',
                'They domesticated animals.',
                'Settlements were formed near rivers.',
                'Farming reduced nomadic life.',
                'Tools improved farming methods.',
                'Food surplus increased population.',
                'Trade began with extra produce.',
                'Permanent houses were built.',
                'Agriculture led to civilization development.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask what farmers grow in their area.',
                explore: 'Discuss importance of farming.',
                explain: 'Beginning of agriculture.',
                elaborate: 'Impact on society.',
                evaluate: 'Students explain how farming changed human life.'
              }
            }
          ]
        },
        'Chapter 2: India – Our Pride': {
          // ... (Chapter 2 content)
          className: 'Class 6',
          chapterName: 'Chapter 2: India – Our Pride',
          summary: 'Explores India’s diversity, unity, cultural heritage, national symbols, and achievements.',
          topics: [
            {
              title: 'India – A Land of Diversity',
              points: [
                'India is one of the largest countries in the world with a vast geographical area.',
                'It has diverse physical features such as mountains, plains, deserts, plateaus, and coastal regions.',
                'India is home to many languages spoken by different communities.',
                'People in India follow different religions like Hinduism, Islam, Christianity, Sikhism, Buddhism, and Jainism.',
                'Every state has its own culture, dress, food, and traditions.',
                'Festivals such as Diwali, Eid, Christmas, and Pongal are celebrated across the country.',
                'Different climatic conditions exist in different regions of India.',
                'India has a rich variety of flora and fauna.',
                'The diversity of India makes it culturally vibrant and unique.',
                'Despite differences, Indians share a common national identity.'
              ],
              priority: 'High',
              explanationDepth: 'Introductory Overview',
              model5E: {
                engage: 'Ask students about their language, food, and festivals.',
                explore: 'Compare diversity in different states.',
                explain: 'Meaning of diversity in India.',
                elaborate: 'Discuss how diversity enriches the nation.',
                evaluate: 'Students give examples of diversity in India.'
              }
            },
            {
              title: 'Unity in Diversity',
              points: [
                'Unity in diversity means living together peacefully despite differences.',
                'Indians respect different religions and cultures.',
                'The Constitution promotes equality and secularism.',
                'National festivals unite people across the country.',
                'The national flag and anthem symbolize unity.',
                'People support each other during disasters and crises.',
                'Different communities work together for development.',
                'Shared values like democracy strengthen unity.',
                'Sports events create national pride and unity.',
                'Unity makes India strong and progressive.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask why people stand together during the national anthem.',
                explore: 'Discuss examples of unity in school and society.',
                explain: 'Concept of unity in diversity.',
                elaborate: 'Connect unity to national strength.',
                evaluate: 'Students explain why unity is important.'
              }
            },
            {
              title: 'Cultural Heritage of India',
              points: [
                'Cultural heritage includes traditions, customs, arts, and architecture.',
                'India has ancient monuments like temples, forts, and palaces.',
                'Classical dances such as Bharatanatyam and Kathak are famous worldwide.',
                'Indian music includes classical and folk traditions.',
                'Yoga originated in India and is practiced globally.',
                'Handicrafts and textiles show artistic excellence.',
                'Literature in Sanskrit and regional languages is rich and diverse.',
                'Festivals reflect cultural beliefs and traditions.',
                'India’s heritage sites attract tourists.',
                'Preserving heritage is important for future generations.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Show pictures of Indian monuments.',
                explore: 'Ask students about traditional arts in their region.',
                explain: 'Meaning of cultural heritage.',
                elaborate: 'Importance of preservation.',
                evaluate: 'Students list examples of Indian heritage.'
              }
            },
            {
              title: 'National Symbols of India',
              points: [
                'The National Flag is called the Tiranga.',
                'The Ashoka Chakra represents righteousness.',
                'The National Emblem is adopted from the Lion Capital of Ashoka.',
                'The National Anthem is “Jana Gana Mana.”',
                'The National Song is “Vande Mataram.”',
                'The Tiger is the National Animal.',
                'The Peacock is the National Bird.',
                'The Lotus is the National Flower.',
                'The Banyan Tree is the National Tree.',
                'National symbols represent unity and pride.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Show the national flag and ask its colors.',
                explore: 'Discuss what each symbol represents.',
                explain: 'Importance of national symbols.',
                elaborate: 'Connect symbols to national identity.',
                evaluate: 'Students identify national symbols.'
              }
            },
            {
              title: 'Freedom Struggle and National Leaders',
              points: [
                'India was ruled by the British for many years.',
                'Indians fought for independence through various movements.',
                'Non-violent movements played a major role.',
                'Leaders encouraged unity and sacrifice.',
                'Many people participated in protests.',
                'Freedom fighters faced imprisonment and hardship.',
                'The struggle united people across regions.',
                'Independence was achieved in 1947.',
                'The Constitution was adopted in 1950.',
                'The freedom struggle inspires patriotism.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask what happens on Independence Day.',
                explore: 'Discuss sacrifices made by freedom fighters.',
                explain: 'Outline freedom struggle.',
                elaborate: 'Connect struggle to democracy.',
                evaluate: 'Students explain importance of independence.'
              }
            },
            {
              title: 'Achievements of India',
              points: [
                'India has made progress in science and technology.',
                'It has developed a strong space research program.',
                'India is one of the largest democracies in the world.',
                'Agricultural production has increased significantly.',
                'India excels in information technology.',
                'Indian doctors and engineers work globally.',
                'Sports achievements bring national pride.',
                'India contributes to global peace missions.',
                'Education and research institutions are growing.',
                'India continues to progress in various fields.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students about India’s achievements they know.',
                explore: 'Discuss areas where India excels.',
                explain: 'Highlight key achievements.',
                elaborate: 'Connect achievements to national pride.',
                evaluate: 'Students list recent achievements.'
              }
            }
          ]
        },
        'Chapter 3: Our Pride – Our State Karnataka': {
          className: 'Class 6',
          chapterName: 'Chapter 3: Our Pride – Our State Karnataka',
          summary: 'Detailed study of Karnataka’s geography, resources, culture, and famous personalities.',
          topics: [
            {
              title: 'Location and Physical Features of Karnataka',
              points: [
                'Karnataka is located in the southern part of India.',
                'It is bordered by Maharashtra, Goa, Kerala, Tamil Nadu, Andhra Pradesh, and Telangana.',
                'The Arabian Sea lies to its west, giving it a coastal region.',
                'The Western Ghats run along the western part of the state.',
                'The Deccan Plateau covers a large portion of Karnataka.',
                'The state has coastal plains, hilly regions, and plateau areas.',
                'The capital city of Karnataka is Bengaluru.',
                'Karnataka has diverse geographical features.',
                'The state’s geography influences agriculture and climate.',
                'Its location makes it economically and culturally important.'
              ],
              priority: 'High',
              explanationDepth: 'Introductory Overview',
              model5E: {
                engage: 'Show a map of Karnataka and ask students to identify neighboring states.',
                explore: 'Discuss different landforms seen in Karnataka.',
                explain: 'Describe the location and physical features.',
                elaborate: 'Connect geography with lifestyle and economy.',
                evaluate: 'Students draw and label Karnataka’s map.'
              }
            },
            {
              title: 'Rivers of Karnataka',
              points: [
                'Karnataka has many important rivers.',
                'The Cauvery River is one of the major rivers.',
                'The Krishna River flows through northern Karnataka.',
                'The Tungabhadra is an important tributary of Krishna.',
                'Rivers are sources of irrigation and drinking water.',
                'They help in hydroelectric power generation.',
                'Many dams are built across these rivers.',
                'Rivers support agriculture in the state.',
                'River valleys are fertile and densely populated.',
                'Rivers are culturally and economically significant.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students to name a river near their place.',
                explore: 'Discuss uses of river water.',
                explain: 'Major rivers of Karnataka.',
                elaborate: 'Importance of dams and irrigation.',
                evaluate: 'Students list benefits of rivers.'
              }
            },
            {
              title: 'Climate and Natural Vegetation',
              points: [
                'Karnataka experiences tropical climate.',
                'The coastal region receives heavy rainfall.',
                'The plateau region has moderate rainfall.',
                'Summers are generally hot.',
                'The Western Ghats receive heavy monsoon rains.',
                'Different regions have different vegetation types.',
                'Forests include evergreen and deciduous types.',
                'Wildlife is found in forest areas.',
                'Climate affects agriculture and crops grown.',
                'Forest conservation is important for the environment.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students about seasons in Karnataka.',
                explore: 'Compare rainfall in different regions.',
                explain: 'Climate patterns and vegetation.',
                elaborate: 'Importance of forests.',
                evaluate: 'Students explain how climate affects farming.'
              }
            },
            {
              title: 'Natural Resources',
              points: [
                'Karnataka is rich in mineral resources.',
                'It has deposits of iron ore.',
                'Gold is mined in certain regions.',
                'Granite and limestone are found here.',
                'Forests provide timber and medicinal plants.',
                'Water resources support agriculture.',
                'Natural resources boost economic development.',
                'Mining provides employment opportunities.',
                'Sustainable use of resources is necessary.',
                'Conservation ensures long-term benefits.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Show samples or pictures of minerals.',
                explore: 'Discuss importance of minerals.',
                explain: 'Major resources of Karnataka.',
                elaborate: 'Need for conservation.',
                evaluate: 'Students list resources found in Karnataka.'
              }
            },
            {
              title: 'Agriculture and Industries',
              points: [
                'Agriculture is an important occupation in Karnataka.',
                'Rice, ragi, and sugarcane are major crops.',
                'Coffee is grown in hilly regions.',
                'Coconut is cultivated in coastal areas.',
                'Irrigation supports farming.',
                'Karnataka has many industries.',
                'Bengaluru is known as the IT hub of India.',
                'Silk industry is famous in Karnataka.',
                'Industries provide employment.',
                'Agriculture and industry together support the economy.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students about crops grown in their area.',
                explore: 'Discuss industries in Karnataka.',
                explain: 'Agricultural and industrial development.',
                elaborate: 'Link economy with development.',
                evaluate: 'Students compare agriculture and industry roles.'
              }
            },
            {
              title: 'Culture and Traditions',
              points: [
                'Karnataka has a rich cultural heritage.',
                'Kannada is the official language.',
                'Traditional dances include Yakshagana and Dollu Kunitha.',
                'Classical music is popular.',
                'Festivals like Dasara are celebrated grandly.',
                'Handicrafts and art forms are unique.',
                'Traditional attire reflects culture.',
                'Cuisine varies across regions.',
                'Literature in Kannada is significant.',
                'Cultural diversity strengthens the state’s identity.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students about festivals they celebrate.',
                explore: 'Discuss traditional art forms.',
                explain: 'Culture and traditions of Karnataka.',
                elaborate: 'Importance of preserving culture.',
                evaluate: 'Students describe one cultural element.'
              }
            },
            {
              title: 'Famous Personalities of Karnataka',
              points: [
                'Karnataka has produced great leaders and scholars.',
                'Many poets contributed to Kannada literature.',
                'Scientists from Karnataka gained national fame.',
                'Freedom fighters played important roles.',
                'Artists and musicians are well known.',
                'Sports personalities brought pride.',
                'Leaders contributed to social reforms.',
                'Writers enriched regional literature.',
                'Personalities inspired future generations.',
                'They represent the pride of Karnataka.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students to name a famous person from Karnataka.',
                explore: 'Discuss their achievements.',
                explain: 'Contributions of notable personalities.',
                elaborate: 'Connect achievements to inspiration.',
                evaluate: 'Students present about one personality.'
              }
            },
            {
              title: 'Historical Monuments and Heritage',
              points: [
                'Karnataka has many historical monuments.',
                'Ancient temples show architectural excellence.',
                'Forts reflect military strength of past rulers.',
                'Palaces show royal grandeur.',
                'Heritage sites attract tourists.',
                'Monuments reflect cultural history.',
                'Archaeological sites provide historical evidence.',
                'Tourism supports the economy.',
                'Preservation is essential.',
                'Monuments are symbols of pride.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Show images of famous monuments.',
                explore: 'Ask what they reveal about history.',
                explain: 'Importance of monuments.',
                elaborate: 'Discuss preservation efforts.',
                evaluate: 'Students explain why monuments must be protected.'
              }
            }
          ]
        },
        'Chapter 4: The Culture of the Vedic Period': {
          // ... (Chapter 4 content)
          className: 'Class 6',
          chapterName: 'Chapter 4: The Culture of the Vedic Period',
          summary: 'Study of the Vedic Age, its social, political, and economic life, and its literature.',
          topics: [
            {
              title: 'The Vedic Age – Introduction',
              points: [
                'The Vedic Age is an important period in ancient Indian history.',
                'It is named after the Vedas, the oldest sacred texts of India.',
                'The Vedic period began around 1500 BCE.',
                'The Aryans are believed to have composed the Vedas.',
                'The Vedic Age is divided into Early and Later Vedic periods.',
                'Society during this time gradually evolved from tribal to settled life.',
                'Agriculture and cattle rearing were important occupations.',
                'Religion played a central role in daily life.',
                'Sanskrit was the main language of the Vedas.',
                'The Vedic period laid the foundation of Indian culture.'
              ],
              priority: 'High',
              explanationDepth: 'Introductory Overview',
              model5E: {
                engage: 'Ask students what they know about the Vedas.',
                explore: 'Discuss why ancient texts are important.',
                explain: 'Introduction to the Vedic Age.',
                elaborate: 'Connect Vedic culture to modern traditions.',
                evaluate: 'Students describe why this period is important.'
              }
            },
            {
              title: 'Early Vedic Period',
              points: [
                'The Early Vedic period is also called the Rig Vedic period.',
                'People lived mainly in north-western India.',
                'Society was mostly tribal and pastoral.',
                'Cattle were considered a measure of wealth.',
                'People lived in small villages.',
                'The family was the basic unit of society.',
                'Women had respectable status in society.',
                'Kings were chosen by tribal assemblies.',
                'Simple religious practices were followed.',
                'The Rigveda was composed during this period.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask how wealth was measured in ancient times.',
                explore: 'Discuss pastoral lifestyle.',
                explain: 'Features of Early Vedic life.',
                elaborate: 'Compare early society with modern life.',
                evaluate: 'Students list characteristics of Early Vedic period.'
              }
            },
            {
              title: 'Later Vedic Period',
              points: [
                'The Later Vedic period saw expansion towards eastern India.',
                'Agriculture became more important than cattle rearing.',
                'Iron tools were introduced.',
                'Society became more structured and complex.',
                'The caste system became more rigid.',
                'Kingship became hereditary.',
                'Large kingdoms replaced tribal organizations.',
                'Religious rituals became elaborate.',
                'New Vedic texts like Samaveda and Yajurveda were composed.',
                'Trade and crafts developed further.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask what changes happen when society grows.',
                explore: 'Discuss agricultural development.',
                explain: 'Changes in Later Vedic period.',
                elaborate: 'Compare Early and Later Vedic periods.',
                evaluate: 'Students differentiate both periods.'
              }
            },
            {
              title: 'Social Life in the Vedic Period',
              points: [
                'Society was divided into four varnas.',
                'The four varnas were Brahmins, Kshatriyas, Vaishyas, and Shudras.',
                'Family was patriarchal in nature.',
                'Joint family system existed.',
                'Women participated in religious ceremonies.',
                'Education was valued.',
                'Marriage was considered sacred.',
                'People followed simple lifestyle in early period.',
                'Social divisions became stricter later.',
                'Social structure influenced future Indian society.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask about family structure today.',
                explore: 'Discuss roles in society.',
                explain: 'Social system in Vedic period.',
                elaborate: 'Impact on modern society.',
                evaluate: 'Students explain varna system.'
              }
            },
            {
              title: 'Political System',
              points: [
                'Kings were called Rajan.',
                'Kings protected people and maintained law.',
                'Assemblies like Sabha and Samiti existed.',
                'These assemblies advised the king.',
                'Kingship later became hereditary.',
                'Large kingdoms developed.',
                'Taxes were collected.',
                'Armies were maintained for protection.',
                'Administration became organized.',
                'Political system laid foundation for monarchy.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask how leaders are chosen today.',
                explore: 'Discuss role of assemblies.',
                explain: 'Political structure.',
                elaborate: 'Compare with modern democracy.',
                evaluate: 'Students describe king’s role.'
              }
            },
            {
              title: 'Economic Life',
              points: [
                'Agriculture was main occupation.',
                'Cattle rearing was important.',
                'Trade developed gradually.',
                'Barter system was used.',
                'Crafts like pottery and weaving existed.',
                'Iron tools improved farming.',
                'Villages were economic centers.',
                'Surplus production increased trade.',
                'Taxes supported administration.',
                'Economy became stronger in Later Vedic period.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask how goods were exchanged before money.',
                explore: 'Discuss barter system.',
                explain: 'Economic activities.',
                elaborate: 'Compare ancient and modern economy.',
                evaluate: 'Students explain importance of agriculture.'
              }
            },
            {
              title: 'Religion and Philosophy',
              points: [
                'Nature worship was common.',
                'Gods like Indra and Agni were worshipped.',
                'Yajnas (sacrifices) were performed.',
                'Priests conducted rituals.',
                'Later period saw complex rituals.',
                'Belief in rebirth developed.',
                'Concepts of karma emerged.',
                'Philosophical ideas appeared in Upanishads.',
                'Religion influenced daily life.',
                'Vedic religion shaped Hinduism.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask what festivals involve rituals.',
                explore: 'Discuss nature worship.',
                explain: 'Religious practices.',
                elaborate: 'Influence on later religions.',
                evaluate: 'Students explain Vedic religious beliefs.'
              }
            },
            {
              title: 'Education and Literature',
              points: [
                'Education was given in Gurukuls.',
                'Students lived with the teacher.',
                'Oral learning was common.',
                'Vedas were memorized.',
                'Sanskrit was the main language.',
                'Discipline was important.',
                'Education included moral values.',
                'Literature included Vedas and Upanishads.',
                'Knowledge was passed orally for generations.',
                'Vedic literature forms the base of Indian philosophy.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask how education is different today.',
                explore: 'Discuss Gurukul system.',
                explain: 'Education in Vedic period.',
                elaborate: 'Compare ancient and modern education.',
                evaluate: 'Students describe Gurukul system.'
              }
            }
          ]
        },
        'Chapter 5: Rise of New Religions': {
          className: 'Class 6',
          chapterName: 'Chapter 5: Rise of New Religions',
          summary: 'Explores the background and principles of Jainism and Buddhism.',
          topics: [
            {
              title: 'Background for the Rise of New Religions',
              points: [
                'During the Later Vedic period, religious rituals became very complex and expensive.',
                'Only priests could perform sacrifices, which made religion less accessible to common people.',
                'Animal sacrifices were common and many people opposed them.',
                'Society became divided into rigid caste groups.',
                'Lower castes were treated unequally.',
                'People wanted a simpler path to salvation.',
                'There was dissatisfaction with elaborate rituals.',
                'Philosophical questions about life and suffering increased.',
                'This social and religious unrest led to new ideas.',
                'Jainism and Buddhism emerged as reform movements.'
              ],
              priority: 'High',
              explanationDepth: 'Introductory Overview',
              model5E: {
                engage: 'Ask students why people change rules if they are unhappy.',
                explore: 'Discuss problems in Later Vedic society.',
                explain: 'Reasons for rise of new religions.',
                elaborate: 'Connect reforms with modern social changes.',
                evaluate: 'Students list causes for religious reform.'
              }
            },
            {
              title: 'Life and Teachings of Mahavira',
              points: [
                'Mahavira was born in 599 BCE in present-day Bihar.',
                'His original name was Vardhamana.',
                'He belonged to a royal family.',
                'He left his home at the age of 30 to seek truth.',
                'He practiced severe penance for 12 years.',
                'He attained enlightenment and became the 24th Tirthankara.',
                'He preached non-violence (Ahimsa).',
                'He taught truthfulness and non-stealing.',
                'He emphasized simple living and self-control.',
                'He spread Jainism across northern India.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask what non-violence means.',
                explore: 'Discuss importance of self-discipline.',
                explain: 'Life of Mahavira.',
                elaborate: 'Connect teachings to moral values.',
                evaluate: 'Students explain main teachings of Mahavira.'
              }
            },
            {
              title: 'Principles of Jainism',
              points: [
                'Ahimsa (non-violence) is the main principle.',
                'Truth (Satya) must always be followed.',
                'Non-stealing (Asteya) is essential.',
                'Non-possession (Aparigraha) is encouraged.',
                'Self-control is important.',
                'All living beings are equal.',
                'Karma determines rebirth.',
                'Salvation is achieved through discipline.',
                'Strict vegetarianism is followed.',
                'Jainism promotes peace and compassion.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask how we can practice non-violence daily.',
                explore: 'Discuss importance of honesty.',
                explain: 'Five principles of Jainism.',
                elaborate: 'Apply principles in daily life.',
                evaluate: 'Students list Jain principles.'
              }
            },
            {
              title: 'Life and Teachings of Gautama Buddha',
              points: [
                'Gautama Buddha was born in 563 BCE in Lumbini.',
                'His original name was Siddhartha.',
                'He belonged to a royal family.',
                'He left home after seeing suffering in life.',
                'He meditated deeply under the Bodhi tree.',
                'He attained enlightenment at Bodh Gaya.',
                'He preached the Four Noble Truths.',
                'He taught the Eightfold Path.',
                'He rejected caste discrimination.',
                'He spread Buddhism across India.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students what causes suffering.',
                explore: 'Discuss life challenges.',
                explain: 'Life of Buddha.',
                elaborate: 'Apply Eightfold Path in life.',
                evaluate: 'Students explain Four Noble Truths.'
              }
            },
            {
              title: 'Principles of Buddhism',
              points: [
                'Life is full of suffering (First Noble Truth).',
                'Desire is the cause of suffering.',
                'Suffering can be ended.',
                'The Eightfold Path leads to salvation.',
                'Right speech and right action are important.',
                'Meditation is encouraged.',
                'Buddhism promotes compassion.',
                'It rejects caste discrimination.',
                'It emphasizes middle path (moderation).',
                'It teaches equality and peace.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask what moderation means.',
                explore: 'Discuss causes of problems.',
                explain: 'Four Noble Truths and Eightfold Path.',
                elaborate: 'Connect to peaceful living.',
                evaluate: 'Students summarize Buddhist teachings.'
              }
            },
            {
              title: 'Spread and Impact of Jainism and Buddhism',
              points: [
                'Both religions spread across India.',
                'Kings supported these religions.',
                'Monasteries were built.',
                'Teachings were simple and practical.',
                'They opposed animal sacrifice.',
                'They promoted equality.',
                'They influenced art and architecture.',
                'They spread to other countries.',
                'They shaped Indian philosophy.',
                'Their teachings remain relevant today.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask why simple teachings spread fast.',
                explore: 'Discuss support of rulers.',
                explain: 'Spread of Jainism and Buddhism.',
                elaborate: 'Influence on culture and art.',
                evaluate: 'Students compare both religions.'
              }
            }
          ]
        },
        'Chapter 6: Ancient Dynasties of South India': {
          // ... (Chapter 6 content)
          className: 'Class 6',
          chapterName: 'Chapter 6: Ancient Dynasties of South India',
          summary: 'Detailed study of Satavahanas, Kadambas, Gangas, Chalukyas, and Pallavas.',
          topics: [
            {
              title: 'Introduction to South Indian Dynasties',
              points: [
                'South India was ruled by several powerful dynasties in ancient times.',
                'These dynasties contributed to political stability and cultural growth.',
                'They promoted trade, agriculture, and administration.',
                'Many temples and monuments were built during their rule.',
                'South Indian rulers encouraged art and literature.',
                'They maintained strong armies for protection.',
                'Trade links were established with foreign countries.',
                'Ports along the coast supported overseas trade.',
                'Local self-governance systems were developed.',
                'These dynasties shaped the history of South India.'
              ],
              priority: 'High',
              explanationDepth: 'Introductory Overview',
              model5E: {
                engage: 'Ask students why rulers are important in history.',
                explore: 'Discuss role of kings in development.',
                explain: 'Introduction to South Indian dynasties.',
                elaborate: 'Connect dynasty rule with cultural growth.',
                evaluate: 'Students list contributions of dynasties.'
              }
            },
            {
              title: 'The Satavahanas',
              points: [
                'The Satavahanas ruled parts of South India after the Mauryas.',
                'Their capital was Pratishthana.',
                'They promoted trade with Rome and other countries.',
                'They issued coins for trade.',
                'Agriculture was well developed.',
                'They supported Buddhism.',
                'Stupas and caves were built.',
                'They maintained administrative control through officials.',
                'Women had respectable status.',
                'They strengthened regional culture.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Show picture of ancient coins.',
                explore: 'Discuss importance of trade.',
                explain: 'Features of Satavahana rule.',
                elaborate: 'Impact on economy and religion.',
                evaluate: 'Students describe Satavahana contributions.'
              }
            },
            {
              title: 'The Kadambas',
              points: [
                'The Kadambas ruled Karnataka region.',
                'Their capital was Banavasi.',
                'They promoted Kannada language.',
                'They encouraged temple construction.',
                'Agriculture and trade developed.',
                'They maintained good administration.',
                'They issued inscriptions in Kannada.',
                'They protected regional culture.',
                'They strengthened local governance.',
                'They played important role in Karnataka’s history.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students about Banavasi.',
                explore: 'Discuss importance of language promotion.',
                explain: 'Kadamba rule.',
                elaborate: 'Role in Karnataka’s heritage.',
                evaluate: 'Students list Kadamba achievements.'
              }
            },
            {
              title: 'The Gangas',
              points: [
                'The Gangas ruled southern Karnataka.',
                'They supported Jainism.',
                'The famous Gomateshwara statue was built during their period.',
                'They promoted agriculture.',
                'They encouraged local administration.',
                'They built temples and monuments.',
                'They maintained peace and stability.',
                'Kannada literature developed.',
                'Trade activities increased.',
                'Their rule lasted several centuries.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Show image of Gomateshwara statue.',
                explore: 'Discuss importance of monuments.',
                explain: 'Contributions of Gangas.',
                elaborate: 'Cultural development.',
                evaluate: 'Students explain Ganga achievements.'
              }
            },
            {
              title: 'The Chalukyas of Badami',
              points: [
                'The Chalukyas ruled from Badami.',
                'They expanded their kingdom widely.',
                'They were great builders.',
                'Rock-cut temples were constructed.',
                'They encouraged art and architecture.',
                'Administration was well organized.',
                'They maintained strong military power.',
                'Trade and agriculture flourished.',
                'They promoted religious tolerance.',
                'Their temples are architectural masterpieces.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Show image of Badami caves.',
                explore: 'Discuss temple architecture.',
                explain: 'Chalukya rule and achievements.',
                elaborate: 'Importance of rock-cut temples.',
                evaluate: 'Students describe Chalukya architecture.'
              }
            },
            {
              title: 'The Pallavas',
              points: [
                'The Pallavas ruled parts of South India.',
                'Their capital was Kanchipuram.',
                'They were great patrons of art and architecture.',
                'The Shore Temple was built during their rule.',
                'They supported Sanskrit learning.',
                'They developed Dravidian style of temple architecture.',
                'Trade flourished under their rule.',
                'They maintained naval strength.',
                'Literature and education were encouraged.',
                'Their rule influenced South Indian culture.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Show picture of Shore Temple.',
                explore: 'Discuss temple features.',
                explain: 'Pallava contributions.',
                elaborate: 'Impact on architecture.',
                evaluate: 'Students explain Pallava achievements.'
              }
            },
            {
              title: 'Cultural Contributions of South Indian Dynasties',
              points: [
                'Temples became centers of art and learning.',
                'Sculpture and architecture flourished.',
                'Literature in regional languages developed.',
                'Trade links strengthened economy.',
                'Religious tolerance was practiced.',
                'Education centers were established.',
                'Irrigation systems improved agriculture.',
                'Administration systems were organized.',
                'Music and dance evolved.',
                'These dynasties shaped South Indian heritage.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students why temples are important historically.',
                explore: 'Discuss cultural contributions.',
                explain: 'Overall impact of dynasties.',
                elaborate: 'Connect to modern South Indian culture.',
                evaluate: 'Students summarize contributions.'
              }
            }
          ]
        },
        'Chapter 7: Citizen and Citizenship': {
          className: 'Class 6',
          chapterName: 'Chapter 7: Citizen and Citizenship',
          summary: 'Meaning, rights, duties, and importance of citizenship in a democracy.',
          topics: [
            {
              title: 'Meaning of Citizen',
              points: [
                'A citizen is a person who legally belongs to a particular country.',
                'Citizens enjoy certain rights provided by the Constitution of that country.',
                'Citizens also have responsibilities towards their nation.',
                'In India, people born in the country are generally citizens.',
                'Citizens are different from foreigners who do not have full rights.',
                'Only citizens can vote in elections.',
                'Citizens can participate in government formation.',
                'Citizenship gives a sense of belonging and identity.',
                'Citizens are protected by the laws of the country.',
                'Being a citizen means contributing to national development.'
              ],
              priority: 'High',
              explanationDepth: 'Introductory Overview',
              model5E: {
                engage: 'Ask students what it means to belong to a country.',
                explore: 'Discuss who can vote and why.',
                explain: 'Define citizen and its importance.',
                elaborate: 'Connect citizenship to daily life.',
                evaluate: 'Students explain who is a citizen.'
              }
            },
            {
              title: 'Meaning of Citizenship',
              points: [
                'Citizenship is the legal status of being a citizen of a country.',
                'It gives individuals political and civil rights.',
                'Citizenship ensures protection under the law.',
                'It allows participation in democratic processes.',
                'Citizenship may be acquired by birth or naturalization.',
                'It creates a bond between the individual and the nation.',
                'Citizens must obey the Constitution and laws.',
                'Citizenship provides equality before law.',
                'It promotes national unity.',
                'Citizenship strengthens democracy.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask how citizenship differs from residency.',
                explore: 'Discuss importance of legal status.',
                explain: 'Meaning of citizenship.',
                elaborate: 'Connect citizenship to democracy.',
                evaluate: 'Students list benefits of citizenship.'
              }
            },
            {
              title: 'Rights of Citizens',
              points: [
                'Citizens have Fundamental Rights guaranteed by the Constitution.',
                'Right to Equality ensures equal treatment before law.',
                'Right to Freedom allows speech and expression.',
                'Right against Exploitation protects individuals.',
                'Right to Freedom of Religion ensures religious choice.',
                'Cultural and Educational Rights protect minorities.',
                'Right to Constitutional Remedies protects rights.',
                'Citizens can vote and contest elections.',
                'Rights protect dignity and liberty.',
                'Rights are essential for democracy.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students about freedom of speech.',
                explore: 'Discuss situations where rights are important.',
                explain: 'List major rights.',
                elaborate: 'Connect rights with daily experiences.',
                evaluate: 'Students explain one fundamental right.'
              }
            },
            {
              title: 'Duties of Citizens',
              points: [
                'Citizens must respect the Constitution.',
                'They should respect national symbols.',
                'Citizens must obey laws.',
                'They should protect public property.',
                'Paying taxes is a duty.',
                'Citizens should promote harmony.',
                'Protecting the environment is a duty.',
                'Defending the country is a responsibility.',
                'Citizens should value national heritage.',
                'Duties ensure discipline and unity.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students what responsibilities they have at school.',
                explore: 'Discuss duties at home and in society.',
                explain: 'Constitutional duties.',
                elaborate: 'Importance of responsible behavior.',
                evaluate: 'Students list three duties.'
              }
            },
            {
              title: 'Importance of Responsible Citizenship',
              points: [
                'Responsible citizens help maintain law and order.',
                'They participate actively in elections.',
                'They respect others’ rights.',
                'They work for social welfare.',
                'They avoid corruption and illegal activities.',
                'They promote unity and peace.',
                'They contribute to development.',
                'They follow environmental rules.',
                'They encourage democratic values.',
                'Responsible citizenship strengthens the nation.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask how students can be responsible citizens.',
                explore: 'Discuss examples of responsible behavior.',
                explain: 'Importance of responsibility.',
                elaborate: 'Connect to national development.',
                evaluate: 'Students suggest ways to be responsible citizens.'
              }
            },
            {
              title: 'Ways of Acquiring Citizenship',
              points: [
                'Citizenship can be acquired by birth.',
                'It can be obtained by descent.',
                'Registration is another method.',
                'Naturalization allows foreigners to become citizens.',
                'Citizenship may be granted by government decision.',
                'Certain legal conditions must be fulfilled.',
                'Citizenship ensures legal recognition.',
                'Government verifies eligibility.',
                'Citizenship may be lost under certain conditions.',
                'Laws regulate citizenship in India.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask how a foreigner becomes Indian citizen.',
                explore: 'Discuss legal procedures.',
                explain: 'Different ways of acquiring citizenship.',
                elaborate: 'Importance of legal status.',
                evaluate: 'Students explain one method of acquiring citizenship.'
              }
            }
          ]
        },
        'Chapter 8: Our Constitution': {
          className: 'Class 6',
          chapterName: 'Chapter 8: Our Constitution',
          summary: 'Meaning, making, features, and principles of the Indian Constitution.',
          topics: [
            {
              title: 'Meaning of Constitution',
              points: [
                'A Constitution is the supreme law of a country.',
                'It lays down rules and principles for governing the nation.',
                'It defines the structure of the government.',
                'It explains powers and functions of different branches.',
                'It protects the rights of citizens.',
                'It ensures equality and justice.',
                'It limits the powers of the government.',
                'It provides a framework for law-making.',
                'It reflects the values and ideals of a country.',
                'All laws must follow the Constitution.'
              ],
              priority: 'High',
              explanationDepth: 'Introductory Overview',
              model5E: {
                engage: 'Ask students why rules are important in school.',
                explore: 'Discuss what happens without rules.',
                explain: 'Meaning of Constitution.',
                elaborate: 'Connect school rules with national laws.',
                evaluate: 'Students define Constitution in their own words.'
              }
            },
            {
              title: 'Making of the Indian Constitution',
              points: [
                'The Constitution of India was framed by the Constituent Assembly.',
                'The Assembly was formed in 1946.',
                'It consisted of representatives from different regions.',
                'The drafting committee was headed by Dr. B.R. Ambedkar.',
                'The Constitution was adopted on 26 November 1949.',
                'It came into effect on 26 January 1950.',
                'It took nearly three years to prepare.',
                'Members debated and discussed each article.',
                'The Constitution reflects democratic ideals.',
                'India became a Republic on 26 January 1950.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask what happens on Republic Day.',
                explore: 'Discuss importance of law-making.',
                explain: 'Process of framing Constitution.',
                elaborate: 'Role of Dr. B.R. Ambedkar.',
                evaluate: 'Students state when Constitution came into effect.'
              }
            },
            {
              title: 'Features of the Indian Constitution',
              points: [
                'It is the longest written Constitution in the world.',
                'It establishes India as a sovereign nation.',
                'It provides for a democratic government.',
                'It ensures secularism.',
                'It guarantees fundamental rights.',
                'It provides for federal structure.',
                'It allows amendments when needed.',
                'It ensures independent judiciary.',
                'It promotes equality and justice.',
                'It protects minority rights.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask why equality is important.',
                explore: 'Discuss democratic values.',
                explain: 'Major features.',
                elaborate: 'Connect features with daily life.',
                evaluate: 'Students list three features.'
              }
            },
            {
              title: 'Preamble of the Constitution',
              points: [
                'The Preamble is the introduction to the Constitution.',
                'It declares India as sovereign, socialist, secular, democratic republic.',
                'It ensures justice for all citizens.',
                'It promotes liberty of thought and expression.',
                'It guarantees equality of status.',
                'It encourages fraternity among citizens.',
                'It reflects the spirit of the Constitution.',
                'It expresses national goals.',
                'It guides interpretation of laws.',
                'It represents values of Indian democracy.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Read the Preamble aloud.',
                explore: 'Discuss meaning of key words.',
                explain: 'Importance of Preamble.',
                elaborate: 'Connect to democratic values.',
                evaluate: 'Students explain any one term.'
              }
            },
            {
              title: 'Fundamental Rights',
              points: [
                'Fundamental Rights are guaranteed by the Constitution.',
                'They protect individual freedom.',
                'Right to Equality ensures equal treatment.',
                'Right to Freedom protects speech and movement.',
                'Right against Exploitation prevents forced labor.',
                'Right to Religion ensures religious freedom.',
                'Cultural and Educational Rights protect minorities.',
                'Right to Constitutional Remedies safeguards rights.',
                'Courts protect these rights.',
                'Rights maintain democracy.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask about freedom of speech.',
                explore: 'Discuss examples of rights.',
                explain: 'List fundamental rights.',
                elaborate: 'Connect rights to student life.',
                evaluate: 'Students explain importance of rights.'
              }
            },
            {
              title: 'Fundamental Duties',
              points: [
                'Fundamental Duties were added later to the Constitution.',
                'Citizens must respect national symbols.',
                'They must protect unity and integrity.',
                'They should safeguard public property.',
                'They must promote harmony.',
                'Protecting environment is a duty.',
                'Citizens should value heritage.',
                'They must follow the Constitution.',
                'Duties balance rights.',
                'Duties strengthen discipline.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask what duties students have in school.',
                explore: 'Discuss balance between rights and duties.',
                explain: 'List duties.',
                elaborate: 'Connect to responsible citizenship.',
                evaluate: 'Students mention three duties.'
              }
            },
            {
              title: 'Directive Principles of State Policy',
              points: [
                'Directive Principles guide the government.',
                'They aim at social and economic welfare.',
                'They promote equal justice.',
                'They encourage education for all.',
                'They promote public health.',
                'They reduce economic inequality.',
                'They protect environment.',
                'They promote international peace.',
                'They are not legally enforceable.',
                'They guide policy-making.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask how government improves welfare.',
                explore: 'Discuss social welfare programs.',
                explain: 'Meaning of Directive Principles.',
                elaborate: 'Connect to development schemes.',
                evaluate: 'Students explain purpose of DPSP.'
              }
            }
          ]
        },
        'Chapter 9: Types of Government': {
          // ... (Chapter 9 content)
          className: 'Class 6',
          chapterName: 'Chapter 9: Types of Government',
          summary: 'Meaning, need, and types of government, including democracy, monarchy, and dictatorship.',
          topics: [
            {
              title: 'Meaning of Government',
              points: [
                'Government is a system that rules and manages a country.',
                'It makes laws and ensures they are followed.',
                'It maintains law and order in society.',
                'It protects the country from external threats.',
                'It provides public services like education and healthcare.',
                'It collects taxes to run administration.',
                'Government represents the people.',
                'It resolves disputes through courts.',
                'It ensures justice and equality.',
                'Without government, society would face disorder.'
              ],
              priority: 'High',
              explanationDepth: 'Introductory Overview',
              model5E: {
                engage: 'Ask what happens if there are no rules in school.',
                explore: 'Discuss need for leadership.',
                explain: 'Define government.',
                elaborate: 'Connect to daily administration.',
                evaluate: 'Students explain why government is necessary.'
              }
            },
            {
              title: 'Need for Government',
              points: [
                'Government ensures safety and security.',
                'It maintains peace and harmony.',
                'It provides basic facilities like roads and hospitals.',
                'It regulates trade and economy.',
                'It protects citizens’ rights.',
                'It manages natural resources.',
                'It maintains international relations.',
                'It resolves conflicts among citizens.',
                'It enforces laws fairly.',
                'It promotes development and welfare.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students how traffic is controlled.',
                explore: 'Discuss role of police and courts.',
                explain: 'Importance of government.',
                elaborate: 'Link to public welfare.',
                evaluate: 'Students list three reasons for government.'
              }
            },
            {
              title: 'Types of Government (Overview)',
              points: [
                'Governments are classified based on how power is exercised.',
                'Major types include democracy, monarchy, and dictatorship.',
                'In democracy, people elect their leaders.',
                'In monarchy, power lies with a king or queen.',
                'In dictatorship, one person controls the country.',
                'Different countries follow different systems.',
                'Some governments combine features of different systems.',
                'Each system has advantages and disadvantages.',
                'India follows a democratic system.',
                'Type of government affects citizens’ rights.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students who chooses leaders in India.',
                explore: 'Compare leadership styles.',
                explain: 'Types of government.',
                elaborate: 'Connect to world examples.',
                evaluate: 'Students identify type of government in India.'
              }
            },
            {
              title: 'Democracy',
              points: [
                'Democracy means rule by the people.',
                'Leaders are elected through voting.',
                'Citizens have equal political rights.',
                'It promotes freedom of speech.',
                'Elections are held periodically.',
                'Majority rule is followed.',
                'Minority rights are protected.',
                'People can question the government.',
                'Independent judiciary exists.',
                'Democracy ensures participation and equality.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Conduct a mock classroom election.',
                explore: 'Discuss fairness in voting.',
                explain: 'Features of democracy.',
                elaborate: 'Importance in modern society.',
                evaluate: 'Students explain advantages of democracy.'
              }
            },
            {
              title: 'Monarchy',
              points: [
                'Monarchy is rule by a king or queen.',
                'Power is usually hereditary.',
                'In absolute monarchy, ruler has full power.',
                'In constitutional monarchy, power is limited.',
                'Decisions are made by the monarch.',
                'Citizens have limited participation.',
                'Some countries still follow monarchy.',
                'It may provide stable leadership.',
                'Lack of public participation can cause issues.',
                'It differs from democracy.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students what a king does.',
                explore: 'Compare monarchy with democracy.',
                explain: 'Types of monarchy.',
                elaborate: 'Discuss advantages and disadvantages.',
                evaluate: 'Students differentiate monarchy and democracy.'
              }
            },
            {
              title: 'Dictatorship',
              points: [
                'Dictatorship is rule by one person.',
                'Power is gained by force or control.',
                'Citizens have limited rights.',
                'Elections may not be fair.',
                'Opposition is often suppressed.',
                'Media may be controlled.',
                'Decisions are made without public consent.',
                'It may bring quick decisions.',
                'It lacks democratic freedom.',
                'It can lead to misuse of power.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask what happens if one student controls all decisions.',
                explore: 'Discuss fairness.',
                explain: 'Meaning of dictatorship.',
                elaborate: 'Compare with democracy.',
                evaluate: 'Students explain why democracy is preferred.'
              }
            },
            {
              title: 'Parliamentary System in India',
              points: [
                'India follows a parliamentary democracy.',
                'People elect representatives to Parliament.',
                'The Prime Minister is the head of government.',
                'The President is the head of state.',
                'Parliament makes laws.',
                'The Council of Ministers assists the Prime Minister.',
                'Government is accountable to Parliament.',
                'Elections are conducted regularly.',
                'Independent judiciary ensures fairness.',
                'It ensures democratic governance.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask who is the Prime Minister.',
                explore: 'Discuss election process.',
                explain: 'Parliamentary system.',
                elaborate: 'Role of Parliament.',
                evaluate: 'Students describe Indian system of government.'
              }
            }
          ]
        },
        'Chapter 10: Globe and Maps': {
          className: 'Class 6',
          chapterName: 'Chapter 10: Globe and Maps',
          summary: 'Understanding the Earth through globes and maps, including latitudes, longitudes, and map symbols.',
          topics: [
            {
              title: 'The Globe – Model of the Earth',
              points: [
                'A globe is a three-dimensional model of the Earth.',
                'It shows the correct shape and location of continents and oceans.',
                'The Earth is slightly flattened at the poles and bulges at the equator.',
                'The axis of the globe is tilted, just like the Earth’s axis.',
                'The globe helps us understand the Earth’s rotation.',
                'It shows the distribution of land and water.',
                'Globes are useful for studying the Earth as a whole.',
                'They are not very convenient for showing small areas in detail.',
                'The North Pole and South Pole are the two ends of the axis.',
                'A globe represents the spherical nature of our planet.'
              ],
              priority: 'High',
              explanationDepth: 'Introductory Overview',
              model5E: {
                engage: 'Show a globe to the students.',
                explore: 'Ask students to find their country on the globe.',
                explain: 'Features of a globe.',
                elaborate: 'Compare globe with a flat map.',
                evaluate: 'Students explain why a globe is a good model of Earth.'
              }
            },
            {
              title: 'Latitudes',
              points: [
                'Latitudes are imaginary horizontal lines drawn on the globe.',
                'The Equator is the most important latitude at 0 degrees.',
                'It divides the Earth into Northern and Southern Hemispheres.',
                'Latitudes are also called parallels.',
                'Important latitudes include Tropic of Cancer and Tropic of Capricorn.',
                'Arctic Circle and Antarctic Circle are other key latitudes.',
                'Latitudes help in identifying heat zones of the Earth.',
                'They are measured in degrees.',
                'The distance between latitudes remains constant.',
                'They help in locating places on Earth.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students how we can locate a place on a ball.',
                explore: 'Draw horizontal lines on a ball.',
                explain: 'Definition and importance of latitudes.',
                elaborate: 'Discuss heat zones based on latitudes.',
                evaluate: 'Students name the 0-degree latitude.'
              }
            },
            {
              title: 'Longitudes',
              points: [
                'Longitudes are imaginary vertical lines drawn from pole to pole.',
                'They are also called meridians.',
                'The Prime Meridian is the 0-degree longitude.',
                'It passes through Greenwich, London.',
                'It divides the Earth into Eastern and Western Hemispheres.',
                'There are 360 longitudes in total.',
                'Longitudes help in determining time.',
                'The distance between longitudes decreases towards the poles.',
                'They meet at the North and South Poles.',
                'Longitudes and latitudes together form a grid.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask how we know the time in different countries.',
                explore: 'Discuss vertical lines on the globe.',
                explain: 'Definition and importance of longitudes.',
                elaborate: 'Explain how longitudes relate to time zones.',
                evaluate: 'Students identify the Prime Meridian.'
              }
            },
            {
              title: 'Maps – Introduction and Types',
              points: [
                'A map is a representation of the Earth’s surface on a flat sheet.',
                'Maps are more convenient to carry than globes.',
                'They can show small areas in great detail.',
                'Physical maps show natural features like mountains and rivers.',
                'Political maps show boundaries of countries and states.',
                'Thematic maps focus on specific information like rainfall or roads.',
                'Maps use scales to represent distances accurately.',
                'Different colors and symbols are used on maps.',
                'A collection of maps is called an atlas.',
                'Maps are essential tools for geography.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Show different types of maps to students.',
                explore: 'Ask students to identify mountains on a map.',
                explain: 'Types and uses of maps.',
                elaborate: 'Compare physical and political maps.',
                evaluate: 'Students list three types of maps.'
              }
            },
            {
              title: 'Components of a Map',
              points: [
                'Distance, direction, and symbols are the main components.',
                'Scale helps in measuring actual distance on the ground.',
                'Directions are shown using a compass rose (N, S, E, W).',
                'Symbols represent features like bridges, temples, or forests.',
                'Colors are used to show different landforms (blue for water, brown for mountains).',
                'A legend or key explains the meaning of symbols.',
                'North direction is usually indicated by an arrow.',
                'Intermediate directions include NE, SE, SW, NW.',
                'Accurate components make a map reliable.',
                'Understanding components is key to reading maps.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students how they find their way to a new place.',
                explore: 'Discuss map symbols and directions.',
                explain: 'Components of a map.',
                elaborate: 'Practice finding directions on a map.',
                evaluate: 'Students identify map symbols in a legend.'
              }
            }
          ]
        },
        'Chapter 11: Major Landforms': {
          className: 'Class 6',
          chapterName: 'Chapter 11: Major Landforms',
          summary: 'Study of mountains, plateaus, and plains, and their importance to humans.',
          topics: [
            {
              title: 'Introduction to Landforms',
              points: [
                'The Earth’s surface is not uniform everywhere.',
                'Landforms are natural features of the Earth’s surface.',
                'They are formed by internal and external processes.',
                'Internal processes cause upliftment or sinking of land.',
                'External processes include erosion and deposition.',
                'Major landforms are mountains, plateaus, and plains.',
                'Landforms influence climate and human activities.',
                'They provide different types of resources.',
                'People adapt their lifestyle based on landforms.',
                'Understanding landforms is essential for geography.'
              ],
              priority: 'High',
              explanationDepth: 'Introductory Overview',
              model5E: {
                engage: 'Ask students if the land is flat everywhere.',
                explore: 'Show pictures of different landscapes.',
                explain: 'Definition and formation of landforms.',
                elaborate: 'Discuss how landforms affect our lives.',
                evaluate: 'Students name three major landforms.'
              }
            },
            {
              title: 'Mountains',
              points: [
                'Mountains are natural elevations of the Earth’s surface.',
                'They have a broad base and a narrow peak (summit).',
                'A chain of mountains is called a range.',
                'Fold mountains are formed by pressure from within the Earth.',
                'Block mountains are formed by large areas being broken and displaced.',
                'Volcanic mountains are formed by volcanic activity.',
                'Mountains are storehouses of water (glaciers).',
                'They have rich flora and fauna.',
                'Mountains influence rainfall patterns.',
                'They are popular for tourism and adventure sports.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students if they have visited a hill station.',
                explore: 'Discuss features of mountains.',
                explain: 'Types and importance of mountains.',
                elaborate: 'Talk about the Himalayas as fold mountains.',
                evaluate: 'Students explain why mountains are important.'
              }
            },
            {
              title: 'Plateaus',
              points: [
                'A plateau is an elevated flat land.',
                'It is also called a tableland.',
                'Plateaus have one or more sides with steep slopes.',
                'The Deccan Plateau in India is one of the oldest.',
                'The Tibet Plateau is the highest in the world.',
                'Plateaus are rich in mineral deposits.',
                'Many waterfalls are found in plateau regions.',
                'They are suitable for mining activities.',
                'The soil in some plateaus is very fertile (black soil).',
                'Plateaus support various industries.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students if they have seen a flat-topped hill.',
                explore: 'Discuss features of a plateau.',
                explain: 'Definition and importance of plateaus.',
                elaborate: 'Discuss mining in the Chhota Nagpur plateau.',
                evaluate: 'Students differentiate between a mountain and a plateau.'
              }
            },
            {
              title: 'Plains',
              points: [
                'Plains are large stretches of flat land.',
                'They are generally not more than 200 meters above sea level.',
                'Most plains are formed by rivers and their tributaries.',
                'Rivers deposit sand, silt, and clay to form fertile plains.',
                'Plains are very fertile and suitable for agriculture.',
                'They are the most densely populated areas in the world.',
                'Construction of transport networks is easy in plains.',
                'The Indo-Gangetic plains are very famous in India.',
                'Plains provide ideal conditions for human settlement.',
                'Most civilizations developed in river plains.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask students where most people live and why.',
                explore: 'Discuss why farming is easy in plains.',
                explain: 'Formation and importance of plains.',
                elaborate: 'Connect fertile soil with food production.',
                evaluate: 'Students explain why plains are densely populated.'
              }
            },
            {
              title: 'Landforms and People',
              points: [
                'Human life varies according to the landform.',
                'Life is difficult in mountainous regions.',
                'Plains provide better conditions for living.',
                'Agriculture, industries, and transport are better in plains.',
                'Natural calamities like earthquakes affect different landforms differently.',
                'People should use land and water resources carefully.',
                'Pollution affects all types of landforms.',
                'Sustainable living is important for protecting landforms.',
                'Landforms shape the culture and traditions of people.',
                'We must preserve our natural heritage.'
              ],
              priority: 'High',
              explanationDepth: 'Standard Procedural',
              model5E: {
                engage: 'Ask how life would be different on a mountain vs. a plain.',
                explore: 'Discuss challenges in different terrains.',
                explain: 'Relationship between landforms and human life.',
                elaborate: 'Discuss the importance of conservation.',
                evaluate: 'Students suggest ways to protect our landforms.'
              }
            }
          ]
        }
    }
  }
};
