<script lang="ts" setup>
const props = defineProps<{
  vertical?: boolean;
}>();

const orientation = computed(() =>
  props.vertical ? "horizontal" : "vertical"
);
</script>

<template>
  <div
    class="border-orange-800"
    :class="{
      'border-t': !props.vertical,
      'border-l': props.vertical,
      'w-full': !props.vertical,
      'h-full': props.vertical,
    }"
    role="separator"
    :aria-orientation="orientation"
  ></div>
</template>
