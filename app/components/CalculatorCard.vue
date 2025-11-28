<script setup lang="ts">
import type { Dish } from "~~/types/types";
import trashIcon from "~~/assets/icons/trashbin.svg";

const props = defineProps<{ dish: Dish; dishCount: number }>();
const totalCalories = computed(() => {
  return props.dish.nutrition.calories * props.dishCount;
});
const emit = defineEmits([
  "dish-removed",
  "dish-added",
  "dish-removed-completely",
]);
</script>

<template>
  <div
    class="flex flex-col sm:flex-row justify-between px-8 py-8 bg-white w-full h-fit rounded-2xl shadow-md gap-4 overflow-hidden"
  >
    <img :src="dish.image" class="max-h-[120px] mr-4 object-contain" />
    <div class="flex flex-col w-full">
      <span class="pb-2 text-lg">{{ dish.title }}</span>
      <span class="pb-2 text-gray-500">{{ dish.restaurant }}</span>
      <span class="py-4 text-gray-500"
        >{{ dish.nutrition.calories }} x {{ dishCount }} =
        {{ totalCalories }} ккал</span
      >
    </div>
    <div class="flex flex-row sm:flex-col justify-between items-end">
      <button @click="emit('dish-removed-completely')">
        <img :src="trashIcon" class="size-8" />
      </button>
      <div class="flex bg-gray-100 rounded-3xl gap-8 px-4 py-2 text-xl">
        <button @click="emit('dish-removed')">–</button>
        <span>{{ dishCount }}</span>
        <button @click="emit('dish-added')">+</button>
      </div>
    </div>
  </div>
</template>
