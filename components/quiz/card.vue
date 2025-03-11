<script setup lang="ts">
import type { QuizCategories } from "~/types/global";

const showForm = ref(true);
const showCard = ref(false);
const category = ref("");
const difficulty = ref("");
const quizStore = useQuizStore();

//TODO error handling
const { data, error } = await useFetch<QuizCategories>(
  "/api/getQuizCategories"
);

const categories = computed(() => data.value);

const categoriesAvaiable = computed(() => {
  return categories.value.trivia_categories.filter(
    (c) => quizStore.value.alreadPlayedQuestionIDs.indexOf(c.id) === -1
  );
});

async function requestQuestion() {
  const requestedCategory = categories.value.trivia_categories.filter(
    (c) => category.value === c.name
  )[0];
  const requestDifficulty = difficulty.value;

  //TODO add error handling here
  if (!requestedCategory) return;

  quizStore.value.alreadPlayedQuestionIDs.push(requestedCategory?.id);
  quizStore.value.currentCategoryId = requestedCategory.id;
  quizStore.value.currentDifficulty = requestDifficulty;


  // This special construct is no good code, but needed for the open trivia db, 
  // because as a free and open db they only allow one request every 5sec. 
  // This will secure that I never request a new question within the 5sec.
  if (Date.now() - quizStore.value.lastApiCall< 5500) {
    setTimeout( async() => {
      quizStore.value.lastApiCall = Date.now();
      const { data, error } = await $fetch("/api/getQuizQuestion", {
        method: "POST",
        body: quizStore.value,
      });
    }, (Date.now() - quizStore.value.lastApiCall));
  } else {
    quizStore.value.lastApiCall = Date.now();
    const { data, error } = await $fetch("/api/getQuizQuestion", {
      method: "POST",
      body: quizStore.value,
    });
  }
}
</script>

<template>
  <form @submit.prevent v-if="showForm">
    <label for="category">Select category:</label>
    <select name="category" id="category" v-model="category">
      <option disabled value="">Please choose:</option>
      <option v-for="category in categoriesAvaiable">
        {{ category.name }}
      </option>
    </select>
    <br />
    <label for="difficulty">Select difficulty:</label>
    <select name="difficulty" id="difficulty" v-model="difficulty">
      <option disabled value="">Please choose:</option>
      <option value="easy">easy</option>
      <option value="medium">medium</option>
      <option value="hard">hard</option>
    </select>
    <br />
    <button @click="requestQuestion()">Question</button>
  </form>

  <div v-else-if="showCard"></div>

  <AppLoadingSpinner v-else />
</template>

<style lang="css" scoped></style>
