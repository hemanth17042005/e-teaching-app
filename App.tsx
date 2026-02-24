import React, { useState, useEffect } from 'react';
import { AppView, Subject, LessonPlan, GrammarGame, ActivityType, Language, ChatMessage } from './types';
import { CLASSES, SUBJECTS, CHAPTER_DATA, TRANSLATIONS, RESOURCE_LINKS } from './constants';
import { generateLessonPlan, generateGrammarActivity, askClassroomAssistant, generateSpeech, translateText, generateAssignment } from './services/geminiService';
import { generateLocalGrammarActivity } from './services/localGrammarService';
import Markdown from 'react-markdown';
import { STATIC_LESSON_PLANS } from './staticLessonPlans';
import { 
  PHSimulator, 
  FractionExplorer, 
  CircuitLab, 
  AngleProtractor, 
  StatesOfMatter,
  DensityLab,
  PrimeSieve,
  RayOpticsLab,
  PendulumLab,
  ProjectileLauncher,
  TitrationLab,
  InductionLab,
  ThermalConductivityLab,
  ChemicalReactionLab,
  ArchimedesLab,
  OhmsLawLab,
  WaveMachine,
  LeverLab,
  RefractionLab,
  HookesLawLab,
  InclinedPlaneLab,
  DopplerLab,
  CircularMotionLab,
  PulleyLab,
  GravityLab,
  DensityColumnLab,
  ACGeneratorLab,
  InterferenceLab,
  PhotoelectricLab,
  RadioactiveDecayLab,
  PythagorasLab,
  AlgebraVisualizer,
  MathSolver,
  HistoryMap
} from './components/SimulationLab';
import PlayChemicalsLab from './components/PlayChemicalsLab';

const GRAMMAR_TOPICS = {
  English: [
    'Parts of Speech', 'Tenses', 'Articles (A, An, The)', 'Prepositions', 'Active & Passive Voice',
    'Reported Speech', 'Conjunctions', 'Adjectives & Adverbs', 'Question Tags', 'Modals (Can, Should)',
    'Prefixes & Suffixes', 'Synonyms & Antonyms', 'Phrasal Verbs', 'Degrees of Comparison', 'Subject-Verb Agreement',
    'Idioms & Phrases', 'Homophones', 'Collective Nouns', 'Gender of Nouns', 'Plurals', 'Punctuation',
    'Reading Comprehension', 'Spelling Bee'
  ],
  Kannada: [
    'ಸಂಧಿಗಳು (Sandhi)', 'ಸಮಾಸಗಳು (Samasa)', 'ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯಗಳು (Vibhakti)', 'ತತ್ಸಮ-ತದ್ಭವ (Tatsama-Tadbhava)', 
    'ನುಡಿಗಟ್ಟುಗಳು (Idioms)', 'ಸಮಾನಾರ್ಥಕ ಪದಗಳು (Synonyms)', 'ವಿರುದ್ಧಾರ್ಥಕ ಪದಗಳು (Antonyms)', 'ಕಾಲಗಳು (Tenses)', 
    'ಲಿಂಗಗಳು (Gender)', 'ವಚನಗಳು (Number)', 'ಕ್ರಿಯಾಪದಗಳು (Verbs)', 'ಗುಣವಾಚಕಗಳು (Adjectives)', 
    'ವಾಕ್ಯಗಳ ವಿಧಗಳು (Types of Sentences)', 'ಸರ್ವನಾಮಗಳು (Pronouns)', 'ಅವ್ಯಯಗಳು (Indehinables)'
  ]
};

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.LANDING);
  const [language, setLanguage] = useState<Language>(Language.ENGLISH);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Assistant States
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [assistantMessages, setAssistantMessages] = useState<ChatMessage[]>([]);
  const [assistantInput, setAssistantInput] = useState('');
  const [assistantLoading, setAssistantLoading] = useState(false);

  // Assignment Generator States
  const [assignmentTopic, setAssignmentTopic] = useState('');
  const [assignmentGrade, setAssignmentGrade] = useState('8');
  const [assignmentContent, setAssignmentContent] = useState<string | null>(null);
  const [assignmentLoading, setAssignmentLoading] = useState(false);

  const handleGenerateAssignment = async () => {
    if (!assignmentTopic.trim()) return;
    setAssignmentLoading(true);
    try {
      const content = await generateAssignment(assignmentTopic, assignmentGrade);
      setAssignmentContent(content);
    } catch (error) {
      console.error(error);
      alert("Failed to generate assignment. Please try again.");
    } finally {
      setAssignmentLoading(false);
    }
  };

  // Planner States
  const [plannerClass, setPlannerClass] = useState<string | null>(null);
  const [plannerSubject, setPlannerSubject] = useState<Subject | null>(null);
  const [plannerChapter, setPlannerChapter] = useState<string | null>(null);
  const [lessonPlan, setLessonPlan] = useState<LessonPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Synthesizing...');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [translatedContent, setTranslatedContent] = useState<Record<string, string>>({});
  const [translationLoading, setTranslationLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      const messages = [
        'Connecting to AI Lab...',
        'Fetching grammar rules...',
        'Crafting interactive tasks...',
        'Optimizing for speed...',
        'Ready in a moment...'
      ];
      let i = 0;
      const interval = setInterval(() => {
        setLoadingMessage(messages[i % messages.length]);
        i++;
      }, 1200);
      return () => clearInterval(interval);
    } else {
      setLoadingMessage('Synthesizing...');
    }
  }, [loading]);
  
  // Grammar States
  const [grammarSubject, setGrammarSubject] = useState<'English' | 'Kannada'>('English');
  const [grammarTopic, setGrammarTopic] = useState('');
  const [grammarLevel, setGrammarLevel] = useState('Intermediate');
  const [grammarMode, setGrammarMode] = useState<'AI' | 'Local'>('AI');
  const [grammarGame, setGrammarGame] = useState<GrammarGame | null>(null);
  
  // Game Interaction States
  const [gameState, setGameState] = useState<{
    currentIdx: number, 
    score: number, 
    finished: boolean, 
    feedback: string | null, 
    selected: string | null,
    sortingItems: { text: string; category: string; sortedCategory: string | null }[],
    unscrambleSequence: string[],
    builtParts: string[],
    matchingSelectedWord: string | null,
    matchingSelectedImage: string | null,
    matchedPairs: string[],
    shuffledMatchImages: string[],
    isFlipped: boolean,
    spellingAttempt: string[],
    shuffledSpellingLetters: string[]
  }>({
    currentIdx: 0, score: 0, finished: false, feedback: null, selected: null, sortingItems: [], unscrambleSequence: [], builtParts: [],
    matchingSelectedWord: null,
    matchingSelectedImage: null,
    matchedPairs: [],
    shuffledMatchImages: [],
    isFlipped: false,
    spellingAttempt: [],
    shuffledSpellingLetters: []
  });

  const t = (key: string) => TRANSLATIONS[language][key] || key;

  const playTTS = async (text: string) => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    try {
      const base64Audio = await generateSpeech(text);
      if (base64Audio) {
        const audio = new Audio(`data:audio/mp3;base64,${base64Audio}`);
        audio.onended = () => setIsSpeaking(false);
        audio.play();
      } else {
        setIsSpeaking(false);
      }
    } catch (error) {
      console.error("TTS Error:", error);
      setIsSpeaking(false);
    }
  };

  const handleTranslate = async (text: string, key: string) => {
    if (translatedContent[key]) {
      // Toggle back if already translated? Or just show/hide?
      // Let's just store it and the UI can decide.
      return;
    }
    setTranslationLoading(true);
    try {
      const targetLang = language === Language.ENGLISH ? 'Kannada' : 'English';
      const translated = await translateText(text, targetLang);
      setTranslatedContent(prev => ({ ...prev, [key]: translated }));
    } catch (error) {
      console.error("Translation Error:", error);
    } finally {
      setTranslationLoading(false);
    }
  };

  const handleAssistantSend = async () => {
    if (!assistantInput.trim() || assistantLoading) return;
    const userMsg: ChatMessage = { role: 'user', text: assistantInput };
    setAssistantMessages(prev => [...prev, userMsg]);
    setAssistantInput('');
    setAssistantLoading(true);
    try {
      const response = await askClassroomAssistant(assistantInput, assistantMessages);
      setAssistantMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      console.error(error);
    } finally {
      setAssistantLoading(false);
    }
  };

  const savePlanOffline = (plan: LessonPlan) => {
    const saved = localStorage.getItem('offline_plans');
    const plans = saved ? JSON.parse(saved) : [];
    plans.push(plan);
    localStorage.setItem('offline_plans', JSON.stringify(plans));
    alert(t('offline.saved'));
  };

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    document.addEventListener('fullscreenchange', handleFsChange);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      document.removeEventListener('fullscreenchange', handleFsChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(e => {
        console.error(`Error attempting to enable full-screen mode: ${e.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleGeneratePlan = async (chapter: string) => {
    if (!plannerClass || !plannerSubject) return;
    setPlannerChapter(chapter);

    // Check for static content first
    const staticPlan = STATIC_LESSON_PLANS[plannerClass]?.[plannerSubject]?.[chapter];
    if (staticPlan) {
      setLessonPlan(staticPlan);
      return;
    }

    if (!isOnline) return;
    setLoading(true);
    try {
      const plan = await generateLessonPlan(plannerClass, chapter, plannerSubject);
      setLessonPlan(plan);
    } catch (error) { console.error(error); } 
    finally { setLoading(false); }
  };

  const resetPlanner = () => {
    setPlannerClass(null); setPlannerSubject(null); setPlannerChapter(null); setLessonPlan(null);
  };

  const handleLanguageLab = async (topicOverride?: string) => {
    const topicToUse = topicOverride || grammarTopic;
    if (!topicToUse) return;
    
    setLoading(true);
    try {
      let game: GrammarGame;
      if (grammarMode === 'Local' || !isOnline) {
        game = generateLocalGrammarActivity(grammarSubject, topicToUse, grammarLevel);
      } else {
        game = await generateGrammarActivity(grammarSubject, topicToUse, grammarLevel);
      }
      
      console.log("Generated Game:", game);
      setGrammarGame(game);
      setGameState({ 
        currentIdx: 0, 
        score: 0, 
        finished: false, 
        feedback: null, 
        selected: null,
        sortingItems: (game.sortingTask && game.sortingTask.items) ? game.sortingTask.items.map(it => ({ ...it, sortedCategory: null })) : [],
        unscrambleSequence: [],
        builtParts: [],
        matchingSelectedWord: null,
        matchingSelectedImage: null,
        matchedPairs: [],
        shuffledMatchImages: (game.matchingTask && game.matchingTask.pairs) ? [...game.matchingTask.pairs.map(p => p.imageUrl)].sort(() => Math.random() - 0.5) : [],
        isFlipped: false,
        spellingAttempt: [],
        shuffledSpellingLetters: (game.type === ActivityType.SPELLING && game.spellingTask && game.spellingTask[0]) ? [...game.spellingTask[0].scrambledLetters].sort(() => Math.random() - 0.5) : []
      });
    } catch (error) { 
      console.error(error);
      alert("The AI Lab is busy or took too long. Please try a different topic or try again in a moment.");
    } 
    finally { setLoading(false); }
  };

  const handleQuizAnswer = (option: string) => {
    if (gameState.feedback || !grammarGame) return;
    
    let correctAnswer = '';
    let explanation = '';
    
    if (grammarGame.type === ActivityType.QUIZ && grammarGame.questions) {
      correctAnswer = grammarGame.questions[gameState.currentIdx].correctAnswer;
      explanation = grammarGame.questions[gameState.currentIdx].explanation || '';
    } else if (grammarGame.type === ActivityType.READING_COMPREHENSION && grammarGame.readingComprehensionTask) {
      correctAnswer = grammarGame.readingComprehensionTask.questions[gameState.currentIdx].correctAnswer;
      explanation = grammarGame.readingComprehensionTask.questions[gameState.currentIdx].explanation || '';
    } else {
      return;
    }

    const isCorrect = option === correctAnswer;
    setGameState(prev => ({
      ...prev,
      selected: option,
      score: isCorrect ? prev.score + 1 : prev.score,
      feedback: isCorrect ? '✅ Correct!' : `❌ Incorrect. ${explanation}`
    }));
  };

  const handleSortingMove = (itemIdx: number, category: string | null) => {
    if (gameState.feedback && gameState.finished) return;
    const newItems = [...gameState.sortingItems];
    newItems[itemIdx].sortedCategory = category;
    setGameState(prev => ({ ...prev, sortingItems: newItems }));
  };

  const checkSorting = () => {
    const correctCount = gameState.sortingItems.filter(it => it.category === it.sortedCategory).length;
    setGameState(prev => ({
      ...prev,
      score: correctCount,
      finished: true,
      feedback: `Activity Completed! You sorted ${correctCount} out of ${gameState.sortingItems.length} correctly.`
    }));
  };

  const handleFillInBlanks = (option: string) => {
    if (gameState.feedback || !grammarGame || !grammarGame.fillInBlanksTask) return;
    const task = grammarGame.fillInBlanksTask[gameState.currentIdx];
    const isCorrect = task.correctAnswers.includes(option);
    setGameState(prev => ({
      ...prev,
      selected: option,
      score: isCorrect ? prev.score + 1 : prev.score,
      feedback: isCorrect ? '✅ Correct!' : `❌ Incorrect. ${task.explanation || ''}`
    }));
  };

  const handleDialogueChoice = (option: string) => {
    if (gameState.feedback || !grammarGame || !grammarGame.dialogueTask) return;
    const turn = grammarGame.dialogueTask.turns[gameState.currentIdx];
    const isCorrect = option === turn.correctOption;
    setGameState(prev => ({
      ...prev,
      selected: option,
      score: isCorrect ? prev.score + 1 : prev.score,
      feedback: isCorrect ? '✅ Correct!' : `❌ Incorrect. ${turn.explanation || ''}`
    }));
  };

  const handleOddOneOut = (item: string) => {
    if (gameState.feedback || !grammarGame || !grammarGame.oddOneOutTask) return;
    const isCorrect = item === grammarGame.oddOneOutTask.correctAnswer;
    setGameState(prev => ({
      ...prev,
      selected: item,
      score: isCorrect ? 1 : 0,
      finished: true,
      feedback: isCorrect ? '✅ Correct! You found the odd one out.' : `❌ Incorrect. The odd one was: ${grammarGame.oddOneOutTask?.correctAnswer}`
    }));
  };

  const handleTrueFalse = (choice: boolean) => {
    if (gameState.feedback || !grammarGame || !grammarGame.trueFalseTask) return;
    const task = grammarGame.trueFalseTask[gameState.currentIdx];
    const isCorrect = choice === task.isTrue;
    setGameState(prev => ({
      ...prev,
      selected: choice ? 'True' : 'False',
      score: isCorrect ? prev.score + 1 : prev.score,
      feedback: isCorrect ? '✅ Correct!' : `❌ Incorrect. ${task.explanation || ''}`
    }));
  };

  const handleUnscrambleClick = (word: string) => {
    if (gameState.unscrambleSequence.includes(word)) {
      setGameState(prev => ({ ...prev, unscrambleSequence: prev.unscrambleSequence.filter(w => w !== word) }));
    } else {
      setGameState(prev => ({ ...prev, unscrambleSequence: [...prev.unscrambleSequence, word] }));
    }
  };

  const checkUnscramble = () => {
    if (!grammarGame?.unscrambleTask) return;
    const attempt = gameState.unscrambleSequence.join(' ');
    const isCorrect = attempt === grammarGame.unscrambleTask.correctSentence;
    setGameState(prev => ({
      ...prev,
      score: isCorrect ? 5 : 0,
      finished: true,
      feedback: isCorrect ? "✅ Perfectly Structured!" : `❌ Not quite. Correct: ${grammarGame.unscrambleTask?.correctSentence}`
    }));
  };

  const handleWordPartClick = (partText: string) => {
    if (gameState.feedback) return;
    const task = grammarGame?.wordBuildingTask?.[gameState.currentIdx];
    if (!task) return;
    
    const partObj = task.parts.find(p => p.text === partText);
    if (!partObj) return;

    if (partObj.isCorrect) {
      const fullWord = partObj.type === 'prefix' ? partObj.text + task.rootWord : task.rootWord + partObj.text;
      setGameState(prev => ({
        ...prev,
        score: prev.score + 1,
        feedback: `✅ Correct! "${fullWord}" - ${task.definition}`
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        feedback: `❌ Incorrect part for "${task.rootWord}". Try again!`
      }));
      setTimeout(() => setGameState(p => ({...p, feedback: null})), 1500);
    }
  };

  const handleMatchSelection = (type: 'word' | 'image', value: string) => {
    if (gameState.feedback || gameState.finished) return;
    
    setGameState(prev => {
      const nextState = { ...prev };
      if (type === 'word') {
        nextState.matchingSelectedWord = value;
      } else {
        nextState.matchingSelectedImage = value;
      }

      if (nextState.matchingSelectedWord && nextState.matchingSelectedImage) {
        const pair = grammarGame?.matchingTask?.pairs.find(p => p.word === nextState.matchingSelectedWord);
        if (pair && pair.imageUrl === nextState.matchingSelectedImage) {
          nextState.matchedPairs = [...nextState.matchedPairs, nextState.matchingSelectedWord];
          nextState.score += 1;
          nextState.feedback = `✅ Correct Match: ${nextState.matchingSelectedWord}`;
          nextState.matchingSelectedWord = null;
          nextState.matchingSelectedImage = null;
          
          if (nextState.matchedPairs.length === (grammarGame?.matchingTask?.pairs.length || 0)) {
            nextState.finished = true;
          } else {
            setTimeout(() => setGameState(p => ({ ...p, feedback: null })), 1000);
          }
        } else {
          nextState.feedback = `❌ Try again!`;
          nextState.matchingSelectedWord = null;
          nextState.matchingSelectedImage = null;
          setTimeout(() => setGameState(p => ({ ...p, feedback: null })), 1000);
        }
      }
      return nextState;
    });
  };

  const handleFlashcardFlip = () => {
    setGameState(prev => ({ ...prev, isFlipped: !prev.isFlipped }));
  };

  const handleSpellingLetterClick = (letter: string, index: number) => {
    if (gameState.feedback) return;
    setGameState(prev => ({
      ...prev,
      spellingAttempt: [...prev.spellingAttempt, letter]
    }));
  };

  const clearSpelling = () => {
    setGameState(prev => ({ ...prev, spellingAttempt: [] }));
  };

  const checkSpelling = () => {
    const task = grammarGame?.spellingTask?.[gameState.currentIdx];
    if (!task) return;
    const attempt = gameState.spellingAttempt.join('');
    if (attempt.toLowerCase() === task.word.toLowerCase()) {
      setGameState(prev => ({
        ...prev,
        score: prev.score + 1,
        feedback: `✅ Correct! ${task.word}: ${task.definition}`
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        feedback: `❌ Incorrect. The correct spelling is ${task.word}.`
      }));
    }
  };

  const nextQuestion = () => {
    if (!grammarGame) return;
    
    let maxIdx = 0;
    if (grammarGame.type === ActivityType.QUIZ) {
      maxIdx = (grammarGame.questions?.length || 0) - 1;
    } else if (grammarGame.type === ActivityType.WORD_BUILDING) {
      maxIdx = (grammarGame.wordBuildingTask?.length || 0) - 1;
    } else if (grammarGame.type === ActivityType.FILL_IN_THE_BLANKS) {
      maxIdx = (grammarGame.fillInBlanksTask?.length || 0) - 1;
    } else if (grammarGame.type === ActivityType.DIALOGUE) {
      maxIdx = (grammarGame.dialogueTask?.turns.length || 0) - 1;
    } else if (grammarGame.type === ActivityType.TRUE_FALSE) {
      maxIdx = (grammarGame.trueFalseTask?.length || 0) - 1;
    } else if (grammarGame.type === ActivityType.FLASHCARDS) {
      maxIdx = (grammarGame.flashcards?.length || 0) - 1;
    } else if (grammarGame.type === ActivityType.SPELLING) {
      maxIdx = (grammarGame.spellingTask?.length || 0) - 1;
    } else if (grammarGame.type === ActivityType.READING_COMPREHENSION) {
      maxIdx = (grammarGame.readingComprehensionTask?.questions.length || 0) - 1;
    } else {
      // For single-screen activities like SORTING, UNSCRAMBLE, MATCHING
      setGameState(prev => ({ ...prev, finished: true }));
      return;
    }

    if (gameState.currentIdx < maxIdx) {
      setGameState(prev => ({ 
        ...prev, 
        currentIdx: prev.currentIdx + 1, 
        feedback: null, 
        selected: null, 
        builtParts: [],
        isFlipped: false,
        spellingAttempt: [],
        shuffledSpellingLetters: grammarGame.type === ActivityType.SPELLING && grammarGame.spellingTask ? [...grammarGame.spellingTask[prev.currentIdx + 1].scrambledLetters].sort(() => Math.random() - 0.5) : []
      }));
    } else {
      setGameState(prev => ({ ...prev, finished: true }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F1F5F9] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      {view === AppView.LANDING ? (
        <div className="fixed inset-0 z-[100] bg-[#0F172A] flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden py-12">
          {/* Background Decorative Elements */}
          <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse pointer-events-none"></div>
          <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse delay-700 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-5xl mx-auto">
            {/* Logo Section */}
            <div className="mb-12 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-600 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-600 rounded-[2.5rem] flex items-center justify-center font-black text-6xl md:text-7xl text-white shadow-2xl transform hover:rotate-6 transition-transform duration-500 cursor-default">
                G
              </div>
              <div className="mt-6">
                <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase">Government Teaching</h1>
              </div>
            </div>

            {/* Tagline */}
            <div className="space-y-4 mb-12">
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tight leading-[0.9] animate-in fade-in slide-in-from-bottom-4 duration-700">
                {language === Language.ENGLISH ? (
                  <>LEARN <span className="text-blue-500">SMARTER</span><br />
                  <span className="text-slate-400">ACHIEVE</span> GREATER</>
                ) : (
                  <>ಹೆಚ್ಚು <span className="text-blue-500">ಬುದ್ಧಿವಂತಿಕೆಯಿಂದ</span> ಕಲಿಯಿರಿ<br />
                  <span className="text-slate-400">ಉನ್ನತ</span> ಸಾಧನೆ ಮಾಡಿ</>
                )}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm md:text-xl font-medium tracking-wide uppercase opacity-60 animate-in fade-in duration-1000 delay-300">
                {t('landing.subtitle')}
              </p>
            </div>

            {/* Enter Button */}
            <button 
              onClick={() => setView(AppView.DASHBOARD)}
              className="group relative px-12 py-5 bg-white text-[#0F172A] font-black text-lg md:text-xl rounded-2xl shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] hover:bg-blue-50 transition-all duration-300 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                {t('landing.get_started').toUpperCase()}
                <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>

            {/* Footer Info */}
            <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-8 opacity-30">
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Virtual Labs</span>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">AI Planner</span>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Language Quest</span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <aside className="w-full md:w-80 bg-[#0F172A] text-white p-6 flex flex-col gap-8 flex-shrink-0 shadow-[10px_0_40px_rgba(0,0,0,0.1)] z-30">
        <div className="flex items-center gap-4 px-2">
          <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center font-black text-2xl shadow-xl transform hover:rotate-6 transition-transform">E</div>
          <h1 className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">E-Teaching</h1>
        </div>

        {!isOnline && (
          <div className="mx-2 p-3 bg-amber-500/20 border border-amber-500/50 rounded-xl flex items-center gap-3 animate-pulse">
            <span className="text-lg">📡</span>
            <div>
              <p className="text-[9px] font-black uppercase text-amber-500 tracking-widest">Offline Mode</p>
              <p className="text-[8px] font-bold text-slate-300">AI Features Disabled</p>
            </div>
          </div>
        )}

        <nav className="flex flex-col gap-2">
          <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1 px-3">Navigation</p>
          {[
            { id: AppView.DASHBOARD, label: t('nav.dashboard'), icon: '🏠' },
            { id: AppView.VIRTUAL_LAB, label: t('nav.virtual_lab'), icon: '🚀' },
            { id: AppView.PLAY_LAB, label: t('nav.chemistry_lab'), icon: '⚗️' },
            { id: AppView.LANGUAGE_LAB, label: t('nav.language_lab'), icon: '🎮' },
            { id: AppView.LESSON_PLANNER, label: t('nav.lesson_planner'), icon: '📑' },
            { id: AppView.RESOURCES, label: t('nav.resources'), icon: '📚' },
          ].map((item) => (
            <button key={item.id} onClick={() => { setView(item.id); if (item.id === AppView.LESSON_PLANNER) resetPlanner(); }}
              className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 group relative ${view === item.id ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-800/80 hover:text-white'}`}>
              <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="font-bold text-sm">{item.label}</span>
              {view === item.id && <span className="absolute right-4 w-1.5 h-1.5 bg-white rounded-full"></span>}
            </button>
          ))}
          <div className="mt-4 border-t border-slate-800 pt-4 flex flex-col gap-2">
            <div className="flex bg-slate-800 p-1 rounded-xl mx-2">
              <button onClick={() => setLanguage(Language.ENGLISH)} className={`flex-1 py-1.5 rounded-lg text-[10px] font-black transition-all ${language === Language.ENGLISH ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>ENG</button>
              <button onClick={() => setLanguage(Language.KANNADA)} className={`flex-1 py-1.5 rounded-lg text-[10px] font-black transition-all ${language === Language.KANNADA ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>ಕನ್ನಡ</button>
            </div>
            <button onClick={toggleFullscreen} className="w-full flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 text-slate-400 hover:bg-slate-800/80 hover:text-white group">
              <span className="text-xl group-hover:scale-110 transition-transform">{isFullscreen ? '⤬' : '⛶'}</span>
              <span className="font-bold text-sm">{isFullscreen ? 'Exit' : 'Full Screen'}</span>
            </button>
          </div>
        </nav>
          </aside>

          <main className="flex-1 overflow-y-auto relative scroll-smooth bg-white md:bg-transparent h-screen">
        {loading && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-[3rem] shadow-2xl flex flex-col items-center gap-6 max-w-xs text-center animate-in zoom-in-95 duration-300">
              <div className="relative">
                <div className="w-20 h-20 border-[5px] border-blue-600/10 border-t-blue-600 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center font-black text-blue-600 text-xs">AI</div>
              </div>
              <div className="space-y-2">
                <p className="font-black text-slate-900 text-xl tracking-tight">{loadingMessage}</p>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest animate-pulse">Please wait a moment</p>
              </div>
            </div>
          </div>
        )}

        <div className="p-4 md:p-8 h-full flex flex-col">
          {view === AppView.DASHBOARD && (
            <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col pb-20">
              {/* COMPACT HERO */}
              <div className="relative h-[300px] md:h-[400px] w-full mb-8 rounded-3xl overflow-hidden shadow-2xl group shrink-0">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000" alt="Modern Classroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s]" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-center px-8 md:px-16">
                  <div className="space-y-4 max-w-2xl">
                    <span className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">KSEAB Interactive Education</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">Empowering <span className="text-blue-400">Future</span> Minds.</h2>
                    <p className="text-slate-200 font-medium text-sm md:text-lg leading-relaxed max-w-lg">Interactive simulations and AI-powered tools for Grade 6-10 educators and students in Karnataka.</p>
                    <div className="flex gap-4 pt-4">
                       <button onClick={() => setView(AppView.VIRTUAL_LAB)} className="px-8 py-4 bg-white text-slate-900 font-black text-sm rounded-2xl shadow-xl hover:bg-blue-50 transition-all active:scale-95">Explore Labs</button>
                       <button onClick={() => setView(AppView.LESSON_PLANNER)} className="px-8 py-4 bg-blue-600 text-white font-black text-sm rounded-2xl shadow-xl hover:bg-blue-500 transition-all active:scale-95">Plan a Lesson</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* COMPACT GRID */}
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-6 px-2">Learning Suites</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { v: AppView.VIRTUAL_LAB, l: 'Science Lab', d: 'Physics & Math simulations.', i: '🚀', img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600' },
                    { v: AppView.PLAY_LAB, l: 'Chemistry Lab', d: 'Interactive reactor bench.', i: '⚗️', img: 'https://images.unsplash.com/photo-1532187863486-abf51ad6574c?auto=format&fit=crop&q=80&w=600' },
                    { v: AppView.LANGUAGE_LAB, l: 'Grammar Quest', d: 'AI language challenges.', i: '🎮', img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600', onlineOnly: true },
                    { v: AppView.LESSON_PLANNER, l: 'AI Planner', d: 'Automated roadmaps.', i: '📑', img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=600', onlineOnly: true },
                    { v: AppView.ASSIGNMENT_GENERATOR, l: 'Assignment Gen', d: 'PDF Worksheets.', i: '📝', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600', onlineOnly: true }
                  ].map(card => (
                    <button key={card.v} onClick={() => setView(card.v)} className={`group relative h-full min-h-[180px] bg-slate-900 rounded-3xl shadow-sm hover:shadow-xl transition-all text-left overflow-hidden ${card.onlineOnly && !isOnline ? 'grayscale opacity-60 cursor-not-allowed' : ''}`}>
                      <img src={card.img} alt={card.l} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent p-6 flex flex-col justify-end">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3 bg-white shadow-lg">{card.i}</div>
                        <h3 className="text-lg font-black text-white mb-1 leading-tight">{card.l}</h3>
                        <p className="text-slate-300 font-medium text-[11px] leading-tight opacity-80">{card.d}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {view === AppView.VIRTUAL_LAB && (
             <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
               <h2 className="text-4xl font-black text-slate-900 tracking-tight">{t('lab.title')}</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <PythagorasLab />
                 <AlgebraVisualizer />
                 <MathSolver />
                 <HistoryMap />
                 <ACGeneratorLab />
                 <InterferenceLab />
                 <PhotoelectricLab />
                 <RadioactiveDecayLab />
                 <PulleyLab />
                 <GravityLab />
                 <DensityColumnLab />
                 <HookesLawLab />
                 <InclinedPlaneLab />
                 <DopplerLab />
                 <CircularMotionLab />
                 <ProjectileLauncher />
                 <LeverLab />
                 <OhmsLawLab />
                 <RefractionLab />
                 <ArchimedesLab />
                 <WaveMachine />
                 <PendulumLab />
                 <InductionLab />
                 <ThermalConductivityLab />
                 <StatesOfMatter />
                 <FractionExplorer />
                 <PrimeSieve />
                 <AngleProtractor />
               </div>
             </div>
          )}

          {view === AppView.PLAY_LAB && <PlayChemicalsLab />}

          {view === AppView.LESSON_PLANNER && (
            <div className="max-w-6xl mx-auto animate-in fade-in duration-500 pb-32">
              <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                <div className="space-y-1 text-center md:text-left">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                    {lessonPlan && STATIC_LESSON_PLANS[plannerClass!]?.[plannerSubject!]?.[plannerChapter!] ? 'Verified Lesson Plan' : 'AI Lesson Planner'}
                  </h2>
                  <p className="text-slate-500 font-medium text-sm">
                    {lessonPlan && STATIC_LESSON_PLANS[plannerClass!]?.[plannerSubject!]?.[plannerChapter!] 
                      ? 'Official KSEAB curriculum content.' 
                      : 'Generate KSEAB roadmaps for any chapter.'}
                  </p>
                </div>
                    {lessonPlan && (
                      <div className="flex gap-2">
                        <button onClick={() => savePlanOffline(lessonPlan)} className="px-6 py-2 bg-emerald-600 text-white font-black rounded-lg hover:bg-emerald-500 transition-all text-xs flex items-center gap-2">
                          <span>💾</span> {t('offline.save')}
                        </button>
                        <button onClick={() => window.print()} className="px-6 py-2 bg-white border-2 border-slate-200 text-slate-700 font-black rounded-lg hover:bg-slate-50 transition-all text-xs flex items-center gap-2">
                          <span>🖨️</span> Print Plan
                        </button>
                        <button onClick={resetPlanner} className="px-6 py-2 bg-slate-900 text-white font-black rounded-lg hover:bg-slate-800 transition-all text-xs">New Plan</button>
                      </div>
                    )}
              </div>

              {!lessonPlan ? (
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-2">1. Class</p>
                    <div className="grid gap-2">
                      {CLASSES.map(cls => (
                        <button key={cls} onClick={() => { setPlannerClass(cls); setPlannerSubject(null); setPlannerChapter(null); }} className={`p-4 rounded-2xl border-2 text-left transition-all ${plannerClass === cls ? 'border-blue-600 bg-blue-50' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
                          <p className="font-bold text-sm text-slate-800">{cls}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className={`space-y-3 transition-all ${!plannerClass ? 'opacity-20 pointer-events-none' : ''}`}>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-2">2. Subject</p>
                    <div className="grid gap-2">
                      {plannerClass && SUBJECTS.map(sub => (
                        <button key={sub} onClick={() => { setPlannerSubject(sub); setPlannerChapter(null); }} className={`p-4 rounded-2xl border-2 text-left transition-all ${plannerSubject === sub ? 'border-blue-600 bg-blue-50' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
                          <p className="font-bold text-sm text-slate-800">{sub}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className={`space-y-3 transition-all ${!plannerSubject ? 'opacity-20 pointer-events-none' : ''}`}>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-2">3. Chapter</p>
                    <div className="grid gap-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                      {plannerClass && plannerSubject && CHAPTER_DATA[plannerClass][plannerSubject]?.map(ch => (
                        <button key={ch} onClick={() => handleGeneratePlan(ch)} className="p-4 rounded-2xl border-2 border-slate-100 bg-white text-left hover:border-blue-400 hover:bg-blue-50 transition-all flex justify-between items-center group">
                          <p className="font-bold text-sm text-slate-800">{ch}</p>
                          {STATIC_LESSON_PLANS[plannerClass!]?.[plannerSubject!]?.[ch] && (
                            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[8px] font-black rounded-full uppercase tracking-tighter">Verified</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-500">
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                    <div className="relative z-10 space-y-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[8px] font-black uppercase tracking-widest">ROADMAP GENERATED</span>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tight">{lessonPlan.chapterName}</h3>
                      <p className="text-lg font-bold text-slate-500">{lessonPlan.className} • {plannerSubject}</p>
                      <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
                        <p className="text-xs font-bold text-blue-800 italic leading-relaxed">"{lessonPlan.summary}"</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-6">
                    {lessonPlan.topics.map((topic, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
                            <div className="flex items-center gap-4">
                               <div className="flex gap-1">
                                 <button onClick={() => playTTS(topic.title)} className="p-1.5 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors" title="Listen Title">
                                   <span className={isSpeaking ? 'animate-pulse' : ''}>🔊</span>
                                 </button>
                                 <button onClick={() => handleTranslate(topic.title, `topic_title_${idx}`)} className="p-1.5 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors" title="Translate Title">
                                   {translationLoading ? '⏳' : '🌐'}
                                 </button>
                               </div>
                               <h4 className="text-xl font-black text-slate-800">
                                 {translatedContent[`topic_title_${idx}`] || topic.title}
                               </h4>
                            </div>
                           <div className="flex gap-2">
                              <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${topic.priority === 'High' ? 'bg-red-50 text-red-600' : topic.priority === 'Medium' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'}`}>
                                {topic.priority} Priority
                              </span>
                              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[8px] font-black uppercase tracking-widest">{topic.explanationDepth}</span>
                           </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className={topic.model5E ? 'md:col-span-1' : 'md:col-span-2'}>
                            <div className="flex justify-between items-center mb-3 border-b pb-1">
                              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Teaching Points</p>
                              <div className="flex gap-1">
                                <button onClick={() => playTTS(topic.points.join('. '))} className="p-1 bg-slate-50 rounded hover:bg-blue-50 transition-colors">
                                  <span className="text-[10px]">🔊</span>
                                </button>
                                <button onClick={() => handleTranslate(topic.points.join('\n'), `topic_points_${idx}`)} className="p-1 bg-slate-50 rounded hover:bg-blue-50 transition-colors">
                                  <span className="text-[10px]">🌐</span>
                                </button>
                              </div>
                            </div>
                            <ul className="space-y-2">
                              {topic.points.map((p, i) => (
                                <li key={i} className="flex gap-3 text-xs font-medium text-slate-600 leading-relaxed">
                                  <span className="text-blue-500 font-black shrink-0">{i + 1}.</span> 
                                  <span>{translatedContent[`topic_points_${idx}`]?.split('\n')[i] || p}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {topic.model5E && (
                            <div className="space-y-4">
                              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 border-b pb-1">5E Teaching Model</p>
                              <div className="grid gap-2">
                                {[
                                  { label: 'Engage', val: topic.model5E.engage, color: 'bg-orange-50 text-orange-700 border-orange-100' },
                                  { label: 'Explore', val: topic.model5E.explore, color: 'bg-blue-50 text-blue-700 border-blue-100' },
                                  { label: 'Explain', val: topic.model5E.explain, color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
                                  { label: 'Elaborate', val: topic.model5E.elaborate, color: 'bg-violet-50 text-violet-700 border-violet-100' },
                                  { label: 'Evaluate', val: topic.model5E.evaluate, color: 'bg-slate-50 text-slate-700 border-slate-100' }
                                ].map(step => (
                                  <div key={step.label} className={`p-3 rounded-xl border ${step.color}`}>
                                    <p className="text-[8px] font-black uppercase tracking-widest mb-1">{step.label}</p>
                                    <p className="text-[11px] font-bold leading-relaxed">{step.val}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {topic.problems && (
                          <div className="mt-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                             <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-200 pb-1">Practice Problems</p>
                             <div className="grid md:grid-cols-2 gap-4">
                                {topic.problems.map((prob, i) => (
                                  <div key={i} className="flex gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-xs text-xs font-bold text-slate-700 leading-relaxed">
                                    <span className="text-slate-300 font-black shrink-0">{i+1}</span> {prob}
                                  </div>
                                ))}
                             </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {view === AppView.LANGUAGE_LAB && (
            <div className="max-w-5xl mx-auto animate-in fade-in duration-500 pb-32">
              <div className="text-center space-y-2 mb-10">
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">Grammar Quest</h2>
                <p className="text-slate-500 font-medium text-sm">Choose a topic from our library or define your own challenge.</p>
              </div>

              {!grammarGame ? (
                <div className="space-y-10">
                  <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col gap-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1 space-y-3">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-2">Language</label>
                        <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                          {['English', 'Kannada'].map(lang => (
                            <button key={lang} onClick={() => { setGrammarSubject(lang as 'English' | 'Kannada'); setGrammarTopic(''); }} className={`flex-1 py-3 rounded-xl font-black text-xs transition-all ${grammarSubject === lang ? 'bg-white shadow-md text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
                              {lang}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex-1 space-y-3">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-2">Difficulty Level</label>
                        <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                          {['Primary', 'Middle', 'High'].map(lvl => (
                            <button key={lvl} onClick={() => setGrammarLevel(lvl)} className={`flex-1 py-3 rounded-xl font-black text-[10px] transition-all ${grammarLevel === lvl ? 'bg-white shadow-md text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
                              {lvl}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex-1 space-y-3">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-2">Lab Mode</label>
                        <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                          {[
                            { id: 'AI', label: 'AI Lab', icon: '✨' },
                            { id: 'Local', label: 'Local Lab', icon: '🏠' }
                          ].map(mode => (
                            <button key={mode.id} onClick={() => setGrammarMode(mode.id as 'AI' | 'Local')} className={`flex-1 py-3 rounded-xl font-black text-[10px] transition-all flex items-center justify-center gap-1 ${grammarMode === mode.id ? 'bg-white shadow-md text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
                              <span>{mode.icon}</span>
                              <span>{mode.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex-[2] space-y-3">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-2">Custom Focus Topic</label>
                        <input type="text" placeholder="Enter custom topic..." value={grammarTopic} onChange={(e) => setGrammarTopic(e.target.value)} className="w-full bg-slate-100 border-none rounded-xl py-4 px-6 text-base font-bold text-slate-700 shadow-inner focus:ring-2 focus:ring-blue-500 transition-all" />
                      </div>
                    </div>
                    <button onClick={() => handleLanguageLab()} disabled={!grammarTopic} className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-base shadow-xl hover:bg-blue-500 disabled:opacity-20 transition-all transform active:scale-95">Generate Custom Quest</button>
                  </div>

                  <div className="space-y-4">
                     <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">Topic Library</p>
                     <div className="flex flex-wrap justify-center gap-2">
                        {GRAMMAR_TOPICS[grammarSubject].map(topic => (
                          <button key={topic} onClick={() => handleLanguageLab(topic)} className="px-4 py-3 bg-white border border-slate-200 rounded-xl font-bold text-xs text-slate-700 hover:border-blue-600 hover:bg-blue-50 transition-all shadow-xs">
                            {topic}
                          </button>
                        ))}
                     </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 animate-in zoom-in-95 duration-500">
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                    <div className="flex justify-between items-center mb-4">
                       <div className="flex flex-col">
                         <span className="text-[8px] font-black text-blue-500 uppercase tracking-widest mb-1">{grammarGame.type.replace('_', ' ')}</span>
                         <h3 className="text-2xl font-black text-slate-900">{grammarGame.title}</h3>
                       </div>
                       {!gameState.finished && <button onClick={() => setGrammarGame(null)} className="text-slate-400 hover:text-red-500 font-bold transition-colors text-xs">Cancel</button>}
                    </div>
                    <p className="text-base font-bold text-slate-500 mb-6 border-l-4 border-blue-500 pl-4 leading-relaxed">{grammarGame.instructions}</p>
                    
                    {grammarGame.type === ActivityType.QUIZ && grammarGame.questions && grammarGame.questions[gameState.currentIdx] && !gameState.finished && (
                      <div className="space-y-8">
                        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                           <div className="flex justify-between items-start mb-2">
                             <p className="text-[8px] font-black text-blue-500 uppercase tracking-widest">Question {gameState.currentIdx + 1} of {grammarGame.questions.length}</p>
                             <div className="flex gap-2">
                               <button onClick={() => playTTS(grammarGame.questions![gameState.currentIdx].question)} className="p-2 bg-white rounded-lg shadow-sm hover:bg-blue-50 transition-colors" title="Listen">
                                 <span className={isSpeaking ? 'animate-pulse' : ''}>🔊</span>
                               </button>
                               <button onClick={() => handleTranslate(grammarGame.questions![gameState.currentIdx].question, `q_${gameState.currentIdx}`)} className="p-2 bg-white rounded-lg shadow-sm hover:bg-blue-50 transition-colors" title="Translate">
                                 {translationLoading ? '⏳' : '🌐'}
                               </button>
                             </div>
                           </div>
                           <h4 className="text-xl font-black text-slate-800 leading-snug">
                             {translatedContent[`q_${gameState.currentIdx}`] || grammarGame.questions[gameState.currentIdx].question}
                           </h4>
                           {translatedContent[`q_${gameState.currentIdx}`] && (
                             <p className="text-[10px] text-slate-400 mt-2 italic">Original: {grammarGame.questions[gameState.currentIdx].question}</p>
                           )}
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          {grammarGame.questions[gameState.currentIdx].options && grammarGame.questions[gameState.currentIdx].options.map(opt => (
                            <button key={opt} onClick={() => handleQuizAnswer(opt)} className={`p-5 rounded-xl border-2 text-left font-bold text-sm transition-all transform active:scale-[0.98] ${gameState.selected === opt ? (opt === grammarGame.questions![gameState.currentIdx].correctAnswer ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-red-500 bg-red-50 text-red-800') : 'border-slate-100 bg-white hover:border-slate-200'}`}>
                              {opt}
                            </button>
                          ))}
                        </div>
                        {gameState.feedback && (
                          <div className={`p-6 rounded-2xl animate-in slide-in-from-top-2 duration-300 ${gameState.selected === grammarGame.questions[gameState.currentIdx].correctAnswer ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' : 'bg-red-50 text-red-800 border border-red-100'}`}>
                             <p className="font-black text-sm mb-2">{gameState.feedback}</p>
                             {gameState.selected !== grammarGame.questions[gameState.currentIdx].correctAnswer && (
                               <div className="mb-4 space-y-2">
                                 <p className="text-xs font-bold">Correct Answer: <span className="text-emerald-600">{grammarGame.questions[gameState.currentIdx].correctAnswer}</span></p>
                                 {grammarGame.questions[gameState.currentIdx].explanation && (
                                   <p className="text-[11px] leading-relaxed opacity-80 italic">Reason: {grammarGame.questions[gameState.currentIdx].explanation}</p>
                                 )}
                               </div>
                             )}
                             <button onClick={nextQuestion} className="mt-2 px-6 py-2 bg-slate-900 text-white rounded-lg font-black uppercase text-[9px] tracking-widest hover:bg-slate-800">Continue →</button>
                          </div>
                        )}
                      </div>
                    )}

                    {grammarGame.type === ActivityType.SORTING && grammarGame.sortingTask && grammarGame.sortingTask.categories && !gameState.finished && (
                      <div className="space-y-8">
                         <div className="flex flex-wrap gap-2 p-6 bg-slate-50 rounded-[2rem] border border-slate-200 shadow-inner min-h-[120px] items-center justify-center">
                            {gameState.sortingItems && gameState.sortingItems.map((it, idx) => !it.sortedCategory && (
                              <div key={idx} className="p-3 bg-white rounded-xl border border-slate-100 shadow-xs flex flex-col items-center gap-2 animate-in zoom-in-95">
                                <span className="text-sm font-black text-slate-800">{it.text}</span>
                                <div className="flex gap-1">
                                   {grammarGame.sortingTask!.categories.map(cat => (
                                     <button key={cat} onClick={() => handleSortingMove(idx, cat)} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-[8px] font-black uppercase hover:bg-blue-600 hover:text-white transition-all">To {cat}</button>
                                   ))}
                                </div>
                              </div>
                            ))}
                            {gameState.sortingItems && gameState.sortingItems.every(it => it.sortedCategory) && (
                              <button onClick={checkSorting} className="px-10 py-4 bg-blue-600 text-white rounded-xl font-black text-base shadow-lg animate-bounce">Verify Groups</button>
                            )}
                         </div>
                         <div className="grid md:grid-cols-2 gap-6">
                            {grammarGame.sortingTask.categories.map(cat => (
                              <div key={cat} className="p-6 bg-slate-100/50 rounded-3xl border-2 border-dashed border-slate-300 flex flex-col items-center min-h-[250px]">
                                 <h5 className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-4">{cat} Bucket</h5>
                                 <div className="w-full space-y-2">
                                    {gameState.sortingItems && gameState.sortingItems.filter(it => it.sortedCategory === cat).map((it, i) => (
                                      <div key={i} className="w-full p-3 bg-white rounded-xl border border-slate-200 shadow-xs flex justify-between items-center group">
                                         <span className="font-bold text-xs text-slate-700">{it.text}</span>
                                         <button onClick={() => handleSortingMove(gameState.sortingItems.indexOf(it), null)} className="text-[8px] text-slate-300 hover:text-red-500 font-black">UNDO</button>
                                      </div>
                                    ))}
                                 </div>
                              </div>
                            ))}
                         </div>
                      </div>
                    )}

                    {grammarGame.type === ActivityType.UNSCRAMBLE && grammarGame.unscrambleTask && !gameState.finished && (
                      <div className="space-y-8">
                         <div className="p-8 bg-blue-50 rounded-3xl border-2 border-dashed border-blue-200 text-center">
                            <p className="text-[8px] font-black text-blue-400 uppercase mb-4 tracking-widest">Constructed Sentence</p>
                            <div className="flex flex-wrap justify-center gap-2 min-h-[2rem]">
                               {gameState.unscrambleSequence.map((word, i) => (
                                 <button key={i} onClick={() => handleUnscrambleClick(word)} className="px-4 py-2 bg-white text-slate-900 rounded-xl font-black text-base shadow-sm border border-blue-100 hover:border-red-400 hover:bg-red-50 transition-all">{word}</button>
                               ))}
                            </div>
                         </div>
                         <div className="space-y-4">
                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest text-center">Available Components</p>
                            <div className="flex flex-wrap justify-center gap-2">
                               {grammarGame.unscrambleTask.scrambledWords.filter(w => !gameState.unscrambleSequence.includes(w)).map((word, i) => (
                                 <button key={i} onClick={() => handleUnscrambleClick(word)} className="px-5 py-3 bg-slate-900 text-white rounded-xl font-black text-sm shadow-md hover:scale-105 active:scale-95 transition-all">{word}</button>
                               ))}
                            </div>
                         </div>
                         <div className="flex justify-center pt-4">
                            <button onClick={checkUnscramble} className="px-12 py-4 bg-emerald-600 text-white rounded-xl font-black text-lg shadow-lg hover:bg-emerald-500 transform active:scale-95">Verify</button>
                         </div>
                         <div className="p-4 bg-slate-50 rounded-xl text-center border border-slate-200">
                            <p className="text-xs font-bold text-slate-500 italic">Clue: {grammarGame.unscrambleTask.clue}</p>
                         </div>
                      </div>
                    )}

                     {grammarGame.type === ActivityType.WORD_BUILDING && grammarGame.wordBuildingTask && grammarGame.wordBuildingTask[gameState.currentIdx] && !gameState.finished && (
                      <div className="space-y-8">
                         <div className="p-10 bg-indigo-50 rounded-[3rem] border-4 border-indigo-100 text-center relative overflow-hidden">
                            <p className="text-[8px] font-black text-indigo-400 uppercase mb-4 tracking-widest">Root Word Challenge</p>
                            <h4 className="text-5xl font-black text-indigo-900 tracking-tight mb-2">{grammarGame.wordBuildingTask[gameState.currentIdx].rootWord}</h4>
                            <p className="text-sm font-bold text-indigo-600/60 uppercase tracking-widest">Build a new word</p>
                         </div>
                         
                         <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                               <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest px-4">Available Affixes</p>
                               <div className="flex flex-wrap gap-3">
                                  {grammarGame.wordBuildingTask[gameState.currentIdx].parts && grammarGame.wordBuildingTask[gameState.currentIdx].parts.map((part, i) => (
                                    <button key={i} onClick={() => handleWordPartClick(part.text)} className="flex-1 min-w-[100px] p-4 bg-white border border-slate-100 rounded-2xl shadow-xs hover:border-indigo-600 hover:shadow-md transition-all group">
                                       <span className="text-[7px] font-black text-slate-400 uppercase block mb-1">{part.type}</span>
                                       <span className="text-xl font-black text-slate-800 group-hover:text-indigo-600">{part.type === 'prefix' ? part.text + '-' : '-' + part.text}</span>
                                    </button>
                                  ))}
                               </div>
                            </div>
                            <div className="flex items-center justify-center">
                               {gameState.feedback ? (
                                 <div className="p-8 bg-emerald-50 border-2 border-emerald-100 rounded-3xl text-center w-full animate-in zoom-in-95">
                                    <p className="font-black text-emerald-800 text-base leading-relaxed">{gameState.feedback}</p>
                                    <button onClick={nextQuestion} className="mt-4 px-8 py-2 bg-emerald-600 text-white rounded-lg font-black uppercase text-[9px] tracking-widest shadow-md">Next →</button>
                                 </div>
                               ) : (
                                 <div className="p-8 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl text-center w-full">
                                    <p className="text-slate-400 font-bold italic text-sm">Select an affix...</p>
                                 </div>
                               )}
                            </div>
                         </div>
                      </div>
                    )}

                    {grammarGame.type === ActivityType.MATCHING && grammarGame.matchingTask && grammarGame.matchingTask.pairs && !gameState.finished && (
                      <div className="space-y-8">
                        <div className="grid grid-cols-2 gap-8">
                          {/* Words Column */}
                          <div className="space-y-3">
                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest px-4">Words</p>
                            <div className="flex flex-col gap-3">
                              {grammarGame.matchingTask.pairs.map((pair, i) => (
                                <button
                                  key={i}
                                  disabled={gameState.matchedPairs.includes(pair.word)}
                                  onClick={() => handleMatchSelection('word', pair.word)}
                                  className={`p-4 rounded-2xl border-2 font-black text-sm transition-all text-center ${
                                    gameState.matchedPairs.includes(pair.word)
                                      ? 'bg-emerald-100 border-emerald-500 text-emerald-700 opacity-50'
                                      : gameState.matchingSelectedWord === pair.word
                                      ? 'bg-blue-600 border-blue-600 text-white shadow-lg scale-105'
                                      : 'bg-white border-slate-100 text-slate-800 hover:border-blue-400'
                                  }`}
                                >
                                  {pair.word}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Images Column */}
                          <div className="space-y-3">
                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest px-4">Images</p>
                            <div className="grid grid-cols-2 gap-3">
                              {gameState.shuffledMatchImages.map((imgUrl, i) => {
                                const isMatched = grammarGame.matchingTask?.pairs.some(p => p.imageUrl === imgUrl && gameState.matchedPairs.includes(p.word));
                                return (
                                  <button
                                    key={i}
                                    disabled={isMatched}
                                    onClick={() => handleMatchSelection('image', imgUrl)}
                                    className={`relative aspect-square rounded-2xl border-2 overflow-hidden transition-all ${
                                      isMatched
                                        ? 'border-emerald-500 opacity-50'
                                        : gameState.matchingSelectedImage === imgUrl
                                        ? 'border-blue-600 shadow-lg scale-105 ring-4 ring-blue-600/20'
                                        : 'border-slate-100 hover:border-blue-400'
                                    }`}
                                  >
                                    <img src={imgUrl} alt="Match" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                    {isMatched && (
                                      <div className="absolute inset-0 bg-emerald-500/20 flex items-center justify-center">
                                        <span className="text-2xl">✅</span>
                                      </div>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {gameState.feedback && (
                          <div className={`p-4 rounded-2xl text-center font-black text-sm animate-in slide-in-from-bottom-2 ${gameState.feedback.includes('✅') ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' : 'bg-red-50 text-red-800 border border-red-100'}`}>
                            {gameState.feedback}
                          </div>
                        )}
                      </div>
                    )}

                    {grammarGame.type === ActivityType.FILL_IN_THE_BLANKS && grammarGame.fillInBlanksTask && grammarGame.fillInBlanksTask[gameState.currentIdx] && !gameState.finished && (
                      <div className="space-y-8">
                        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                          <p className="text-[8px] font-black text-blue-500 uppercase tracking-widest mb-4">Complete the Sentence</p>
                          <h4 className="text-2xl font-black text-slate-800 leading-relaxed">
                            {grammarGame.fillInBlanksTask[gameState.currentIdx].sentence && grammarGame.fillInBlanksTask[gameState.currentIdx].sentence.split('[BLANK]').map((part, i, arr) => (
                              <React.Fragment key={i}>
                                {part}
                                {i < arr.length - 1 && (
                                  <span className={`inline-block min-w-[100px] border-b-4 mx-2 px-2 ${gameState.selected ? 'text-blue-600 border-blue-600' : 'border-slate-300 text-transparent'}`}>
                                    {gameState.selected || '________'}
                                  </span>
                                )}
                              </React.Fragment>
                            ))}
                          </h4>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {grammarGame.fillInBlanksTask[gameState.currentIdx].options && grammarGame.fillInBlanksTask[gameState.currentIdx].options.map(opt => (
                            <button key={opt} onClick={() => handleFillInBlanks(opt)} className={`p-5 rounded-xl border-2 text-center font-bold text-sm transition-all ${gameState.selected === opt ? (grammarGame.fillInBlanksTask![gameState.currentIdx].correctAnswers.includes(opt) ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-red-500 bg-red-50 text-red-800') : 'border-slate-100 bg-white hover:border-slate-200'}`}>
                              {opt}
                            </button>
                          ))}
                        </div>
                        {gameState.feedback && (
                          <div className={`p-6 rounded-2xl animate-in slide-in-from-top-2 duration-300 ${gameState.feedback.includes('✅') ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' : 'bg-red-50 text-red-800 border border-red-100'}`}>
                             <p className="font-black text-sm mb-2">{gameState.feedback}</p>
                             {!gameState.feedback.includes('✅') && (
                               <div className="mb-4 space-y-2">
                                 <p className="text-xs font-bold">Correct Answer: <span className="text-emerald-600">{grammarGame.fillInBlanksTask[gameState.currentIdx].correctAnswers.join(', ')}</span></p>
                                 {grammarGame.fillInBlanksTask[gameState.currentIdx].explanation && (
                                   <p className="text-[11px] leading-relaxed opacity-80 italic">Reason: {grammarGame.fillInBlanksTask[gameState.currentIdx].explanation}</p>
                                 )}
                               </div>
                             )}
                             <button onClick={nextQuestion} className="mt-2 px-6 py-2 bg-slate-900 text-white rounded-lg font-black uppercase text-[9px] tracking-widest hover:bg-slate-800">Continue →</button>
                          </div>
                        )}
                      </div>
                    )}

                    {grammarGame.type === ActivityType.READING_COMPREHENSION && grammarGame.readingComprehensionTask && !gameState.finished && (
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 h-full overflow-y-auto max-h-[500px]">
                            <div className="flex justify-between items-center mb-4">
                              <p className="text-[8px] font-black text-blue-500 uppercase tracking-widest">Passage</p>
                              <div className="flex gap-2">
                                <button onClick={() => playTTS(grammarGame.readingComprehensionTask!.passage)} className="p-2 bg-white rounded-lg shadow-sm hover:bg-blue-50 transition-colors">
                                  <span className={isSpeaking ? 'animate-pulse' : ''}>🔊</span>
                                </button>
                                <button onClick={() => handleTranslate(grammarGame.readingComprehensionTask!.passage, 'rc_passage')} className="p-2 bg-white rounded-lg shadow-sm hover:bg-blue-50 transition-colors">
                                  {translationLoading ? '⏳' : '🌐'}
                                </button>
                              </div>
                            </div>
                            <p className="text-base font-medium text-slate-700 leading-relaxed">
                              {translatedContent['rc_passage'] || grammarGame.readingComprehensionTask.passage}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-6">
                          <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                            <p className="text-[8px] font-black text-blue-500 uppercase tracking-widest mb-2">Question {gameState.currentIdx + 1} of {grammarGame.readingComprehensionTask.questions.length}</p>
                            <h4 className="text-lg font-black text-slate-800 mb-6">{grammarGame.readingComprehensionTask.questions[gameState.currentIdx].question}</h4>
                            <div className="grid gap-3">
                              {grammarGame.readingComprehensionTask.questions[gameState.currentIdx].options.map(opt => (
                                <button key={opt} onClick={() => handleQuizAnswer(opt)} className={`p-4 rounded-xl border-2 text-left font-bold text-sm transition-all ${gameState.selected === opt ? (opt === grammarGame.readingComprehensionTask!.questions[gameState.currentIdx].correctAnswer ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-red-500 bg-red-50 text-red-800') : 'border-slate-100 bg-white hover:border-slate-200'}`}>
                                  {opt}
                                </button>
                              ))}
                            </div>
                          </div>
                          {gameState.feedback && (
                            <div className={`p-6 rounded-2xl animate-in slide-in-from-top-2 duration-300 ${gameState.selected === grammarGame.readingComprehensionTask.questions[gameState.currentIdx].correctAnswer ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' : 'bg-red-50 text-red-800 border border-red-100'}`}>
                               <p className="font-black text-sm mb-2">{gameState.feedback}</p>
                               {gameState.selected !== grammarGame.readingComprehensionTask.questions[gameState.currentIdx].correctAnswer && (
                                 <p className="text-xs font-bold mb-4">Correct Answer: <span className="text-emerald-600">{grammarGame.readingComprehensionTask.questions[gameState.currentIdx].correctAnswer}</span></p>
                               )}
                               <button onClick={nextQuestion} className="px-6 py-2 bg-slate-900 text-white rounded-lg font-black uppercase text-[9px] tracking-widest hover:bg-slate-800">Continue →</button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {grammarGame.type === ActivityType.SPELLING && grammarGame.spellingTask && grammarGame.spellingTask[gameState.currentIdx] && !gameState.finished && (
                      <div className="max-w-xl mx-auto space-y-8 text-center">
                        <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 space-y-6">
                          <p className="text-[8px] font-black text-blue-500 uppercase tracking-widest">Listen and Type</p>
                          <button onClick={() => playTTS(grammarGame.spellingTask![gameState.currentIdx].word)} className="w-24 h-24 bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-500 transition-all transform active:scale-90 flex items-center justify-center mx-auto group">
                            <span className={`text-4xl ${isSpeaking ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'}`}>🔊</span>
                          </button>
                          <p className="text-sm font-bold text-slate-500 italic">"{grammarGame.spellingTask[gameState.currentIdx].definition}"</p>
                        </div>

                        <div className="space-y-4">
                          <div className="flex justify-center gap-2">
                            {grammarGame.spellingTask[gameState.currentIdx].word.split('').map((_, i) => (
                              <div key={i} className={`w-12 h-14 border-b-4 flex items-center justify-center text-2xl font-black ${gameState.spellingAttempt[i] ? 'border-blue-600 text-blue-600' : 'border-slate-200 text-slate-300'}`}>
                                {gameState.spellingAttempt[i] || ''}
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-wrap justify-center gap-2 mt-8">
                            {gameState.shuffledSpellingLetters.map((letter, i) => (
                              <button key={i} onClick={() => {
                                if (gameState.spellingAttempt.length < grammarGame.spellingTask![gameState.currentIdx].word.length) {
                                  const newAttempt = [...gameState.spellingAttempt, letter];
                                  setGameState(prev => ({ ...prev, spellingAttempt: newAttempt }));
                                  if (newAttempt.length === grammarGame.spellingTask![gameState.currentIdx].word.length) {
                                    const isCorrect = newAttempt.join('').toLowerCase() === grammarGame.spellingTask![gameState.currentIdx].word.toLowerCase();
                                    setGameState(prev => ({
                                      ...prev,
                                      score: isCorrect ? prev.score + 1 : prev.score,
                                      feedback: isCorrect ? '✅ Perfect Spelling!' : '❌ Incorrect Spelling.'
                                    }));
                                  }
                                }
                              }} className="w-12 h-12 bg-white border-2 border-slate-100 rounded-xl font-black text-lg text-slate-700 hover:border-blue-600 hover:bg-blue-50 transition-all">
                                {letter}
                              </button>
                            ))}
                            <button onClick={() => setGameState(prev => ({ ...prev, spellingAttempt: [] }))} className="w-12 h-12 bg-slate-100 text-slate-500 rounded-xl font-black text-xs hover:bg-slate-200 transition-all">Clear</button>
                          </div>
                        </div>

                        {gameState.feedback && (
                          <div className={`p-6 rounded-2xl animate-in slide-in-from-top-2 duration-300 ${gameState.feedback.includes('✅') ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' : 'bg-red-50 text-red-800 border border-red-100'}`}>
                             <p className="font-black text-sm mb-2">{gameState.feedback}</p>
                             {!gameState.feedback.includes('✅') && (
                               <p className="text-xs font-bold mb-4">Correct Spelling: <span className="text-emerald-600 uppercase tracking-widest">{grammarGame.spellingTask[gameState.currentIdx].word}</span></p>
                             )}
                             <button onClick={nextQuestion} className="px-6 py-2 bg-slate-900 text-white rounded-lg font-black uppercase text-[9px] tracking-widest hover:bg-slate-800">Continue →</button>
                          </div>
                        )}
                      </div>
                    )}
                    {grammarGame.type === ActivityType.DIALOGUE && grammarGame.dialogueTask && grammarGame.dialogueTask.turns && !gameState.finished && (
                      <div className="space-y-8">
                        <div className="space-y-4">
                          {grammarGame.dialogueTask.turns.slice(0, gameState.currentIdx + 1).map((turn, i) => (
                            <div key={i} className={`flex ${turn.isUserTurn ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}>
                              <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${turn.isUserTurn ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-slate-100 text-slate-800 rounded-tl-none'}`}>
                                <p className="text-[8px] font-black uppercase tracking-widest mb-1 opacity-60">{turn.speaker}</p>
                                <p className="text-sm font-bold">
                                  {turn.isUserTurn && i === gameState.currentIdx && !gameState.selected ? '...' : turn.text}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {grammarGame.dialogueTask.turns[gameState.currentIdx] && grammarGame.dialogueTask.turns[gameState.currentIdx].isUserTurn && !gameState.selected && (
                          <div className="grid gap-2 animate-in fade-in duration-500">
                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest text-center mb-2">Choose your response</p>
                            {grammarGame.dialogueTask.turns[gameState.currentIdx].options && grammarGame.dialogueTask.turns[gameState.currentIdx].options.map(opt => (
                              <button key={opt} onClick={() => handleDialogueChoice(opt)} className="p-4 bg-white border-2 border-slate-100 rounded-xl font-bold text-sm text-slate-700 hover:border-blue-600 hover:bg-blue-50 transition-all text-left">
                                {opt}
                              </button>
                            ))}
                          </div>
                        )}

                        {!grammarGame.dialogueTask.turns[gameState.currentIdx].isUserTurn && (
                          <div className="flex justify-center">
                            <button onClick={nextQuestion} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-black uppercase text-xs tracking-widest hover:bg-slate-800 transition-all">Continue Conversation →</button>
                          </div>
                        )}

                        {gameState.feedback && (
                          <div className={`p-6 rounded-2xl animate-in slide-in-from-top-2 duration-300 ${gameState.feedback.includes('✅') ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' : 'bg-red-50 text-red-800 border border-red-100'}`}>
                             <p className="font-black text-sm mb-2">{gameState.feedback}</p>
                             {!gameState.feedback.includes('✅') && (
                               <div className="mb-4 space-y-2">
                                 <p className="text-xs font-bold">Correct Response: <span className="text-emerald-600">{grammarGame.dialogueTask.turns[gameState.currentIdx].correctOption}</span></p>
                               </div>
                             )}
                             <button onClick={nextQuestion} className="mt-2 px-6 py-2 bg-slate-900 text-white rounded-lg font-black uppercase text-[9px] tracking-widest hover:bg-slate-800">Next Turn →</button>
                          </div>
                        )}
                      </div>
                    )}

                    {grammarGame.type === ActivityType.ODD_ONE_OUT && grammarGame.oddOneOutTask && grammarGame.oddOneOutTask.items && !gameState.finished && (
                      <div className="space-y-8">
                        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                          <p className="text-[8px] font-black text-blue-500 uppercase tracking-widest mb-4">Find the Odd One Out</p>
                          <h4 className="text-xl font-black text-slate-800">Which one doesn't belong?</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {grammarGame.oddOneOutTask.items.map(item => (
                            <button key={item} onClick={() => handleOddOneOut(item)} className="p-6 bg-white border-2 border-slate-100 rounded-2xl font-black text-base text-slate-800 hover:border-blue-600 hover:bg-blue-50 transition-all shadow-sm">
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {grammarGame.type === ActivityType.TRUE_FALSE && grammarGame.trueFalseTask && grammarGame.trueFalseTask[gameState.currentIdx] && !gameState.finished && (
                      <div className="space-y-8">
                        <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 text-center">
                          <p className="text-[8px] font-black text-blue-500 uppercase tracking-widest mb-4">True or False</p>
                          <h4 className="text-2xl font-black text-slate-800 leading-relaxed">{grammarGame.trueFalseTask[gameState.currentIdx].statement}</h4>
                        </div>
                        <div className="flex gap-4">
                          <button onClick={() => handleTrueFalse(true)} className={`flex-1 py-6 rounded-2xl border-4 font-black text-xl transition-all ${gameState.selected === 'True' ? (grammarGame.trueFalseTask[gameState.currentIdx].isTrue ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-red-50 border-red-500 text-red-700') : 'bg-white border-slate-100 text-slate-800 hover:border-emerald-400'}`}>
                            TRUE
                          </button>
                          <button onClick={() => handleTrueFalse(false)} className={`flex-1 py-6 rounded-2xl border-4 font-black text-xl transition-all ${gameState.selected === 'False' ? (!grammarGame.trueFalseTask[gameState.currentIdx].isTrue ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-red-50 border-red-500 text-red-700') : 'bg-white border-slate-100 text-slate-800 hover:border-red-400'}`}>
                            FALSE
                          </button>
                        </div>
                        {gameState.feedback && (
                          <div className={`p-6 rounded-2xl animate-in slide-in-from-top-2 duration-300 ${gameState.feedback.includes('✅') ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' : 'bg-red-50 text-red-800 border border-red-100'}`}>
                             <p className="font-black text-sm mb-2">{gameState.feedback}</p>
                             <button onClick={nextQuestion} className="mt-2 px-6 py-2 bg-slate-900 text-white rounded-lg font-black uppercase text-[9px] tracking-widest hover:bg-slate-800">Continue →</button>
                          </div>
                        )}
                      </div>
                    )}

                    {grammarGame.type === ActivityType.FLASHCARDS && grammarGame.flashcards && grammarGame.flashcards[gameState.currentIdx] && !gameState.finished && (
                      <div className="space-y-8">
                        <div className="flex justify-center">
                          <div 
                            onClick={handleFlashcardFlip}
                            className={`w-full max-w-md aspect-[3/2] cursor-pointer transition-all duration-500 preserve-3d relative ${gameState.isFlipped ? 'rotate-y-180' : ''}`}
                          >
                            {/* Front */}
                            <div className="absolute inset-0 backface-hidden bg-white rounded-[2rem] border-4 border-blue-100 shadow-xl flex flex-col items-center justify-center p-10 text-center">
                              <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-4">Question / Term</p>
                              <h3 className="text-3xl font-black text-slate-800">{grammarGame.flashcards[gameState.currentIdx].front}</h3>
                              <p className="mt-8 text-slate-400 font-bold text-xs animate-pulse">Click to flip ↺</p>
                            </div>
                            {/* Back */}
                            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-blue-600 rounded-[2rem] shadow-xl flex flex-col items-center justify-center p-10 text-center text-white">
                              <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest mb-4">Answer / Meaning</p>
                              <h3 className="text-3xl font-black">{grammarGame.flashcards[gameState.currentIdx].back}</h3>
                              {grammarGame.flashcards[gameState.currentIdx].hint && (
                                <p className="mt-4 text-blue-100 text-sm italic opacity-80">Hint: {grammarGame.flashcards[gameState.currentIdx].hint}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center gap-4">
                          <button onClick={nextQuestion} className="px-12 py-4 bg-slate-900 text-white rounded-2xl font-black text-lg shadow-lg hover:bg-slate-800 transform active:scale-95 transition-all">
                            {gameState.currentIdx === grammarGame.flashcards.length - 1 ? 'Finish' : 'Next Card →'}
                          </button>
                        </div>
                      </div>
                    )}

                    {grammarGame.type === ActivityType.SPELLING && grammarGame.spellingTask && grammarGame.spellingTask[gameState.currentIdx] && !gameState.finished && (
                      <div className="space-y-8">
                        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                          <p className="text-[8px] font-black text-blue-500 uppercase tracking-widest mb-4">Spelling Challenge</p>
                          <p className="text-sm font-bold text-slate-500 mb-2 italic">"{grammarGame.spellingTask[gameState.currentIdx].definition}"</p>
                          <div className="flex justify-center gap-2 min-h-[3rem] items-center">
                            {grammarGame.spellingTask[gameState.currentIdx].word && grammarGame.spellingTask[gameState.currentIdx].word.split('').map((_, i) => (
                              <div key={i} className={`w-10 h-12 border-b-4 flex items-center justify-center text-2xl font-black ${gameState.spellingAttempt[i] ? 'border-blue-600 text-slate-800' : 'border-slate-200 text-transparent'}`}>
                                {gameState.spellingAttempt[i] || '_'}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex flex-wrap justify-center gap-2">
                            {gameState.shuffledSpellingLetters && gameState.shuffledSpellingLetters.map((letter, i) => (
                              <button
                                key={i}
                                onClick={() => handleSpellingLetterClick(letter, i)}
                                className="w-12 h-12 bg-white border-2 border-slate-100 rounded-xl font-black text-xl text-slate-800 shadow-sm hover:border-blue-600 hover:scale-110 transition-all active:scale-95"
                              >
                                {letter}
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-center gap-3">
                            <button onClick={clearSpelling} className="px-6 py-2 bg-slate-200 text-slate-600 rounded-lg font-black uppercase text-[10px] tracking-widest hover:bg-slate-300">Clear</button>
                            <button onClick={checkSpelling} className="px-10 py-2 bg-emerald-600 text-white rounded-lg font-black uppercase text-[10px] tracking-widest shadow-md hover:bg-emerald-500">Check</button>
                          </div>
                        </div>

                        {gameState.feedback && (
                          <div className={`p-6 rounded-2xl animate-in slide-in-from-top-2 duration-300 ${gameState.feedback.includes('✅') ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' : 'bg-red-50 text-red-800 border border-red-100'}`}>
                             <p className="font-black text-sm mb-2">{gameState.feedback}</p>
                             <button onClick={nextQuestion} className="mt-2 px-6 py-2 bg-slate-900 text-white rounded-lg font-black uppercase text-[9px] tracking-widest hover:bg-slate-800">Continue →</button>
                          </div>
                        )}
                      </div>
                    )}

                    {gameState.finished && (
                      <div className="text-center space-y-6 animate-in zoom-in-95 duration-500">
                         <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto shadow-lg">🏆</div>
                         <h4 className="text-3xl font-black text-slate-900 tracking-tight">Challenge Complete!</h4>
                         <p className="text-base font-medium text-slate-500">{gameState.feedback || "You've successfully mastered this grammar unit!"}</p>
                         <div className="flex justify-center gap-3">
                            <button onClick={() => setGrammarGame(null)} className="px-10 py-4 bg-slate-900 text-white rounded-xl font-black text-base shadow-lg hover:bg-slate-800 transform active:scale-95">Back to Topics</button>
                         </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {view === AppView.ASSIGNMENT_GENERATOR && (
            <div className="max-w-4xl mx-auto animate-in fade-in duration-500 pb-32">
              <div className="text-center space-y-2 mb-10">
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">Assignment Generator</h2>
                <p className="text-slate-500 font-medium text-sm">Create printable worksheets in seconds using AI.</p>
              </div>

              {!assignmentContent ? (
                <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-2">Grade Level</label>
                      <select 
                        value={assignmentGrade} 
                        onChange={(e) => setAssignmentGrade(e.target.value)}
                        className="w-full bg-slate-100 border-none rounded-2xl py-4 px-6 text-base font-bold text-slate-700 shadow-inner focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                      >
                        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map(g => (
                          <option key={g} value={g}>Grade {g}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-2">Topic / Chapter</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Photosynthesis, Mughal Empire..." 
                        value={assignmentTopic} 
                        onChange={(e) => setAssignmentTopic(e.target.value)} 
                        className="w-full bg-slate-100 border-none rounded-2xl py-4 px-6 text-base font-bold text-slate-700 shadow-inner focus:ring-2 focus:ring-blue-500 transition-all" 
                      />
                    </div>
                  </div>
                  <button 
                    onClick={handleGenerateAssignment} 
                    disabled={assignmentLoading || !assignmentTopic}
                    className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-base shadow-xl hover:bg-blue-500 disabled:opacity-20 transition-all transform active:scale-95 flex items-center justify-center gap-3"
                  >
                    {assignmentLoading ? (
                      <>
                        <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Crafting Worksheet...</span>
                      </>
                    ) : (
                      <>
                        <span>✨</span> Generate Assignment
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="space-y-6 animate-in zoom-in-95 duration-500">
                  <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 relative">
                    <div className="absolute top-8 right-8 flex gap-2 no-print">
                      <button onClick={() => window.print()} className="p-3 bg-emerald-600 text-white rounded-xl shadow-lg hover:bg-emerald-500 transition-all">
                        🖨️ Print
                      </button>
                      <button onClick={() => setAssignmentContent(null)} className="p-3 bg-slate-900 text-white rounded-xl shadow-lg hover:bg-slate-800 transition-all">
                        New
                      </button>
                    </div>
                    <div className="prose prose-slate max-w-none markdown-body">
                      <Markdown>{assignmentContent}</Markdown>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {view === AppView.RESOURCES && (
            <div className="max-w-5xl mx-auto animate-in fade-in duration-500 pb-32">
              <div className="text-center space-y-2 mb-10">
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">{t('resources.title')}</h2>
                <p className="text-slate-500 font-medium text-sm">Official KSEAB textbooks and academic resources.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {RESOURCE_LINKS.map((res, i) => (
                  <a key={i} href={res.url} target="_blank" rel="noopener noreferrer" className="block p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">{res.grade}</span>
                      <span className="text-2xl group-hover:translate-x-1 transition-transform">🔗</span>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">{res.title}</h3>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{res.subject}</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <footer className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-4">
        {/* Assistant Widget */}
        <div className={`flex flex-col bg-white rounded-3xl shadow-2xl border border-slate-200 transition-all duration-500 overflow-hidden pointer-events-auto ${assistantOpen ? 'w-80 h-[450px] opacity-100' : 'w-0 h-0 opacity-0'}`}>
          <div className="bg-slate-900 p-4 flex justify-between items-center shrink-0">
            <h4 className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2">
              <span>🤖</span> {t('assistant.title')}
            </h4>
            <button onClick={() => setAssistantOpen(false)} className="text-slate-400 hover:text-white">✕</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-50">
            {assistantMessages.length === 0 && (
              <div className="text-center py-10 space-y-2">
                <p className="text-3xl">👋</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">How can I help you today?</p>
              </div>
            )}
            {assistantMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-xs font-medium leading-relaxed ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {assistantLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                  <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 bg-white border-t border-slate-100 flex gap-2 shrink-0">
            <input 
              type="text" 
              placeholder={t('assistant.placeholder')} 
              value={assistantInput}
              onChange={(e) => setAssistantInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAssistantSend()}
              className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-xs font-bold focus:ring-2 focus:ring-blue-500"
            />
            <button onClick={handleAssistantSend} className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg hover:bg-blue-500 transition-all">
              🚀
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button 
            onClick={() => setAssistantOpen(!assistantOpen)}
            className="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl hover:scale-110 transition-transform active:scale-95 relative"
          >
            {assistantOpen ? '✕' : '🤖'}
            {!assistantOpen && <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 border-4 border-white rounded-full animate-pulse"></span>}
          </button>
          
          <div className={`px-4 py-2 rounded-full shadow-xl flex items-center gap-2 transition-all ${isOnline ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white animate-pulse'}`}>
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></div>
            <span className="text-[8px] font-black uppercase tracking-widest">{isOnline ? 'Online' : 'Offline'}</span>
          </div>
        </div>
      </footer>
    </>
    )}
    </div>
  );
};

export default App;