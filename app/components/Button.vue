<script setup lang="ts">
interface Props {
  text: string;
  icon?: string;
  color: "orange" | "gray" | "blue";
}
const props = defineProps<Props>();
const computedClass = computed(() => {
  const colorMapper: Record<Props["color"], string> = {
    orange: "bg-orange-600 text-white",
    gray: "bg-gray-200 text-black",
    blue: "bg-blue-400 text-black",
  };
  return colorMapper[props.color];
});
const emit = defineEmits(['button-pressed'])
</script>

<template>
  <button :class="computedClass" class="rounded-2xl items-centered px-2 py-2" @click="emit('button-pressed')">
    <img v-if="icon" />{{ text }}
  </button>
</template>
