export type Flashcard = {
  id: number;
  term: string;
  definition: string;
};

export type QuizQuestion = {
  id: number;
  scenario: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export type Achievement = {
  id: number;
  name: string;
  description: string;
  unlocked: boolean;
};

export type GlossaryTerm = {
  id: number;
  term: string;
  definition: string;
};
