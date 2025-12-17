<script setup lang="ts">
interface Props {
  text: string;
  icon?: string;
  color: "orange" | "gray" | "red";
}
const props = defineProps<Props>();
const computedClass = computed(() => {
  const colorMapper: Record<Props["color"], string> = {
    orange: "bg-orange-600 text-white hover:bg-orange-700",
    gray: "bg-gray-200 text-black hover:bg-gray-300",
    red: "bg-red-600 text-white hover:bg-red-700",
  };
  return colorMapper[props.color];
});
</script>

<template>
  <button
    :class="computedClass"
    class="rounded-2xl items-centered px-2 py-2 transition duration-200"
  >
    <img v-if="icon" />{{ text }}
  </button>
</template>
