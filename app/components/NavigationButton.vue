<script setup lang="ts">
interface NavButtonProps {
  icon: string;
  type?: "Избранное" | "Калькулятор" | "Сравнение";
  amount: number;
}
const props = defineProps<NavButtonProps>();
const emit = defineEmits(["navigation-button-clicked"]);
const spanBgClass = computed(() => {
  if (!props.type) return "";
  const classObj: Record<NonNullable<NavButtonProps["type"]>, string> = {
    Избранное: "bg-red-500",
    Калькулятор: "bg-orange-500",
    Сравнение: "bg-blue-500",
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
      v-if="amount && type"
      class="text-white px-2 py-1 rounded-full absolute -top-1 -right-1 size-6 text-xs"
      :class="spanBgClass"
      >{{ amount }}</span
    >
    <img class="size-full" :src="icon" aria-hidden="true"/>
  </button>
</template>
