<script setup lang="ts">
useSeoMeta({
  title: "Home",
});
</script>

<template>
  <TheHero />

  <JDivider class="my-12" />

  <h2 class="text-header mb-4 text-center">Blog</h2>

  <div class="grid grid-cols-3 gap-12">
    <JCard />
    <JCard />
    <JCard />
  </div>
</template>
