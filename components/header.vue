<script setup lang="ts"></script>

<template>
  <header>
    <div class="flex-header">
      <img src="/img/manuel.jpg" alt="photo of manuel" />
      <div class="headline-nav">
        <h1>Manuel Verweyen</h1>
        <nav>
          <NuxtLink to="/"><button>Home</button></NuxtLink>
          <NuxtLink to="/aboutjob"><button>Berufliches</button></NuxtLink>
          <NuxtLink to="/aboutprivate"><button>Privates</button></NuxtLink>
          <NuxtLink to="/code"><button>Code</button></NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="css" scoped>
button {
  outline: 0;
  border: 0.1rem var(--main-text-color) solid;
  border-radius: 9999px;
  padding: 0.3rem 0.7rem;
  background-color: var(--main-text-color);
  color: var(--main-bg-color);
  cursor: pointer;
  font-size: clamp(0.6rem, 1vw, 2rem);
}

button:hover,
button:active {
  border: 0.1rem var(--main-text-color) solid;
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
}

h1 {
  font-size: clamp(1.5rem, 3vw, 5rem);
  margin: 0;
}

img {
  width: clamp(80px, 10vw, 300px);
  border-radius: 9999px;
}

nav {
  display: flex;
  gap: 0.5rem;
}

.headline-nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.flex-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
</style>
