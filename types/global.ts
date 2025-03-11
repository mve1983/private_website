export type QuizApiKey = {
  response_code: number;
  response_message: string;
  token: string;
};

export type QuizStore = {
  quizApiKey: string | undefined;
  alreadPlayedQuestionIDs: number[];
  currentPoints: number;
  lastApiCall: number;
  currentCategoryId: number;
  currentDifficulty: string;
};

export type QuizCategory = {
  id: number;
  name: string;
};

export type QuizCategories = {
  trivia_categories: QuizCategory[];
};
