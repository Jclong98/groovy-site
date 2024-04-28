<script lang="ts" setup>
const navItems = [
  { text: "Home", to: "/" },
  { text: "About", to: "/about" },
  { text: "Contact", to: "/contact" },
];
</script>

<template>
  <nav
    class="grid grid-cols-3 py-4 items-center border-b border-orange-800 text-2xl"
  >
    <NuxtLink class="text-4xl font-header text-orange-600" to="/">
      Hometown
    </NuxtLink>

    <ul class="flex items-center justify-center divide-x divide-orange-800">
      <li class="px-4" v-for="item in navItems" :key="item.to">
        <NuxtLink active-class="text-orange-500 underline" :to="item.to">
          {{ item.text }}
        </NuxtLink>
      </li>
    </ul>

    <div class="flex justify-end">
      <button class="btn">Do Something</button>
    </div>
  </nav>
</template>
