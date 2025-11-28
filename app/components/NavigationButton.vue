<script setup lang="ts">
interface NavButtonProps {
  icon: string;
  type: "Избранное" | "Калькулятор";
  amount: number;
}
const props = defineProps<NavButtonProps>();
const emit = defineEmits(["navigation-button-clicked"]);
const spanBgClass = computed(() => {
  const classObj: Record<NavButtonProps["type"], string> = {
    Избранное: "bg-red-500",
    Калькулятор: "bg-orange-500",
  };
  return classObj[props.type];
});
</script>

<template>
  <button
    @click="emit('navigation-button-clicked')"
    class="size-12 p-2 rounded-full relative"
  >
    <span
      v-if="amount"
      class="text-white px-2 py-1 rounded-full absolute -top-1 -right-1 size-6 text-xs"
      :class="spanBgClass"
      >{{ amount }}</span
    >
    <img class="size-full" :src="icon" />
  </button>
</template>
