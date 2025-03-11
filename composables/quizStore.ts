import type { QuizStore } from "~/types/global";

export const useQuizStore = () =>
  useState<QuizStore>("quizStore", () => ({
    quizApiKey: "",
    alreadPlayedQuestionIDs: [],
    currentPoints: 0,
    lastApiCall: 0,
    currentCategoryId: 0,
    currentDifficulty: "medium",
  }));
