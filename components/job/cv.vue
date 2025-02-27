<script setup lang="ts">
import { skills, jobs, educations } from "~/data";
</script>

<template>
  <fieldset class="cv-wrapper">
    <legend><h4>CV</h4></legend>
    <div class="fieldset-content">
      <h5>Beruflicher Werdegang</h5>
      <div v-for="job in jobs" class="list">
        <div>
          <div class="first-list-element underline">Arbeitgeber:</div>
          <div class="underline">Stadt:</div>
          <div class="underline">beschäftigt:</div>
          <div class="underline">Bezeichnung:</div>
          <div v-if="job.project" class="underline">Projekt:</div>
          <div v-if="job.task" class="underline">Aufgabe:</div>
          <div v-if="job.techstack" class="underline">Techstack:</div>
        </div>
        <div>
          <div class="first-list-element">{{ job.company }}</div>
          <div>{{ job.city }}</div>
          <div>{{ job.time }}</div>
          <div>{{ job.jobname }}</div>
          <div v-if="job.project">
            <a :href="job.project" target="_blank" class="link">{{
              job.project
            }}</a>
          </div>
          <div v-if="job.task">{{ job.task }}</div>
          <div v-if="job.techstack">{{ job.techstack }}</div>
        </div>
      </div>
      <h5>Bildungsweg</h5>
      <div v-for="education in educations" class="list">
        <div>
          <div class="first-list-element underline">Schule:</div>
          <div class="underline">Stadt:</div>
          <div class="underline">Dauer:</div>
          <div class="underline">Kurs:</div>
          <div class="underline">Bezeichnung:</div>
        </div>
        <div>
          <div class="first-list-element">{{ education.school }}</div>
          <div>{{ education.city }}</div>
          <div>{{ education.time }}</div>
          <div>{{ education.course }}</div>
          <div>{{ education.description }}</div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <h5>Fähigkeiten</h5>
        <p
          v-for="(skill, index) in skills"
          :class="index === 0 ? 'first-list-element' : ''">
          {{ skill }}
        </p>
      </div>
    </div>
  </fieldset>
</template>

<style lang="css" scoped>
fieldset {
  border: 1px var(--main-text-color) solid;
  box-shadow: 5px 5px 5px var(--main-text-color);
}

.cv-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.link {
  font-weight: 700;
}

.list {
  display: grid;
  grid-template-columns: clamp(8rem, 10vw, 16rem) 1fr;
}

.list > div > div {
  padding: 0.1rem 0;
}

.first-list-element {
  margin-top: 1.5rem;
}

.fieldset-content {
  padding-bottom: 1rem;
}

@media only screen and (min-width: 600px) {
  .cv-wrapper {
    flex-direction: row;
  }
}
</style>
