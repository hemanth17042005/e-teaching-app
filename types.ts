
export enum AppView {
  LANDING = 'landing',
  DASHBOARD = 'dashboard',
  VIRTUAL_LAB = 'virtual_lab',
  LANGUAGE_LAB = 'language_lab',
  LESSON_PLANNER = 'lesson_planner',
  PLAY_LAB = 'play_lab',
  RESOURCES = 'resources',
  ASSIGNMENT_GENERATOR = 'assignment_generator'
}

export enum Language {
  ENGLISH = 'English',
  KANNADA = 'Kannada'
}

export enum Subject {
  SCIENCE = 'Science',
  MATHEMATICS = 'Mathematics',
  ENGLISH = 'English',
  KANNADA = 'Kannada',
  SOCIAL_SCIENCE = 'Social Science'
}

export enum ActivityType {
  QUIZ = 'quiz',
  SORTING = 'sorting',
  UNSCRAMBLE = 'unscramble',
  WORD_BUILDING = 'word_building',
  MATCHING = 'matching',
  FILL_IN_THE_BLANKS = 'fill_in_the_blanks',
  DIALOGUE = 'dialogue',
  ODD_ONE_OUT = 'odd_one_out',
  TRUE_FALSE = 'true_false',
  FLASHCARDS = 'flashcards',
  SPELLING = 'spelling',
  READING_COMPREHENSION = 'reading_comprehension'
}

export interface LessonTopic {
  title: string;
  points: string[];
  priority: 'High' | 'Medium' | 'Low';
  explanationDepth: string;
  problems?: string[]; 
  model5E?: {
    engage: string;
    explore: string;
    explain: string;
    elaborate: string;
    evaluate: string;
  };
}

export interface LessonPlan {
  className: string;
  chapterName: string;
  summary: string;
  topics: LessonTopic[];
}

export interface GrammarQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface SortingTask {
  categories: string[];
  items: { text: string; category: string }[];
}

export interface UnscrambleTask {
  scrambledWords: string[];
  correctSentence: string;
  clue: string;
}

export interface WordBuildingTask {
  rootWord: string;
  parts: { text: string; type: 'prefix' | 'suffix'; isCorrect: boolean }[];
  correctResult: string;
  definition: string;
}

export interface MatchingPair {
  word: string;
  imageUrl: string;
}

export interface MatchingTask {
  pairs: MatchingPair[];
}

export interface FillInBlanksTask {
  sentence: string; // Use [BLANK] for missing parts
  options: string[];
  correctAnswers: string[];
  explanation?: string;
}

export interface DialogueTurn {
  speaker: string;
  text: string;
  isUserTurn: boolean;
  options?: string[];
  correctOption?: string;
  explanation?: string;
}

export interface DialogueTask {
  turns: DialogueTurn[];
}

export interface OddOneOutTask {
  items: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface TrueFalseTask {
  statement: string;
  isTrue: boolean;
  explanation?: string;
}

export interface Flashcard {
  front: string;
  back: string;
  hint?: string;
}

export interface SpellingTask {
  word: string;
  audioUrl?: string; // Optional if we use TTS
  definition: string;
  scrambledLetters: string[];
}

export interface ReadingComprehensionTask {
  passage: string;
  questions: GrammarQuestion[];
}

export interface GrammarGame {
  type: ActivityType;
  title: string;
  instructions: string;
  questions?: GrammarQuestion[];
  sortingTask?: SortingTask;
  unscrambleTask?: UnscrambleTask;
  wordBuildingTask?: WordBuildingTask[];
  matchingTask?: MatchingTask;
  fillInBlanksTask?: FillInBlanksTask[];
  dialogueTask?: DialogueTask;
  oddOneOutTask?: OddOneOutTask;
  trueFalseTask?: TrueFalseTask[];
  flashcards?: Flashcard[];
  spellingTask?: SpellingTask[];
  readingComprehensionTask?: ReadingComprehensionTask;
}

export interface Chapter {
  id: string;
  name: string;
  subject: Subject;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ResourceLink {
  title: string;
  url: string;
  grade: string;
  subject: Subject;
}
