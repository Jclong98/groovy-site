<script setup lang="ts">
useSeoMeta({
  titleTemplate: "%s | Hometown Nutrition",
});
</script>

<template>
  <div class="bg-yellow-100 min-h-100dvh text-orange-800 font-main">
    <div class="max-w-6xl mx-auto">
      <TheNav />

      <main>
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<style>
p,
a,
button {
  text-transform: uppercase;
}
</style>
