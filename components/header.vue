<script setup lang="ts"></script>

<template>
  <header>
    <div class="flex-headline">
      <img src="/img/manuel.jpg" alt="photo of manuel" />
      <h1>Manuel Verweyen</h1>
    </div>
  </header>
</template>

<style lang="css" scoped>
img {
  width: clamp(80px, 10vw, 300px);
  border-radius: 9999px;
}

h1 {
  font-size: clamp(1.5rem, 3vw, 5rem);
}

.flex-headline {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1.5rem;
}
</style>
