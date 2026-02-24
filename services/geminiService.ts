

import { GoogleGenAI, Type, ThinkingLevel, Modality } from "@google/genai";
import { LessonPlan, GrammarGame, ActivityType } from "../types";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

console.log("ENV KEY:", import.meta.env.VITE_GEMINI_API_KEY);

// Simple in-memory cache to prevent redundant API calls
const cache: Record<string, any> = {};

export const generateLessonPlan = async (className: string, chapterName: string, subjectName: string): Promise<LessonPlan> => {
  const cacheKey = `plan_${className}_${chapterName}_${subjectName}`;
  if (cache[cacheKey]) return cache[cacheKey];

  const isMath = subjectName.toLowerCase() === 'mathematics';
  
  const contents = `Expert KSEAB Planner. Chapter: "${chapterName}" (${className}, ${subjectName}).
    1. 1-sentence objective.
    2. Top 2 pedagogical topics.
    3. 3 bullet points per topic.
    4. Priority & Depth.
    ${isMath ? `5. 2 Math problems per topic (1 Easy, 1 Medium).` : ''}
    STRICT: Total output < 200 words. FAST response required.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: contents,
    config: {
      thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
      responseMimeType: "application/json",
      maxOutputTokens: 2048,
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          className: { type: Type.STRING },
          chapterName: { type: Type.STRING },
          summary: { type: Type.STRING },
          topics: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                points: { type: Type.ARRAY, items: { type: Type.STRING } },
                priority: { type: Type.STRING, enum: ["High", "Medium", "Low"] },
                explanationDepth: { type: Type.STRING },
                problems: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ["title", "points", "priority", "explanationDepth"]
            }
          }
        },
        required: ["className", "chapterName", "summary", "topics"]
      }
    }
  });

  try {
    const result = JSON.parse(response.text || '{}') as LessonPlan;
    cache[cacheKey] = result;
    return result;
  } catch (e) {
    console.error("Failed to parse lesson plan JSON:", e);
    throw new Error("The AI response was incomplete. Please try again.");
  }
};

export const generateGrammarActivity = async (subject: 'English' | 'Kannada', topic: string, level: string = 'Intermediate'): Promise<GrammarGame> => {
  const cacheKey = `grammar_${subject}_${topic}_${level}`;
  if (cache[cacheKey]) return cache[cacheKey];

  // Pick a random activity type first to simplify the schema for the AI
  const types = Object.values(ActivityType);
  const selectedType = types[Math.floor(Math.random() * types.length)];

  const systemInstruction = `You are a ${subject} teacher. Create a ${level} level ${selectedType} activity.
  Output ONLY JSON. No conversational text. 
  For Kannada, use Kannada script. For English, use simple vocabulary.
  Match the difficulty to school students.
  PRIORITIZE SPEED: Generate exactly 2 items for the ${selectedType} task.`;

  const prompt = `Topic: "${topic}" (${level} level). Generate a ${selectedType} activity with 2 items.`;

  // Define specific schema based on type to minimize token usage
  const getSchemaForType = (type: ActivityType) => {
    const baseProps: any = {
      type: { type: Type.STRING, enum: [type] },
      title: { type: Type.STRING },
      instructions: { type: Type.STRING },
    };

    switch (type) {
      case ActivityType.QUIZ:
        baseProps.questions = {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              options: { type: Type.ARRAY, items: { type: Type.STRING } },
              correctAnswer: { type: Type.STRING }
            },
            required: ["question", "options", "correctAnswer"]
          }
        };
        break;
      case ActivityType.SORTING:
        baseProps.sortingTask = {
          type: Type.OBJECT,
          properties: {
            categories: { type: Type.ARRAY, items: { type: Type.STRING } },
            items: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: { text: { type: Type.STRING }, category: { type: Type.STRING } },
                required: ["text", "category"]
              }
            }
          },
          required: ["categories", "items"]
        };
        break;
      case ActivityType.UNSCRAMBLE:
        baseProps.unscrambleTask = {
          type: Type.OBJECT,
          properties: {
            scrambledWords: { type: Type.ARRAY, items: { type: Type.STRING } },
            correctSentence: { type: Type.STRING },
            clue: { type: Type.STRING }
          },
          required: ["scrambledWords", "correctSentence", "clue"]
        };
        break;
      case ActivityType.WORD_BUILDING:
        baseProps.wordBuildingTask = {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              rootWord: { type: Type.STRING },
              parts: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: { text: { type: Type.STRING }, type: { type: Type.STRING, enum: ["prefix", "suffix"] }, isCorrect: { type: Type.BOOLEAN } },
                  required: ["text", "type", "isCorrect"]
                }
              },
              correctResult: { type: Type.STRING }
            },
            required: ["rootWord", "parts", "correctResult"]
          }
        };
        break;
      case ActivityType.MATCHING:
        baseProps.matchingTask = {
          type: Type.OBJECT,
          properties: {
            pairs: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: { word: { type: Type.STRING }, imageUrl: { type: Type.STRING } },
                required: ["word", "imageUrl"]
              }
            }
          },
          required: ["pairs"]
        };
        break;
      case ActivityType.FILL_IN_THE_BLANKS:
        baseProps.fillInBlanksTask = {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              sentence: { type: Type.STRING },
              options: { type: Type.ARRAY, items: { type: Type.STRING } },
              correctAnswers: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["sentence", "options", "correctAnswers"]
          }
        };
        break;
      case ActivityType.DIALOGUE:
        baseProps.dialogueTask = {
          type: Type.OBJECT,
          properties: {
            turns: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  speaker: { type: Type.STRING },
                  text: { type: Type.STRING },
                  isUserTurn: { type: Type.BOOLEAN },
                  options: { type: Type.ARRAY, items: { type: Type.STRING } },
                  correctOption: { type: Type.STRING }
                },
                required: ["speaker", "text", "isUserTurn"]
              }
            }
          },
          required: ["turns"]
        };
        break;
      case ActivityType.ODD_ONE_OUT:
        baseProps.oddOneOutTask = {
          type: Type.OBJECT,
          properties: {
            items: { type: Type.ARRAY, items: { type: Type.STRING } },
            correctAnswer: { type: Type.STRING }
          },
          required: ["items", "correctAnswer"]
        };
        break;
      case ActivityType.TRUE_FALSE:
        baseProps.trueFalseTask = {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: { statement: { type: Type.STRING }, isTrue: { type: Type.BOOLEAN } },
            required: ["statement", "isTrue"]
          }
        };
        break;
      case ActivityType.FLASHCARDS:
        baseProps.flashcards = {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: { front: { type: Type.STRING }, back: { type: Type.STRING }, hint: { type: Type.STRING } },
            required: ["front", "back"]
          }
        };
        break;
      case ActivityType.SPELLING:
        baseProps.spellingTask = {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              word: { type: Type.STRING },
              definition: { type: Type.STRING },
              scrambledLetters: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["word", "definition", "scrambledLetters"]
          }
        };
        break;
      case ActivityType.READING_COMPREHENSION:
        baseProps.readingComprehensionTask = {
          type: Type.OBJECT,
          properties: {
            passage: { type: Type.STRING },
            questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  question: { type: Type.STRING },
                  options: { type: Type.ARRAY, items: { type: Type.STRING } },
                  correctAnswer: { type: Type.STRING }
                },
                required: ["question", "options", "correctAnswer"]
              }
            }
          },
          required: ["passage", "questions"]
        };
        break;
    }

    return {
      type: Type.OBJECT,
      properties: baseProps,
      required: ["type", "title", "instructions"]
    };
  };

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      systemInstruction,
      thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
      responseMimeType: "application/json",
      maxOutputTokens: 1500,
      responseSchema: getSchemaForType(selectedType as ActivityType),
    }
  });

  try {
    const result = JSON.parse(response.text || '{}') as GrammarGame;
    cache[cacheKey] = result;
    return result;
  } catch (e) {
    console.error("Failed to parse grammar activity JSON:", e);
    throw new Error("The AI response was incomplete. Please try again.");
  }
};

export const askClassroomAssistant = async (question: string, history: {role: 'user' | 'model', text: string}[]): Promise<string> => {
  const chat = ai.chats.create({
    model: "gemini-3-flash-preview",
    config: {
      thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
      systemInstruction: `You are an AI Classroom Assistant for Karnataka Government School teachers. 
      Provide concise, pedagogical advice, analogies, and classroom activities. 
      Keep responses under 150 words. Use simple English or Kannada if requested.
      Focus on KSEAB curriculum standards.`,
    },
  });

  // Add history to chat if needed, but for simplicity we'll just send the message with context
  const response = await chat.sendMessage({ message: question });
  return response.text || "I'm sorry, I couldn't process that.";
};

export const generateAssignment = async (topic: string, grade: string): Promise<string> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate a comprehensive assignment worksheet for Grade ${grade} students on the topic: "${topic}". 
    Include:
    1. 5 Multiple Choice Questions
    2. 5 Fill in the blanks
    3. 3 Short Answer Questions
    4. 1 Creative/Critical Thinking task.
    
    Format the output as a clean, printable Markdown document. 
    Include a header with "Name:", "Roll No:", and "Date:".`,
    config: {
      thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
      systemInstruction: "You are an expert curriculum designer for KSEAB schools.",
    }
  });

  return response.text || "Failed to generate assignment.";
};

export const generateSpeech = async (text: string): Promise<string | undefined> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Say clearly: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  } catch (error) {
    console.error("TTS Error:", error);
    return undefined;
  }
};

export const translateText = async (text: string, targetLang: string): Promise<string> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Translate the following text to ${targetLang}. Output ONLY the translated text.\n\nText: ${text}`,
    config: {
      thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
    }
  });
  return response.text || text;
};
