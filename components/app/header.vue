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
          <NuxtLink to="/quiz"><button>Quiz</button></NuxtLink>
          <NuxtLink to="/aboutprivate"><button>Privates</button></NuxtLink>
          <NuxtLink to="/contact"><button>Kontakt</button></NuxtLink>
        </nav>
      </div>
    </div>
  </header>
  <hr />
</template>

<style lang="css" scoped>
img {
  width: clamp(80px, 10vw, 300px);
  border-radius: 9999px;
  box-shadow: 0 0 15px var(--main-text-color);
}

nav {
  display: flex;
  flex-wrap: wrap;
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
